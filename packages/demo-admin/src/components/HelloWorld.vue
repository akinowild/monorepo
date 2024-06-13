<script setup lang="ts">
// 为这个元素创建类
class MyCustomElement extends HTMLElement {
  static observedAttributes = ["color", "size"];

  constructor() {
    // 必须首先调用 super 方法
    super();
  }

  connectedCallback() {
    console.log("自定义元素添加至页面。");
  }

  disconnectedCallback() {
    console.log("自定义元素从页面中移除。");
  }

  adoptedCallback() {
    console.log("自定义元素移动至新页面。");
  }

  attributeChangedCallback(name:any, oldValue, newValue) {
    console.log(`属性 ${name} 已变更。`);
  }
}

customElements.define("my-custom-element", MyCustomElement);

</script>

<template>
  <div class="box">
    <my-custom-element></my-custom-element>
  </div>
</template>

<style scoped>
.box{
  height: 400px;
  width: 400px;
}
hr{
  color: #000;
  height: 1px;
  width: 100%;
}
</style>
