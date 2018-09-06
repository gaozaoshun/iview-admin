import { getRouters } from '@/api/routers'
import Vue from 'vue'

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
            // 路由数据处理
            let routeList = res.data
            routeList.map(item)
            // 保存一份到vuex
            commit('setRoutes', res.data)
            resolve(res.data)
          } else {
            Vue.prototype.$Message.error(res.msg)
          }
        }).catch(err => {
          Vue.prototype.$Message.error('请检查网络')
        })
      })
    }
  }
}
