<template>
  <div class="banner">
    <el-carousel height="500px"  class="banner_box">
      <el-carousel-item v-for="item in 2" :key="item">
          <img src="~assets/image/banner.jpg" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
.banner{
    width: 100%;
    height: 500px;
    .banner_box{
        &:extend(.banner);
    }
}  
</style>