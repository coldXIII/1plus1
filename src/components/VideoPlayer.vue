<template>
  <div class="player">
    <div class="player-sizer">
      <video controls>
        <source type="video/mp4" src="../assets/video/travelUA.mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
};
</script>
<style scoped>
.player {
  width: 100%;
}
.player video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.player-sizer {
  position: relative;
  width: 80%;
  padding-top: 56%;
  margin: 1rem auto;
}
</style>