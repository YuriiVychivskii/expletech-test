import { Product } from '@/shared/types/product'
import { promises as fs } from 'fs'
import { NextResponse } from 'next/server'
import path from 'path'

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const category = url.searchParams.get('category')
    const searchQuery = url.searchParams.get('query')
    const min = Number(url.searchParams.get('min') ?? 0)
    const max = Number(url.searchParams.get('max') ?? 10000)

    const filePath = path.join(process.cwd(), 'public', 'products.json')
    const fileContent = await fs.readFile(filePath, 'utf8')
    const data = JSON.parse(fileContent)

    if (!category && !searchQuery && min === 0 && max === 10000) {
      return NextResponse.json(data)
    }

    const filtered = data.filter((product: Product) => {
      const matchesCategory = category ? product.category === category : true

      const matchesQuery = searchQuery
        ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
        : true

      const matchesMin =
        min !== undefined && min !== null ? product.price >= min : true
      const matchesMax =
        max !== undefined && max !== null ? product.price <= max : true
      const matchesPrice = matchesMin && matchesMax

      return matchesCategory && matchesQuery && matchesPrice
    })

    return NextResponse.json(filtered)
  } catch (error) {
    console.error('Error reading products:', error)
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}
