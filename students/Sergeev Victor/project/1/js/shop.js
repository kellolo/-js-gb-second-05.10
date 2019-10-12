const goods = [
  { id: 1, title: 'Перчатки', price: 150 },
  { id: 2, title: 'Скейтборд', price: 2000 },
  { id: 3, title: 'Горнолыжный костюм', price: 6700 },
  { id: 4, title: 'Сноуборд', price: 2400 },
  { id: 5, title: 'Спандер', price: 250 },
  { id: 6, title: 'Кроссовки', price: 3000 },
  { id: 7, title: 'Спортивная сумка', price: 2750 },
  { id: 8, title: 'Спасательный круг', price: 400 },
  { id: 9, title: 'Ласты', price: 750 },
  { id: 10, title: 'Коньки', price: 3000 },
  { id: 11, title: 'Скакалка', price: 400 },
  { id: 12, title: 'Детские лыжи', price: 1200 },
  { id: 12, title: 'Термос', price: 2500 }
];

const renderGoodsItem = (item = {title:'none', price: 0}) => {
  return `<div class="goods-item"><h3>${item.title}</h3><p>${item.price}</p><button data-id="${item.id}">Добавить</button></div>`;
};

const renderGoodsList = (list = []) => {
  let goodsList = list.map(item => renderGoodsItem(item));
  document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods);



document.querySelector('.basket-button').addEventListener('click', function (e) {
  let dm = document.getElementsByClassName("basket-panel")[0];
  console.log(dm);
  if(dm.classList.contains("dropdown-menu")){
    dm.classList.remove("dropdown-menu");
    dm.classList.add("open-dropdown-menu");
    e.target.innerHTML = "Корзина ▼"
  }
  else{
    dm.classList.remove("open-dropdown-menu");
    dm.classList.add("dropdown-menu");
    e.target.innerHTML = "Корзина ▶"
  }
  });

