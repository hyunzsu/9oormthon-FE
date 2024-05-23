import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { addDays } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'
import '../styles/Reservation.css' // 커스텀 CSS 파일 import
import BackButton from '../components/BackButton'
import Button from '../components/Button'
import {
  InputText,
  InputPhoneNumber,
  InputEmail,
} from '../components/form/Input'
import { useInput } from '../hooks/useInput'
import parseDate from '../utils/parseDate'
import { useNavigate } from 'react-router-dom'

export default function Reservation() {
  const [name, handleNameChange] = useInput('')
  const [contact, handleContactChange] = useInput('')
  const [email, handleEmailChange] = useInput('')
  const [etc, handleEtcChange] = useInput('')

  const navigate = useNavigate()

  // const handleSubmit = () => {
  //   // 서버에 데이터 전송하는 로직 추가
  //   console.log('서버에 전송할 데이터:', formData)

  //   // 응답이 성공적일 경우 로컬스토리지에 데이터 저장
  //   localStorage.setItem('reservationData', JSON.stringify(formData))
  //   navigate('/usersuccess') // 성공 페이지로 라우팅
  // }

  return (
    <div>
      <h1 className="font-bold pt-5 pl-5">예약자 정보를 입력해주세요.</h1>
      <div className="flex flex-col space-y-4 p-5">
        <InputText
          title="예약자"
          placeholder="현지수"
          value={name}
          onChange={handleNameChange}
        />
        <InputPhoneNumber value={contact} onChange={handleContactChange} />
        <InputEmail value={email} onChange={handleEmailChange} />
        <label htmlFor="text">
          <p>요청사항</p>
          <textarea
            name="etc"
            placeholder="요청사항"
            value={etc}
            onChange={handleEtcChange}
            className="border border-gray-300 rounded p-2 resize-none h-24"
          ></textarea>
        </label>
      </div>
      <Button
        type="button"
        // onClick={handleSubmit}
        text="제출"
        status={!name || !contact || !email ? 'disabled' : undefined}
      />
    </div>
  )
}
