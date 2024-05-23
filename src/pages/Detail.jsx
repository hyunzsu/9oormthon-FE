import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import ScrollContainer from 'react-indiana-drag-scroll'
import { useNavigate } from 'react-router-dom'

export default function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/products/${id}/reservation`)
  }

  return (
    <section>
      <h1>상세 페이지 {id}</h1>
      <img src="/src/assets/react.svg" alt="상품 이미지" className="w-full" />
      <div className="border-2 border-black flex flex-col gap-[15px] rounded-3xl p-[25px]">
        <div>
          <h2 className="font-bold mb-[15px]">플레이스 캠프 제주</h2>
          <Link>제주 서귀포시 성산읍 독룡암 20</Link>
          <div className="mt-[12px]">24일(금) 오후 6시</div>
        </div>
        <div>
          <h3 className="font-bold mb-[6px]">공간 소개</h3>
          <p>
            플레이스에 호텔이라는 적막한 이름은 어울리지 않습니다. 플레이스의 그
            어디에서도 점잔 빼며 또각또각 걷기를 권하지 않으니까요. 온전히 당신
            자신일 수 있는 곳. 플레이스는 놀이, 열정, 낭만 그리고 설렘으로
            지어짐
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-[6px]">주최자 소개</h3>
          <p>저희 프로그램에 참여해서 청년들의 열정을 느껴보세요!</p>
        </div>
        <ScrollContainer>
          <div className="whitespace-nowrap mt-[22px]">
            <img
              src="/src/assets/react.svg"
              alt="프로그램 사진 2"
              className="w-[126px] inline-block"
            />
            <img
              src="/src/assets/react.svg"
              alt="프로그램 사진 3"
              className="w-[126px] inline-block"
            />
            <img
              src="/src/assets/react.svg"
              alt="프로그램 사진 4"
              className="w-[126px] inline-block"
            />
            <img
              src="/src/assets/react.svg"
              alt="프로그램 사진 4"
              className="w-[126px] inline-block"
            />
            <img
              src="/src/assets/react.svg"
              alt="프로그램 사진 4"
              className="w-[126px] inline-block"
            />
          </div>
        </ScrollContainer>
      </div>
      {/* <Button type="button" text="예약하기" onClick={handleClick} /> */}
      <div className="w-full h-[90px]">
        <span>10,000원 / 1인</span>
        <button className="w-[190px] h-[50px] bg-primary rounded-3xl text-white">
          예약하기
        </button>
      </div>
    </section>
  )
}
