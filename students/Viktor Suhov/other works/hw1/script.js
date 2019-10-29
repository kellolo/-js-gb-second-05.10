const goods = [
    {title: 'Shirt', price: 150},
    {title: 'Socks', price: 50},
    {title: 'Jacket', price: 350},
    {title: 'Shoes', price: 250},
];

const renderGoodsItem = (title, price) => {
    return `<div class="goods-items"><h3>${title}</h3><p>${price}</p></div>`;
};

const renderGoodList = (list) => {
    let goodList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodList;
}

renderGoodList(goods);