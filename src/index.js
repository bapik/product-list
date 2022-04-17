import ProductDOM from './ProductDOM'
import ProductData from './ProductData'
import { fetchData } from './helpers'
import styles from './styles.sass'

const selectFilter = document.getElementById('filter')
const productsContainer = document.getElementById('products')

const productDOM = new ProductDOM(productsContainer)

const showProducts = async (selectFilter, productDOM) => {
  const data = await fetchData()
  const productData = new ProductData(data)

  productDOM.drawProducts(productData.data)

  productData.statusList.forEach(status => {
    const option = document.createElement('option')
    option.setAttribute('value', status)
    option.innerText = status
    selectFilter.appendChild(option)
  })

  selectFilter.onchange = () => { 
    if (selectFilter.value === 'all') { 
      productDOM.drawProducts(productData.data)
    } else {
      productDOM.drawProducts(productData.filter(selectFilter.value))
    }
  }  
}

showProducts(selectFilter, productDOM)