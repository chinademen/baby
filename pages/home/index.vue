<template>
    <div >
       <banner-carousel> </banner-carousel>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import bannerCarousel from "~/components/componentsCarousel/bannerCarousel.vue";
export default {
  components: {
    bannerCarousel
  },
  created(){
    this.setArticleList()
  },
  methods:{
    ...mapActions(['setArticleList'])
  }
};
</script>
