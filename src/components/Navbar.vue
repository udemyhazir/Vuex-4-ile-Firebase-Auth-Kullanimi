<template>
  <nav>
    <h1>Vuex Firebase Auth</h1>
    <template v-if="authIsReady">
      <div>
        <router-link to="/">Anasayfa</router-link>
      </div>
      <div v-if="kullanici">
        <span>Merhaba {{ kullanici }}</span>
        <button @click="handleClick">Çıkış</button>
      </div>
      <div v-if="!kullanici">
        <router-link to="/login">Giriş</router-link>
        <router-link to="/signup">Üye Ol</router-link>
      </div>
    </template>
  </nav>
</template>

<script>
import {useStore} from 'vuex';
import { computed } from 'vue'

export default {

  setup(){
    const store=useStore();

    const handleClick=()=>{
      store.dispatch('logout');
    }

    return {
      handleClick,
      kullanici: computed(() => store.state.kullanici),
      authIsReady: computed(() => store.state.authIsReady)
    }

  }

}
</script>