<template>
    <div class="home_callUs">
        <img src="../../assets/image/logo.jpg" alt="">
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
@import url("~assets/less/globalTheme.less");
.home_callUs{
    width: 1200px;
    margin: 20px auto 0;
    border-radius: 8px;
    padding: 20px;
    font-size: 28px;
    box-sizing: border-box;
    color: #theme_fu_color[fu_color1];
    background-color: #theme_fu_color[fu_color6];
    box-shadow: 0 1px 3px rgba(0,0,0,.08);
    img{
        width: 100%;
        border-radius:8px;
        display: block;
    }
}
</style>
