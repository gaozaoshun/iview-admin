import { getRouters } from '@/api/routers'
import Vue from 'vue'
import { endRoutes } from '@/router/routers'
import { constantRoutes } from '../../router/routers'

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
            console.log('数据库路由表', res.data)
            let routeList = JSON.parse(JSON.stringify(res.data))
            routeList.map(item => {
              if (item.component) {
                item.component = _import(item.component)
                if (item.children) {
                  item.children.map(item => {
                    if (item.component) {
                      item.component = _import(item.component)
                    }
                    return item
                  })
                }
                return item
              }
            })

            console.log('Router路由表', routeList)
            // 保存一份完整的路由表到vuex
            let allRouteList = JSON.parse(JSON.stringify(routeList))
            allRouteList.concat(endRoutes)
            allRouteList = constantRoutes.concat(allRouteList)
            commit('setRoutes', allRouteList)
            resolve(routeList)
          } else {
            Vue.prototype.$Message.error(res.msg)
          }
        }).catch(err => {
          Vue.prototype.$Message.error(err)
        })
      })
    }
  }
}
