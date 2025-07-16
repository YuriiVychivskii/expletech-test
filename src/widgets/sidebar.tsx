'use client'

import ProductPriceFilter from '@/features/product-price-filter/ui/product-price-filter'
import ProductSort from '@/features/product-sort/ui/product-sort'
import { Button } from '@/shared/ui/button'
import { AnimatePresence, motion } from 'motion/react'
import { useCallback, useLayoutEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'

export default function Sidebar() {
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const checkMobile = useCallback(() => {
    const mobile = window.innerWidth < 768
    setIsMobile(mobile)
    setIsVisible(!mobile)
  }, [])

  useLayoutEffect(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [checkMobile])

  return (
    <aside className="w-full min-w-[280px] rounded bg-white px-2 py-5 shadow sm:min-w-[320px] md:max-w-[400px]">
      {isMobile && !isVisible && (
        <div className="flex justify-between px-5 text-green-500">
          <p>Filters</p>
          <button
            type="button"
            aria-label="Show filters"
            onClick={() => setIsVisible(true)}
          >
            <FaFilter className="h-5 w-5" />
          </button>
        </div>
      )}

      <AnimatePresence initial={false}>
        {isVisible && (
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            key="sidebar-filters"
          >
            {isMobile && (
              <div className="mb-2 flex justify-end">
                <Button
                  type="button"
                  aria-label="Hide filters"
                  onClick={() => setIsVisible(false)}
                >
                  <RxCross2 className="h-5 w-5" />
                </Button>
              </div>
            )}

            <ProductPriceFilter />
            <div className="h-0.5 w-full bg-gray-300" />
            <ProductSort />
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  )
}
