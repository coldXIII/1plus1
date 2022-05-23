import { defineStore } from 'pinia';

export const useProgramsStore = defineStore({
  id: 'programs',
  state() {
    return {
      telePrograms: [
        {
          time: '07:00',
          program: 'news',
        },
        {
          time: '09:00',
          program: 'news',
        },
        {
          time: '11:00',
          program: 'news',
        },
        {
          time: '13:00',
          program: 'news',
        },
        {
          time: '15:00',
          program: 'news',
        },
        {
          time: '18:00',
          program: 'news',
        },
        {
          time: '20:00',
          program: 'news',
        },
        {
          time: '21:00',
          program: 'news',
        },
        {
          time: '22:00',
          program: 'news',
        },
        {
          time: '00:00',
          program: 'news',
        },
      ],
    };
  },
});