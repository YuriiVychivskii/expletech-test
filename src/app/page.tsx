import ProductList from '@/entities/products/ui/product-list'
import Header from '@/widgets/header'
import Sidebar from '@/widgets/sidebar'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="container flex flex-col items-center gap-5 pt-24 sm:items-start md:flex-row">
        <Sidebar />
        <ProductList />
      </div>
    </div>
  )
}
