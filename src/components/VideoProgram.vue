<template>
  <div class="container">
    <div class="header">
      <h2>{{ $t('video.title') }}</h2>
      <a href="" class="btn">{{ $t('video.button') }}</a>
    </div>
    <div class="gridbox wow animate__animated animate__zoomIn">
      <div class="grid-item" v-for="(video, id) in videoPrograms" :key="id">
        <div class="image">
          <img :src="require(`@/assets/image/${video.image}.png`)" />
          <div class="time">
            <p>{{ $t(`video.${video.day}`) }}</p>
            <h2>{{ video.time }}</h2>
            <span>{{ $t(`video.${video.program}`) }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import { useVideoStore } from '@/pinia/video.store';
export default {
  name: 'VideoProgram',
  computed: {
    ...mapState(useVideoStore, ['videoPrograms']),
  },
};
</script>

<style lang="scss" scoped>
.container {
  .gridbox {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    padding: 1rem;
    overflow: hidden;
    @media (max-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 750px) {
      grid-template-columns: 1fr;
    }
    .grid-item {
      width: 30%;
      width: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 0.5rem;
      text-align: start;
      @media (max-width: 1000px) {
        width: 100%;
      }

      .image {
        position: relative;
        max-width: 30rem;

        img {
          width: 100%;

          border-radius: 0.5rem;
        }
        .time {
          position: absolute;
          top: 40%;
          left: 1%;
          color: var(--white);
          gap: 0.5rem;

          h2 {
            font-size: 1.5rem;
            font-weight: 800;
            padding: 0.2rem 0;
          }
          span {
            padding: 0.2rem 0.5rem;
            background: var(--purple);
            border-top-right-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
            font-size: 0.8rem;
          }
        }
      }
    }
  }
}
</style>
