import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductCard({ id }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/products/${id}`)
  }

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer flex justify-between w-[353px] h-[123px] border-2 border-black mx-auto my-0"
    >
      <img src="/src/assets/react.svg" alt="상품 이미지" />
      <div className="flex flex-col">
        <h2 className="font-bold">플레이스 캠프 제주</h2>
        <p>활기차고 열정적인 분위기예요!</p>
        <button className="border-gray-400 border-2 w-[90px] h-[26px] mt-auto ml-auto rounded-xl">
          예약하기
        </button>
      </div>
    </div>
  )
}
