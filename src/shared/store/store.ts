import productReducer from '@/entities/products/model/product-slice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
