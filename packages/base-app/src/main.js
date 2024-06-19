import { createApp } from 'vue'
import './style.css'
import { createRouter,createWebHistory } from 'vue-router'
import TDesign from 'tdesign-vue-next';
import { registerMicroApps, start } from 'qiankun';
import 'tdesign-vue-next/es/style/index.css';
import Msg from './components/Msg.vue'
import News from './components/News.vue'

registerMicroApps([
    {
        name: 'app-vue', // app name registered
        entry: '//localhost:5174',
        container: '#main',
        activeRule: '/sub-vue',
    },
    {
        name: 'app-react', // app name registered
        entry: '//localhost:5175',
        container: '#main',
        activeRule: '/sub-react',
    },
    {
        name: 'app-html', // app name registered
        entry: '//localhost:8080',
        container: '#main',
        activeRule: '/sub-html',
    }
]);



const routes = [
    { path: '/list', redirect:'/list/msg'},
    { path: '/list/msg', component: Msg },
    { path: '/list/news', component: News },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
import App from './App.vue'

createApp(App).use(router).use(TDesign).mount('#base-app')
// start();
start({strictStyleIsolation: true});


