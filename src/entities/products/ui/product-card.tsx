'use client'
import { Product } from '@/shared/types/product'
import { Button } from '@/shared/ui/button'
import * as motion from 'motion/react-client'
import Image from 'next/image'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      className="flex h-[400px] w-[240px] flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      <Image
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
        className="h-[200px] w-full rounded-md object-contain"
      />

      <h3 className="line-clamp-2 text-sm font-medium text-gray-800">
        {product.name}
      </h3>
      <p className="text-xs text-gray-500">{product.category}</p>
      <p className="text-lg font-bold text-green-600">${product.price}</p>

      <Button className="mt-auto w-full">Add to cart</Button>
    </motion.div>
  )
}
