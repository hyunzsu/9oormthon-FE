import React from 'react'
import DataTest from '../components/DataTest'
import Products from '../components/products/Products'
import Filter from '../components/products/Filter'

export default function Home() {
  return (
    <div>
      <h1>Home 🏡</h1>
      <DataTest />
      <Filter />
      <Products />
      <button>내 공간 등록하기</button>
    </div>
  )
}
