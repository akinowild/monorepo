import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default ({mode}) =>{
  const __DEV__ = mode === 'development';
  return defineConfig({
    base: __DEV__ ? '/' : '//localhost:5174',
    plugins: [vue(),vueJsx({}),
      qiankun('sub-vue',{
        useDevMode:true,
        strictStyleIsolation: true
      })],
  })
}

