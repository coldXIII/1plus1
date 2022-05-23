<template>
  <div class="container">
    <div class="slider">
      <slot></slot>
      <button @click="next" class="next">
      <i class="fa-solid fa-chevron-right"></i>
      </button>
      <button @click="prev" class="prev">
      <i class="fa-solid fa-chevron-left"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSlider',

  methods: {
    next() {
      this.$emit('next');
    },
    prev() {
      this.$emit('prev');
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin: 2rem auto;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  .slider {
    position: relative;
    width: 100%;
    height: 350px;
    overflow: hidden;

    button {
      position: absolute;
      width: 50px;
      height: 40px;
      top: 85%;
      color: var(--white);
      font-size: 2rem;

      &:hover {
        transform: scale(1.2);
      }
      &.next {
        right: 40%;
        @media (max-width: 570px) {
          right: 0;
          top: 50%;
        }
      }
      &.prev {
        left: 40%;
        @media (max-width: 570px) {
          left: 0;
          top: 50%;
        }
      }
    }
  }
}
</style>
