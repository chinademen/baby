<template>
  <div>
    <section class="container">
      <nav-bar/>
      <banner-carousel /> 
    </section>
    <nuxt/>
    <Aside/>
  </div>
</template>
<script>
import NavBar from "~/components/componentsNavBar/navBar.vue";
import Aside from "~/components/componentsNavBar/aside.vue";
import bannerCarousel from "~/components/componentsCarousel/bannerCarousel";
export default {
  components: {
    NavBar,
    Aside,
    bannerCarousel
  }
};
</script>
