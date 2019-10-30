const burgers = ['Minimal', 'Bigsize'];
const burgersPrice = [50, 100];
const burgersCal = [20, 40];

const stuffing = ['Сheese', 'Salad', 'Potato'];
const stuffingPrice = [10, 20, 15];
const stuffingCal = [20, 5, 10];

const additions = ['Flavoring', 'Mayonnaise'];
const additionsPrice = [15, 0];
const additionsCal = [20, 5];

class Burgers {
  constructor (size, price, cal) {
    this.size = size
    this.price = price
    this.cal = cal
  }
  render () {
          return `
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">
                    <label class="form-check-label" for="exampleRadios1">
                      ${this.size}, price is ${this.price} and calories is ${this.cal}
                    </label><br>
                  `
      }
}

class Stuff {
  constructor (stuff, price, cal) {
    this.stuff = stuff
    this.price = price
    this.cal = cal
  }
  render () {
          return `<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">
                    <label class="form-check-label" for="exampleRadios1">
                      ${this.stuff}, price is ${this.price} and calories is ${this.cal}
                    </label><br>`
      }
}

class Addition {
  constructor (addition, price, cal) {
    this.addition = addition
    this.price = price
    this.cal = cal
  }
  render () {
          return `<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">
                    <label class="form-check-label" for="exampleRadios1">
                      ${this.addition}, price is ${this.price} and calories is ${this.cal}
                    </label><br>`
      }
}

class Catalog {
  constructor(burgers, stuffing, addition) {
    this.burgers = []
    this.stuffing = []
    this.addition = []
    this._init()
  }

  _init() {
    this._fetchBurgers()
    this._renderBurgers()
    this._fetchStuff()
    this._renderStuff()
    this._fetchAddition()
    this._renderAddition()
  }

  _fetchBurgers() {
    for (let i = 0; i < burgers.length; i++) {
      this.burgers.push (new Burgers (burgers[i], burgersPrice[i], burgersCal[i]))
    }
  }

  _renderBurgers() {
    const block = document.querySelector ('.burgers')
    let htmlString = ''
    for (let item of this.burgers) {
      htmlString += item.render ()
    }
    block.innerHTML = htmlString
  }

  _fetchStuff() {
    for (let i = 0; i < stuffing.length; i++) {
      this.stuffing.push (new Stuff (stuffing[i], stuffingPrice[i], stuffingCal[i]))
    }
  }

  _renderStuff() {
    const block = document.querySelector ('.stuffing')
    let htmlString = ''
    for (let item of this.stuffing) {
      htmlString += item.render ()
    }
    block.innerHTML = htmlString
  }

  _fetchAddition() {
    for (let i = 0; i < additions.length; i++) {
      this.addition.push (new Addition (additions[i], additionsPrice[i], additionsCal[i]))
    }
  }

  _renderAddition() {
    const block = document.querySelector ('.additions')
    let htmlString = ''
    for (let item of this.addition) {
      htmlString += item.render ()
    }
    block.innerHTML = htmlString
  }

  // Добавить добавку
  addTopping(topping) {

  }

  // Убрать добавку
  removeTopping(topping) {

  }

  // Получить список добавок
  getToppings(topping) {

  }

  // Узнать размер гамбургера
  getSize() {
    
  }

  // Узнать начинку гамбургера
  getStuffing() {

  }

  // Узнать цену
  calculatePrice() {

  }

  // Узнать калорийность
  calculateCalories() {

  }
}

var hamburgers = new Catalog ()
