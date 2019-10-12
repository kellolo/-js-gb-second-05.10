	class Hamburger {
	constructor (size, stuffing) { 
		this.size = size
		this.stuffing = stuffing
		this.toppings = []
	}
	
	addTopping(topping) {
		if(this.toppings.indexOf(topping) == -1)
		this.toppings.push(topping)
		this.calculateCalories()
		this.calculatePrice()
	}
	
	removeTopping(topping) { this.toppings.filter((el)=> el !== topping)}
	getToppings() { console.log(this.toppings) }
	getSize() { console.log(this.size) }
	getStuffing() { console.log(this.stuffing) }
	calculatePrice() { 
		let price = 0
		price += (this.size == 'маленький') ? 50 : 100
		if (this.stuffing == 'сыр') price += 10
		if (this.stuffing == 'салат') price += 20
		else price += 15
		this.toppings.forEach((el) => price += el == 'майонез' ? 20 : 15)
		return price
	}
	calculateCalories() {
		let calories = 0
		calories += (this.size == 'маленький') ? 20 : 40
		if (this.stuffing == 'сыр') calories += 20
		if (this.stuffing == 'салат') calories += 5
		else calories += 10
		this.toppings.forEach((el) => calories += el == 'майонез' ? 5 : 0)
		return calories
	}
}
