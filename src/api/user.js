import axios from '@/libs/api.request'

export const login = ({ userName, password }) => {
  const data = {
    userName,
    password
  }
  return axios.request({
    url: '/api/v1/login',
    data,
    method: 'post'
  })
}

export const getUserInfo = () => {
  return axios.request({
    url: '/api/v1/userInfo',
    method: 'get'
  })
}

export const logout = () => {
  return axios.request({
    url: '/api/v1/logout',
    method: 'post'
  })
}
