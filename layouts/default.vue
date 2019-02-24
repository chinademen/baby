<template>
  <div class="nuxt">
    <section class="container">
      <nav-bar/>
      <banner-carousel /> 
    </section>
    <nuxt/>
    <Aside/>
    <footer-bar />
  </div>
</template>
<script>
import NavBar from "~/components/componentsNavBar/navBar.vue";
import Aside from "~/components/componentsNavBar/aside.vue";
import bannerCarousel from "~/components/componentsCarousel/bannerCarousel";
import footerBar from "~/components/componentsNavBar/footerBar";
export default {
  components: {
    NavBar,
    Aside,
    bannerCarousel,
    footerBar
  }
};
</script>
