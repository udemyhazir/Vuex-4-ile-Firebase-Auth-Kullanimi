<template>
  <form @submit.prevent="handleSubmit">
    <h3>Üye Olma Sayfası</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="email">Parola:</label>
    <input type="password" name="password" v-model="password" required>

    <button>Üye Ol</button>
    <div v-if="hata">{{hata}}</div>
  </form>
</template>

<script>
import { ref } from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const hata=ref(null);

    const store=useStore();
    const router=useRouter();


    const handleSubmit =async  () => {
      
      const payload={
        email:email.value,
        password:password.value
      }

      try {
        await store.dispatch('signup',payload)
        router.push('/')
      } catch (error) {
        hata.value=error.message;
      }
      
    }
    return { handleSubmit, email, password ,hata }
  }
}
</script>