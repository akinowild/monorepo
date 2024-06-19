import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(),
    qiankun('sub-vue',{
      useDevMode:true
    })]
})
