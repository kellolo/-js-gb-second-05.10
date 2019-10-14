// генерим каталог товаров
let itemsList =[]

for (let i = 1; i <= 1000; i++){
    itemsList.push({id:`${i}`, name:`Жеванный крот${i}`, price:10*`${i}`, img: `src${i}`, quantity:``})
}

//основной код страницы

const products = document.querySelector ('.products')
const btnBasket = document.querySelector ('.btn-basket')
const basketWrap = document.querySelector(".basketWrap")


//создаем корзину

let Basket = {
    userBasket: [],

    createBasket() {
        return this.userBasket
    },

    addProductToBasket(index){
        let prod = itemsList[index-1]
        let find = this.userBasket.find(el => el.id === index)

        if(!find){
            this.userBasket.push({
                id:index,
                name:itemsList[index-1].name,
                price:itemsList[index-1].price,
                img: `src${index}`,
                quantity:1})
        } else { find.quantity ++}
        renderBasket()
    },

    removeProductFromBasket(index){
        let prod = itemsList[index-1]
        let find = this.userBasket.find(el => el.id === index)

        if(find && find.quantity >1){
            find.quantity --}
        else if (find && find.quantity === 1) {
            this.userBasket.splice(this.userBasket.indexOf(find), 1)
        }
        renderBasket()
    },

    clearUserBasket(){
        this.userBasket = []
        renderBasket()
    },

    countAllProductsInBasket(){
        let total = 0;
        for (let i = 0; i < this.userBasket.length; i++) {
            total += this.userBasket[i].quantity
        }
        console.log("Количество товаров в корзине: " );
        return total;
    },

    countTotalPrice() {
        let total = 0;
        for (let i in this.userBasket) {
            total += this.userBasket[i].price * this.userBasket[i].quantity ;
        }
        console.log(`Общая сумма товаров в корзине составляет: ${total}`);
        return total;
    },

}

// рендерим все

function renderProductsCatalog () {
    let htmlString = ''
    itemsList.forEach (function (item) {
        htmlString += `
                    <div class="product-item">
                        <div class="desc">
                            <h3 class="cart-item">${item.name}</h3>
                            <img class="img" src="" style = "width: 150px; height: 100px;" alt="picture">
                        </div>
                        <p>Цена: <span class="product-price">${item.price}</span>$</p>
                        <button class="buy-btn" type="button" data-id="${item.id}">В корзину</button>
                    </div>
                    `
    })
    products.innerHTML = htmlString
}

function renderBasket(){
    let htmlString = ''
    let count = 0
    Basket.userBasket.forEach(function (item) {
        count += 1 * item.quantity
        console.log(item)

        htmlString += `
            <div class="basketInvisibleItem">
                <img src="" alt="картинка" style="width: 60px; height: 45px; align-self: center"" >
                <p class="productTitle">${item.name}</p>
                <p class="productQuantity">${item.quantity}</p>
                <button class="del-btn" data-id="${item.id}" style="height: 20px; width: 20px;">&times;</button>
            </div>
        `
    })
    htmlString += `
    <p>Итого в корзине:${Basket.countAllProductsInBasket()}</p>
    <p>На сумму: ${Basket.countTotalPrice()}</p>
    <p><button>Оплатить</button></p>
    <p><button class="cls-btn">Очистить</button></p>`

    btnBasket.innerHTML = `В корзине (${count})`
    basketWrap.innerHTML = htmlString
}

//обработчики событий

products.addEventListener('click', function (e) {
    //добавление в корзину
    if(e.target.classList.contains('buy-btn')){
        Basket.addProductToBasket(e.target.dataset['id'])
        console.dir(e.target)
        console.log(Basket.userBasket)
    }
})

basketWrap.addEventListener('click', function (e) {
    //удаление из корзины
    if(e.target.classList.contains('del-btn')){
        Basket.removeProductFromBasket(e.target.dataset['id'])
        // console.dir(e.target)
    } else if(e.target.classList.contains('cls-btn')){
        Basket.clearUserBasket()
    }
})

btnBasket.addEventListener('click', function (e) {
    basketWrap.classList.toggle ('invisible')
})


renderProductsCatalog()
renderBasket()
