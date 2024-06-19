import { createApp } from 'vue';
import { renderWithQiankun,qiankunWindow } from "vite-plugin-qiankun/es/helper.js";
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';

import { store } from './store';
import router from './router';
import '@/style/index.less';
import './permission';
import App from './App.vue';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
let  app:any

if(!qiankunWindow.__POWERED_BY_QIANKUN__){
  app = createApp(App);
  app.use(TDesign);
  app.use(store);
  app.use(router);
  app.mount('#app');
}else{
  renderWithQiankun({
    mount(props){
      app = createApp(App);
      app.use(TDesign);
      app.use(store);
      app.use(router);
      app.mount(props.container.querySelector('#app'))
    },
    bootstrap(){
      console.log('vue bootstrap')
    },
    update(){
      console.log('vue update')
    },
    unmount(){
      console.log('vue unmount')
      app?.unmount()
    }
  })
}

