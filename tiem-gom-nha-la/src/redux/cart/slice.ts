import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { calcTotalPrice } from '../../utils/calcTotalPrice'
import { getFromLocStor } from '../../utils/getFromLocStor'
import { CartSliceState, CartItemSlice } from './types'

const { items, totalPrice } = getFromLocStor() //достаем информацию из localstorage

const initialState: CartSliceState = {
  totalPrice,
  items
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItemSlice>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id) // поиск схожих пицц по id при добавлении в корзину
      if (findItem) {
        findItem.count++ //добавление
      } else {
        state.items.push({ ...action.payload, count: 1 }) //добавление в items.count
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        // подсчет сумму за все пиццы
        return obj.price * obj.count + sum
      }, 0)
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload)
      if (findItem) {
        findItem.count--
      }

      state.totalPrice = calcTotalPrice(state.items)
    },
    removeItem(state, action: PayloadAction<string>) {
      //удаление выборочной пиццы
      state.items = state.items.filter((obj) => obj.id !== action.payload)

      state.totalPrice = state.items.reduce((sum, obj) => {
        // подсчет сумму за все пиццы
        return obj.price * obj.count + sum
      }, 0)
    },
    clearItem(state) {
      //удаление всез пицц из корзины
      state.items = []
      state.totalPrice = 0
    }
  }
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearItem, minusItem } = cartSlice.actions

export default cartSlice.reducer
