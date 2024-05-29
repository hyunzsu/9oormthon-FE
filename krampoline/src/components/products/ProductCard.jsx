import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductCard({ program }) {
  const { id, name, mainImage, price, startDate, userName } = program
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/products/${id}`)
  }

  return (
    <div className="bg-white h-[139px] flex w-full relative border-black border">
      <div className="w-[371px] flex h-[123px] bg-[#FCF5DA] absolute left-[8px] top-[8px] border-black border">
        <img
          src={mainImage}
          alt="상품 이미지"
          className="w-[86px] h-[86px] my-auto mx-[20px]"
        />
        <div className="flex flex-col mt-[15px] font-extrabold">
          <h2 className="font-semibold text-16">{name}</h2>
          <p>
            <span className="font-regular text-15">with</span>
            <span className="ml-[5px]">{userName}</span>
          </p>
          <p className="text-12 font-medium text-[#666666]">{startDate}</p>
        </div>
        <button
          onClick={handleClick}
          className="w-[90px] h-[26px] mt-auto ml-auto text-10 mr-[15px] mb-[15px] bg-black text-white absolute bottom-0 right-0"
        >
          참여하기
        </button>
      </div>
    </div>
  )
}
