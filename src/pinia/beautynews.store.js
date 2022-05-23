import { defineStore } from 'pinia';

export const useBeautyNewsStore = defineStore({
  id: 'beauty-news',
  state() {
    return {
      beautyNews: [
        {
          id: 1,
          title: 'article_first',
          tag: 'tag4',
          image: 'beauty1',
        },
        {
          id: 2,
          title: 'article_second',
          tag: 'tag4',
          image: 'beauty2',
        },
        {
          id: 3,
          title: 'article_third',
          tag: 'tag4',
          image: 'beauty3',
        },
        {
          id: 4,
          title: 'article_fourth',
          tag: 'tag4',
          image: 'beauty4',
        },
        {
          id: 5,
          title: 'article_fifth',
          tag: 'tag4',
          image: 'beauty5',
        },
        {
          id: 6,
          title: 'article_sixth',
          tag: 'tag4',
          image: 'beauty6',
        },
      ],
    };
  },
});
