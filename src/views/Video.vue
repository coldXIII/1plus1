<template>
 <div class="container">
   <VideoProgram class="video"/>
 </div>
</template>

<script>
import VideoProgram from "../components/VideoProgram.vue";
export default {
name:'VideoView',
components: { VideoProgram },
}
</script>

<style lang="scss" scoped>
.video{
  margin-top: 4rem;
}

</style>