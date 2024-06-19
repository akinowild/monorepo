<script setup lang="ts">
import { ref } from 'vue';
import {useRouter} from "vue-router";

const router  = useRouter()

const menu1Value = ref('item2');

const changeHandler = (active:any) => {
  console.log('change', active);
  router.push(active)
};
</script>
<template>
  <t-layout>
    <t-header>
      <t-head-menu theme="light" value="item1" height="120px" v-model="menu1Value"  @change="changeHandler">
        <template #logo>
          <img width="136" class="logo" src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo" />
        </template>
        <t-menu-item value="/list"> 消息 </t-menu-item>
        <t-menu-item value="/sub-vue"> 子应用VUE </t-menu-item>
        <t-menu-item value="/sub-react"> 子应用REACT </t-menu-item>
        <t-menu-item value="/sub-html"> 子应用HTML </t-menu-item>
      </t-head-menu>
    </t-header>

    <t-layout>
      <main id="main">
      </main>
      <RouterView />
    </t-layout>
    <t-footer> Copyright @ 2019-{{ new Date().getFullYear() }} Tencent. All Rights Reserved </t-footer>
  </t-layout>
</template>
