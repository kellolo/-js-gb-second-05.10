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
    constructor(size, inner, options = []){
        this.size = size
        this.inner = inner
        this.options = options
    }

    calculator(ind){
        let sum = 0
        choose_options.forEach(el => {
            sum += options_list[el][ind]
        })
        sum += size_list[choose_size][ind] + inner_list[choose_inner][ind]
        return sum
    }
}

document.querySelector ('.content').addEventListener ('click', function(el){
    if (el.target.classList.contains('radio-1')){
        choose_size = el.target.dataset['id']
    }else if(el.target.classList.contains('radio-2')){
        choose_inner = el.target.dataset['id']
    }else if(el.target.classList.contains('check')){
        let ind = choose_options.indexOf(el.target.dataset['id'])
        if(ind < 0){
            choose_options.push(el.target.dataset['id'])
        }else{
           choose_options.splice(ind, 1)
        }
    }
})

document.querySelector('.calc-result').addEventListener ('click', function () {
    if (choose_size != '' &&  choose_inner != ''){
    let result = new Burger (choose_size, choose_inner, choose_options)
        htmlString = `<p>Ваш заказ будет стоить: ${result.calculator(0)}</p>`
        htmlString += `<p>Каллорийность Вашего заказа составит: ${result.calculator(1)}</p>`
        document.querySelector ('.result').innerHTML = htmlString
    }else{
        alert('Вы не выбрали гамбургер')
    }
})
    
