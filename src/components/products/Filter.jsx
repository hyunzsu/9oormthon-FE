import React, { useState } from 'react'

const categories = ['카페', '숙박시설', '컨퍼런스룸', '코워킹', '스튜디오']

export default function Filter() {
  return (
    <div className="flex flex-wrap gap-4 mb-6 ml-4">
      {categories.map(category => (
        <button key={category}>{category}</button>
      ))}
    </div>
  )
}
