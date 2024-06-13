<script setup>
import {ref} from 'vue'

const promptText = ref('')

const htmlDom = ref('')

const getResult = async () =>{
  fetch('https://api.perplexity.ai/chat/completions', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'authorization': '',
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      "model": "llama-3-70b-instruct",
      "messages": [
        {
          "role": "system",
          "content": "Be precise and concise."
        },
        {
          "role": "user",
          "content": promptText.value+'生成可执行的html代码，不需要html的页头部分，只要div和css就行。不需要输出其它附加信息，可输出完整可执行的代码'
        }
      ]
    })
  })
  .then(response => response.json())
  .then(data => {
    htmlDom.value = data.choices.map(item => item.message.content).join('')
  })
  .catch(error => {
    console.error('Error:', error);
  });
}


</script>

<template>
  <div class="prompt-box">
    <strong>秋野试试想法</strong>
    <textarea v-model="promptText"></textarea><button @click="getResult">执行</button>
  </div>
  <div id="box" v-html="htmlDom">
  </div>
</template>

<style scoped>
.prompt-box{
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;
  display: grid;
  width: 1200px;
  grid-template-columns: 1fr 500px 200px;
  strong{
    font-size: 48px;
    font-weight: bold;
    background: linear-gradient(89.32deg, #3f59e6 .59%, #E91E63 99.44%);
    background-clip:text;
    -webkit-text-fill-color:transparent;
    line-height: 200px;
    text-align: center;
  }
  textarea{
    height: 200px;
    background: white;
    font-size: 16px;
    border: 1px solid #ddd;
    color: #000;
  }
  button{
    background: hsla(240,50%, 50%, 1);
    font-size: 24px;
  }
}
</style>
