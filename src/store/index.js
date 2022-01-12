import { createStore } from 'vuex'

import {auth} from '../firebase/config'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut,onAuthStateChanged } from 'firebase/auth';

const store= createStore({
  state: {
    kullanici:null,
    authIsReady: false
  },
  mutations: {
    kullaniciDegistir(state,payload){
      state.kullanici=payload;
      console.log("kullanıcı değişti",state.kullanici);
    },
    authIsReadyDegistir(state, payload) {
      state.authIsReady = payload
    }
  },
  actions: {
    async signup(context,payload){

      //console.log("signup action");

      const res=await createUserWithEmailAndPassword(auth,payload.email,payload.password);

      if(res){
        context.commit('kullaniciDegistir',res.user)
      }else{
        throw new Error("Üye olma işlemi gerçekleştirilemedi")
      }
      
    },
    async login(context,payload){

      const res=await signInWithEmailAndPassword(auth,payload.email,payload.password);

      if(res){
        context.commit('kullaniciDegistir',res.user)
      }else{
        throw new Error("Giriş işlemi gerçekleştirilemedi")
      }
      
    },
    async logout(context){
      await signOut(auth);
      context.commit('kullaniciDegistir',null)
    }
  },
  modules: {
  }
})

const unsub = onAuthStateChanged(auth, (user) => {
  store.commit('authIsReadyDegistir', true)
  store.commit('kullaniciDegistir', user)
  unsub()
})


export default store