import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://k8a8dc958104ca.user-app.krampoline.com/api', // API의 기본 URL
  timeout: 10000, // 요청 타임아웃 시간 설정 (밀리초)
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance
