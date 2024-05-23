import React, { useEffect, useState } from 'react'

export default function UserSuccess() {
  const [reservationData, setReservationData] = useState(null)

  useEffect(() => {
    const data = localStorage.getItem('reservationData')
    if (data) {
      setReservationData(JSON.parse(data))
    }
  }, [])

  if (!reservationData) return <div>Loading...</div>

  return (
    <section className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="text-center">
        <img
          src="/src/assets/react.svg"
          alt="Success"
          className="w-24 h-24 mb-4 mx-auto"
        />
        <h1 className="text-xl font-bold mb-2">예약이 완료되었습니다!</h1>
        <p className="text-gray-600">메일로 예약 정보가 발송되었습니다.</p>
      </div>
      <div className="bg-green-100 p-4 rounded-lg w-full mt-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          예약 정보 확인
        </h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">날짜</span>
            <span className="text-gray-600">
              {reservationData.start} ~ {reservationData.end}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">연락처</span>
            <span className="text-gray-600">{reservationData.contact}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">이메일</span>
            <span className="text-gray-600">{reservationData.email}</span>
          </div>
          <div className="flex justify-between gap-7">
            <span className="font-medium text-gray-700 flex-shrink-0">
              요청사항
            </span>
            <span className="text-gray-600">{reservationData.etc}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
