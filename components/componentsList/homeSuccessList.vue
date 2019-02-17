<template>
  <div class="home_success">
    <ele-title titleMsg='成功案例' /> 
    <ul>
      <li v-for="i in 6" :key="i">
        <img src="http://www.baoma-baby.com/uploads/allimg/170525/1-1F525101440c5.jpg" alt>
        <h3>陈小姐如愿生下男宝宝</h3>
        <p>我们陕西这边重男轻女还是很严重的，老公还好，不说什么，公公婆婆很在乎这个，所以第一胎就预约了验血，是男宝，产后结果一致，这是第二次验了，给他们家生了两个男宝，如了他们的愿，女人真是苦啊，感谢香港贝安验血！</p>
      </li>
    </ul>
  </div>
</template>

<script>
import eleTitle from '~/components/componentsTitle/eleTitle'
export default {
    components:{
        eleTitle
    }
};
</script>
<style lang="less" scoped>
@import url("~assets/less/globalTheme.less");
.home_success {
  width: 900px;
  float: left;
  background-color: #theme_fu_color[fu_color6];
  ul {
    overflow: hidden;
    padding: 20px;
    li {
      float: left;
      width: 420px;
      height: 470px;
      margin-bottom: 20px;
      background-color: #theme_fu_color[fu_color6];
      box-shadow: 0 1px 3px rgba(0,0,0,.08);
      cursor: pointer;
      &:hover{
        box-shadow: 0 5px 5px rgba(0,0,0,.08);
      }
      &:nth-child(even){
        margin-left: 20px;
      }
      > img {
        width: 100%;
        display: block;
      }
      > h3 {
        color: #theme_font_color[font_colo1];
        font-weight: 500;
        text-align: center;
        padding: 0 15px;
        margin-top: 15px;
      }
      > p {
        color: #theme_font_color[font_colo2];
        padding: 15px;
        text-indent: 2em;
        line-height: 30px;
        font-size: 14px;
      }
    }
  }
}
</style>
