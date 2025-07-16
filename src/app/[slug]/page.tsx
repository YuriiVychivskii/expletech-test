'use client'

import { selectProductById } from '@/entities/products/model/product-slice'
import ProductDetails from '@/entities/products/ui/product-details'
import { useAppSelector } from '@/shared/store/hooks'
import { Product } from '@/shared/types/product'
import { Button } from '@/shared/ui/button'
import { useRouter } from 'next/navigation'
import { use } from 'react'
import { RxCross2 } from 'react-icons/rx'

export default function ProductSlug({
  params,
}: {
  params: Promise<{ slug: number }>
}) {
  const { slug } = use(params)
  const router = useRouter()

  const product: Product | null = useAppSelector((state) =>
    selectProductById(state, slug),
  )

  if (!product)
    return (
      <div className="p-10 text-center text-red-500">Product not found</div>
    )

  return (
    <div className="container mx-auto mt-24 flex flex-col items-center px-4">
      <Button onClick={() => router.back()} className="mb-8 self-end">
        <RxCross2 className="h-5 w-5" />
      </Button>

      <ProductDetails product={product} />
    </div>
  )
}
