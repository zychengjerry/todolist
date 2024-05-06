<template>
    <div class="detail">
      <h1>This is an detail page</h1>
      <button @click="back">Back to Home</button>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Detail',
    setup() {
        let router = useRouter()
        let back = () => {
            router.push({
                path: '/home'
            })
        }
        return {
            back
        }
    }
})
</script>