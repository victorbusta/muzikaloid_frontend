<script setup lang="ts">
  import { ref } from 'vue';

  const homeArticle = ref({name: String, createdAt: Date, description: String});

  const getHomeArticle = async () => {
    const res = await fetch("http://localhost:3000/articles/1");
    const finalRes = await res.json();
    homeArticle.value = finalRes;
  }

  getHomeArticle();
</script>

<template>
  <h1>
    {{ homeArticle.name }}
  </h1>
  <h4>
    {{ homeArticle.createdAt.toLocaleString() }}
  </h4>
  <p>
    {{ homeArticle.description }}
  </p>
</template>

<style scoped>
h1 {
  width: 100%;
  font-size: 3rem;
}

h4 {
  width: 100%;
  text-align: right;
}

p {
  margin-top: 32px;
  width: 80%;
  text-align: justify;
  font-size: larger;
  white-space: pre-line;
}

@media (max-width: 768px) {
  p {
    width: 100%;
  }
}

@media (max-width: 612px) {
  h1 {
    font-size: 2rem;
  }
}

@media (max-width: 456px) {
  h1 {
    font-size: 1.5rem;
  }
}
</style>