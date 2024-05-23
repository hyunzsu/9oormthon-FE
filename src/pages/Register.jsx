import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import TextArea from '../components/form/TextArea'
import { InputEmail, InputText } from '../components/form/Input'
import { categories } from '../constants/categories'
import DatePicker from 'react-datepicker'
import { addMonths } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'
import '../styles/Calendar.css' // 커스텀 CSS 파일 import
import parseDate from '../utils/parseDate'
import { useInput } from '../hooks/useInput'
import InputImage from '../components/form/InputImage'
import Location from '../components/Location'
import { useNavigate } from 'react-router-dom'

const Step1 = ({ onNext }) => {
  const categoryEntries = Object.entries(categories)
  const [category, setCategory] = useState('')
  const handleCategoryChange = e => {
    setCategory(e.target.value)
  }
  const handleNext = () => {
    onNext({ category })
  }
  return (
    <section className="flex flex-col">
      <Title
        mainText={'어떤 프로그램인가요?'}
        subText={'프로그램의 성격을 알려주세요.'}
      />
      <div className="grid grid-cols-2 gap-[16px] mb-[40px]">
        {categoryEntries.map(([key, item]) => (
          <label
            key={key}
            className={`relative drop-shadow-md flex flex-col gap-[12px] justify-center items-center h-[158px] bg-[#F6F6F6] rounded-lg ${category === key ? 'border-[1px] border-black' : ''}`}
          >
            <input
              type="radio"
              name="category"
              value={key}
              checked={category === key}
              onChange={handleCategoryChange}
              className="a11yHidden"
            />

            {category === key && (
              <img
                src="/src/assets/i-select.svg"
                className="absolute top-[10px] right-[10px]"
              />
            )}
            <img alt={item.name} src={item.img} className="w-[84px] h-[84px]" />
            <span className="text-[14px]">{item.name}</span>
          </label>
        ))}
      </div>
      {category && <Button type="button" onClick={handleNext} text="다음" />}
    </section>
  )
}

const Step2 = ({ onNext }) => {
  const [start, setStart] = useState(null)
  const [end, setEnd] = useState(null)
  const [time, setTime] = useInput('')
  const [spendTime, setSpendTime] = useInput('')
  const onDateChange = dates => {
    const [startDate, endDate] = dates
    setStart(startDate)
    setEnd(endDate)
  }
  const handleNext = () => {
    const startDate = `${parseDate(start)} ${time}`
    onNext({ startDate, spendTime })
  }
  return (
    <section className="flex flex-col relative">
      <Title mainText={'프로그램의 시간과 날짜를\n알려주세요.'} />
      <DatePicker
        selected={start}
        onChange={onDateChange}
        minDate={new Date()}
        maxDate={addMonths(new Date(), 3)}
        selectsRange // 날짜 범위 선택 기능 활성화
        inline // 캘린더를 인라인으로 표시
        calendarClassName="custom-calendar" // 커스텀 CSS 클래스 추가
        renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
          <div className="custom-header">
            <button onClick={decreaseMonth}>
              <img src="/src/assets/i-arrow.svg" />
            </button>
            <span className="react-datepicker__current-month">
              {monthDate.toLocaleString('ko-KR', {
                year: 'numeric',
                month: 'long',
              })}
            </span>
            <button onClick={increaseMonth}>
              <img src="/src/assets/i-arrow.svg" className="rotate-180" />
            </button>
          </div>
        )}
        formatWeekDay={nameOfDay => nameOfDay.substr(0, 3).toUpperCase()}
      />
      <div className="flex w-full items-center mt-[30px]">
        <InputText
          title="시작 시간을 입력해주세요."
          placeholder="00:00"
          value={time}
          onChange={setTime}
        />
        <InputText
          title="진행 시간을 입력해주세요."
          placeholder="1"
          value={spendTime}
          onChange={setSpendTime}
        />
      </div>
      {!start || !time || (
        <Button type="button" onClick={handleNext} text="다음" />
      )}
    </section>
  )
}

const Step3 = ({ onSubmit }) => {
  const [programName, handleProgramName] = useInput('')
  const [description, setDescription] = useInput('')
  const [hostDescription, setHostDescription] = useInput('')
  const [price, setPrice] = useInput('')
  const [chatLink, setChatLink] = useInput('')
  const [roadNameAddress, setRoadNameAddress] = useState('')
  const [images, setImages] = useState([])
  const [hostEmail, handleEmail] = useInput('')
  const handleSubmit = () => {
    onSubmit({
      programName,
      description,
      hostDescription,
      price,
      chatLink,
      roadNameAddress,
      images,
      hostEmail,
    })
  }
  return (
    <section className="flex flex-col">
      <Title mainText={'프로그램 정보를 입력해주세요.'} />
      <InputText
        title={'프로그램 명을 입력해주세요.'}
        value={programName}
        onChange={handleProgramName}
      />
      <TextArea
        title={'프로그램을 소개해주세요.'}
        value={description}
        onChange={setDescription}
      />
      <TextArea
        title={'나를 소개해주세요!'}
        value={hostDescription}
        onChange={setHostDescription}
      />
      <InputImage photos={images} setPhotos={setImages} />
      <InputText title={'가격'} value={price} onChange={setPrice} />
      <Location address={roadNameAddress} setAddress={setRoadNameAddress} />
      <InputEmail value={hostEmail} onChange={handleEmail} />
      <InputText
        title={'오픈 채팅창 주소가 있나요? (선택)'}
        value={chatLink}
        onChange={setChatLink}
      />
      <button
        type="button"
        onClick={handleSubmit}
        className="bg-black font-semibold text-white text-[16px] rounded-[30px] w-[calc(100%-40px)] max-w-[350px] h-[50px] m-[20px]"
      >
        등록 완료하기
      </button>
    </section>
  )
}

export default function Register() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})
  const handleNext = data => {
    setFormData(prevData => {
      const newData = { ...prevData, ...data }
      return newData
    })
    setStep(step + 1)
  }
  const handleSubmit = data => {
    setFormData(prevData => {
      const newData = { ...prevData, ...data }
      return newData
    })
    console.log(formData)
    navigate('/ownersuccess')
  }
  useEffect(() => {
    console.log('폼 업뎃!', formData)
  }, [formData])

  return (
    <main className="px-[20px]">
      {step === 1 && <Step1 onNext={handleNext} />}
      {step === 2 && <Step2 onNext={handleNext} />}
      {step === 3 && <Step3 onSubmit={handleSubmit} />}
    </main>
  )
}
