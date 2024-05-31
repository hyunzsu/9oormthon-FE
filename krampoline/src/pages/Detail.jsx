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

  const defaultImage = 'https://via.placeholder.com/1000x500.png?text=No+Image'

  return (
    <section className="h-screen overflow-auto">
      {program.images && program.images.length > 0 ? (
        <img
          src={program.images[0].url}
          alt="상품 이미지"
          className="w-full h-[351px] object-cover"
        />
      ) : (
        <img
          src={defaultImage}
          alt="기본 이미지"
          className="w-full h-[351px] object-cover"
        />
      )}
      <div className="flex flex-col gap-[15px] rounded-3xl p-[25px] absolute mt-[-30px] z-30 bg-white w-full">
        <div>
          <h2 className="font-extrabold text-20">{program.programName}</h2>
          <p className="mb-[15px]">
            <span className="font-regular text-15">with</span>
            <span className="ml-[5px] font-extrabold text-16">
              {program.userName}
            </span>
          </p>
          <div className="flex gap-[9px]">
            <img
              src="https://raw.githubusercontent.com/sryung1225/olleh-client/7170b292cc8931a4c5a95fcce204e74d96c9a602/src/assets/i-location.svg"
              alt=""
            />
            <Link>{program.roadNameAddress}</Link>
          </div>
          <div className="flex gap-[9px] mt-[10px]">
            <img
              src="https://raw.githubusercontent.com/sryung1225/olleh-client/7170b292cc8931a4c5a95fcce204e74d96c9a602/src/assets/i-time.svg"
              alt=""
            />
            <div>{program.startDate}</div>
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
          <div className="whitespace-nowrap mt-[22px] mb-[70px]">
            {program.images &&
              program.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={`프로그램 사진 ${index + 1}`}
                  className="w-[136px] h-[168px] inline-block rounded-[10px] mr-[10px]"
                />
              ))}
          </div>
        </ScrollContainer>
      </div>
      <div className="w-full h-[90px] fixed bottom-0 bg-white max-w-[430px] flex items-center justify-between px-[26px] z-50">
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
