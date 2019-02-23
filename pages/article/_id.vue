<template>
  <div class="article">
      <h3>
          {{ getArticleId.title }}
      </h3>
      <p>
          <span> 作者: {{ getArticleId.author }} </span>
          <span> 阅读量: {{ getArticleId.views }} </span>
          <span> 点击量: {{ getArticleId.points }} </span>
      </p>
      <section v-html="getArticleId.content">
      </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      getArticleId: "article/getArticleId"
    })
  }
};
</script>
<style lang="less" scoped>
@import url("~assets/less/globalTheme.less");
.article{
    width: 1200px;
    margin: 0 auto;
    padding: 50px 0;
    h3{
        text-align: center;
    }
    >p{
        text-align: center;
    }
    section{
        margin-top: 20px;
        line-height: 30px;
    }
}
</style>
