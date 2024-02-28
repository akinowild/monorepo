<script>
import { defineComponent} from "vue"
export default defineComponent({
  name:'Button'
})
</script>
<script setup>
const props = defineProps({
  text:String,
  default:'按钮'
})
</script>

<template>
<button >{{props.text}}</button>
</template>

<style scoped lang="less">
button{
  height: 30px;
  width: 120px;
  border:1px solid #f00;
}
</style>