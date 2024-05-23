import React from 'react'
import Products from '../components/products/Products'
import Filter from '../components/products/Filter'

export default function Home() {
  return (
    <div>
      <Filter />
      <Products />
      <button>내 공간 등록하기</button>
    </div>
  )
}
