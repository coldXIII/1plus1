<template>
  <div class="container">
    <div class="gridbox wow animate__animated animate__zoomIn" >
      <div class="gridbox-item" v-for="(item, id) in mainNews" :key="id">
        <div class="image">
          <img :src="require(`../assets/image/${item.image}.jpg`)" />
        </div>
        <a href="">{{ item.title }} </a>
        <div class="tags">
          <span class="date">{{ item.date }}</span> &nbsp;
          <span class="tag">{{ item.tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import { useStore } from '../pinia/data.js';

export default {
  name: 'MainNews',
  data() {
    return {};
  },
  computed: {
    ...mapState(useStore, ['mainNews']),
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
    @media (max-width: 690px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }

    .gridbox-item {
      max-width: 100%;
      width: auto;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 0.5rem;
      text-align: start;
      @media (max-width: 480px) {
        width: 100%;
      }

      .image {
        max-width: 35rem;

        img {
          width: 100%;
          border-radius: 0.5rem;
        }
      }
      a {
        font-size: 0.8rem;
        font-weight: 800;
      }
      .tags {
        width: 100%;
        display: flex;
        justify-content: center;
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

      &:nth-child(1) {
        grid-column: 1/3;
        grid-row: 1/2;
      }
      &:nth-child(2) {
        grid-column: 3/4;
        grid-row: 1/3;
      }
      &:nth-child(3) {
        grid-column: 1/2;
      }
      &:nth-child(4) {
        grid-column: 2/3;
      }
      @media (max-width: 690px) {
        &:nth-child(1) {
          grid-column: 1/3;
          grid-row: 1/2;
        }
        &:nth-child(2) {
          grid-column: 1/3;
          grid-row: 3/4;
        }

        &:nth-child(3) {
          grid-column: 1/2;
          grid-row: 2/3;
        }
        &:nth-child(4) {
          grid-column: 2/3;
          grid-row: 2/3;
        }

        &:nth-child(5) {
          grid-column: 1/2;
          grid-row: 1/2;
        }
      }
      @media (max-width: 480px) {
        &:nth-child(1) {
          grid-column: 1/2;
          grid-row: 1/2;
        }
        &:nth-child(2) {
          grid-column: 1/2;
          grid-row: 5/6;
        }

        &:nth-child(3) {
          grid-column: 1/2;
          grid-row: 2/3;
        }
        &:nth-child(4) {
          grid-column: 1/2;
          grid-row: 3/4;
        }

        &:nth-child(5) {
          grid-column: 1/2;
          grid-row: 4/5;
        }
      }
    }
  }
}
</style>
