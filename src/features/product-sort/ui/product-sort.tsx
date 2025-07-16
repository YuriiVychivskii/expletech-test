'use client'

import { setCategory } from '@/entities/products/model/product-slice'
import { productCategories } from '@/shared/constants/product-categories'
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks'
import { ProductCategory } from '@/shared/types/product'

export default function ProductSort() {
  const dispatch = useAppDispatch()
  const activeCategory = useAppSelector(
    (state) => state.product.filters.category,
  )

  const handleClick = (item: ProductCategory) => {
    const newCategory = item === activeCategory ? null : item
    dispatch(setCategory(newCategory))
  }

  return (
    <div className="flex flex-col gap-2">
      {productCategories.map((item) => {
        const isActive = item === activeCategory

        return (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className={`h-10 rounded border px-4 py-1 text-sm font-medium transition-colors ${
              isActive
                ? 'border-green-600 bg-green-500 text-white'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {item}
          </button>
        )
      })}
    </div>
  )
}
