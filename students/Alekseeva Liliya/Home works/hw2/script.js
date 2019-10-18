window.onload = () => renderGoodsList(goods);

const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250, href: '/logo.png' },
];

const renderGoodsItem = (title, price, href) => {
    if (!title || !price){
        return '';
    }
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p><img src="${href}" /></div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));

    document.querySelector('.goods-list').innerHTML = goodsList.join('');
};
