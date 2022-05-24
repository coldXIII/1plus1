<template>
  <div class="nav">
    <MobileMenu class="mobile-menu" :class="{ open: showMobileMenu }" />
    <div class="nav-menu">
      <div class="nav-menu-logo">
        <a
          href=""
          @click="activeLink('/')"
          :class="{ active: currentLink == '/' }"
        >
          <img src="@/assets/logo/logo.svg" alt
        /></a>
      </div>
      <div id="bars">
        <i
          class="fas fa-bars"
          :class="{ 'fa-times': showMobileMenu }"
          @click.prevent="showMobileMenu = !showMobileMenu"
        ></i>
      </div>
      <ul class="nav-menu-nav">
        <li
          @click.prevent="activeLink('/program')"
          :class="{ active: currentLink == '/program' }"
        >
          <a
            href
            @click.prevent="(showTabOne = !showTabOne), (showTabTwo = false)"
          >
            {{ $t('nav.programs') }} &nbsp;
            <i class="fa-solid fa-chevron-down"></i>
          </a>
          <div class="tab tabOne" v-if="showTabOne">
            <ul>
              <li v-for="(item, index) in links" :key="index">
                {{ $t(`nav.${item.title}`) }}
              </li>
            </ul>
          </div>
        </li>
        <li
          @click.prevent="activeLink('/news')"
          :class="{ active: currentLink == '/news' }"
        >
          <a
            href
            @click.prevent="(showTabTwo = !showTabTwo), (showTabOne = false)"
          >
            {{ $t('nav.news') }} &nbsp;
            <i class="fa-solid fa-chevron-down"></i>
          </a>
          <div class="tab tabTwo" v-if="showTabTwo">
            <ul>
              <li v-for="(item, index) in news" :key="index">
                {{ $t(`nav.news_array.${item.title}`) }}
              </li>
            </ul>
          </div>
        </li>
        <li
          @click="activeLink('/video')"
          :class="{ active: currentLink == '/video' }"
        >
          <router-link to="/video" href> {{ $t('nav.video') }}</router-link>
        </li>
        <li
          @click="activeLink('/movies')"
          :class="{ active: currentLink == '/movies' }"
        >
          <router-link to="/movies" href> {{ $t('nav.movies') }}</router-link>
        </li>
        <li
          @click="activeLink('/anouncement')"
          :class="{ active: currentLink == '/anouncement' }"
        >
          <router-link to="/anouncement" href>
            {{ $t('nav.anouncement') }}</router-link
          >
        </li>
        <div class="social-icons">
          <li v-for="icon in socialIcons" :key="icon">
            <a href>
              <div class="icon">
                <img :src="require(`@/assets/icons/${icon}.png`)" />
              </div>
            </a>
          </li>
        </div>
        <div class="langs">
          <SwitchLocales />
        </div>
        <div class="search">
          <i class="fas fa-search" @click.prevent="showForm = !showForm"></i>
        </div>
      </ul>
    </div>
    <form action="" v-if="showForm" class="navForm">
      <input type="text" placeholder="Новини" />
      <i class="fas fa-search"></i>
      <button type="submit">Пошук</button>
    </form>
  </div>
  <div class="submenu">
    <ul>
      <li>{{ $t('nav.anouncement') }}</li>
      <li>{{ $t('nav.online') }}</li>
      <li>{{ $t('nav.war_diaries') }}</li>
    </ul>
  </div>
</template>
<script>
import MobileMenu from './MobileMenu.vue';
import SwitchLocales from '../SwitchLocales.vue';

export default {
  name: 'AppHeader',
  data() {
    return {
      currentLink: '/',
      showMobileMenu: false,
      showTabOne: false,
      showTabTwo: false,
      showForm: false,

      links: [
        { title: 'programs' },
        { title: 'news' },
        { title: 'video' },
        { title: 'movies' },
        { title: 'anouncement' },
      ],
      news: [
        { title: 'recipes' },
        { title: 'horoscope' },
        { title: 'health' },
        { title: 'beauty' },
        { title: 'holiday' },
        { title: 'stars' },
        { title: 'socium' },
      ],
      socialIcons: ['facebook', 'twitter', 'instagram'],
    };
  },

  methods: {
    activeLink(selectedLink) {
      this.currentLink = selectedLink;
    },
  },

  components: { MobileMenu, SwitchLocales },
};
</script>
<style scoped lang="scss">
.mobile-menu {
  position: absolute;
  top: 4.3rem;
  right: -200%;
  display: none;
  min-width: 50%;
  z-index: 1000000;
  display: block;
  transition: all 1s ease-in-out;
  @media (min-width: 992px) {
    display: none;
  }
  @media screen and (max-width: 992px) {
    width: 100%;
  }

  &.open {
    right: 0;
  }
}

