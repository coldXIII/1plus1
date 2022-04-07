<template>
  <div class="container">
    <div class="fade"></div>
    <h1>Мандруй Україною з Дмитром Комаровим</h1>
    <div class="container-inner">
      <div class="video">
        <Videoplayer class="videoplayer" />
      </div>
      <div class="video-list">
        <article class="articles">
          <ul>
            <li v-for="(item, id) in travelUA" :key="id">
              <div class="image">
                <img :src="require(`../assets/image/${item.image}.jpg`)" />
              </div>
              <div class="text">
                <a href="">{{ item.title }} </a>
              </div>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import { useStore } from '../pinia/data.js';
import Videoplayer from './videoplayer/VideoPlayer.vue';
export default {
  name: 'TravelUa',
  components: {
    Videoplayer,
  },
  data() {
    return {
     
    };
  },
    computed: {
    ...mapState(useStore, ['travelUA']),
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  padding: 1rem;
  width: 100%;
  background: url('../assets/image/tua-bg.jpg') no-repeat;
  background-size: cover;
  z-index: 0;
  .fade {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: rgba(0, 0, 0, 0.6);
  }
  h1 {
    text-align: center;
    margin: 2rem auto;
    color: var(--white);
    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
  .container-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    @media (max-width: 1000px) {
      flex-wrap: wrap;
    }

    .video {
      width: 80%;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;

      .videoplayer {
        width: 100%;
        min-width: 20rem;
        @media (max-width: 350px) {
          min-width: 18rem;
        }
      }
    }

    .articles {
      padding: 0.5rem;
      border: 3px solid var(--black);
      border-radius: 1rem;
      overflow-y: scroll;
      max-height: 25rem;
      background: rgba(0, 0, 0, 0.6);
      @media (max-width: 1000px) {
        width: 70%;
        margin: 1rem auto;
      }
      @media (max-width: 600px) {
        width: 90%;
      }
      @media (max-width: 500px) {
        width: 100%;
      }

      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.5rem 0;

        .image {
          max-width: 13rem;

          img {
            width: 100%;
            height: auto;
            border-radius: 0.5rem;
          }
        }
        .text {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          gap: 0.5rem;
          padding: 0.2rem;

          a {
            font-size: 0.7rem;
            font-weight: 800;
            color: var(--white);
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
  }
}
</style>
