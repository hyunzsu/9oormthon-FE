import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import { fetchChat, getProgramId } from '../api/api'

export default function UserSuccess() {
  const [reservationData, setReservationData] = useState(null)

  useEffect(() => {
    const fetchChatData = async id => {
      try {
        const fetchData = await fetchChat({ id })
        console.log(fetchData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    const data = localStorage.getItem('reservationData')
    if (data) {
      const parsedData = JSON.parse(data)
      setReservationData(parsedData)
      if (parsedData.id) {
        fetchChatData(parsedData.id)
      }
    }
  }, [])

  if (!reservationData) return <div>Loading...</div>

  return (
    <section className="flex flex-col items-center p-6 rounded-lg max-w-md mx-auto">
      <div className="text-center">
        <img
          src="/src/assets/i-usersuccess.svg"
          alt="Success"
          className="mx-auto mt-[90px] mb-[37px]"
        />
        <h1 className="text-22 font-bold mb-2">예약이 완료되었습니다!</h1>
        <p className="text-gray-600 text-14">
          메일로 예약 정보가 발송되었습니다.
        </p>
      </div>
      <div className="bg-[#F4F4F4] p-[24px] rounded-lg w-full mt-[28px] mb-[80px]">
        <h2 className="text-16 font-semibold mb-4 text-gray-800">
          예약 정보 확인
        </h2>
        <div className="space-y-5">
          <div className="flex justify-between">
            <span className="text-gray-700">예약자명</span>
            <span className="text-gray-600">{reservationData.guestName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">날짜 및 시간</span>
            <span className="text-gray-600">
              {/* {reservationData.start} ~ {reservationData.end} */}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">이메일</span>
            <span className="text-gray-600">{reservationData.guestEmail}</span>
          </div>
        </div>
      </div>
      <Button text="참여자 오픈채팅방 참여하기" />
    </section>
  )
}
