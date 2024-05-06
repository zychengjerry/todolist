<template>
    <div class="start">
      <button @click="start">Start</button>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Start',
    setup() {
        let router = useRouter()
        let name = ref('Jerry')
        let num = ref(20)
        let obj = ref({
            msg: 'start'
        })
        let start = () => {
            router.push({
                path: '/home',
                query: {
                    name: name.value,
                    num: num.value,
                    obj: JSON.stringify(obj.value)
                }
            })
        }
        return {
            start
        }
    }
})
</script>