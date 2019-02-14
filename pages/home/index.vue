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
    this.setArticleList({
      'pageNo': 1,
      'pageSize': 10
    })
  },
  methods:{
    ...mapActions({
      setArticleList:'home/setArticleList'
    })
  }
};
</script>
