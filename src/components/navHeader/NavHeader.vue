<template>
    <div>
        <input placeholder="Please input items" 
        v-model="value"
        @keydown.enter="enter"
        />
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent ({
    name: 'navHeader',
    setup(props, ctx) {
        let value = ref('')
        let enter = () => {
            ctx.emit('add', value.value)
            value.value = ''
            // console.log(value.value)
        }
        return {
            value,
            enter
        }
    }
})
</script>

<style scoped lang="scss">
input {
    margin-bottom: 10px;
}
</style>