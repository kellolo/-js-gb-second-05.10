// const goods = [{
//     title: 'Shirt',
//     price: 150
//   }, {
//     title: 'Socks',
//     price: 50
//   },
//   {
//     title: 'Jacket',
//     price: 350
//   }, {
//     title: 'Shoes',
//     price: 250
//   }
// ]

// const renderGoodsItem = (title, price) => {
//   return `<div class='goods-item'><h2>${title}</h2><p>${price}</p></div>`;
// }

// const renderGoodsList = (list) => {
//   let goodsList = list.map(item => renderGoodsItem(item.title, item.price)).join('');
//   document.querySelector('.goods-list').innerHTML = goodsList;
// }
// renderGoodsList(goods);


//входные данные
const goods = ['Shirt', 'Socks', 'Jacket', 'Shoes'],
  prices = [150, 50, 350, 250],
  ids = [1, 2, 3, 4],
  images = []

//создание объекта товара
function getGood(index) {
  return {
    name: goods[index],
    price: prices[index],
    img: images[index],
    id: ids[index]
  }
}

//создание массива товаров
function getGoodsArray() {
  let goodsArray = []
  for (let i = 0; i < goods.length; i++) {
    goodsArray.push(getGood(i))
  }
  return goodsArray
}
let goodsArray = getGoodsArray()


//создание корзины и id
let cart = [],
  cartId = 1

//счет суммарной стоимости товаров
function getTotalPrice(arr) {
  let summ = 0
  for (let i = 0; i < arr.length; i++) {
    summ += arr[i].price
  }
  return summ
}

//показ корзины
let cartButton = document.querySelector('.cart-button')
cartButton.addEventListener('click', () => {
  document.querySelector('.cart-block').classList.toggle('invisible')
})

//добавление товаров каталога

function createGoodsList() {
  let good = document.querySelector('.goods-list')

  for (let i = 0; i < goodsArray.length; i++) {
    good.innerHTML += `<div class="good-item">
		<img src="${goodsArray[i].img}" alt="img-${goodsArray[i].name}" class="good-img">
		<div class="goods-description">
			<h2 class="good-name">${goodsArray[i].name}</h2>
            <p class="good-price">${goodsArray[i].price} &#36;</p>
			<button id=${goodsArray[i].id} class="good-button" onclick="addGoodToCart(this)" >Buy</button>
		</div>
	</div>`
  }
}
createGoodsList()

//добавление товара в корзину и посчет суммарной стоимости

function addGoodToCart(clickedGood) {
  document.querySelector('.cart-block').classList.remove('invisible')
  let id = +clickedGood.id
  let goodObj = goodsArray.find(good => good.id == id)
  goodObj.cartId = cartId
  let listItem = document.querySelector('.cart-list')
  listItem.innerHTML += `<li class="cart-item">${goodObj.name} цена: ${goodObj.price} &#36;<button class="delete-button" id=${goodObj.cartId} onclick="deleteItemOfList(this)"></button> </li>`

  cart.push(goodObj)
  let total = getTotalPrice(cart)
  let totalPrice = document.querySelector('.total-price')
  totalPrice.innerHTML = `<p class="cart-total-price"> Итого: ${total} &#36;</p>`
  cartId++
}

//удаление товара из корзины

function deleteItemOfList(goodToDelete) {
  let goodId = +goodToDelete.id

  // удаляем из массива корзины по cartId
  cart = cart.filter((item) => item.cartId !== goodId)

  // пересчитываем тотал
  let total = getTotalPrice(cart)
  let totalPrice = document.querySelector('.total-price')
  totalPrice.innerHTML = ` < p class = "cart-total-price" > Итого: ${total} & #36;</p>`

  // удаляем товар из DOM

  goodToDelete.parentElement.remove()

}