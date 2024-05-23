import React, { useEffect, useState } from 'react'

export default function OwnerSuccess() {
  const [registerData, setRegisterData] = useState('')
  useEffect(() => {
    const data = localStorage.getItem('registerData')
    if (data) {
      setRegisterData(JSON.parse(data))
    }
  }, [])
  return (
    <section className="flex flex-col justify-center items-center p-6 w-full h-screen">
      <div className="text-center">
        <img
          src="/src/assets/react.svg"
          alt="Success"
          className="w-24 h-24 mb-4 mx-auto"
        />
        <h1 className="text-xl font-bold mb-2">등록이 완료되었습니다!</h1>
        <p className="text-gray-600">메일로 등록 정보가 발송되었습니다.</p>
      </div>
      <span className="block w-[242px] h-[44px] leading-[44px]">
        {registerData}
      </span>
    </section>
  )
}
