<template>
    <div class="home">
       <banner-carousel> </banner-carousel>
       <section class="home_main">
         <div class="home_success">
           <ul>
             <li v-for="i in 6" :key="i">  
               <img src="http://www.baoma-baby.com/uploads/allimg/170525/1-1F525101440c5.jpg" alt="">
               <h3> 陈小姐如愿生下男宝宝 </h3>
               <p>
                 我们陕西这边重男轻女还是很严重的，老公还好，不说什么，公公婆婆很在乎这个，所以第一胎就预约了验血，是男宝，产后结果一致，这是第二次验了，给他们家生了两个男宝，如了他们的愿，女人真是苦啊，感谢香港贝安验血！
               </p>
             </li>
           </ul>
         </div>
       </section>
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
<style lang="less" scoped>
@import url("~assets/less/globalTheme.less");
.home{
  background-color:#theme_fu_color[fu_color5];
  .home_main{
    width: 100%;
    .home_success{
      width: 1200px;
      margin: 0 auto;
      padding: 50px 0;
      >h3{
        font-weight: 500;
        font-size: 30px;
        margin: 0 0 15px;
        color: #4a4a4a;
        text-align: center;
      }
      ul{
        overflow: hidden;
        li{
          float: left;
          width: 350px;
          height: 470px;
          margin: 0 25px 25px;
          background-color:#theme_fu_color[fu_color6];
          >img{
            width: 100%;
            display: block;
          }
          >h3{
            color: #theme_font_color[font_colo1];
            font-weight: 500;
            text-align: center;
            padding: 0 15px;
            margin-top: 15px;
          }
          >p{
            color: #theme_font_color[font_colo2];
            padding: 15px;
            text-indent: 2em;
            line-height: 30px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
