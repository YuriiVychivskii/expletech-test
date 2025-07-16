import ProductSearch from '@/features/product-search/ui/product-search'
import { memo } from 'react'

export default memo(function Header() {
  return (
    <header
      role="banner"
      className="fixed z-50 h-20 w-full bg-white py-6 shadow-sm"
    >
      <div className="container flex h-full items-center justify-center px-2.5 lg:px-10">
        <ProductSearch />
      </div>
    </header>
  )
})
