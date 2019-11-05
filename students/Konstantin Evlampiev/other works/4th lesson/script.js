'use strict';

function replaceApostrophes() {
    const taEl = document.querySelector('textarea');
    taEl.value = taEl.value.replace(/\'+\B/g, '"')
        .replace(/:\s\'/g, ': "');

}


let validTemplates = new Map([
    ["name", /^[A-ZА-Я]{1}[a-zа-яё]+\s[A-ZА-Я]{1}[a-zа-яё]+$/i],
    ["phone", /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/],
    ["e-mail", /^[\w._-]+@\w+\.[a-z]{2,}$/]
]);

/**
 * Проверка даных и навешивание ярлыков
 * @param {DOMElement} input 
 */
function setValidClass(input) {
    let pattern = validTemplates.get(input.name);
    if (pattern.test(input.value) || (input.value == "")) {
        input.classList.remove('wrongData')
    } else {
        input.classList.add('wrongData')
    }
}

//Непричесанно сначала выглядит textarea
let ts = document.querySelectorAll('textarea');
ts.forEach(el => {
    let str = el.value.replace(/ {2,}/g, " ")
        .replace(/\sA:/g, "A:")
        .replace(/\sB:/g, "B:");
    el.value = str;
})

document.querySelector('.task1 button')
    .addEventListener('click', event => {
        replaceApostrophes();
        event.preventDefault();
    })

document.querySelectorAll('.task2 input').forEach(
    el => {
        el.addEventListener('change', event => {
            setValidClass(el);
        })
    });

document.querySelector('.task2 button')
    .addEventListener('click', event => {
        event.preventDefault();
        let inputs = event.target.parentNode.querySelectorAll('input');
        inputs.forEach(el => {
            setValidClass(el)
        });
    });