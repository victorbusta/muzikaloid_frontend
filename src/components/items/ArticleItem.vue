<script setup lang="ts">
import type { ArticleStoreInterface } from '@/stores/article';

defineProps({
  article: {} as () => ArticleStoreInterface,
});
</script>

<template>
  <div id="article-head">
    <h1>{{ article?.title }}</h1>
    <p>{{ article?.sub_description }}</p>
  </div>

  <div id="wrap">

  </div>
</template>

<style scoped>
  #article-head {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #article-head > h1 {
    width: 90%;
    border-bottom: 1px solid var(--color-text);
    font-size: 24px;
    line-height: 24px;
  }

  #article-head > p {
    width: 100%;
    font-size: 14px;
    line-height: 14px;
    text-align: justify;
  }

  #wrap {
  }
</style>