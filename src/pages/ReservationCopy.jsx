import React from 'react'

export default function ReservationCopy() {
  return (
    <section>
      <BackButton />
      <h1 className="font-bold pt-5 pl-5">예약자 정보를 입력해주세요.</h1>
      <form className="flex flex-col space-y-4 p-5" onSubmit={handleSubmit}>
        <InputText
          title="예약자명"
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
        <Button
          type="button"
          text="등록 완료하기"
          status={!name || !contact || !email || !etc ? 'disabled' : undefined}
        />
      </form>
    </section>
  )
}
