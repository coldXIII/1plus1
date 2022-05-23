import { defineStore } from 'pinia';

export const useTabsStore = defineStore({
  id: 'tabs',
  state() {
    return {
      topNews: [
        {
          id: 1,
          title: 'article_first',
          tag: 'tag1',
          image: 'topnews1',
        },
        {
          id: 2,
          title: 'article_second',
          tag: 'tag2',
          image: 'topnews2',
        },
        {
          id: 3,
          title: 'article_third',
          tag: 'tag1',
          image: 'topnews3',
        },
        {
          id: 4,
          title: 'article_fourth',
          tag: 'tag1',
          image: 'topnews4',
        },
        {
          id: 4,
          title: 'article_fifth',
          tag: 'tag1',
          image: 'intnews3',
        },
      ],
      interestingNews: [
        {
          id: 1,
          title: 'article_first',
          tag: 'tag1',
          image: 'intnews1',
        },
        {
          id: 2,
          title: 'article_second',
          tag: 'tag2',
          image: 'intnews2',
        },
        {
          id: 3,
          title: 'article_third',
          tag: 'tag1',
          image: 'intnews3',
        },
        {
          id: 4,
          title: 'article_fourth',
          tag: 'tag1',
          image: 'topnews1',
        },
        {
          id: 4,
          title: 'article_fifth',
          tag: 'tag1',
          image: 'lastnews1',
        },
      ],
      latestNews: [
        {
          id: 1,
          title: 'article_first',
          tag: 'tag1',
          image: 'lastnews1',
        },
        {
          id: 2,
          title: 'article_second',
          tag: 'tag2',
          image: 'lastnews2',
        },
        {
          id: 3,
          title: 'article_third',
          tag: 'tag1',
          image: 'lastnews3',
        },
        {
          id: 4,
          title: 'article_fourth',
          tag: 'tag1',
          image: 'lastnews1',
        },
        {
          id: 4,
          title: 'article_fifth',
          tag: 'tag1',
          image: 'intnews1',
        },
      ],
    };
  },
});
