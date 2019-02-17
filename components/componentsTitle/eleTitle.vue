<template>
    <div class="ele_title">
    <i class="el-icon-question"></i> {{ titleMsg }}
    </div>
</template>

<script>
export default {
    props:{
        titleMsg:String
    }
}
</script>

<style lang="less" scoped>
@import url("~assets/less/globalTheme.less");
.ele_title{
    padding:20px;
    font-size: 16px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #theme_border_color[border_color2];
    color: #theme_font_color[font_colo2];
    i{
        font-size: 24px;
        margin-right: 5px;
        color: #theme_color[color1];
    }
}
</style>
