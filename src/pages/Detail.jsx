import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import ScrollContainer from 'react-indiana-drag-scroll'

export default function Detail() {
  const { id } = useParams()

  return (
    <section>
      <h1>상세 페이지 {id}</h1>
      <img src="/src/assets/react.svg" alt="상품 이미지" className="w-full" />
      <div className="border-2 border-black flex flex-col gap-4 rounded-xl">
        <div>
          <h2 className="font-bold">플레이스 캠프 제주</h2>
          <Link>제주 서귀포시 성산읍 독룡암 20</Link>
        </div>
        <div>
          <h3 className="font-bold">공간 소개</h3>
          <p>
            플레이스에 호텔이라는 장르명이 입력된 이름이지, 명칭이다. 호텔에서도
            침실 별채 문지르지 않기를 권하지 않으니까요. 오픈한 당신 자신명 수
            있는 굳, 플레이스는 놀이, 영험, 침묵 그리고 살림으로 지어진
            캠프입니다.
          </p>
        </div>
        <div>
          <h3 className="font-bold">대표 키워드</h3>
          <div className="flex gap-2">
            <button className="border-2 border-gray-400 rounded-xl w-[65px] h-[20px]">
              조용한
            </button>
            <button className="border-2 border-gray-400 rounded-xl w-[65px] h-[20px]">
              조용한
            </button>
            <button className="border-2 border-gray-400 rounded-xl w-[65px] h-[20px]">
              조용한
            </button>
          </div>
        </div>
        <ScrollContainer>
          <div className="whitespace-nowrap">
            <img
              src="/src/assets/react.svg"
              alt="숙소 사진 2"
              className="w-[126px] inline-block"
            />
            <img
              src="/src/assets/react.svg"
              alt="숙소 사진 3"
              className="w-[126px] inline-block"
            />
            <img
              src="/src/assets/react.svg"
              alt="숙소 사진 4"
              className="w-[126px] inline-block"
            />
            <img
              src="/src/assets/react.svg"
              alt="숙소 사진 4"
              className="w-[126px] inline-block"
            />
            <img
              src="/src/assets/react.svg"
              alt="숙소 사진 4"
              className="w-[126px] inline-block"
            />
          </div>
        </ScrollContainer>
      </div>
      <Button type="button" text="예약하기" />
    </section>
  )
}
