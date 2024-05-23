import React, { useState } from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import { categories } from '../constants/categories'

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
    <section>
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
  const [keyword, setKeyword] = useState('')
  const handleNext = () => {
    onNext({ keyword })
  }
  return (
    <section>
      <Title
        mainText={'공간에 대해 알려주세요!'}
        subText={'공간을 빠르게 파악할 수 있어요. *중복선택가능'}
      />
      <div>
        <select value={keyword} onChange={e => setKeyword(e.target.value)}>
          <option value="카페">카페</option>
          <option value="숙박시설">숙박시설</option>
        </select>
      </div>
      <Button type="button" onClick={handleNext} text="다음" />
    </section>
  )
}

// const Step3 = ({ onNext }) => {
//   const [date, setDate] = useState('')
//   const handleNext = () => {
//     onNext({ date })
//   }
//   return (
//     <div>
//       <h2>일멍님! 공간이 비어있는 기간을 알려주세요.</h2>
//       <h3>대여 가능한 범위를 설정해주세요.</h3>
//       <input type="date" value={date} onChange={e => setDate(e.target.value)} />
//       <button onClick={handleNext}>다음</button>
//     </div>
//   )
// }

export default function Register() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})

  const handleNext = data => {
    setFormData({ ...formData, ...data })
    setStep(step + 1)
    console.log(formData)
  }

  const handleSubmit = () => {
    console.log(formData)
  }

  return (
    <div>
      {step === 1 && <Step1 onNext={handleNext} />}
      {step === 2 && <Step2 onNext={handleNext} />}
      {step > 2 && <button onClick={handleSubmit}>제출</button>}
    </div>
  )
}
