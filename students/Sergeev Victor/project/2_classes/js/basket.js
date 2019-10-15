class Basket{
    constructor(id, title, price) {
        this.products = {};
        this.currentProduct = {};
        this.sum = 0;
    }

    addProduct(product) {
        this.currentProduct = product;
        this.addProductToObject();
        this.renderProductInBasket();
        this.renderTotalSum();
        this.addRemoveBtnsListeners();
    }

     /**
     * Метод добавляет продукт в объект с продуктами.
     * @param {{ id: string, price: string, name: string }} product
     */
    addProductToObject() {
        if (this.products[this.currentProduct.id] == undefined) {
            this.products[this.currentProduct.id] = {
                price: this.currentProduct.price,
                name: this.currentProduct.name,
                count: 1
            }
        } else {
            this.products[this.currentProduct.id].count++;
        }
        console.dir(this.products);
    }

    /**
     * Метод отрисовывает продукт в корзине, если там такой уже есть, просто
     * увеличивает счетчик на 1.
     * @param {{ id: string, price: string, name: string }} product
     * @returns
     */
    renderProductInBasket() {
        let productExist = document.querySelector(`.productCount[data-id="${this.currentProduct.id}"]`);
        if (productExist) {
            productExist.textContent++;
            return;
        }
        let productRow = `
            <tr>
                <th scope="row">${this.currentProduct.id}</th>
                <td>${this.currentProduct.name}</td>
                <td>${this.currentProduct.price}</td>
                <td class="productCount" data-id="${this.currentProduct.id}">1</td>
                <td><i class="fas fa-trash-alt productRemoveBtn" data-id="${this.currentProduct.id}"></i></td>
            </tr>
        `;
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentHTML("beforeend", productRow);
    }

    /**
     * Добавляем слушателей события клика по кнопкам удалить.
     */
    addRemoveBtnsListeners() {
        let removeButtons = document.querySelectorAll('.productRemoveBtn');
        for (let i = 0; i < removeButtons.length; i++) {
            //важно указать именно this.removeProductListener, чтобы это была одна и та же
            //функция, а не несколько одинаковых.
            removeButtons[i].addEventListener('click', this.removeProductListener);
        }
    }

    /**
     * Метод отображает общую сумму заказа в корзине.
     */
    renderTotalSum() {
        this.getTotalSum();
        document.querySelector('.total').textContent = this.sum;
    }

    /**
     * Метод считает стоимость всех продуктов в корзине.
     * @returns {number}
     */
    getTotalSum() {
        this.sum = 0;
        for (let key in this.products) {
            this.sum += this.products[key].price * this.products[key].count;
        }
    }

    /**
     * Обработчик события клика по кнопке удаления товара.
     * @param {MouseEvent} event
     */
    removeProductListener(event) {
        basket.removeProduct(event);
        basket.renderTotalSum();
    }

    /**
     * Метод удаляет продукт из объекта продуктов, а также из корзины на странице.
     * @param {MouseEvent} event
     */
    removeProduct(event) {
        let id = event.srcElement.dataset.id;
        this.removeProductFromObject(id);
        this.removeProductFromBasket(id);
    }

    /**
     * Метод удаляет товар из корзины. Если количество больше 1, то просто уменьшает его.
     * @param {string} id
     */
    removeProductFromBasket(id) {
        let countTd = document.querySelector(`.productCount[data-id="${id}"]`);
        if (countTd.textContent == 1) {
            countTd.parentNode.remove();
        } else {
            countTd.textContent--;
        }
    }

    /**
     * Метод удаляет продукт из объекта с продуктами.
     * @param {string} id
     */
    removeProductFromObject(id) {
        if (this.products[id].count == 1) {
            delete this.products[id];
        } else {
            this.products[id].count--;
        }
    }
}

let basketBtns = document.querySelectorAll('.toBasketBtn');
let basket = new Basket();

//берем все кнопки "В корзину" и слушаем клики по ним
basketBtns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        let id = event.srcElement.dataset.id;
        let price = event.srcElement.dataset.price;
        let name = event.srcElement.dataset.name;
        basket.addProduct({ id: id, price: price, name: name })
    })
});
