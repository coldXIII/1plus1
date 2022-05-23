<template>
  <div class="mini-nav">
    <div class="nav-menu">
      <ul>
        <li>
          <a href=""
            ><i class="fa-solid fa-list"></i>&nbsp; {{ $t('nav.programs') }}</a
          >
        </li>
        <li>
          <a href=""
            ><i class="fa-solid fa-tv"></i> &nbsp; {{ $t('nav.news') }}</a
          >
        </li>
        <li>
          <a href=""
            ><i class="fa-solid fa-tv"></i> &nbsp; {{ $t('nav.video') }}</a
          >
        </li>
        <li>
          <a href=""
            ><i class="fa-solid fa-tv"></i> &nbsp;{{ $t('nav.movies') }}</a
          >
        </li>
        <li>
          <a href=""
            ><i class="fa-solid fa-users"></i> &nbsp;
            {{ $t('nav.anouncement') }}</a
          >
        </li>
        <div class="langs">
          <SwitchLocales />
        </div>
        <li>
          <input type="text" placeholder=" Новини" />
          <button type="submit">Пошук</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import SwitchLocales from '../SwitchLocales.vue';
export default {
  components: {
    SwitchLocales,
  },
};
</script>

<style scoped lang="scss">
.nav {
  width: 100%;
  background: var(--black);

  .nav-menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background: var(--black);

    ul {
      display: flex;
      flex-direction: column;
      .langs {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        margin: 0.5rem auto;
        transition: all 0.5s ease;

        &:hover a {
          color: var(--red);
        }

        a {
          color: var(--white);
          font-weight: 700;
          font-size: 1.2rem;
        }

        input {
          position: relative;
          border: none;
          outline: none;
          width: 90%;
          padding: 0.8rem;
          padding-left: 3rem;
          margin: 1rem auto;
          border-radius: 0.5rem;
          color: var(--gray);
          font-size: 1.3rem;
          font-weight: 400;
        }
        button {
          padding: 0.5rem 2rem;
          margin: 1rem 40%;
          border: 2px solid var(--white);
          border-radius: 0.5rem;
          color: var(--white);
        }
      }
    }
  }
}

@media screen and (max-width: 950px) {
  .input-inner i {
    display: none;
  }
}
</style>
