<template>
  <div>
    <nav-header @add="add"></nav-header>
    <nav-main :list="list" @del="del"></nav-main>
    <nav-footer :list="list" @clear="clear"></nav-footer>
  </div>
</template>

<script>
import NavHeader from '@/components/navHeader/NavHeader.vue';
import NavMain from '@/components/navMain/NavMain.vue';
import NavFooter from '@/components/navFooter/NavFooter.vue';
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex'

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
    let store = useStore()
    let list = computed(() => {
      return store.state.list
    })
    let value = ref('')
    // 添加任务
    let add = (val) => {
      value.value = val
      // Tips：加了一个去重的判断 list.value.map
      let flag = true
      list.value.map(item => {
        if (item.title === value.value) {
          flag = false
          alert('Task exist!')
        }
      })
      if (flag) {
        store.commit('addTodo', {
          title: value.value,
          complete: false
        })
      }
      console.log(val)
    }
    // 删除任务
    let del = (val) => {
      store.commit('delTodo', val)
      console.log(val)
    }
    // 清除任务
    let clear = (val) => {
      store.commit('clear', val)
    }
    return {
      add,
      value,
      list,
      del,
      clear
    }
  }
})
</script>

<style scoped lang="scss">

</style>