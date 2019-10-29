// генерим каталог товаров
let itemsList =[]

for (let i = 1; i <= 10; i++){
    itemsList.push({id:`${i}`, name:`Жеванный крот${i}`, price:10*`${i}`, img: `images/${i}.jpg`, quantity:``})
}

//основной код страницы

const block_products = document.querySelector ('.products')
const block_btnBasket = document.querySelector ('.btn-basket')
const block_basketWrap = document.querySelector(".basketWrap")


class Product{
    constructor(id, name, price, img, quantity =''){
        this.product_id = id
        this.product_name = name
        this.product_price = price
        this.product_img = img
        this.product_quantity = quantity
    }
    render(){
        return `
            <div class="product-item" data-id="${this.product_id}">
                <div class="desc">
                    <h3 class="cart-item">${this.product_name}</h3>
                    <img class="img" src="${this.product_img}" style = "width: 150px; height: 100px;" alt="picture">
                </div>
                <p>Цена: <span class="product-price">${this.product_price}</span>$</p>
                <button class="buy-btn" type="button" data-id="${this.product_id}">В корзину</button>
            </div>
        
        `
    }
}

class Catalog {
    constructor() {
        this.productsList = []
        this._init()
    }

    _init(){
        this._fetchProducts()
        this._render()
    }

    _fetchProducts() {
        for (let i = 0; i < itemsList.length; i++) {
            this.productsList.push(new Product(itemsList[i]['id'], itemsList[i]['name'], itemsList[i]['price'], itemsList[i]['img'] ))
        }
    }

    _render(){
        let htmlString = ''
        this.productsList.forEach(item => htmlString += item.render() )
        block_products.innerHTML = htmlString
    }
}

class Basket {
    constructor(){
        this.userBasket = []
        this._renderBasket()
    }

    addProductToBasket(index){
        let prod = catalog.productsList[index -1]
        let find = this.userBasket.find(el => el.product_id === index)

        if(!find){
            prod.product_quantity = 1
            this.userBasket.push(prod)
        }
        else{find.product_quantity ++}
        this._renderBasket()
    }

    removeProductFromBasket(index){
        let prod = itemsList[index-1]
        let find = this.userBasket.find(el => el.product_id === index)

        if(find && find.product_quantity >1){
            find.product_quantity --}
        else if (find && find.product_quantity === 1) {
            this.userBasket.splice(this.userBasket.indexOf(find), 1)
        }
        this._renderBasket()
    }

    clearUserBasket(){
        this.userBasket = []
        this._renderBasket()
    }

    countAllProductsInBasket(){
        let total = 0
        for (let i = 0; i < this.userBasket.length; i++) {
            total += this.userBasket[i].product_quantity
        }
        return total
    }

    countTotalPrice() {
        let total = 0
        for (let i in this.userBasket) {
            total += this.userBasket[i].product_price * this.userBasket[i].product_quantity
        }
        return total;
    }

    _renderBasket(){
        const btnBasket = document.querySelector ('.btn-basket')
        let htmlString = ''
        let count = 0
        this.userBasket.forEach(function (item) {
            count += 1 * item.product_quantity
            htmlString += `
                <div class="basketInvisibleItem">
                    <img src="${item.product_img}" alt="картинка" style="width: 60px; height: 45px; align-self: center"" >
                    <p class="productTitle">${item.product_name}</p>
                    <p class="productQuantity">${item.product_quantity}</p>
                    <button class="del-btn" data-id="${item.product_id}" style="height: 20px; width: 20px;">&times;</button>
                </div>
            `
        })
        htmlString += `
        <p>Итого в корзине:${this.countAllProductsInBasket()}</p>
        <p>На сумму: ${this.countTotalPrice()}</p>
        <p><button>Оплатить</button></p>
        <p><button class="cls-btn">Очистить</button></p>`

        btnBasket.innerHTML = `В корзине (${count})`
        block_basketWrap.innerHTML = htmlString
    }

}

let catalog = new Catalog()
let basket = new Basket()

//обработчики событий

block_products.addEventListener('click', function (e) {
    if(e.target.classList.contains('buy-btn')){
        // console.dir(e.target)
        basket.addProductToBasket(e.target.dataset['id'])
    }
})

block_basketWrap.addEventListener('click', function (e) {
    if(e.target.classList.contains('del-btn')){
        basket.removeProductFromBasket(e.target.dataset['id'])
    } else if(e.target.classList.contains('cls-btn')){
        basket.clearUserBasket()
    }
})

block_btnBasket.addEventListener('click', function (e) {
    block_basketWrap.classList.toggle ('invisible')
})