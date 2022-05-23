<template>
  <div class="container">
    <div class="header">
      <h2>{{$t('voice_ua.title')}}</h2>
      <a href="" class="btn-white">{{$t('voice_ua.button')}}</a>
    </div>
    <div class="sliderbox ">
      <Carousel
        class="carousel"
        :wrap-around="true"
        :settings="settings"
        :breakpoints="breakpoints"
      >
        <Slide v-for="video in videos" :key="video" class="wow animate__animated animate__zoomIn">
          <div class="carousel__item">
            <img :src="require(`@/assets/image/${video}.jpg`)" />
          </div>
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
export default {
  name: 'TeleProgram',
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  data() {
    return {
      videos: ['video1', 'video2', 'video3', 'video4', 'video5', 'video6'],
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      breakpoints: {
        300: {
          itemsToShow: 1,
          snapAlign: 'center',
        },
        700: {
          itemsToShow: 1.5,
          snapAlign: 'center',
        },
        900: {
          itemsToShow: 2,
          snapAlign: 'center',
        },
        1054: {
          itemsToShow: 2.5,
          snapAlign: 'start',
        },
        1154: {
          itemsToShow: 3,
          snapAlign: 'start',
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 1rem 3rem;
  background: url(../assets/image/voice-bg.png) no-repeat;
  background-size: cover;
  margin: 2rem auto;
  @media (max-width: 550px) {
    padding: 0.8rem;
  }
  .header {
    h2 {
      color: var(--white);
    }
  }

  .sliderbox {
    margin: 1rem auto;
    width: 100%;
    padding: 1rem;
    @media (max-width: 550px) {
      padding: 0;
    }
    .carousel {
      padding: 1rem 0;
      width: 100%;
      border-radius: 1rem;
      @media (max-width: 550px) {
        padding: 0;
      }

      .carousel__item {
        img {
          @media (max-width: 450px) {
            width: 75%;
          }
        }
      }
    }
  }
}
</style>
