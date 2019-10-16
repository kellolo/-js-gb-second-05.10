//имитация БД
const hamburgersOptions={ 
    sizes:{
        smallSize: {
            name: "Маленький",
            price: 50,
            calories: 20
        },
        bigSize: {
            name: "Большой",
            price: 100,
            calories: 40
        },
    },
    toggles:{
        chees: {
            name: "С сыром",
            price:10,
            calories:20
        },
        salat: {
            name: "С салатом",
            price:20,
            calories:5
        },
        potato: {
            name: "С картофелем",
            price:15,
            calories:10
        }
    },
    flavorings: {
        flavorings:{
            name: "Посыпка",
            price:15,
            calories:0
        },
        mayonnaise:{
            name: "Майонез",
            price:20,
            calories:5
        }
    }
    };

//система полей меню
class Menu {
    constructor(currentHamburger){
        this.currentHamburger = currentHamburger;
        this.init();
    }

    init(){
        this.render_sizes_options();
        this.render_toggles_options();
        this.render_flavorings_options();
    }

    calc_sum(event){
        console.dir(event.target);
        var matches = document.querySelectorAll(".choice");
        currentHamburger.totalSum = 0;
        currentHamburger.totalCalories = 0;
        for(let match of matches){
            if(match.checked == true){
                currentHamburger.calcNewSum(Number(match.dataset.price));
                currentHamburger.calcNewCalories(Number(match.dataset.calories));
            }
        }
        currentHamburger.showCurrentParamsOfBurger();
        console.log("Текущаяя сумма = " + currentHamburger.totalSum);
        console.log("Текущие калории = " + currentHamburger.totalCalories);   
    }

    render_sizes_options(){
        let divSizesHTML = document.querySelector(".sizes-options");
        let sizes = hamburgersOptions.sizes;
        divSizesHTML.insertAdjacentHTML("beforeEnd", 
            `<p><input class="choice" type="radio" id="choosingOfSize1" name="choosingOfSize" data-calories=${sizes.smallSize.calories} data-price=${sizes.smallSize.price} value=${sizes.smallSize.name} onchange="menu.calc_sum(event)"> 
            <label for=${sizes.smallSize}>${sizes.smallSize.name} (${sizes.smallSize.price} рублей, ${sizes.smallSize.calories} калорий)</label></p> 
            
            <p><input class="choice" type="radio" id="choosingOfSize2" name="choosingOfSize" data-calories=${sizes.bigSize.calories} data-price=${sizes.bigSize.price} value=${sizes.bigSize.name} onchange="menu.calc_sum(event)">
            <label for=${sizes.bigSize}>${sizes.bigSize.name} (${sizes.bigSize.price} рублей, ${sizes.bigSize.calories} калорий)</label></p>`
            );
    }
    render_toggles_options(){
        let divTogglesHTML = document.querySelector(".toggles-options");
        let tgs = hamburgersOptions.toggles;
        divTogglesHTML.insertAdjacentHTML("beforeEnd",
            `<p><input class="choice" type="radio" id="choosingOfToggle1" name="choosingOfToggle" data-calories=${tgs.chees.calories} data-price=${tgs.chees.price} value=${tgs.chees.name} onchange="menu.calc_sum(event)">
            <label for=${tgs.chees}>${tgs.chees.name} (+${tgs.chees.price} рублей, +${tgs.chees.calories} калорий)</label></p>

            <p><input class="choice" type="radio" id="choosingOfToggle2"name="choosingOfToggle" data-calories=${tgs.salat.calories} data-price=${tgs.salat.price} value=${tgs.salat.name} onchange="menu.calc_sum(event)">
            <label for=${tgs.salat}>${tgs.salat.name} (+${tgs.salat.price} рублей, +${tgs.salat.calories} калорий)</label></p>

            <p><input class="choice" type="radio" id="choosingOfToggle3" name="choosingOfToggle" data-calories=${tgs.potato.calories} data-price=${tgs.potato.price} value=${tgs.potato.name} onchange="menu.calc_sum(event)">
            <label for=${tgs.potato}>${tgs.potato.name} (+${tgs.potato.price} рублей, +${tgs.potato.calories} калорий)</label></p>`
            );
    }
    render_flavorings_options(){
        let divFlavoringsHTML = document.querySelector(".flavorings-options");
        let flaves = hamburgersOptions.flavorings;
        divFlavoringsHTML.insertAdjacentHTML("beforeEnd",
            `<p><input class="choice" type="checkbox" name="choosingOfFlavorings" data-calories=${flaves.flavorings.calories} data-price=${flaves.flavorings.price} value=${flaves.flavorings.name} onchange="menu.calc_sum(event)">
            ${flaves.flavorings.name} (+${flaves.flavorings.price} рублей, +${flaves.flavorings.calories} калорий)</p>
            
            <p><input class="choice" type="checkbox" name="choosingOfFlavorings" data-calories=${flaves.mayonnaise.calories} data-price=${flaves.mayonnaise.price} value=${flaves.mayonnaise.name} onchange="menu.calc_sum(event)">
            ${flaves.mayonnaise.name} (+${flaves.mayonnaise.price} рублей, +${flaves.mayonnaise.calories} калорий)</p>`
            );
    }
}

//текущий бургер
class Hamburger {
    constructor() { 
        this.totalSum = 0;
        this.totalCalories = 0;
        this.sumHTML = document.getElementsByClassName("total-sum-value")[0];
        this.caloriesHTML = document.getElementsByClassName("total-calories-value")[0];
    }
    calcNewSum(valueOfSum){
        this.totalSum+=valueOfSum;
    }
    calcNewCalories(valueOfCalories){
        this.totalCalories+=valueOfCalories;
    }
    showCurrentParamsOfBurger(){
        document.getElementsByClassName("total-sum-value")[0].textContent = this.totalSum;
        document.getElementsByClassName("total-calories-value")[0].textContent = this.totalCalories;
    }
  }

  //создание экземпляров классов:
  var currentHamburger = new Hamburger();
  var menu = new Menu(currentHamburger);