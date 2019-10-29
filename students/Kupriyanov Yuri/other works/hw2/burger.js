// 3. *Некая сеть фастфуда предлагает несколько видов гамбургеров:
// ### Маленький (50 рублей, 20 калорий).
// ### Большой (100 рублей, 40 калорий). 
// ### Гамбургер может быть с одним из нескольких видов начинок (обязательно):
// ### С сыром (+10 рублей, +20 калорий).
// ### С салатом (+20 рублей, +5 калорий).
// ### С картофелем (+15 рублей, +10 калорий). 
// ### Дополнительно гамбургер можно посыпать 
// приправой (+15 рублей, +0 калорий) 
// и полить майонезом (+20 рублей, +5 калорий). 
// ### 3Напишите программу, рассчитывающую стоимость и калорийность гамбургера. 
// Можно использовать примерную архитектуру класса из методички, но можно использовать и свою.

class Item {
    constructor (id, name, price, calorie ) {
        this.id = id
        this.name = name
        this.price = price
        this.calorie = calorie
    }
} 

class Burger {
    constructor () {
        this.burger = []
        this.fill = []
        this.seasoning = []
        this._init()
        this._fetch()
        this._Render()
        this._RenderTotal()
    }
    _init() {
        this._Reset();
    }
    _fetch () {

        this.burger.push(new Item(1,'Маленький',50,20))
        this.burger.push(new Item(2,'Большой',150,40))

        this.fill.push( new Item(1,'С сыром', 10, 20) );
        this.fill.push( new Item(2,'С салатом', 20, 5) );
        this.fill.push( new Item(3,'С картофелем', 15, 10) );

        this.seasoning.push( new Item(1,'посыпать приправой', 15, 0) );
        this.seasoning.push( new Item(2,'полить майонезом', 20, 5) );
    }
    _Reset() {
        this.calories = 0;
        this.price = 0;
    }
    _getMyRadioObject(valuename, obj) {
        const inp = document.getElementsByName(valuename);
        for (var i = 0; i < inp.length; i++) {
            if (inp[i].type == "radio" && inp[i].checked) {
                return( obj[inp[i].value-1] );
            }
        }
        inp[0].checked = true;
        return obj[0];
    }
    _getMyCheckboxObject(valueprefix, obj, calc) {
        for (const item of obj) {
            let inp = document.getElementById(`${valueprefix}${item.id}`);
            if( inp.checked) {
                calc.push(item);
            }
        }
    }
    UpdateSum() {
        this._Reset();
        let calcBurger = []
        calcBurger.push( this._getMyRadioObject('b', this.burger) )
        calcBurger.push( this._getMyRadioObject('f', this.fill) )
        this._getMyCheckboxObject('p', this.seasoning, calcBurger) 
        for (const item of calcBurger) {
            this.calories += item.calorie;
            this.price += item.price;
        }
        this._RenderTotal()
    }
    _Render() {
        let innerHTML = `<hr>`
        for (const item of this.burger) {
            innerHTML += `<input type="radio" onClick="recalc()" name="b" value=${item.id}>${item.name}<br>`
        }
        innerHTML += `<hr>`
        for (const item of this.fill) {
            innerHTML += `<input type="radio" onClick="recalc()" name="f" value=${item.id}>${item.name}<br>`
        }        
        innerHTML += `<hr>`
        for (const item of this.seasoning) {
            innerHTML += `<input type="checkbox" onClick="recalc()" id="p${item.id}" />${item.name}<br>`
        }        
        innerHTML += `<hr>` 

        document.querySelector('.burger').innerHTML = innerHTML;
    }
    _RenderTotal() {
        let  innerHTML = ''
        innerHTML += `<p>Итого цена: ${this.price}</p>`
        innerHTML += `<p>Итого калорий: ${this.calories}</p>`

        document.querySelector('.burgerTotal').innerHTML = innerHTML;
    }
}

let calc = new Burger();

function recalc() {
    calc.UpdateSum()
}

