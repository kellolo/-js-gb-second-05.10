
let size = [{name: 'Большой', price: 100, callories: 40}, {name: 'Маленький', price: 50, callories: 20} ]
let topping = [{name: 'Не нужно', price: 0, callories: 0},{name: 'Сыр', price: 10, callories: 20}, {name: 'Салат', price: 20, callories: 5}, {name: 'Картошка', price: 10, callories: 10}]
let adds = [{name: 'Не нужно', price: 0, callories: 0},{name: 'Приправа', price: 15, callories: 0}, {name: 'Майонез', price: 20, callories: 5} ]


class RenderHtml{
    constructor(){
        this.size = size
        this.topping = topping
        this.adds = adds
        this._render(this.size, this.topping,this.adds)
}

    _render(size, topping, adds){
        const block_hamSize = document.querySelector('.hamburger-size')
        const block_hamTopping = document.querySelector('.hamburger-topping')
        const block_hamAdds = document.querySelector('.hamburger-adds')

        let htmlStringForSize = '<h3>Выберите размер бургера:</h3>'
        for (let i = 0; i< this.size.length; i++){
            htmlStringForSize += `
            <input type="radio" id="${i}" value="${this.size[i].name}">
            <label for="${i}"> ${this.size[i].name} (${this.size[i].price} рублей, ${this.size[i].callories} калорий)</label><br>
            `
        }
        block_hamSize.innerHTML = htmlStringForSize

        let htmlStringForTopping = '<h3>Выберите начинку бургера:</h3>'
       for (let i = 0; i< this.topping.length; i++) {
            htmlStringForTopping += `
            <input type="radio" id="${i}" value="${this.topping[i].name}">
            <label for="${i}"> ${this.topping[i].name} (${this.topping[i].price} рублей, ${this.topping[i].callories} калорий)</label><br>
            `
        }
        block_hamTopping.innerHTML = htmlStringForTopping

        let htmlStringForAdds = '<h3>Выберите доп. опцию:</h3>'
        for (let i = 0; i< this.adds.length; i++) {
            htmlStringForAdds += `
            <input type="radio" id="${i}" value="${this.adds[i].name}">
            <label for="${i}"> ${this.adds[i].name} (${this.adds[i].price} рублей, ${this.adds[i].callories} калорий)</label><br>
            `
        }
        block_hamAdds.innerHTML = htmlStringForAdds
    }
}


class Burger {
    constructor(size, topping, adds){
        this.size = size
        this.toppings = topping
        this.adds = adds
    }

    getTotalPrice(){
      return this.size['price'] + this.toppings['price'] + this.adds['price']
    }

    getTotalCallories(){
        return this.size['callories'] + this.toppings['callories'] + this.adds['callories']
    }


}

render = new RenderHtml()


window.onload = () => {

    document.getElementById('check').addEventListener('click', () => {
        let size_id = document.querySelector("fieldset.hamburger-size input:checked").getAttribute('id')
        let topping_id = document.querySelector("fieldset.hamburger-topping input:checked").getAttribute('id')
        let adds_id = document.querySelector("fieldset.hamburger-adds input:checked").getAttribute('id')
        console.log(size, topping, adds)
        let burger = new Burger(size[size_id], topping[topping_id], adds[adds_id])
        document.querySelector ("span[id=price]").innerText = burger.getTotalPrice()
        document.querySelector ('span[id=calories]').innerText = burger.getTotalCallories()
    })

}

