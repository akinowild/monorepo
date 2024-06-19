import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
let root = null;

// 渲染函数，用于渲染应用
function render(props) {
    const { container } = props;
    // 获取目标容器，优先使用传入的容器，否则使用默认的根元素
    const targetContainer = container ? container.querySelector('#root') : document.getElementById('root');
    // 创建 React 根元素
    root = ReactDOM.createRoot(targetContainer);
    // 渲染应用
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}

// 使用 qiankun 的渲染函数进行渲染
renderWithQiankun({
    // 挂载函数，在微应用挂载时调用
    mount(props) {
        console.log('sub-vite2-react mount');
        render(props);
    },
    // 引导函数，在微应用启动时调用
    bootstrap() {
        console.log('bootstrap');
    },
    // 卸载函数，在微应用卸载时调用
    unmount(props) {
        console.log('sub-vite2-react unmount');
        root.unmount();
    },
});

// 如果不是在 qiankun 环境下运行，直接渲染应用
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render({});
}
