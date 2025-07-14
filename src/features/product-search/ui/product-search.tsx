'use client'
import { Input } from '@/shared/ui/input'
import { useCallback, useState } from 'react'

export default function ProductSearch() {
  const [query, setQuery] = useState('')
  const resetFilters = useCallback(() => setQuery(''), [])
  return (
    <div className="relative w-full max-w-md sm:max-w-xl lg:max-w-3xl">
      <Input
        placeholder="Search..."
        className="pr-20"
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
      />

      <button
        type="button"
        onClick={resetFilters}
        className="absolute top-1/2 right-1 -translate-y-1/2 cursor-pointer rounded-md bg-green-600 px-3 py-1.5 text-sm font-medium text-white shadow hover:bg-green-700"
      >
        Reset
      </button>
    </div>
  )
}
