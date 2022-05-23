import { defineStore } from 'pinia';

export const useFooterStore = defineStore({
  id: 'footer',
  state() {
    return {
        partners: [
            {
              id: 1,
              partner: 'partner-logo1',
              link: 'link1',
            },
            {
              id: 2,
              partner: 'partner-logo2',
              link: 'link2',
            },
            {
              id: 3,
              partner: 'partner-logo3',
              link: 'link3',
            },
            {
              id: 4,
              partner: 'partner-logo4',
              link: 'link4',
            },
            {
              id: 5,
              partner: 'partner-logo5',
              link: 'link5',
            },
            {
              id: 6,
              partner: 'partner-logo6',
              link: 'link6',
            },
            {
              id: 7,
              partner: 'partner-logo7',
              link: 'link7',
            },
            {
              id: 8,
              partner: 'partner-logo8',
              link: 'link8',
            },
            {
              id: 9,
              partner: 'partner-logo9',
              link: 'link9',
            },
          ],
    };
  },
});