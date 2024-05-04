import { CartItemSlice } from '../redux/cart/types'
import { calcTotalPrice } from './calcTotalPrice'

export const getFromLocStor = () => {
  const data = localStorage.getItem('cart')
  const items = data ? JSON.parse(data) : []
  const totalPrice = calcTotalPrice(items)

  return {
    items: items as CartItemSlice[],
    totalPrice
  }
}
