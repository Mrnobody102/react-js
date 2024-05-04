import { CartItemTypes } from '../pages/cart/Cart'

export const calcTotalPrice = (items: CartItemTypes[]) => {
  return items.reduce((sum, obj) => {
    return obj.price * obj.count + sum
  }, 0)
}
