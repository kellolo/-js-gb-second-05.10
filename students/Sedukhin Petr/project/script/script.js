const catalog = []

class Product{
    constructor(item){
        this.id = item.id,
        this.name = item.name,
        this.price = item.price,
        this.img = item.img
    }

    renderProduct(){
        return `<div class = 'product-item'>
                        <img src="img/${this.img}">
                        <h2>${this.name}</h2>
                        <p>price: ${this.price}</p>
                        <button class="buy-btn" data-id = "${this.id}">Добавить в корзину</button>
                    </div>`
    }
}

class Catalog{
    constructor(data){
        this.catalog = data
        this._buildCatalog()
    }

    _buildCatalog(){
        let htmlString = ''
        for (let i in this.catalog){
            let prod = new Product(this.catalog[i])
            catalog.push(prod)
            htmlString += prod.renderProduct()
        }
        document.querySelector('.products').innerHTML = htmlString
    }
}

class GoodForCart{
    constructor(item){
        this.img = item.img
        this.id = item.id
        this.price = item.price
        this.name = item.name
        this.qty = 1,
        this.ttlprc = ()=>{return(+this.price*+this.qty)}
    }
}

class Cart{
    constructor(arr = []){
        this.goods = arr
        this._renderCart()
    }

    _renderCart() {
        let htmlString = ''
        this.goods.forEach(el => {
            htmlString += 
            `<div class = 'product-item-cart'>
                <div class = "left-block">   
                    <img src="img/${el.img}" >
                    <h2>${el.name}</h2>
                    <p>price: ${el.price}</p>
                </div>    
                <div class = "right-block">
                    <button class="add-btn" data-id = "${el.id}">+</button>
                    <p>${el.qty}</p>
                    <button class="rem-btn" data-id = "${el.id}">-</button>
                    <p>${el.ttlprc()}</p>
                </div>
            </div>`
        })
        if (this.goods.length > 0){
            htmlString +=   `<div class="total-sum">
                                Total sum:  ${this._calcSum ()} 
                            </div>`
        } 
        document.querySelector('.cart-block').innerHTML = htmlString  
    }

    addProductToCart (index){
        let prod = this._searcheProduct(index)
        let finder = this._searcheProductInCart(prod.id)
        if (finder!=undefined){
            finder.qty ++
        }else{
            this.goods.push(new GoodForCart(prod))
        }
        this._renderCart()
    }
    
    _searcheProduct (index) {
        return catalog.find(el => {
            if(el.id == index)return el
        })
    }

    _searcheProductInCart(index) {
        return this.goods.find(el => {
            if(el.id == index)return el
            else return false
         })
    }

    _calcSum () {
        let sum = 0
        this.goods.forEach(el => {
            sum += el.ttlprc()
        })
        return sum
    }

    removeProductFromCart (index){
        let finder = this._searcheProductInCart(index)
        if (finder.qty > 1){
            finder.qty --
        }else{
            this.goods.splice(this.goods.indexOf(finder), 1)
        }
        this._renderCart()
    }
}

let cart = new Cart()

//всплытие и захват событий
window.onload = () =>{
    document.querySelector('.btn-cart').addEventListener ('click', function () {
        document.querySelector ('.cart-block').classList.toggle ('invisible')})
        
    document.querySelector ('.products').addEventListener ('click', function (e) {
        if (e.target.classList.contains ('buy-btn')) {
            cart.addProductToCart (+e.target.dataset ['id'])
        }
    })

    document.querySelector ('.cart-block').addEventListener ('click', function (e) {
        if (e.target.classList.contains ('add-btn')) {
            cart.addProductToCart (+e.target.dataset ['id'])
        }
        if (e.target.classList.contains ('rem-btn')) {
            cart.removeProductFromCart (+e.target.dataset ['id'])
        }
    })
}
