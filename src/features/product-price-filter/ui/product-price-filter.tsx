'use client'

import { setPriceFilter } from '@/entities/products/model/product-slice'
import { useAppDispatch } from '@/shared/store/hooks'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { useEffect, useState } from 'react'

export default function ProductPriceFilter() {
  const dispatch = useAppDispatch()
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [disable, setDisable] = useState(false)

  const handleFilter = () => {
    const min = Number(minPrice) || 0
    const max = maxPrice === '' ? 10000 : Number(maxPrice)

    dispatch(setPriceFilter({ min, max }))
  }

  useEffect(() => {
    const min = Number(minPrice)
    const max = maxPrice === '' ? 10000 : Number(maxPrice)

    if (!isNaN(min) && !isNaN(max) && min > max) {
      setDisable(true)
    } else {
      setDisable(false)
    }
  }, [minPrice, maxPrice])

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault()
        handleFilter()
      }}
    >
      <div className="flex items-center gap-5">
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
          placeholder="10000"
        />

        <p className="text-muted-foreground text-sm">$</p>
      </div>

      <Button type="submit" className="h-10" disabled={disable}>
        Apply
      </Button>
    </form>
  )
}
