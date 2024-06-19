<script setup lang="ts">
import { ref } from 'vue'
const img = ref('')
  async function query(data:any) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3-medium",
        {
          headers: { Authorization: "Bearer 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" },
          method: "POST",
          body: JSON.stringify(data),
        }
    );
    const result = await response.blob();
    return result;
  }
  query({"inputs": "A JK girl in a short skirt, with long flying hair, slender legs, smooth skin, smiling slightly with her face turned sideways, standing by the railing of the playground"}).then((response) => {
      console.log(response)
      img.value = URL.createObjectURL(response.blob);
  });
</script>

<template>
  <img :src="img" alt="" />
</template>

<style scoped>

</style>