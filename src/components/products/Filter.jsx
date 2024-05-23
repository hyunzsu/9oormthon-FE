import React from 'react'
import { categories } from '../../constants/categories'

export default function Filter() {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {categories.map(category => (
        <button key={category.name} className="relative">
          <img
            src={category.image}
            alt={category.name}
            className="w-[46px] h-[46px] object-cover"
          />
          <span className="absolute bottom-[11px] left-0 text-black text-11">
            {category.name}
          </span>
        </button>
      ))}
    </div>
  )
}
