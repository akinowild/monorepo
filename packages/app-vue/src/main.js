import { createApp } from 'vue'
import { renderWithQiankun, qiankunWindow } from "vite-plugin-qiankun/es/helper.js";
import './style.css'
import App from './App.vue'

let app

// 判断是否在 qiankun 环境中运行
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    // 如果不是在 qiankun 环境中运行，直接创建 Vue 应用并挂载到 #app 元素上
    createApp(App).mount('#app')
} else {
    // 如果在 qiankun 环境中运行，使用 renderWithQiankun 函数注册微应用的生命周期
    renderWithQiankun({
        // 挂载函数，在微应用挂载时调用
        mount(props) {
            // 创建 Vue 应用
            app = createApp(App);
            // 将应用挂载到 qiankun 提供的容器中的 #app 元素上
            app.mount(props.container.querySelector('#app'))
            console.log('vue mount')
        },
        // 引导函数，在微应用启动时调用
        bootstrap() {
            console.log('vue bootstrap')
        },
        // 更新函数，在微应用更新时调用
        update() {
            console.log('vue update')
        },
        // 卸载函数，在微应用卸载时调用
        unmount() {
            console.log('vue unmount')
            // 卸载 Vue 应用
            app?.unmount()
        }
    })
}
