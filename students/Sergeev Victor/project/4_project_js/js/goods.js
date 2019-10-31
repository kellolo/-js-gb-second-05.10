class GoodsItem {
  constructor(id, title, price) {
    this.id_product = id;
    this.product_name = title;
    this.price = price;
  }

  render() {
    return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price} <i class="fas fa-ruble-sign"></i></p>
  <button class="toBasketBtn" data-id=${this.id_product} data-price=${this.price} data-name=${this.product_name}>В корзину</button>
  </div>`;
  }
}

class GoodsList {
  constructor() {
    this.API_url = "https://raw.githubusercontent.com/Essvitex/-js-gb-second-05.10/master/students/Sergeev%20Victor/project/4_project_js/jsonData";
    this.goods = [];
    this.filteredGoods = [];//поле поиска
  }
  
  filterGoods(searchValue){
    const regexp = new RegExp(searchValue, 'i');
    this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
    this.render();
  }

  promisAjaxGetGoods(url){
    return new Promise((res, rej)=>{
      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if(xhr.status === 200){
            res(xhr.responseText)
          }
          else{
            rej("error of getting goods.")
          }
        }
      }
  
      xhr.open('GET', url, true);
      xhr.send();
    })
  }

  getPromiseGoods(basketOfGoods){
    this.promisAjaxGetGoods(`${this.API_url}/catalogData.json`)
    .then((data)=>{
      this.goods = JSON.parse(data);
      this.filteredGoods = JSON.parse(data);
    })
    .then(() => {
      this.render();
    })
    .then(() => { 
      this.addListenersOfGoodsButtonsInput(basketOfGoods);
    })
    .then(() => {
      let searchBtn = document.querySelector('.search-button');
      let searchInput = document.querySelector('.goods-search');
      searchBtn.addEventListener('click', (e) => {
        console.log('alarm');
        const value = searchInput.value;
        this.filterGoods(value);
        this.addListenersOfGoodsButtonsInput(basket);//для search input
      })
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  
  addListenersOfGoodsButtonsInput(basketOfGoods){
    let basketBtns = document.querySelectorAll('.toBasketBtn');

      //берем все кнопки "В корзину" и слушаем клики по ним
      basketBtns.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
          let id = event.srcElement.dataset.id;
          let price = event.srcElement.dataset.price;
          let name = event.srcElement.dataset.name;
          basketOfGoods.addProduct({ id: id, price: price, name: name });
    }
    )})
  }

  render() {
    let listHtml = '';
    this.filteredGoods.forEach(good => {
        const goodItem = new GoodsItem(good.id_product, good.product_name, good.price);
        listHtml += goodItem.render();
      });
      document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

let goodsList = new GoodsList(basket);
goodsList.getPromiseGoods(basket);//получение данных товаров