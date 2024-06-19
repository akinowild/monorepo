import App from './App.svelte'
import { renderWithQiankun,qiankunWindow } from "vite-plugin-qiankun/es/helper.js";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
let  app:any

if(!qiankunWindow.__POWERED_BY_QIANKUN__){
  app = new App({
    target: document.getElementById('app')
  })
}else{
  renderWithQiankun({
    mount(props){
      app = new App({
        target: document.getElementById('app')
      })
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
// const app = new App({
//   target: document.getElementById('app')
// })

export default app
