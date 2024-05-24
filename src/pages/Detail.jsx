import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import ScrollContainer from 'react-indiana-drag-scroll'
import { useNavigate } from 'react-router-dom'
import { getProgramId } from '../api/api'

export default function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [program, setProgram] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProgramId(id)
        setProgram(data)
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [id])

  const handleClick = () => {
    navigate(`/products/${id}/reservation`)
  }

  return (
    <section className="h-screen overflow-auto">
      {program.images && (
        <img src={program.images[0].url} alt="상품 이미지" className="w-full" />
      )}
      <div className="border-2 border-black flex flex-col gap-[15px] rounded-3xl p-[25px]">
        <div>
          <h2 className="font-bold mb-[15px] text-20">{program.name}</h2>
          <div className="flex gap-[9px]">
            <img src="/src/assets/i-location.svg" alt="" />
            <Link>{program.roadNameAddress}</Link>
          </div>
          <div className="flex gap-[9px] mt-[10px]">
            <img src="/src/assets/i-time.svg" alt="" />
            <div>{program.startDate}시</div>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-[6px]">프로그램 소개</h3>
          <p>{program.description}</p>
        </div>
        <div>
          <h3 className="font-bold mb-[6px]">주최자 소개</h3>
          <p>{program.hostDescription}</p>
        </div>
        <ScrollContainer>
          {/* <div className="whitespace-nowrap mt-[22px] mb-[70px]">
            <img
              src="/src/assets/i-activity.svg"
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
          </div> */}
          {/* <div className="whitespace-nowrap mt-[22px] mb-[70px]">
            {program.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={`프로그램 사진 ${index + 1}`}
                className="w-[126px] inline-block"
              />
            ))}
          </div> */}
        </ScrollContainer>
      </div>
      <div className="w-full h-[90px] fixed bottom-0 bg-white max-w-[430px] flex items-center justify-between px-[26px]">
        <div>
          <span className="font-bold text-20">{program.price}원</span>
          <span> / 1인</span>
        </div>
        <button
          onClick={handleClick}
          className="w-[190px] h-[50px] bg-black rounded-3xl text-white cursor-pointer"
        >
          예약하기
        </button>
      </div>
    </section>
  )
}
