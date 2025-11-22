<template>
  <div class="relative bg-black min-h-screen text-white flex flex-col overflow-hidden">
    <HeaderComponent/>

    <div class="flex-grow relative pt-25 pb-30">
      <router-view class="relative z-10"></router-view>
    </div>

    <FooterComponent/>

  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent
  },

  setup() {
    const isAtBottom = ref(false)

    const checkScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight
      isAtBottom.value = scrollTop + windowHeight >= docHeight - 5
    }

    onMounted(() => {
      window.addEventListener('scroll', checkScroll)
      window.addEventListener('resize', checkScroll)
      checkScroll()
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    })

    return {isAtBottom }
  }
}
</script>