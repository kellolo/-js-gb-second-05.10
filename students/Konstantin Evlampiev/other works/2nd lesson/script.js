'use strict';

class Ingredient {
    constructor(name, price, calories) {
        this.ingredient_name = name;
        this.ingredien_price = price;
        this.calorific = calories;
    }
}

class Gamburger {
    constructor() {
        this.ingredients = [];
        this.controlInputs = document.querySelectorAll('.chooseBox input');
        this.statusBar = document.querySelector('footer');
        this._init();
    }

    _init() {
        this.updateAll();
        this.controlInputs.forEach(el => {
            el.addEventListener('change', this.updateAll.bind(this))
        })
    }

    readIngredients() {
        this.ingredients = [];
        this.controlInputs.forEach(elem => {
            if (elem.checked) {
                this.ingredients.push(
                    new Ingredient(elem.nodeValue,
                        Number(elem.getAttribute('price')),
                        Number(elem.getAttribute('calorific'))
                    )
                );
            }

        });
    }

    renderTotalInfo() {
        this.statusBar.innerHTML = `<p> Цена выбранного 
                        гамбургера <span> ${this.gamburgerPrice.toFixed(2)} 
                        руб </span>, калорийность <span> 
                        ${this.gamburgerCalorific.toFixed(2)} 
                        ккал </span> </p>`;
    }

    updateAll() {
        this.readIngredients();
        this.renderTotalInfo();
    }

    get gamburgerPrice() {
        let sum = 0;
        for (let el of this.ingredients) {
            sum += el.ingredien_price;
        }
        return sum;
    }

    get gamburgerCalorific() {
        let total = 0;
        for (let el of this.ingredients) {
            total += el.calorific;
        }
        return total;
    }

}

let gamburger = new Gamburger();