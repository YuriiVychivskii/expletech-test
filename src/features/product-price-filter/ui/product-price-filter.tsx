'use client'

import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { useState } from 'react'

export default function ProductPriceFilter() {
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const handleFilter = () => {
    console.log('Filtering from', minPrice, 'to', maxPrice)
  }

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault()
        handleFilter()
      }}
    >
      <div className="flex min-w-[280px] items-center gap-5 sm:min-w-[320px] md:min-w-[400px]">
        <label
          htmlFor="minPrice"
          className="text-muted-foreground text-sm font-medium"
        >
          From
        </label>
        <Input
          id="minPrice"
          type="number"
          inputMode="numeric"
          min={0}
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="0"
        />

        <label
          htmlFor="maxPrice"
          className="text-muted-foreground text-sm font-medium"
        >
          To
        </label>
        <Input
          id="maxPrice"
          type="number"
          inputMode="numeric"
          min={0}
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="1000"
        />

        <p className="text-muted-foreground text-sm">$</p>
      </div>

      <Button type="submit" className="h-10">
        Apply
      </Button>
    </form>
  )
}
