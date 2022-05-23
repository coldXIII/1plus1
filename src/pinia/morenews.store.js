import { defineStore } from 'pinia';

export const useMoreNewsStore = defineStore({
  id: 'more-news',
  state() {
    return {
      moreNews: [
        {
          id: 1,
          title: 'article_first',
          tag: 'tag1',
          image: 'nb2',
        },
        {
          id: 2,
          title: 'article_second',
          tag: 'tag1',
          image: 'nb1',
        },
        {
          id: 3,
          title: 'article_third',
          tag: 'tag1',
          image: 'nb3',
        },
        {
          id: 4,
          title: 'article_fourth',
          tag: 'tag1',
          image: 'nb4',
        },
        {
          id: 5,
          title: 'article_fifth',
          tag: 'tag1',
          image: 'celebrity3',
        },
      ],
    };
  },
});
