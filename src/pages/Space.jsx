import React, { useState, useEffect } from 'react'
import Products from '../components/products/Products'
import Filter from '../components/products/Filter'
import Button from '../components/Button'
import ReserveButton from '../components/products/ReserveButton'
import { getPrograms } from '../api/api'

export default function Space() {
  const [programs, setPrograms] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPrograms()
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="p-[20px] flex flex-col items-center">
      <h1>Logo</h1>
      <Products programs={programs} />
      <ReserveButton />
    </div>
  )
}
