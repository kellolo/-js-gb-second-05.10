class GoodsItem {
  constructor(id, title, price) {
    this.id = id;
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price} <i class="fas fa-ruble-sign"></i></p>
  <button class="toBasketBtn" data-id=${this.id} data-price=${this.price} data-name=${this.title}>В корзину</button>
  </div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
    this.fetchGoods();
  }

  fetchGoods() {
    this.goods = [
      { id: 0, title: 'Перчатки', price: 150 },
      { id: 1, title: 'Скейтборд', price: 2000 },
      { id: 2, title: 'Горнолыжный&nbsp;костюм', price: 6700 },
      { id: 3, title: 'Сноуборд', price: 2400 },
      { id: 4, title: 'Спандер', price: 250 },
      { id: 5, title: 'Кроссовки', price: 3000 },
      { id: 6, title: 'Спортивная&nbsp;сумка', price: 2750 },
      { id: 7, title: 'Спасательный&nbsp;круг', price: 400 },
      { id: 8, title: 'Ласты', price: 750 },
      { id: 9, title: 'Коньки', price: 3000 },
      { id: 10, title: 'Скакалка', price: 400 },
      { id: 11, title: 'Детские&nbsp;лыжи', price: 1200 },
      { id: 12, title: 'Термос', price: 2200 }
    ];
  }

  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.id, good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
}

const goodsList = new GoodsList();
goodsList.render();
