<template>
    <div class="baby_navBar">
      <div class="baby_menu">
        <img class="baby_menu_l" src="../../assets/image/logo.png" alt="">
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
        {name:'首页',path:'home'},
        {name:'验血攻略',path:'strategy'},
        {name:'验血医院',path:'hospital'},
        {name:'成功案例',path:'case'},
        {name:'行业资讯',path:'information'},
        {name:'机构简介',path:'introduction'},
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
  .baby_menu {
    width: 1200px;
    height: 60px;
    margin: 0 auto;
    li{
      margin-left: 20px;
    }
    .baby_menu_r{
      float: right;
    }
    .baby_menu_l{
      height: 40px;
      margin-top: 10px;
    }
  }
}
</style>
