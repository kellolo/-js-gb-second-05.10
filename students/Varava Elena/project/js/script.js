class CartItem {
    constructor (id, name, price, img, quantity) {
        this.id = id
        this.name = name
        this.price = price
        this.img = img
        this.quantity = quantity
    }
    render () {
        return `
                    <div class="cart-item" data-id="${this.id}">
                        <div class="product-bio">
                            <img src="${this.img}" alt="" style="width: 100px; height: 80px">
                            <div class="product-desc">
                                <p class="product-title">${this.name}</p>
                                <p class="product-quantity">${this.quantity}</p>
                                <p class="product-single-price">${this.price}</p>
                            </div>
                            <div class="right-block">
                                <button class="del-btn" data-id="${this.id}">&times;</button>
                            </div>
                        </div>
                    </div>
                `
    }
    GetLineTotal() {
        return this.price * this.quantity;
    }
}

class Cart {
    constructor () {
        this.userCart = []
        this._init ()
    }

    _init () {
        this._UpdateCartSum ()
    }

    _UpdateCartSum () {
        this.totalAmount = 0;
        for (const item of this.userCart) {
            this.totalAmount += item.GetLineTotal()            
        }
    }

    render () {
        const block = document.querySelector ('.cart-block')
        let htmlString = '';
        for (const item of this.userCart) {
            htmlString += item.render()
        }
        htmlString += `<p>Total: ${this.totalAmount}</p>`
        block.innerHTML = htmlString;
    }

    addProduct (id) {

        let find = this.userCart.find (el => el.id == id )

        if (!find) {
            let prod = catalog.products.find( el => el.id == id )
            this.userCart.push ( new CartItem(id, prod.name, prod.price, prod.img, 1 ) )
        } else {
            find.quantity++
        }
        this._UpdateCartSum ();
        this.render ()
    }

    removeProduct (id) {

        let find = this.userCart.find (el => el.id == id )

        if (find.quantity > 1) {
            find.quantity--
        } else {
            this.userCart.splice (this.userCart.indexOf (find), 1)
        }
        this._UpdateCartSum ();
        this.render ()
    }

}

class Product {
    constructor (id, name, price, img) {
        if (arguments.length == 4) {
            this.id         = id;
            this.name       = name;
            this.price      = price;
            this.img        = img;
        } else if(arguments.length == 1) {
            this.id         = arguments[0].id;
            this.name       = arguments[0].name;
            this.price      = arguments[0].price;
            this.img        = arguments[0].img;
        }
    }
    render () {
        return `
            <div class="product-item">
                <div class="desc">
                <h3 class="cart-item">${this.name}</h3>
                <img class="img" src="${this.img}">
                </div>
                <p>Цена: <span class="product-price">${this.price}</span>$</p>
                <button class="buy-btn" type="button" data-id="${this.id}">В корзину</button>
                <div class="prod-block invisible"></div>
            </div>
            `
    }
}

class Catalog {
    constructor () {
        this.products = []
        this._init ()
    }
    _init () {
        this._fetchProducts ()
    }
    async _apiGetJSON() {
        
        let jsonData = []
        let url = `https://raw.githubusercontent.com/ymksoft/-js-gb-second-05.10/HW/3/students/Kupriyanov%20Yuri/project/db/db.json`
        
        let response = await fetch(url)
        if (response.ok) { 
            jsonData = await response.json()
        } else {
            console.log("Ошибка HTTP: " + response.status)
        }

        return jsonData;
    }
    _fetchProducts () {
        this._apiGetJSON()
            .then( (jsonData) => {
                jsonData.forEach( el => this.products.push ( new Product(el) ) ) 
                this._render()
            })
    }
    _render () {
        const block = document.querySelector ('.products')
        let htmlString = '';
        for (const item of this.products) {
            htmlString += item.render()
        }
        block.innerHTML = htmlString;
    }
    GetProductsSum () {
        this.totalAmount = 0;
        for (const item of this.products) {
            this.totalAmount += item.price
        }
    }
}

let catalog = new Catalog;
let cart = new Cart;

catalog.GetProductsSum ()

let btnCart = document.querySelector ('.btn-cart')
btnCart.addEventListener ('click', function () {
    document.querySelector ('.cart-block').classList.toggle ('invisible')
})

document.querySelector ('.products').addEventListener ('click', function (e) {
    if (e.target.classList.contains ('buy-btn')) {
        cart.addProduct (e.target.dataset ['id'])
    } 
})

document.querySelector ('.cart-block').addEventListener ('click', function (e) {
    if (e.target.classList.contains ('del-btn')) {
        cart.removeProduct (e.target.dataset ['id'])
    } 
})