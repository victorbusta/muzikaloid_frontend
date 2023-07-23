import { defineStore } from 'pinia'

export interface ArticleStoreInterface {
  id: number,
  title: string,
  sub_description: string,
  description: string,
  created_at: Date,
  modified_at: Date,
}

export const useArticleStore = defineStore({
  id: 'Article',
  state: () => ({
    article: {} as ArticleStoreInterface,
  }),
})
