'use client'
import { setSearchQuery } from '@/entities/products/model/product-slice'
import { useAppDispatch } from '@/shared/store/hooks'
import { Input } from '@/shared/ui/input'
import { useCallback, useState } from 'react'
import { RiResetLeftLine } from 'react-icons/ri'

export default function ProductSearch() {
  const [query, setQuery] = useState('')
  const dispatch = useAppDispatch()

  const resetFilters = useCallback(() => {
    setQuery('')
    dispatch(setSearchQuery(''))
  }, [dispatch])

  const submitSearch = useCallback(() => {
    dispatch(setSearchQuery(query.trim().toLowerCase()))
  }, [dispatch, query])

  return (
    <div className="relative w-full max-w-md sm:max-w-xl lg:max-w-3xl">
      <Input
        placeholder="Search..."
        className="pr-20"
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') submitSearch()
        }}
      />

      <div className="absolute top-1/2 right-1 flex -translate-y-1/2 items-center gap-3">
        {query && (
          <button onClick={resetFilters} className="cursor-pointer">
            <RiResetLeftLine className="h-5 w-5" />
          </button>
        )}
        <button
          type="button"
          onClick={submitSearch}
          className="cursor-pointer rounded-md bg-green-600 px-3 py-1.5 text-sm font-medium text-white shadow hover:bg-green-700"
        >
          Apply
        </button>
      </div>
    </div>
  )
}
