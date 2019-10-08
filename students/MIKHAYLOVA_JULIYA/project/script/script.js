// массив data создается в файле data.js

// создаем корзину
let cart = []

// создаем id для корзины (порядковый номер)
let cartId = 0

// считаем тотал корзины

function countCartPrice(arr) {
    var summ = 0;
    for (var i = 0; i < arr.length; i++) {
        summ += arr[i].price;
    }

    return summ;
}

// добавление события показа корзины
let btnCart = document.querySelector('.btn-cart')

btnCart.addEventListener('click', function () {
    document.querySelector('.cart-block').classList.toggle('invisible')
})

// добавление товаров каталога

function createProduct() {

    let elem = document.querySelector('.products')
    let htmlStr = '';

    for (i = 0; i < data.length; i++) {

        htmlStr += `<div class="product-item">
        <img src="${data[i].img}" alt="img-${data[i].name}" class="product-img">
        <div class="product-desc">
            <h2 class="product-name">${data[i].name}</h2>
            <p class="product-price">${data[i].price} &#36;</p>
            <button id=${data[i].id} class="product-btn" onclick="addItemToCart(this)" >Купить</button>
        </div>
    </div>`
    }
    elem.innerHTML = htmlStr

}

createProduct()


//добавление элементов в корзину и подсчет тотала

function addItemToCart(clickedItem) {
    document.querySelector('.cart-block').classList.remove('invisible')

    let id = +clickedItem.id

    // находим объект и создает копию
    let obj = {
        ...data.find(el => el.id === id)
    }

    //добавляем порядковый номер к товару в корзине
    obj.cartId = cartId;

    let elem = document.querySelector('.cart-list')
    elem.innerHTML += `<li class="cart-item">${obj.name} цена: ${obj.price} &#36;<button class="delete-btn" id=${obj.cartId} onclick="deleteItem(this)"></button> </li>`


    //подсчет тотала 
    cart.push(obj)
    let total = (countCartPrice(cart))
    let totalEl = document.querySelector('.total')
    totalEl.innerHTML = `<p class="cart-total-price"> Итого: ${total} &#36;</p>`
    cartId++

}

//удаление товара из корзины

function deleteItem(elToDelete) {
    // получаем id удаленного товара при клике на delete
    let objId = +elToDelete.id

    // удаляем из массива корзины по cartId
    cart = cart.filter((item) => item.cartId !== objId)

    // пересчитываем тотал и отрисовываем его
    let total = (countCartPrice(cart))
    let totalEl = document.querySelector('.total')
    totalEl.innerHTML = `<p class="cart-total-price"> Итого: ${total} &#36;</p>`

    // удаляем товар из дома
    elToDelete.parentElement.remove()
}