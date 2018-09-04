import axios from '@/libs/api.request'

export const getRouters = () => {
  return axios.request({
    url: '/api/v1/routes',
    method: 'get'
  })
}
