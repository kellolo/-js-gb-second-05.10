'use strict';

const goods = [{
        title: 'Shirt',
        price: 150
    },
    {
        title: 'Socks',
        price: 50
    },
    {
        title: 'Jacket',
        price: 350
    },
    {
        title: 'Shoes',
        price: 250
    },
];


//Воспользовался свойством стрелочной функции чтобы не писать return, но код стал менее читаемым
const renderGoodsItem = (title = "no name", price = 99.99) => `<div class="goods-item"><img src="img/forGoodsList/1.jpg"><h3>${title}</h3><p>${price.toFixed(2)}</p><button type="submit" class="buiItBtn orangeStyled">Buy it</button></div>`;

//удалил запятую, она была из-за того что работали с массивом, преобразовал его .join() к строке явно через пробел 
const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price)).join(" ");
    document.querySelector('.goods-list').innerHTML = goodsList;
}


//Ну, это, чтобы гарантированно грузилось содержимое после перерисовки страницы и чтобы потом могли перересовать с другим массивом, сортированным, например или еще что 
const rGL = () => {
    renderGoodsList(goods);
}

window.addEventListener('load', rGL);