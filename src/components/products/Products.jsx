import React from 'react'
import ProductCard from './ProductCard'

export default function Products() {
  return (
    <div>
      <ProductCard id={100} />
      <ProductCard id={2} />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}
