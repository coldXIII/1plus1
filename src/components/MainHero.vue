<template>
  <div class="container">
    <div class="main">
      <div class="hero">
        <img src="../assets/logo/mozaic.webp" alt="" />
        <div class="hero-inner">
          <div class="image">
            <img src="@/assets/logo/logo1.webp" alt="" />
          </div>
          <span class="tag"> {{ $t('nav.news_array.socium') }}</span>
          <p>
            {{ $t('hero.hero_title') }}
          </p>
        </div>
      </div>
      <div class="news">
        <div class="news-nav">
          <ul>
            <li
              v-for="(tab, index) in tabs"
              :key="index"
              @click.prevent="activeTab(tab.name)"
              :class="{ active: currentTab == tab.name }"
            >
              <a href="">
                {{ $t(`hero.${tab.title}`) }}
              </a>
            </li>
          </ul>
        </div>
        <div class="news-list">
          <transition name="fade" mode="out-in">
            <component :is="currentTab" />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import TopNewsTab from './tabs/TopNewsTab.vue';
import IntNewsTab from './tabs/IntNewsTab.vue';
import LatestNewsTab from './tabs/LatestNewsTab.vue';

export default {
  name: 'MainHero',
  components: {
    TopNewsTab,
    IntNewsTab,
    LatestNewsTab,
  },
  setup() {
    const tabs = ref([
      {
        title: 'top',
        name: 'TopNewsTab',
      },
      {
        title: 'interesting',
        name: 'IntNewsTab',
      },
      {
        title: 'last',
        name: 'LatestNewsTab',
      },
    ]);
    const currentTab = ref('TopNewsTab');
    return { currentTab, tabs };
  },
  methods: {
    activeTab(selectedTab) {
      this.currentTab = selectedTab;
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
.container {
  .main {
    display: flex;
    align-items: center;
    margin: 2rem auto;
    @media (max-width: 850px) {
      flex-wrap: wrap;
    }

    .hero {
      position: relative;
      flex: 1 1 40rem;

      img {
        width: 100%;
        min-width: 15rem;
      }
      .hero-inner {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .image {
          max-width: 20rem;

          img {
            width: 100%;
          }
        }
        .tag {
          position: absolute;
          bottom: 7rem;
          left: 0;
          padding: 0.2rem 0.6rem;
          color: var(--white);
          background: var(--purple);
          border-top-right-radius: 0.5rem;
          border-bottom-right-radius: 0.5rem;
          @media (max-width: 500px) {
            font-size: 0.8rem;
            bottom: 5.5rem;
          }
        }
        p {
          position: absolute;
          bottom: 2rem;
          text-align: center;
          font-size: 1rem;
          font-weight: 600;
          color: var(--white);
          @media (max-width: 500px) {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
  .news {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    flex: 1 1 40rem;

    .news-nav {
      margin: 0.5rem auto;
      @media (max-width: 850px) {
        margin: 1rem auto 0.5rem;
      }

      ul {
        // width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        li {
          margin: 1rem 2rem;
          @media (max-width: 990px) {
            margin: 0.5rem;
          }
          &.active a {
            color: var(--black);
          }
          a {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--gray);
            @media (max-width: 1050px) {
              font-size: 1rem;
            }
          }
        }
      }
    }

    .news-list {
      padding: 0.5rem;
    }
  }
}
</style>
