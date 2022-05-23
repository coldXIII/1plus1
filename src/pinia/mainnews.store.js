import { defineStore } from 'pinia';

export const useMainNewsStore = defineStore({
  id: 'main-news',
  state() {
    return {
      mainNews: [
        {
          id: 1,
          title: 'article_first',
          tag: 'tag1',
          image: 'mainnews1',
        },
        {
          id: 1,
          title: 'article_second',
          tag: 'tag1',
          image: 'mainnews4',
        },
        {
          id: 1,
          title: 'article_third',
          tag: 'tag1',
          image: 'mainnews2',
        },
        {
          id: 1,
          title: 'article_fourth',
          tag: 'tag1',
          image: 'mainnews3',
        },
      ],
    };
  },
});
