<template>
  <div class="container">
    <ul class="partners">
      <li v-for="(item, id) in partners" :key="id">
        <a href=""
          ><div class="image">
            <img :src="require(`@/assets/image/${item.partner}.png`)" /></div
        ></a>
      </li>
    </ul>
    <ul class="links">
      <li v-for="(item, id) in partners" :key="id">
        <a href="">{{ $t(`footer.${item.link}`) }}</a>
      </li>
    </ul>
    </div>
</template>

<script>
import { mapState } from 'pinia';
import { useFooterStore } from '@/pinia/footer.store';
export default {
  name: 'AppFooter',
    computed: {
    ...mapState(useFooterStore, ['partners']),
  },

};
</script>

<style lang="scss" scoped>
.container {
  background: var(--black);
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .partners {
    display: flex;
    justify-content: space-evenly;
    margin-top: 4rem;
    flex-wrap:wrap;
    li {
      margin:0.5rem;
      a {
        .image {
          width: 6rem;
          height: 2.7rem;
               }

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .links {
    margin: 3rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    li {
      margin: 0.3rem auto;
      &:hover a{
        color:var(--red);
      }
      a {
        color: var(--white);
        font-size: 0.6rem;
        text-transform: uppercase;
      }
    }
  }
}
</style>
