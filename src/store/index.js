import axios from 'axios'
import { createStore } from 'vuex'
import router from '../router/index.js'

export default createStore({
  state: {
    user : false,
    token : localStorage.getItem('token'),
    errorMsg : '',
    errorStatus : false,
    loading : false,
    isButtonDisabled : false 
  },
  mutations: {
    logout(state){
      state.token = '',
      state.user = false
      localStorage.removeItem('token')
    },
    userLogin(state, token){
      state.user = true
      // state.token = token
      console.log(token);
      localStorage.setItem('token', token['token'])

    },
    checkError(state, status){
      state.errorStatus = status
      setTimeout(()=>{
        state.errorStatus = false
      },3000)
    },
    setErrorMsg(state, message){
      state.errorMsg = message
      setTimeout(()=>{
        state.errorMsg = ''
      },3000)
    },
    loading(state, payload){
      state.loading = payload
      state.isButtonDisabled = true
      setTimeout(()=>{
        state.loading = false
        state.isButtonDisabled = false

      }, 3000)
    }
  },
  actions: {
    async userLogin(context, userCredentials){
      try{
      const response = await axios.post('http://localhost:7000/api/auth/login',{
        email : userCredentials.email,
        password : userCredentials.password
      })
      context.commit('loading', true)
      
      const { token } = response.data

        context.commit('userLogin', {token: token})
        console.log('response', response)
        

        window.location = '/'

    }

      catch(error){
        context.commit('loading', true)
        console.log('error', error);
        context.commit('checkError', true)
        context.commit('setErrorMsg', error.response.data.error)
        return
      }
      

    }
  },
  getters : {

  },
  modules: {
  }
})
