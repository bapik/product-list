import { productItem } from './helpers'

class ProductDOM {
  constructor(container) {
    this.container = container
    this.data
  }

  drawProducts = data => {
    this.container.innerHTML = ''
    
    data.forEach(product => {
      this.container.innerHTML += productItem({ 
        name: product.prod_name, 
        price: product.prod_price, 
        status: product.prod_status 
      })
    })
  }
}

export default ProductDOM