import { getStatusArray } from './helpers'

class ProductData {
  constructor(data) {
    this.data = data
    this.statusList = getStatusArray(data)
  }

  filter = type => this.data.filter(data => data.prod_status.includes(type))
}

export default ProductData