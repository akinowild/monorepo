// 定义渲染函数，接收 jQuery 对象作为参数
const render = ($) => {
    // 使用 jQuery 选择 #purehtml-container 元素，并设置其内容为 "Hello, render with jQuery"
    $('#purehtml-container').html('Hello, render with jQuery');
    // 返回一个已解决的 Promise，表示渲染完成
    return Promise.resolve();
};

// 立即执行函数，接收全局对象 window 作为参数
((global) => {
    // 在全局对象上定义 purehtml 对象，包含微应用的生命周期函数
    global['purehtml'] = {
        // 引导函数，在微应用启动时调用
        bootstrap: () => {
            console.log('purehtml bootstrap');
            // 返回一个已解决的 Promise，表示引导完成
            return Promise.resolve();
        },
        // 挂载函数，在微应用挂载时调用
        mount: () => {
            console.log('purehtml mount');
            // 调用渲染函数，传入 jQuery 对象，并返回渲染结果
            return render($);
        },
        // 卸载函数，在微应用卸载时调用
        unmount: () => {
            console.log('purehtml unmount');
            // 返回一个已解决的 Promise，表示卸载完成
            return Promise.resolve();
        },
    };
})(window);
