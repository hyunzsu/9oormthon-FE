import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import { categories } from '../constants/categories'
import { keywords } from '../constants/keywords'
import DatePicker from 'react-datepicker'
import { addDays, addMonths } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'

// Step1 카테고리
// Step2 키워드
// Step3 기간
// Step4 상세 정보

const Step1 = ({ onNext }) => {
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
        mainText={'어떤 목적의 공간인가요?'}
        subText={'게스트가 용도에 맞게 선택할 수 있어요'}
      />
      <div className="grid grid-cols-2">
        {categories.map(item => (
          <label key={item}>
            <input
              type="radio"
              name="category"
              value={item}
              checked={category === item}
              onChange={handleCategoryChange}
            />
            {item}
            <img
              alt={item}
              src="https://cdn.hankyung.com/photo/202209/01.31363897.1.jpg"
              width="100%"
              height="100%"
            />
          </label>
        ))}
      </div>
      <Button type="button" onClick={handleNext} text="다음" />
    </section>
  )
}

const Step2 = ({ onNext }) => {
  const [keywordList, setKeywordList] = useState(
    keywords.map(keyword => ({
      keyword,
      checked: false,
    })),
  )
  const handleCheck = e => {
    const value = e.target.value
    setKeywordList(prev =>
      prev.map(item =>
        item.keyword === value ? { ...item, checked: e.target.checked } : item,
      ),
    )
    if (e.target.checked) {
      setKeywordList(prev => [...prev, value])
    }
  }
  const handleNext = () => {
    const selectedKeywords = keywordList
      .filter(item => item.checked)
      .map(item => item.keyword)
    onNext({ keywords: selectedKeywords })
  }
  return (
    <section className="flex flex-col">
      <Title
        mainText={'공간에 대해 알려주세요!'}
        subText={'공간을 빠르게 파악할 수 있어요. *중복선택가능'}
      />
      <div className="flex flex-wrap">
        {keywords.map(item => (
          <label key={item}>
            <input
              type="checkbox"
              name="keyword"
              value={item}
              checked={keywordList.includes(item)}
              onChange={handleCheck}
              className="a11yHidden peer"
            />
            <div className="p-2 bg-gray-200 m-2 rounded peer-checked:bg-blue-500 peer-checked:text-white">
              {item}
            </div>
          </label>
        ))}
      </div>
      <Button type="button" onClick={handleNext} text="다음" />
    </section>
  )
}

const Step3 = ({ onNext }) => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const onChange = dates => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }
  const handleNext = () => {
    onNext({ startDate, endDate })
  }
  return (
    <section className="flex flex-col">
      <Title
        mainText={'일멍님! 공간이 비어있는 기간을 알려주세요.'}
        subText={'대여 가능한 범위를 설정해주세요.'}
      />
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        minDate={new Date()}
        maxDate={addMonths(new Date(), 5)}
        excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
        selectsRange
        inline
      />
      <Button type="button" onClick={handleNext} text="다음" />
    </section>
  )
}

export default function Register() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})
  const handleNext = data => {
    setFormData(prevData => {
      const newData = { ...prevData, ...data }
      return newData
    })
    setStep(step + 1)
  }
  const handleSubmit = () => {
    console.log(formData)
  }
  useEffect(() => {
    console.log('폼 업뎃!', formData)
  }, [formData])

  return (
    <div>
      {step === 1 && <Step1 onNext={handleNext} />}
      {step === 2 && <Step2 onNext={handleNext} />}
      {step === 3 && <Step3 onNext={handleNext} />}
      {step > 3 && <button onClick={handleSubmit}>제출</button>}
    </div>
  )
}
