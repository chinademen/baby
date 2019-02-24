<template>
  <div class="footer">
    <div class="footer_content">
      <p>香港贝安验血 Copyright © 2010-2016 香港贝安验血 版权所有</p>
      <p>地址：北京市海淀区中关村南大街22号 邮编：100081 总机：010-62179977 预约咨询：010-62179665/ 82195390</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
@import url("~assets/less/globalTheme.less");
.footer {
  background-color: #theme_fu_color[fu_color7];
  .footer_content {
    width: 1200px;
    margin: 0 auto;
    padding: 20px;
    p{
        text-align: center;
        line-height: 30px;
        font-size: 14px;
        color: #theme_fu_color[fu_color6];
    }
  }
}
</style>
