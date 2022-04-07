<template>
  <div class="container">
    <div class="header">
      <h2>Зараз на 1+1</h2>
      <a href="" class="btn">Вся телепрограма</a>
    </div>
    <div class="sliderbox">
      <Carousel
        class="carousel"
        :wrap-around="true"
        :settings="settings"
        :breakpoints="breakpoints"
      >
        <Slide v-for="slide in telePrograms" :key="slide">
          <div class="carousel__item">
            <h3>{{ slide.time }}</h3>
            <span>{{ slide.program }}</span>
          </div>
        </Slide>
      </Carousel>
    </div>
    <MoreNews class="news" />
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';

import { mapState } from 'pinia';
import { useStore } from '../pinia/data.js';

import MoreNews from '@/components/MoreNews.vue';
export default {
  name: 'AnouncementView',
  components: {
    Carousel,
    Slide,

    MoreNews,
  },
  data() {
    return {
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
     breakpoints: {
        300: {
          itemsToShow: 1,
          snapAlign: 'center',
        },
        500: {
          itemsToShow: 2,
          snapAlign: 'center',
        },
        700: {
          itemsToShow: 3,
          snapAlign: 'center',
        },
        1090: {
          itemsToShow: 5,
          snapAlign: 'start',
        },
      },
    };
  },
  computed: {
    ...mapState(useStore, ['telePrograms']),
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 3rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .sliderbox {
    margin: 3rem auto;
    width: 100%;
    padding: 2rem;

    .carousel {
      background: var(--light-gray);
      padding: 1rem 0;
      width: 100%;
      margin: 0 auto;
      border-radius: 1rem;

      .carousel__item {
        padding: 2rem;
         color: var(--gray);
        h3 {
          font-weight: 800;
        }
      }
    }
  }
}
</style>
