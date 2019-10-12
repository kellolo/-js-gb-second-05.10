
const imgCatalog = 'https://placehold.it/200x200'
const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Microphone']
const prices = [1000, 200, 20, 10, 25, 10]
const ids = [1, 2, 3, 4, 5, 6]
const products = createDTO () 

var cart = [];

window.onload = function() {
  var productTable = document.querySelector(".products");
  var htmlStr = "";

  for (let i = 0; i < products.length; i++) {
    htmlStr += ` <div class="product-item">
                                    <img class="img" src="${imgCatalog}">
                                    <div class="desc">
                                        <p>Товар: ${products[i].name}</p> 
                                        <p>Цена: ${products[i].price}</p> 
                                        <button class="buy-btn" data-id="${
                                          products[i].id
                                        }")">Купить</button>
                                    </div>
                                </div>`;
  }
  productTable.innerHTML = htmlStr;

  document.querySelector(".btn-cart").addEventListener("click", function() {
    document.querySelector(".cart-block").classList.toggle("invisible");
    drawCart();
  });

  document.addEventListener("click", function(e) {
    if (e.target.classList.contains("buy-btn")) {
      addToCart(+e.target.dataset["id"]);
    }
    if (e.target.classList.contains("del-btn")) {
      removeFromCart(+e.target.dataset["id"]);
    }
  });
};

function createProduct(index) {
  return {
    id: index,
    name: items[index],
    price: prices[index]
  };
}

function createDTO() {
  let arr = [];
  for (let i = 0; i < ids.length; i++) {
    arr.push(createProduct(i));
  }
  return arr;
}

function drawCart() {
  var cartBlock = document.querySelector(".cart-block");
  cartBlock.innerHTML = "";
  if (cart.length != 0) {
    cartBlock.innerHTML += `Ваши покупки: <hr>`;
    var htmlStr = "";
    for (let i = 0; i < cart.length; i++) {
      htmlStr += `<div class="cart-item"><p>${cart[i][0].name}: ${cart[i][0]
        .price * cart[i][1]}</p><button class="del-btn" data-id="${
        cart[i][0].id
      }">-</button><button class="buy-btn" data-id="${
        cart[i][0].id
      }">+</button></div>`;
    }
    cartBlock.innerHTML += htmlStr;
    cartBlock.innerHTML += `<hr> Сумма: ${calcSum(cart)}`;
  } else cartBlock.innerHTML += `<p>Корзина пуста</p>`;
}

function addToCart(id) {
  var itemNumber = -1;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      for (let j = 0; j < cart.length; j++) {
        if (cart[j][0].id === id) {
          itemNumber = j;
          break;
        }
      }
      itemNumber < 0 ? cart.push([products[i], 1]) : cart[itemNumber][1]++;
      break;
    }
  }
  drawCart();
}

function removeFromCart(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i][0].id === id) {
      if (--cart[i][1] === 0) cart.splice(i, 1);
    }
  }
  drawCart();
}

function resetCart() {
  cart = [];
  drawCart();
}

function calcSum() {
  let sum = 0;

  cart.forEach(el => {
    sum += el[0].price * el[1];
  });
  return sum;
}
