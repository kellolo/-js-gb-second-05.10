class Hamburger {
  constructor(size, stuffing, topping) {
    this.size = size
    this.stuffing = stuffing
    this.topping = topping
    this.prices = {
      'S': 50,
      'L': 100,
      'cheese': 10,
      'salad': 20,
      'potato': 15,
      'flavor': 15,
      'mayonnaise': 20
    }
    this.calories = {
      'S': 20,
      'L': 40,
      'cheese': 20,
      'salad': 5,
      'potato': 10,
      'flavor': 0,
      'mayonnaise': 5
    }
  }

  getSize() { // Узнать размер гамбургера 
    return this.size
  }
  getStuffing() { // Узнать начинку гамбургера 
    return this.stuffing
  }

  getToppings() { //Узнать топпинги
    return this.topping
  }

  calculatePrice() { // Узнать цену 

    let price = 0

    price += this.prices[this.size]
    price += this.prices[this.stuffing]
    this.topping.forEach(element => price += this.prices[element])

    return price

  }
  calculateCalories() { // Узнать калорийность 
    let calories = 0

    calories += this.calories[this.size]
    calories += this.calories[this.stuffing]
    this.topping.forEach(element => calories += this.calories[element])

    return calories

  }
}


// при клике на кнопку на странице будет создавить объек гамбургер на
// основе класса Гамбургер. И в него будет передана вся инфа со страницы


var form = document.querySelector('#form')
form.addEventListener('change', function () {
  //  получаем всю инфу

  let size = document.querySelector('input[name="size"]:checked').value //узнаем размер
  let stuffing = document.querySelector('input[name="stuffing"]:checked').value // узнаем начинку

  // узнаем топпинги
  let topping = []
  let inputs = document.querySelectorAll("input[name='topping']");
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked == true) {
      topping.push(inputs[i].value)
    }
  }




  // на основе этой инфы создаем объект (объект нужен чтобы хранить всю эту инфу)
  let burger = new Hamburger(size, stuffing, topping)


  // // обрабатываем эту инфу: считаем цену, калории и т.д.

  let stuffingOut = burger.getStuffing()
  let toppingOut = burger.getToppings()
  let sizeOut = burger.getSize()
  let priceOut = burger.calculatePrice()
  let caloriesOut = burger.calculateCalories()


  // выводим инфу на страницу

  let elemSize = document.querySelector('#size')
  elemSize.innerHTML = `${sizeOut}`

  let elemStuffing = document.querySelector('#stuffing')
  elemStuffing.innerHTML = `${stuffingOut}`

  let elemTopping = document.querySelector('#topping')
  elemTopping.innerHTML = `${toppingOut}`

  let elemPrice = document.querySelector('#price')
  elemPrice.innerHTML = `${priceOut}`

  let elemCalories = document.querySelector('#calories')
  elemCalories.innerHTML = `${caloriesOut}`



})