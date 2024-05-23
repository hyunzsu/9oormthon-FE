import { useState } from 'react'
import DaumPostcode from 'react-daum-postcode'

export default function Location({ address, setAddress }) {
  const [openModal, setOpenModal] = useState(false)
  const handleComplete = data => {
    setAddress(data.address)
    setOpenModal(false)
  }
  return (
    <>
      <label onClick={() => setOpenModal(true)} className="relative">
        <p>빈 공간 위치</p>
        <input
          className="border border-gray-300 rounded p-2 w-full mt-[6px]"
          type="text"
          value={address}
          readOnly
        />
        <img
          src="/src/assets/i-search.svg"
          className="absolute right-[4px] w-[24px] h-[24px] bottom-[9px]"
        />
      </label>
      {openModal && (
        <div className="z-100 inset-0 fixed flex justify-center items-center bg-black bg-opacity-40">
          <div className="bg-white flex flex-col justify-center items-end">
            <button type="button" onClick={() => setOpenModal(false)}>
              X
            </button>
            <DaumPostcode
              autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
              onComplete={handleComplete} // 값을 선택할 경우 실행되는 이벤트
            />
          </div>
        </div>
      )}
    </>
  )
}
