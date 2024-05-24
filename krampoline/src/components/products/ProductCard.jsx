import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductCard({ program }) {
  const { id, name, mainImage, price, startDate } = program
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/products/${id}`)
  }

  return (
    <div className="flex w-full h-[123px] bg-[#F6F7F5] rounded-[10px]">
      <img
        src={mainImage}
        alt="상품 이미지"
        className="w-[86px] h-[86px] m-auto"
      />
      <div className="flex flex-col mt-[15px] ml-[13px]">
        <h2 className="font-semibold text-16">{name}</h2>
        <p className="text-12 text-[#666666]">{startDate}</p>
        <p className="text-12 text-[#666666]">{price}원</p>
      </div>
      <button
        onClick={handleClick}
        className="w-[90px] h-[26px] mt-auto ml-auto rounded-[16px] text-10 mr-[14px] mb-[16px] bg-black text-white"
      >
        참여하기
      </button>
    </div>
  )
}
