export type ProductCategory =
  | 'Electronics'
  | 'Clothing'
  | 'Home'
  | 'Sports'
  | null

export type Product = {
  id: number
  name: string
  image: string
  price: number
  category: ProductCategory
  description: string
}

export type ProductState = {
  products: Product[]
  loading: boolean
  error: string | null
  filters: {
    category: ProductCategory
    searchQuery: string
    priceFilter: {
      min: number
      max: number
    }
  }
}
