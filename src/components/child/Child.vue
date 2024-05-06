<template>
    <div>
      <h1>This is an child components</h1>
      This is the data from father components: {{ msg }}
      <button @click="send">传值给父组件</button>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref, onMounted } from 'vue'

  export default defineComponent({
    name: 'Child',
    props: {
        // 接收父组件传递过来的数据
        msg: {
            type: String
            // required: false
            // default: '默认值'
        }
    },
    setup(props, ctx) {
        let childMsg = ref('我是子组件的数据')
        let childNum = ref(10)
        console.log(props)
        let send = () => {
            ctx.emit('send2About', childMsg.value)
        }
        onMounted(() => {
            ctx.emit('send', {
                msg: childMsg.value,
                num: childNum.value
            })
        })
        return {
            childMsg,
            send
        }
    }
  })
  </script>