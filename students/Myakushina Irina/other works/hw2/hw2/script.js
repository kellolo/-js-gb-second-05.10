'use strict';

// Получить кнопку buy и повесить на нее событие onclick;
document.getElementById("buy").onclick = getBuy;

// Запишем функцию getBuy;
function getBuy() {
    
// подсчитать выбранные элементы. получить class menu
    let menu = document.getElementsByClassName("menu");
    let price = 0;
    let kKal = 0;
    
// записать цикл для перебора input;
    for (let i=0; i<menu.length; i++ ) {
        if (menu[i].checked) {
            price += parseInt(menu[i].getAttribute("data-price"));
            kKal += parseInt(menu[i].getAttribute("data-kKal"));
        }
// получить элемент по id и вывести результат        
        document.getElementById("price").innerHTML = price;
        document.getElementById("kKal").innerHTML = kKal;
    }
}