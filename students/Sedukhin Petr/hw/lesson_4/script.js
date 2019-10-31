//  First part and second part
let str = `'one'. 'two' isn't three. 'button'.four and 'five' aren't six.`
let regexp = /^'|'(?=[\s.,])|(?<=\s)'/g       

function change (str, regexp){
    return str.replace(regexp, `"`)
}

console.log(`Было: ${str}`)
str = change(str, regexp)
console.log(`Стало: ${str}`)


// Third part
function findInputValue (id){
  return document.getElementById(id).value
}

function checkEmpty (str){
    let regexp = /./
    return regexp.test (str)
}

function validateName (str){
   let regexp = /[^a-zA-Z\s]/ 
   return regexp.test (str)
}

function validateTel (str){
    let regexp = /\+\d\(\d{3}\)\d{3}-\d{4}/
    return regexp.test (str) 
 }

 function validateEmail (str){
    let regexp = /\w+@[a-zA-z]+\.[a-z]+/
    return regexp.test (str)
 }

 function errorMesNothing (id) {
    let placeholder = document.getElementById(id).placeholder
    document.querySelector(`#${id}`).style.backgroundColor = "red"
    console.log (`Поле ${placeholder} не заполнено`)
 }

 function errorMesWrong (id) {
    let placeholder = document.getElementById(id).placeholder
    document.querySelector(`#${id}`).style.backgroundColor = "red"
    console.log (`Поле ${placeholder} заполнено неверно`)
}

function validationIsOk (id) {
    let placeholder = document.getElementById(id).placeholder
    document.querySelector(`#${id}`).style.backgroundColor = ""
    console.log (`Поле ${placeholder} заполнено ВЕРНО`)
}

window.onload = () =>{
    document.querySelector('.submit').addEventListener ('click', function () {
        let field = 'name'
        let text = findInputValue(field)
        if (!checkEmpty(text)){
            errorMesNothing (field)
        } else {
            if (!validateName(text)){
                validationIsOk (field) 
            } else{
                errorMesWrong (field)
            } 
        }
        field = 'telephone'
        text = findInputValue(field)
        if (!checkEmpty(text)){
            errorMesNothing (field)
        } else {
            if (validateTel(text)){
                validationIsOk (field) 
            } else{
                errorMesWrong (field)
            } 
        }
        field = 'e-mail'
        text = findInputValue(field)
        if (!checkEmpty(text)){
            errorMesNothing (field)
        } else {
            if (validateEmail(text)){
                validationIsOk (field) 
            } else{
                errorMesWrong (field)
            } 
        }
        field = 'text'
        text = findInputValue(field)
        if (!checkEmpty(text)){
            errorMesNothing (field)
        } else {
            validationIsOk (field)
        }    
    })    
}
