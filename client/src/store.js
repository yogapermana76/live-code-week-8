import Vue from 'vue'
import Vuex from 'vuex'
import backend from '@/api/backend.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: '',
    password: '',
    isLogin: false,
    date: ''
  },
  mutations: {
    successLogin(state) {
      state.isLogin = true
    },
    successLogout(state) {
      state.isLogin = false
    }
  },
  actions: {
    loginAction(context, data) {
      backend
        .post('/login', {
          email: data.email,
          password: data.password
        })
        .then(({ data }) => {
          console.log('success login')
          const { token, email, id } = data
          localStorage.setItem('token', token)
          localStorage.setItem('email', email)
          localStorage.setItem('id', id)
          context.commit('successLogin')
        })
        .catch(err => {
          console.log(err)
        })
    },
    addApodAction(context, data) {
      backend.post('/apods', {
        date: data.date
      }, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({ data }) => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
})
