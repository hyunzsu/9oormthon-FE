import React from 'react'
import Products from '../components/products/Products'
import Filter from '../components/products/Filter'
import Button from '../components/Button'
import ReserveButton from '../components/products/ReserveButton'

export default function Space() {
  return (
    <div>
      <Filter />
      <Products />
      <ReserveButton />
    </div>
  )
}
