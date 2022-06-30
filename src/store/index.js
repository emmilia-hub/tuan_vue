import Vue from "vue";
import Vuex from "vuex";
// import {apiLogin, apiGetPhotos} from '../api'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    photos: []
  },
  getters: {
    getPhotoById(state){
      // 获取对应图片
      return id => {
        return state.photos.find(item => item.id == id)
      }
    }
  },
  mutations: {
    login(state,payload){
      state.token = payload
    },
    updatePhotos(state,payload){
      state.photos = payload
    }
  },
  actions: {
    // 需要等待获取apiLogind获取数据完成
    async getInfo({commit}, payload){
      const { username, password } = payload 
      let res = await apiLogin({username, password})
      const data = res.data.data
      localStorage.setItem('token',data.token)
      commit('login', data.token)
    },
    getPhotos({commit}){
      apiGetPhotos().then(res => {
        console.log(res.data)
        let data = res.data
        commit('updatePhotos',data.data.photos)
      })
    }
  },
  modules: {}
});

