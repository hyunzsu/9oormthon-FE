import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import {
  InputText,
  InputPhoneNumber,
  InputEmail,
} from '../components/form/Input'
import { useInput } from '../hooks/useInput'
import parseDate from '../utils/parseDate'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { postReservation } from '../api/api'

export default function Reservation() {
  const [guestName, handleNameChange] = useInput('')
  const [guestPhone, handleContactChange] = useInput('')
  const [guestEmail, handleEmailChange] = useInput('')
  const [requestText, handleEtcChange] = useInput('')

  const { id } = useParams()
  const navigate = useNavigate()

  const handleSubmit = async () => {
    const formData = {
      id,
      guestName,
      guestPhone,
      guestEmail,
      requestText,
    }
    // 서버에 데이터 전송하는 로직 추가
    console.log('서버에 전송할 데이터:', formData)

    // 응답이 성공적일 경우 로컬스토리지에 데이터 저장
    localStorage.setItem('reservationData', JSON.stringify(formData))
    navigate('/usersuccess') // 성공 페이지로 라우팅
  }

  // const handleSubmit = async () => {
  //   const reservationData = {
  //     programId: parseInt(id),
  //     guestName,
  //     guestPhone,
  //     guestEmail,
  //     requestText,
  //   }

  //   try {
  //     const response = await postReservation(reservationData)
  //     console.log('서버 응답:', response)

  //     if (response.status === 'success') {
  //       // 응답이 성공적일 경우 로컬스토리지에 데이터 저장
  //       localStorage.setItem('reservationData', JSON.stringify(reservationData))
  //       navigate('/usersuccess') // 성공 페이지로 라우팅
  //     } else {
  //       // 응답이 실패한 경우 에러 처리
  //       console.error('예약 실패:', response.message)
  //     }
  //   } catch (error) {
  //     console.error('예약 중 오류 발생:', error)
  //   }
  // }

  return (
    <div className="mb-[80px] px-[20px]">
      <h1 className="font-bold text-24 pt-[58px] pb-[43px]">
        예약자 정보를 입력해주세요.
      </h1>
      <div className="flex flex-col gap-[26px]">
        <InputText
          title="예약자"
          placeholder="현지수"
          value={guestName}
          onChange={handleNameChange}
        />
        <InputPhoneNumber value={guestPhone} onChange={handleContactChange} />
        <InputEmail value={guestEmail} onChange={handleEmailChange} />
        <label htmlFor="text">
          <p>요청사항</p>
          <textarea
            name="etc"
            placeholder="요청사항"
            value={requestText}
            onChange={handleEtcChange}
            className="border border-gray-300 rounded p-2 resize-none h-24 mt-[14px] w-full"
          ></textarea>
        </label>
      </div>
      <Button
        type="button"
        onClick={handleSubmit}
        text="예약 완료하기"
        status={
          !guestName || !guestPhone || !guestEmail ? 'disabled' : undefined
        }
      />
    </div>
  )
}
