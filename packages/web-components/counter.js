/**
 * 初始化并设置一个计数器功能。
 * @param {HTMLElement} element - 用于展示计数器值的HTML元素。
 * 该函数没有返回值。
 */
export function setupCounter(element) {
  // 初始化计数器变量
  let counter = 0
  // 定义一个函数来设置计数器的值，并更新HTML元素显示
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}` // 更新元素内容为当前计数器值
  }
  // 为元素添加点击事件监听器，每次点击增加计数器值
  element.addEventListener('click', () => setCounter(counter + 1))
  // 初始化计数器显示为0
  setCounter(0)
}


