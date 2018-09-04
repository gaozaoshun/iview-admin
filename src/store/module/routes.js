import { getRouters } from '@/api/routers'

export default {
  state: {
    routes: []
  },
  mutations: {
    setRoutes (state, routes) {
      state.routes = routes
    }
  },
  actions: {
    // 获取路由列表
    handleGetRouters ({ commit }) {
      return new Promise((resolve, reject) => {
        getRouters().then(res => {
          if (res.code === 200) {
            // 保存一份到vuex
            commit('setRoutes', res.data)
          }
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
