<script setup lang="ts">
import { HTTP } from '@/http';
import type { ArticleStoreInterface } from '@/stores/article';
import { ref } from 'vue';
import ArticleItem from '@/components/items/ArticleItem.vue';

const latestAdminArticle = ref({} as ArticleStoreInterface)

HTTP.get('article-types/1')
.then(res => {
  HTTP.get(`articles/${res.data.pop().id}`)
  .then(res => latestAdminArticle.value = res.data)
  .catch(err => {throw err})
})
.catch(err => console.log(err));
</script>

<template>
  <ArticleItem :article="latestAdminArticle"/>
</template>
