import { Product, ProductState } from '@/shared/types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ProductState = {
  products: [],
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload
    },
  },
})

export const { setProducts } = productSlice.actions
export default productSlice.reducer
