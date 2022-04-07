<template>
  <ul>
    <li v-for="(article, id) in intNews" :key="id">
      <div class="image">
        <img :src="require(`../../assets/image/${article.image}.jpg`)" />
      </div>
      <div class="article">
        <a href="">{{ article.title }} </a><br />
        <div class="tags">
          <span class="date">{{ article.date }}</span> &nbsp;
          <span class="tag">{{ article.tag }}</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import {mapState} from "pinia"
import { useStore } from '../../pinia/data.js';
export default {
  name: 'TopNews',
  data() {
    return {
          };
  },
    computed:{
 ...mapState(useStore,['intNews'])
  }
};
</script>

<style lang="scss" scoped>
ul {
  li {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0.5rem auto;
    @media (max-width: 400px) {
      flex-direction: column;
      justify-content: center;
    }

    .image {
      min-width: 8rem;
      max-width: 8rem;

      img {
        width: 100%;
        border-radius: 0.5rem;
      }
    }
    .article {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0.5rem;
      padding: 0.5rem;
      @media (max-width: 400px) {
        text-align: center;
      }
      a {
        font-size: 0.8rem;
        font-weight: 600;
        @media (max-width: 990px) {
          font-size: 0.6rem;
        }
        @media (max-width: 850px) {
          font-size: 0.8rem;
        }
      }
      .tags {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 0.5rem;
        @media (max-width: 400px) {
          justify-content: center;
        }
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
</style>
