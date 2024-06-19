import { defineConfig } from 'vite';
import qiankun from 'vite-plugin-qiankun';

export default ({ mode }) => {
  // 判断是否为开发模式
  const __DEV__ = mode === 'development';

  return defineConfig({
    server: {
      // 服务器端口号
      port: 5175,
      // 服务器源地址
      origin: '//localhost:5175',
    },
    // 应用基础路径，开发模式下为根路径，生产模式下为服务器地址
    base: __DEV__ ? '/' : '//localhost:5175',
    plugins: [
      // 使用 qiankun 插件，配置微应用
      qiankun('sub-react', {
        // 开发模式下使用 dev 模式
        useDevMode: true,
        strictStyleIsolation: true
      }),
    ],
  });
};
