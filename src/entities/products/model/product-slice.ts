import { Product, ProductCategory, ProductState } from '@/shared/types/product'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk<
  Product[],
  {
    category?: ProductCategory
    searchQuery?: string
    priceMin?: number
    priceMax?: number
  }
>('products/fetch', async (params) => {
  const query = new URLSearchParams({
    ...(params.category && { category: params.category }),
    ...(params.searchQuery && { query: params.searchQuery }),
    ...(params.priceMin && { min: String(params.priceMin) }),
    ...(params.priceMax && { max: String(params.priceMax) }),
  })

  const res = await fetch(`/api/products?${query.toString()}`)

  if (!res.ok) throw new Error('Failed to fetch products')
  return res.json()
})

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
  filters: {
    category: null,
    searchQuery: '',
    priceFilter: {
      min: 0,
      max: 10000,
    },
  },
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<ProductCategory>) => {
      state.filters.category = action.payload
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.filters.searchQuery = action.payload.trim()
    },
    setPriceFilter: (
      state,
      action: PayloadAction<{ min: number; max: number }>,
    ) => {
      state.filters.priceFilter = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false
          state.products = action.payload
        },
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'Failed to fetch products'
      })
  },
})

export const { setCategory, setPriceFilter, setSearchQuery } =
  productSlice.actions
export default productSlice.reducer
