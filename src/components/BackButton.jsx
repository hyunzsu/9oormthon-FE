import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BackButton() {
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }

  return <button onClick={handleGoBack}>뒤로 가기</button>
}
