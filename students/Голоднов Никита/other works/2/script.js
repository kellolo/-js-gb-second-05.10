class Param {
    constructor (element) {
        this.name = element.value
        this.price = +element.dataset.price
        this.calories = +element.dataset.calories
    }
}

class Burger {
    constructor (size, add, toppings){
        this.size = new Param (this._select (size))
        this.add = new Param (this._select (add))
        this.toppings = this._getToppings (toppings) //arr
    }

    _getToppings (name) {
        let result = []
        this._selectAll (name).forEach (el => {
            result.push (new Param (el))                         //массив объектов
        })
        return result
    }

    _selectAll (name) {
        return [...document.querySelectorAll (`input[name='${name}']:checked`)]
    }

    _select (name) {
        return document.querySelector (`input[name='${name}']:checked`)         //тут мы не делаем массив, потому что вариант выбора один 
    }

    calcSumPrice () {
        let result = this.size.price + this.add.price
        this.toppings.forEach (el => {
            result += el.price
        })
        return result
    }

    calcSumCalories () {
        let result = this.size.calories + this.add.calories
        this.toppings.forEach (el => {
            result += el.calories
        })
        return result
    }

    showSum (price, calories) {
        document.querySelector (price).innerText = this.calcSumPrice ()
        document.querySelector (calories).innerText = this.calcSumCalories ()
    }
}

