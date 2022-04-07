<template>
  <div class="container">
    <CountryVoice/>
    <CelebrityNews/>
  </div>
</template>

<script>
import CountryVoice from "@/components/VoiceUa.vue";
import CelebrityNews from "@/components/CelebrityNews.vue";
export default {
    name: "MoviesView",
    components: { CountryVoice, CelebrityNews }
}
</script>

<style>

</style>