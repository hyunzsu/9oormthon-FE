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

export const fetchSpaces = async () => {
  try {
    const response = await axiosInstance.get('/spaces')
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
