<template>
  <div class="home">

    


    <div v-for="blog in blogs" :key="blog.id">
      <div class="blog">
        <h3>{{ blog.title }}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aspernatur consectetur doloremque sunt ducimus enim iure animi fugit nulla et! Perferendis autem deleniti quo eum corrupti reiciendis voluptatem ab ducimus?</p>
        <div class="icons">
          
          <span class="material-icons">thumb_up</span>
          <span class="material-icons">thumb_down</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import {useStore} from 'vuex'

export default {
  setup() {
    const blogs = ref([
      { title: 'Udemy Kurs Geliştirme Zorlukları', id: 1 },
      { title: 'One Piece ve Demon Slayer Animeleri Farkları', id: 2 },
      { title: 'Xamarin ve Firebase ile Mobil Uygulama Geliştirme', id: 3 },
    ])

    const store=useStore();

    console.log(store.state);
    store.commit('kullaniciDegistir','luffy')
    

    return { 
      blogs

    }
  }
}
</script>
