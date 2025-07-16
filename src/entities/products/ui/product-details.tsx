'use client'

import { Product } from '@/shared/types/product'
import Image from 'next/image'

type Props = {
  product: Product
}

export default function ProductDetails({ product }: Props) {
  return (
    <div className="mx-auto max-w-4xl rounded bg-white p-6 shadow-md">
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="w-full flex-shrink-0 md:w-1/3">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="rounded object-contain"
          />
        </div>

        <div className="flex flex-grow flex-col">
          <h1 className="mb-4 text-3xl font-bold">{product.name}</h1>
          <p className="mb-2 text-gray-600 capitalize">{product.category}</p>
          <p className="mb-6 text-2xl font-semibold text-green-600">
            ${product.price}
          </p>
          <p className="whitespace-pre-line text-gray-700">
            {product.description || 'No description available.'}
          </p>
        </div>
      </div>
    </div>
  )
}
