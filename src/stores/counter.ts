import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('main', () => {
  // const count = ref(0)
  // const test = ref(false)
  const showRegis = ref(false)
  const showLogin = ref(false)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  // return { count, doubleCount, increment,test,showRegis }
  return { showRegis,showLogin }
})
