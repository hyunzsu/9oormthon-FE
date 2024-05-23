import React, { useState } from 'react'
import { categories } from '../../constants/categories'

export default function Filter() {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {categories.map(category => (
        <button key={category}>{category}</button>
      ))}
    </div>
  )
}
