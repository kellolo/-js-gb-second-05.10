const size_list = {
    'small': [50, 20],
    'big': [100, 40]
}
const inner_list = {
    'cheese': [10, 20],
    'salad': [20, 5],
    'potat': [15, 10]
}
const options_list = {
    'spice': [15, 0],
    'mayo': [20, 5]
}
let choose_size = ''
let choose_inner = ''
let choose_options = []

class Burger{
    constructor(){
        this.size = 0
        this.inner = 0
        this.options = [0]
    }

    calculator(ind){
        let sum = 0
        choose_options.forEach(el => {
            sum += options_list[el][ind]
        })
        sum += size_list[choose_size][ind] + inner_list[choose_inner][ind]
        return sum
    }

    selector(evt){
        if (evt.target.classList.contains('radio-1')){
            choose_size = el.target.dataset['id']
        }else if(evt.target.classList.contains('radio-2')){
            choose_inner = el.target.dataset['id']
        }else if(evt.target.classList.contains('check')){
            let ind = choose_options.indexOf(evt.target.dataset['id'])
            if(ind < 0){
                choose_options.push(evt.target.dataset['id'])
            }else{
               choose_options.splice(ind, 1)
            }
        }
    }
}

let burger = new Burger()

document.querySelector ('.content').addEventListener ('click', burger.selector)

document.querySelector('.calc-result').addEventListener ('click', function () {
    let burger = new Burger()
    }
)
    
