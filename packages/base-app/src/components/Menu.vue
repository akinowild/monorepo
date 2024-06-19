<script setup lang="ts">
import {ref } from "vue";
import {useRouter} from "vue-router";

const router  = useRouter()

const itemValue = ref('')
const changeHandler=(value:string)=>{
  itemValue.value = value
  router.push(value)
}
</script>

<template>
  <t-menu theme="light" :defaultValue="itemValue" @change="changeHandler" style="margin-right: 40px">
    <t-menu-item value="msg">十年</t-menu-item>
    <t-menu-item value="news">海阔天空</t-menu-item>
  </t-menu>
</template>

<style scoped>

</style>
