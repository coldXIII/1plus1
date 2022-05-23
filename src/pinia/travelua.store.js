import { defineStore } from 'pinia';

export const useTravelUAStore = defineStore({
  id: 'travel-ua',
  state() {
    return {
      travelUA: [
        {
          id: 1,
          title: 'article_first',
          image: 'tua1',
        },
        {
          id: 2,
          title: 'article_second',
          image: 'tua2',
        },
        {
          id: 3,
          title: 'article_third',
          image: 'tua3',
        },
        {
          id: 4,
          title: 'article_fourth',
          image: 'tua4',
        },
        {
          id: 5,
          title: 'article_fifth',
          image: 'tua5',
        },
        {
          id: 5,
          title: 'article_sixth',
          image: 'tua5',
        },
      ],
    };
  },
});
