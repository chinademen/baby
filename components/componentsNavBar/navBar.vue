<template>
    <div class="baby_navBar">
      <div class="baby_menu">
        <img @click="handleSelect('home')" class="baby_menu_l" src="../../assets/image/logo.png" alt="">
        <el-menu
            :default-active="activeIndex"
            class="baby_menu_r"
            mode="horizontal"
            @select="handleSelect"
            background-color="#409EFF"
            text-color="#fff"
            active-text-color="#f9f67d">
            <el-menu-item :index="item.path" v-for="item in navList" :key="item.path">
               {{ item.name }}
            </el-menu-item>
        </el-menu>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "home",
      navList:[
        {name:'网站首页',path:'home'},
        {name:'验血攻略',path:'raiders'},
        {name:'成功案例',path:'case'},
        {name:'行业资讯',path:'information'}, // article
        {name:'DNA检测',path:'dna'},
        {name:'立即预约',path:'appointment'},
      ]
    };
  },
  methods: {
    handleSelect(key) {
      this.$router.push({ path: `/${key}` })
    }
  }
};
</script>
<style lang="less" scoped>
@import url("~assets/less/globalTheme.less");
.baby_navBar {
  background-color:#theme_color[color1];
  height: 80px;
  .baby_menu {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
    img{
      cursor: pointer;
    }
    li{
      margin-left: 20px;
    }
    .baby_menu_r{
      float: right;
      height: 80px;
      li{
        height: 80px;
        line-height: 80px;
      }
    }
    .baby_menu_l{
      height: 40px;
      margin-top: 20px;
    }
  }
}
</style>
