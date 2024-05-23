import React from 'react'
import Products from '../components/products/Products'
import Filter from '../components/products/Filter'

export default function Home() {
  return (
    <div>
      <Filter />
      <Products />
    </div>
  )
}
