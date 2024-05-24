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
        setPrograms(data.programs)
        console.log(data.programs)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div className="bg-black w-full flex justify-center py-[20px]">
        <img
          src="https://raw.githubusercontent.com/workmeong-shimmeong/olleh-client/873e269331f41a51f9e12d2add62d54fce0a8344/src/assets/Logo.svg"
          alt=""
        />
      </div>
      <div className="p-[20px] flex flex-col items-center">
        <Products programs={programs} />
        <ReserveButton />
      </div>
    </>
  )
}
