<template>
  <div>
    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
  </div>
  <div>
    {{ list }}
  </div>
  <!-- <div @click="clickNum(100)">
    {{ num }}
  </div>
  <div @click="clickNum1">
    {{ name }}
  </div>
  <div>
    {{ arr[0] + arr[1] + arr.slice(0,2) }}
  </div>
  <div>
    {{ obj }}
  </div>
  <div>
    {{ name + ' is ' + age + ' years old, and he has ' + obj.price + ' dolar' }}
  </div> -->
</template>

<script>
import NavHeader from '@/components/navHeader/NavHeader.vue';
import NavMain from '@/components/navMain/NavMain.vue';
import NavFooter from '@/components/navFooter/NavFooter.vue';
import { defineComponent, ref, reactive, toRefs, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent ({
  name: 'Home',
  props: {

  },
  components: {
    NavHeader,
    NavMain,
    NavFooter
  },
  setup() {
    let router = useRouter()
    let route = useRoute()
    console.log(route.query)
    let store = useStore()
    let list = computed(() => {
      return store.state.list
    })
    // let num = ref(10)
    // // let name = ref('Jerry')
    // // let arr = ref(['a', 'b', 'c', 'd'])
    // // let obj = ref({
    // //   age: 20
    // // })
    
    // // reactive
    // let data = reactive({
    //   name: 'Jerry',
    //   age: 20,
    //   obj: {
    //     price: 10000
    //   },
    //   arr: ['a', 'b', 'c', 'd']
    // })
    // let clickNum = (val) => {
    //   console.log(val)
    //   console.log(num.value)
    // }
    // let clickNum1 = () => {
    //   console.log("name clicked")
    // }
    return {
      // num,
      // ...toRefs(data),
      // clickNum,
      // clickNum1
      list
    }
  }
})
</script>

<style scoped lang="scss">

</style>