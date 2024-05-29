import React from 'react'
import ProductCard from './ProductCard'

export default function Products({ programs }) {
  return (
    <div className="w-full flex flex-col gap-3">
      {programs.map(program => (
        <ProductCard key={program.id} program={program} />
      ))}
    </div>
  )
}
