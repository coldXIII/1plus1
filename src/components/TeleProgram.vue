<template>
  <div class="container">
    <div class="header">
      <h2>{{$t('tv_program.title')}}</h2>
      <a href="" class="btn">{{$t('tv_program.button')}}</a>
    </div>

    <div class="sliderbox wow animate__animated animate__fadeInRight">
      <Carousel
        class="carousel"
        :wrap-around="true"
        :settings="settings"
        :breakpoints="breakpoints"
      >
        <Slide v-for="slide in telePrograms" :key="slide">
          <div class="carousel__item">
            <h3>{{ slide.time }}</h3>
            <span>{{ $t(`tv_program.${slide.program}`) }}</span>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import { mapState } from 'pinia';
import { useProgramsStore } from '@/pinia/programs.store';
export default {
  name: 'TeleProgram',
  components: { Carousel, Slide },
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
    ...mapState(useProgramsStore, ['telePrograms']),
  },
};
</script>

<style lang="scss" scoped>
.container {
  .sliderbox {
    margin: 1rem auto;
    width: 100%;
    padding: 2rem;

    .carousel {
      background: var(--light-gray);
      padding: 1rem 0;
      width: 100%;
      border-radius: 1rem;

      .carousel__item {
        padding: 2rem;
        box-shadow: 1px 1px 5px rgba(150, 150, 150, 0.5);
         color: var(--gray);

        h3 {
          font-size: 2rem;
          font-weight: 800;
          @media (max-width: 600px) {
            font-size: 0.9rem;
          }
        }
        span {
          font-size: 0.8rem;
          white-space: nowrap;
          @media (max-width: 600px) {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
}
</style>
