const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
  ];
  
const renderGoodsItem = (item = {title:'none', price: 0}) => {
    return `<div class="goods-item"><h3>${item.title}</h3><p>${item.price}</p></div>`;
};
  
const renderGoodsList = (list = []) => {
    let goodsList = list.map(item => renderGoodsItem(item));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
}
  
renderGoodsList(goods);
