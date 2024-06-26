import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { enumSortProperty, FilterSliceState, SortFilter } from './types'

const initialState: FilterSliceState = {
  categoryId: 0,
  currentPage: 1,
  searchValue: '',
  sortType: {
    name: 'popularity',
    sortProperty: enumSortProperty.RATING_DESC
  }
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    },
    setSortType: (state, action: PayloadAction<SortFilter>) => {
      state.sortType = action.payload
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setFilters: (state, action: PayloadAction<FilterSliceState>) => {
      state.currentPage = Number(action.payload.currentPage)
      state.categoryId = Number(action.payload.categoryId)
      state.sortType = action.payload.sortType
    }
  }
})

// Action creators are generated for each case reducer function
export const { setCategoryId, setSortType, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions

export default filterSlice.reducer
