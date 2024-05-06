import { createStore, Store, storeKey } from 'vuex'

export default createStore({
  state: {
    list: [
      {
        title: 'EAT',
        complete: false
      },
      {
        title: 'SLEEP',
        complete: false
      },
      {
        title: 'LEARN',
        complete: false
      }
    ]
  },
  getters: {
  },
  mutations: {
    // 同步修改state，都是方法
    addTodo(state, payload) {
      state.list.push(payload)
    },
    delTodo(state, payload) {
      state.list.splice(payload, 1)
    },
    clear(state, payload) {
      state.list = payload
    }
  },
  actions: {
    // 异步提交mutation
  },
  modules: {
    // 模块化
  }
})
