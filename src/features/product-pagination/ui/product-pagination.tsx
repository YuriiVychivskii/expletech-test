'use client'

import { Button } from '@/shared/ui/button'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

type Props = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function ProductPagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  return (
    <div className="mt-5 mb-5 flex w-full items-center justify-center gap-4">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaLongArrowAltLeft className="h-5 w-5" />
      </Button>

      <span className="text-sm font-medium">
        Page {currentPage} of {totalPages}
      </span>

      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaLongArrowAltRight className="h-5 w-5" />
      </Button>
    </div>
  )
}
