<template>
  <div class="home">
    <section class="home_main">
      <div class="home_content">
        <common-list 
          v-if="getRaiderslist"
          :dataList="getRaiderslist"
          titleMsg="验血攻略"
          v-on:asideListChangePage="babyListChangePage"
        />
        <aside-list
          v-if="getArticleList"
          :dataList="getArticleList"
          titleMsg="行业资讯"
          v-on:asideListChangePage="asideListChangePage"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import commonList from "~/components/componentsList/commonList";
import asideList from "~/components/componentsList/asideList";
export default {
  asyncData(context) {
    const { dispatch } = context.store;
    const params = {
      pageNo: 1,
      pageSize: 10
    };
    dispatch("common/setArticleList", params);
    dispatch("common/setRaiderslist", params);
  },
  components: {
    commonList,
    asideList
  },
  computed: {
    ...mapGetters({
      getArticleList: "common/getArticleList",
      getRaiderslist:"common/getRaiderslist"
    })
  },
  methods: {
    ...mapActions({
      setArticleList: "common/setArticleList",
      setRaiderslist:"common/setRaiderslist",
    }),
    babyListChangePage(e) {
      this.setRaiderslist({
        pageNo: e,
        pageSize: 10
      });
    },
    asideListChangePage(e) {
      this.setArticleList({
        pageNo: e,
        pageSize: 10
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import url("~assets/less/globalTheme.less");
.home {
  background-color: #theme_fu_color[fu_color5];
  .home_main {
    width: 100%;
    overflow: hidden;
    .home_content {
      width: 1200px;
      margin: 20px auto;
      overflow: hidden;
    }
  }
}
</style>