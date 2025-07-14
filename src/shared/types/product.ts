export type ProductCategory = 'Electronics' | 'Clothing' | 'Home' | 'Sports'

export type Product = {
  id: number
  name: string
  image: string
  price: string
  category: ProductCategory
  description: string
}

export type ProductState = {
  products: Product[]
}
