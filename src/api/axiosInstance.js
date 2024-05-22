import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_SERVER_URL, // API의 기본 URL
  timeout: 10000, // 요청 타임아웃 시간 설정 (밀리초)
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance
