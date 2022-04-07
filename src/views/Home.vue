<template>
  <div class="container">
    <MainHero />
    <MainNews />
    <TeleProgram />
    <VoiceUA />
    <CelebrityNews />
    <BeautyNews />
    <TravelUa />
    <MoreNews />
    <VideoProgram />
  </div>
</template>

<script>
import MainHero from '@/components/MainHero.vue';
import MainNews from '@/components/MainNews.vue';
import TeleProgram from '../components/TeleProgram.vue';
import CelebrityNews from '../components/CelebrityNews.vue';
import BeautyNews from '../components/BeautyNews.vue';
import VoiceUA from '@/components/VoiceUa.vue';
import TravelUa from '@/components/TravelUa.vue';
import MoreNews from '@/components/MoreNews.vue';
import VideoProgram from '../components/VideoProgram.vue';
export default {
  name: 'HomeView',
  components: {
    MainHero,
    MainNews,
    TeleProgram,
    CelebrityNews,
    BeautyNews,
    VoiceUA,
    TravelUa,
    MoreNews,
    VideoProgram,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss"></style>
