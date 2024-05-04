export enum enumSortProperty {
  RATING_DESC = '-rating',
  RATING_ASC = 'rating',
  PRICE_DESC = '-price',
  PRICE_ASC = 'price',
  NAME_DESC = '-name',
  NAME_ASC = 'name'
}

export type SortFilter = {
  name: string
  sortProperty: enumSortProperty
}

export interface FilterSliceState {
  categoryId: number
  currentPage: number
  searchValue: string
  sortType: SortFilter
}