.nav {
  position: fixed;
  width: 100%;
  background: var(--black);
  padding: 0.7rem;
  z-index: 999999;

  .nav-menu {
    display: flex;
    justify-content: center;
    align-items: center;

    &-logo {
      width: 5rem;
      min-width: 4rem;
       @media screen and (max-width: 992px) {
     margin-left: 3rem;
  }
      img {
        width: 100%;
      }
    }
    &-nav {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      @media (max-width: 992px) {
        display: none;
      }
      li {
        list-style: none;
        margin: 0 0.5rem;
        text-align: center;
        white-space: nowrap;
        transition: transform 0.3s ease-in-out;

        a {
          color: var(--white);
          font-size: 1rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          height: 100%;
        }
        &:hover a {
          color: var(--red);
        }
        &:hover i {
          transform: rotate(180deg);
          transition: 0.2s ease-in-out;
        }

        &.active a {
          color: var(--red);
        }

        .tab {
          position: absolute;
          bottom: -4rem;
          left: 0;
          width: 100%;
          height: 4rem;
          background: var(--black);
          color: var(--white);
          display: flex;
          justify-content: center;
          align-items: center;
          transition: opacity 1s ease-in-out;
          opacity: 1;
          z-index: 10000;

          ul {
            display: flex;
            li:hover {
              color: var(--red);
              cursor: pointer;
            }
          }
        }
        .tabOne {
          ul {
            li {
              margin: 0;
              padding: 0.5rem 2rem;

              &:not(:last-child) {
                border-right: 1px solid var(--gray);
              }
              &:not(:first-child) {
                border-left: 1px solid var(--gray);
              }
            }
          }
        }
      }
      .social-icons {
        display: flex;
        margin-left: 2rem;

        li {
          margin: 0 0.1rem;
          .icon {
            width: 25px;
            height: 25px;
            img {
              width: 100%;
            }
          }
        }
      }
      .langs {
        margin-left: 2rem;
        display: flex;
        align-items: center;
        li {
          margin: 0 0.2rem;
          padding: 0 0.5rem;
          &:first-child {
            border-right: 2px solid var(--gray);
          }
        }
      }
      .search {
        margin-left: 2rem;
        padding: 0.2rem;
        i {
          font-size: 1.3rem;
          color: var(--white);
        }
      }
    }
    #bars {
      padding: 0.5rem;
      margin-right: 0.7rem;
      margin-bottom: 5px;
      cursor: pointer;
      transition: all 0.3s ease;

      i {
        font-size: 2rem;
        color: var(--red);
        display: none;
        @media (max-width: 992px) {
          display: block;
        }
      }
    }
  }

  .navForm {
    position: relative;

    input {
      position: relative;
      border: none;
      outline: none;
      width: 85%;
      padding: 0.6rem;
      padding-left: 3rem;
      margin: 1rem auto;
      border-radius: 0.5rem;
      font-size: 1rem;
      font-weight: 400;
    }
    button {
      padding: 0.5rem 1.5rem;
      margin: 0 1rem;
      border: 2px solid var(--white);
      border-radius: 0.5rem;
      color: var(--white);
    }
    i {
      position: absolute;
      top: 25px;
      left: 20px;
      transform: translate(-50px -25px);
      color: var(--gray);
      font-size: 1.3rem;
    }
  }
}
.submenu {
  position: relative;
  top: 3.2rem;
  width: 100%;
  padding: 0.8rem;
  background: var(--white);
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.5), 0 5px 10px rgba(0, 0, 0, 0.5);
  z-index: 1;
  @media (max-width: 992px) {
    top: 8vh;
    background: var(--light-gray);
  }

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    @media (max-width: 400px) {
      flex-direction: column;
    }
    li {
      @media (max-width: 400px) {
        margin: 0.5rem auto;
      }
      &:hover {
        color: var(--red);
      }
    }
  }
}
</style>
