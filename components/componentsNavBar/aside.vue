<template>
  <div class="aside">
    <el-popover placement="left-start" trigger="hover">
      <p class="aside_p">预约热线</p>
      <p class="aside_p">138-9658-2451</p>
      <div slot="reference" class="aside_box">
        <img src="../../assets/image/phone.png" alt>
      </div>
    </el-popover>
    <el-popover placement="left-start" trigger="hover">
      <p class="aside_p">预约QQ</p>
      <P class="aside_p">2677865380</P>
      <div slot="reference" class="aside_box">
        <img src="../../assets/image/qq.png" alt>
      </div>
    </el-popover>
    <el-popover placement="left-start" trigger="hover">
      <p class="aside_p">
        <img src="../../assets/image/qr.jpg" alt>
      </p>
      <div slot="reference" class="aside_box">
        <img src="../../assets/image/weixin.png" alt>
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import url("~assets/less/globalTheme.less");
.aside {
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  z-index: 999;
  .aside_box {
    width: 60px;
    height: 60px;
    margin: 2px 0;
    background-color: #theme_fu_color[fu_color6];
    cursor: pointer;
    text-align: center;
    &:hover {
      background-color: #theme_border_color[border_color1];
    }
    img {
      width: 40px;
      height: 40px;
      margin-top: 10px;
    }
  }
}
.aside_p {
  font-size: 18px;
  text-align: center;
  line-height: 25px;
  img {
    width: 150px;
    height: 150px;
  }
}
</style>
