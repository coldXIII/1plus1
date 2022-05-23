<template>
  <div class="container">
    <div class="header">
      <h2>
        {{ $t('beauty_news.title') }}
        <span>{{ $t('common.tag4') }}</span>
      </h2>
      <a href class="btn"> {{ $t('beauty_news.button') }}</a>
    </div>
    <div class="main wow animate__animated animate__zoomIn">
      <div class="articles">
        <ul class="w">
          <li v-for="(item, id) in beautyNews" :key="id">
            <div class="image">
              <img :src="require(`@/assets/image/${item.image}.jpg`)" />
            </div>
            <div class="text">
              <a href>
                <a href="">{{ $t(`beauty_news.${item.title}`) }} </a>
              </a>
              <div class="tags">
                <span class="date">{{ $d(new Date()) }}</span> &nbsp;
                <span class="tag">{{ $t(`common.${item.tag}`) }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="sliderbox">
        <Slider class="slider" @next="next" @prev="prev">
          <Slide
            class="slide"
            v-for="(slide, index) in slides"
            :key="index"
            :index="index"
            :visibleSlide="visibleSlide"
            :direction="direction"
          >
            <img :src="require(`../assets/image/${activeSlide}.jpg`)" />
          </Slide>
        </Slider>
        <div class="images">
          <div class="image-item" v-for="(slide, index) in slides" :key="index">
            <img
              :src="require(`../assets/image/${slide}.jpg`)"
              @click="changeActiveSlide(index)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import { useBeautyNewsStore } from '@/pinia/beautynews.store';
import Slider from './slider/Slider.vue';
import Slide from './slider/Slide.vue';
import { ref } from 'vue';
export default {
  name: 'BeautyNews',
  components: {
    Slider,
    Slide,
  },
  setup() {
    const activeSlide = ref('model1');
    const slides = ref([
      'model1',
      'model2',
      'model3',
      'model4',
      'model5',
      'model6',
    ]);
    const visibleSlide = ref(0);
    const direction = ref('left');

    return { activeSlide, slides, visibleSlide, direction };
  },
  computed: {
    ...mapState(useBeautyNewsStore, ['beautyNews']),
    slidesLength() {
      return this.slides.length;
    },
  },
  methods: {
    changeActiveSlide(index) {
      this.activeSlide = this.slides[index];
    },

    next() {
      if (this.visibleSlide >= this.slidesLength - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
        this.activeSlide = this.slides[this.visibleSlide];
      }
      this.direction = 'left';
    },

    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLength - 1;
      } else {
        this.visibleSlide--;
        this.activeSlide = this.slides[this.visibleSlide];
      }
      this.direction = 'right';
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  .header {
    h2 {
      span {
        color: var(--red);
      }
    }
  }
  .main {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 850px) {
      flex-wrap: wrap;
    }

    .articles {
      width: 40%;
      padding: 0.5rem;
      @media (max-width: 850px) {
        width: 100%;
      }
      li {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 0.5rem;
        padding: 0.3rem;

        .image {
          grid-column: 3 span;
          max-width: 6rem;
          @media(max-width:550px){
            width:auto;
          }

          img {
            width: 100%;
            border-radius: 0.5rem;
          }
        }
        .text {
          grid-column: 9 span;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          gap: 0.5rem;
          padding: 0.2rem;
           @media(max-width:550px){
             grid-column: 10 span;
          }

          a {
            font-size: 0.7rem;
            font-weight: 600;
          }

          .tags {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 0.5rem;
            .date {
              font-size: 0.7rem;
            }
            .tag {
              font-size: 0.7rem;
              color: var(--orange);
            }
          }
        }
      }
    }
    .sliderbox {
      width: 60%;
      overflow: hidden;
      @media (max-width: 850px) {
        width: 100%;
      }

      .slider {
        display: flex;
        justify-content: center;
        align-items: center;

        .slide {
          margin: 0 auto;
          @media (max-width: 570px) {
            width: 100%;
          }

          img {
            width: 100%;
          }
        }
      }
      .images {
        display: flex;
        justify-content: space-around;
        align-items: center;

        .image-item {
          max-width: 8rem;
          margin: 0 0.2rem;
          cursor: pointer;
          img {
            width: 100%;
          }
        }
        @media (max-width: 550px) {
          display: grid;
          grid-template-columns: 1fr;
          width: 100%;
          .image-item {
            margin: auto;

            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
