import imagePlaceholder from './image.png'

export const productItem = ({ name, price, status }) => {
  const statusArray = status
    .split(',')
    .filter(status => status.length > 0)
    .map(status => `<div class='status-list__item'>${status}</div>`)
    .join(' ')

  return (`
    <div class='product' data-status=${status || 'none'}>
      <div class='product__status-list status-list'>${statusArray}</div>
      <figure class='product__image'>
        <img src='${imagePlaceholder}' alt='no image' />
      </figure>
      <h3 class='product__title'>${name}</h3>
      <p class='product__price'>${price}</p>
    </div>
  `)
}

export const fetchData = async () => {
  const res = await fetch('./products.json')
  const data = await res.json()
  const dataArray = Object.values(data)
  dataArray.pop() // Remove status 200 line

  return dataArray
}

export const getStatusArray = data => {
  let statusArray = []

  data.forEach(item => {
    const array = item.prod_status.split(',')
    statusArray.push(...array)
  })

  let unique = [...new Set(statusArray)]
  unique[0] = 'all'

  return unique
}