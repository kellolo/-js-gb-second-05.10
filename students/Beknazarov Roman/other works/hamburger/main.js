//3. *Некая сеть фастфуда предлагает несколько видов гамбургеров:
// ### Маленький (50 рублей, 20 калорий).
// ### Большой (100 рублей, 40 калорий).
//     ### Гамбургер может быть с одним из нескольких видов начинок (обязательно):
//         ### С сыром (+10 рублей, +20 калорий).
//         ### С салатом (+20 рублей, +5 калорий).
//         ### С картофелем (+15 рублей, +10 калорий).
//     ### Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий)
//         и полить майонезом (+20 рублей, +5 калорий).
//
//Напишите программу, рассчитывающую стоимость и калорийность гамбургера.
// Можно использовать примерную архитектуру класса из методички, но можно использовать и свою.

class Param {
    constructor(element) {
        this.name = element.value;
        this.price = +element.dataset.price;
        this.calories = +element.dataset.calories;
    }
}

class Hamburger {
    constructor(size, stuffing, toppings) {
        this.size = new Param(this._select(size));
        this.stuffing = new Param(this._select(stuffing));
        this.toppings = this._getToppings(toppings);
    }

    _getToppings(name) {
        let result = [];
        this._selectAll(name).forEach(el => {
            result.push(new Param(el))
        });
        return result;
    }

    _selectAll(name) {
        return [...document.querySelectorAll(`input[name="${name}"]:checked`)];
    }

    _select(name) {
        return document.querySelector(`input[name="${name}"]:checked`);
    }

    countPrice() {
        let totalPrice = this.size.price + this.stuffing.price;
        this.toppings.forEach(el => {
            totalPrice += el.price;
        });
        return totalPrice;
    }

    countCalories() {
        let totalCalories = this.size.calories + this.stuffing.calories;
        this.toppings.forEach(el => {
            totalCalories += el.calories;
        });
        return totalCalories;
    }

    showSum(price, calories) {
        document.querySelector(price).innerText = this.countPrice();
        document.querySelector(calories).innerText = this.countCalories();
    }
}
