<template>
  <img :src="require(`@/assets/flags/${$i18n.locale}.svg`)" />
  <select v-model="$i18n.locale">
    <option :value="locale" v-for="(locale, i) in locales" :key="`locale${i}`">
      <span> {{ locale.toUpperCase() }}</span>
    </option>
  </select>
</template>

<script>
export default {
  name: 'LocalSwitcher',
  data() {
    return {
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(','),
    };
  },
};
</script>

<style scoped lang="scss">
ul {
  display: flex;
}
li {
  font-size: 1rem;
  margin: 0 0.2rem;
  padding: 0 0.5rem;
  cursor: pointer;
}
select {
  width: 8rem;
  padding: 0.5rem;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.4);
}
img {
  width: 2.5rem;
  margin-right: 0.5rem;
  border-radius: 0.2rem;
}
</style>
