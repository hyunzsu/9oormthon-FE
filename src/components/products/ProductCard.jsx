import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductCard({ id }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/products/${id}`)
  }

  return (
    <div className="cursor-pointer" onClick={handleClick} className="flex">
      <img src="/src/assets/react.svg" alt="상품 이미지" />
      <div>
        <h2>플레이스 캠프 제주</h2>
        <p>활기차고 열정적인 분위기예요!</p>
      </div>
      <button>예약하기</button>
    </div>
  )
}
