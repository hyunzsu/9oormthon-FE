import axiosInstance from './axiosInstance'

export const fetchData = async () => {
  try {
    const response = await axiosInstance.get('/test')
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export const postData = async data => {
  try {
    const response = await axiosInstance.post('/test', data)
    return response.data
  } catch (error) {
    console.error('Error posting data:', error)
    throw error
  }
}

// 프로그램 전체 정보 반환
export const getPrograms = async () => {
  try {
    const response = await axiosInstance.get('/programs')
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

// 프로그램 상세 정보 반환
export const getProgramId = async () => {
  try {
    const response = await axiosInstance.get('/programs/{program-id}')
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

// 프로그램 예약
export const postReservation = async data => {
  try {
    const response = await axiosInstance.post('/reservation', data)
    return response.data
  } catch (error) {
    console.error('Error posting data:', error)
    throw error
  }
}
