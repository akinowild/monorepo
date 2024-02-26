<script>
import { defineComponent} from "vue"
export default defineComponent({
  name:'Icon'
})
</script>

<script setup>
import {
  Camera
} from '@icon-park/vue-next'
</script>


<template>
  <camera theme="outline" size="16" fill="#36464d" :strokeWidth="2" />
</template>

<style scoped lang="less">

</style>