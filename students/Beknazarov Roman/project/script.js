const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    { title: 'Hat', price: 100 },
    { title: 'Cap', price: 75 },
    { title: 'Gloves', price: 125 },
    {},
];

//Добавьте значения по умолчанию для аргументов функции.
const renderGoodsItem = (title = 'Cup', price = 25) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

/*
//Причина появления запятых на странице состоит в том, что
//свойство innerHTML добавляет в разметку весь массив goodsList - в виде строки.
const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList;

    //Как можно упростить или сократить запись функций?
    document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item.title, item.price));
    //Ничего другого не пришло в голову.
};

*/

const renderGoodsList = (list) => {
    for (let item of list) {
        document.querySelector('.goods-list').insertAdjacentHTML( "beforeend", renderGoodsItem(item.title, item.price));
    }
};

renderGoodsList(goods);