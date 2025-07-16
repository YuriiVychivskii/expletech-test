'use client'

import ProductPagination from '@/features/product-pagination/ui/product-pagination'
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { fetchProducts, setPage } from '../model/product-slice'
import ProductCard from './product-card'

const PAGE_SIZE = 6

export default function ProductList() {
  const dispatch = useAppDispatch()
  const {
    products,
    loading,
    error,
    filters,
    page: currentPage,
  } = useAppSelector((state) => state.product)

  const prevFilters = useRef(filters)

  useEffect(() => {
    const filtersChanged =
      prevFilters.current.category !== filters.category ||
      prevFilters.current.searchQuery !== filters.searchQuery ||
      prevFilters.current.priceFilter?.min !== filters.priceFilter?.min ||
      prevFilters.current.priceFilter?.max !== filters.priceFilter?.max

    if (filtersChanged) {
      dispatch(setPage(1))
      prevFilters.current = filters
    }

    dispatch(
      fetchProducts({
        category: filters.category ?? null,
        searchQuery: filters.searchQuery || '',
        priceMin: filters.priceFilter?.min,
        priceMax: filters.priceFilter?.max,
      }),
    )
  }, [dispatch, filters])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  const totalPages = Math.ceil(products.length / PAGE_SIZE)

  const paginatedProducts = products.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p className="text-red-500">Error: {error}</p>
  if (!loading && products.length === 0) return <p>No products found</p>

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-5">
        {paginatedProducts.map((product) => (
          <Link href={String(product.id)} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>

      <ProductPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => dispatch(setPage(page))}
      />
    </div>
  )
}
