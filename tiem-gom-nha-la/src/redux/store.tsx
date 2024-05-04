import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart/slice'
import filterSlice from './filter/slice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: { filters: filterSlice, cart: cartSlice }
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
