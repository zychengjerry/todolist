<template>
  <div>
    <h1>This is an about page</h1>
    <child :msg='msg' @send2About="send"></child>
    <button @click="back">Back to Home</button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import child from '../components/child/Child.vue'

export default defineComponent({
  name: 'About',
  components: {
    child
  },
  setup() {
      let router = useRouter()
      let back = () => {
          router.push({
            path: '/home'
          })
      }
      let msg = ref(10 + ' (The data from father components)')
      let send = (val) => {
        console.log(val)
      }
      return {
          back,
          msg,
          send
      }
  }
})
</script>