<template>
  <div class="main">
    <NavBar></NavBar>
    <div class="container mx-auto">
      <InfoHero></InfoHero>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import InfoHero from "@/components/InfoHero.vue";

export default {
  components: {
    NavBar,
    InfoHero,
  },
  state: {
    navigation: {
      show: true,
    },
  },
};
</script>

<style lang="scss">
.main {
  background-image: url("../assets/images/foto_fundo.jpg");
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
}
@media (max-width: 640px) {
  .main {
    background-image: url("../assets/images/foto_fundo_mobile.jpg");
  }
}
</style>
