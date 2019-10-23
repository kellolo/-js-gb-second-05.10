let product = {
  template: `        
    <div class="products" v-if="products.length">
      <div class="product-item" v-for="product in products">
          <img :src="product.img" alt="Some img">
          <div class="desc">
              <h3> {{product.product_name}} </h3>
              <p>{{product.price}} $</p>
              <button class="buy-btn" @click="addProduct(product)">Купить</button>
          </div>
      </div>
    </div>
  `
}

let catalog = {
  template: `        
  <div class="products" v-if="products.length">
    <div class="product-item" v-for="product in products"></div>
  </div>
`
}