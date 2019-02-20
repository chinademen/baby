<template>
  <div>
    <section class="container">
      <nav-bar/>
    </section>
    <nuxt/>
    <Aside/>
  </div>
</template>
<script>
import NavBar from "~/components/componentsNavBar/navBar.vue";
import Aside from "~/components/componentsNavBar/aside.vue";
export default {
  components: {
    NavBar,
    Aside
  }
};
</script>
