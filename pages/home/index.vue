<template>
    <div class="home">
       <banner-carousel /> 
       <section class="home_main">
         <home-call-us />
         <div class="home_content">
            <home-success-list />
            <home-news />
         </div>
         
       </section>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import bannerCarousel from "~/components/componentsCarousel/bannerCarousel";
import homeSuccessList from "~/components/componentsList/homeSuccessList";
import homeCallUs from '~/components/componentsTitle/homeCallUs';
import homeNews from '~/components/componentsList/homeNews';
export default {
  components: {
    bannerCarousel,
    homeSuccessList,
    homeCallUs,
    homeNews
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
<style lang="less" scoped>
@import url("~assets/less/globalTheme.less");
.home{
  background-color:#theme_fu_color[fu_color5];
  .home_main{
    width: 100%;
    .home_content{
      width: 1200px;
      margin:20px auto;
      overflow: hidden;
    }
  }
}
</style>
