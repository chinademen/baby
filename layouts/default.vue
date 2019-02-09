<template>
  <div>
    <section class="container">
      <nav-bar/>
    </section>
    <nuxt/>
  </div>
</template>
<script>
import NavBar from "~/components/componentsNavBar/navBar.vue";
export default {
  components: {
    NavBar
  }
};
</script>
