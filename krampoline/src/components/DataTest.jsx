import { useEffect, useState } from 'react'
import { fetchData, postData } from '../api/api'

export default function DataTest() {
  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData()
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    getData()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    const newData = { name, desc }
    try {
      const result = await postData(newData)
      setData(prevData => [...prevData, result])
      setName('')
      setDesc('')
    } catch (error) {
      console.error('Error posting data:', error)
    }
  }

  return (
    <div>
      <h2>axios test</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.name}: {item.desc}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input
              type="text"
              value={desc}
              onChange={e => setDesc(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">데이터 추가하기</button>
      </form>
    </div>
  )
}
