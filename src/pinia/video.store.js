import { defineStore } from 'pinia';

export const useVideoStore = defineStore({
  id: 'video',
  state() {
    return {
        videoPrograms: [
            {
              id: 1,
              day: 'time_first',
              time: '06:30',
              program: 'article_first',
              image: 'vp1',
            },
            {
              id: 2,
              day: 'time_second',
              time: '20:20',
              program: 'article_second',
              image: 'vp2',
            },
            {
              id: 3,
              day: 'time_third',
              time: '19:00',
              program: 'article_third',
              image: 'vp3',
            },
            {
              id: 4,
              day: 'time_fourth',
              time: '08:00',
              program: 'article_fourth',
              image: 'vp4',
            },
            {
              id: 5,
              day: 'time_fifth',
              time: '22:45',
              program: 'article_fifth',
              image: 'vp5',
            },
            {
              id: 6,
              day: 'time_sixth',
              time: '17:10',
              program: 'article_sixth',
              image: 'vp6',
            },
          ],
    };
  },
});