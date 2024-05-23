import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { addDays } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'
import '../styles/Reservation.css' // 커스텀 CSS 파일 import

export default function Reservation() {
  const [startDate, setStartDate] = useState(new Date()) // 시작일
  const [endDate, setEndDate] = useState(null) // 종료일

  const onChange = dates => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  return (
    <div>
      <h1>Reservation Calendar 📅</h1>
      <div className="reservation-container">
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]} // 특정 날짜 제외
          selectsRange // 날짜 범위 선택 기능 활성화
          inline // 캘린더를 인라인으로 표시
          calendarClassName="custom-calendar" // 커스텀 CSS 클래스 추가
          renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
            <div className="custom-header">
              <button onClick={decreaseMonth}>{'<'}</button>
              <span className="react-datepicker__current-month">
                {monthDate.toLocaleString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                })}
              </span>
              <button onClick={increaseMonth}>{'>'}</button>
            </div>
          )}
          formatWeekDay={nameOfDay => nameOfDay.substr(0, 3).toUpperCase()}
        />
      </div>
    </div>
  )
}
