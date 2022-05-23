import { defineStore } from 'pinia';

export const useCelebrityNewsStore = defineStore({
  id: 'celebrity-news',
  state() {
    return {
      celebrityNews: [
        {
          id: 1,
          title: 'article_first',
          tag: 'tag3',
          image: 'celebrity2',
        },
        {
          id: 2,
          title: 'article_second',
          tag: 'tag3',
          image: 'celebrity1',
        },
        {
          id: 3,
          title: 'article_third',
          tag: 'tag3',
          image: 'celebrity3',
        },
        {
          id: 4,
          title: 'article_fourth',
          tag: 'tag3',
          image: 'celebrity4',
        },
        {
          id: 5,
          title: 'article_fifth',
          tag: 'tag3',
          image: 'celebrity5',
        },
      ],
    };
  },
});
