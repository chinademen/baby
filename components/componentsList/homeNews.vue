<template>
  <div class="home_news" v-if="getArticleList">
    <ele-title titleMsg="行业资讯"/>
    <ul>
      <li @click="pageGo(item)" v-for="item in getArticleList.data.list" :key="item.id">
        <div>◆ {{item.title}}</div>
        <div>[{{item.views}}阅读] [{{item.points}}点击]</div>
      </li>
    </ul>
    <div class="page">
      <el-pagination
        small
        layout="prev, pager, next"
        :pageSize="pageSize"
        @current-change="handlecurrenteChange"
        :total="getArticleList.data.totalRecord"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import eleTitle from "~/components/componentsTitle/eleTitle";
export default {
  data() {
    return {
      pageSize: 10
    };
  },
  components: {
    eleTitle
  },
  computed: {
    ...mapGetters({
      getArticleList: "home/getArticleList"
    })
  },
  methods: {
    ...mapActions({
      saveArticleId: "article/saveArticleId",
      setArticleList:'home/setArticleList'
    }),
    pageGo(props) {
      this.saveArticleId(props);
      this.$router.push({ path: "/article", query: { id: props.id } });
    },
    handlecurrenteChange(val) {
      this.setArticleList({
        pageNo: val,
        pageSize: 10
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import url("~assets/less/globalTheme.less");
.home_news {
  width: 280px;
  float: right;
  background-color: #theme_fu_color[fu_color6];
  ul {
    li {
      padding: 10px;
      border-bottom: 1px dashed #theme_border_color[border_color3];
      cursor: pointer;
      > div {
        &:nth-child(1) {
          color: #theme_font_color[font_colo1];
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          &:hover {
            color: #000000;
          }
        }
        &:nth-child(2) {
          text-align: right;
          color: #theme_font_color[font_colo2];
          font-size: 12px;
        }
      }
    }
  }
  .page {
    padding: 10px;
    .el-pagination {
      text-align: center;
    }
  }
}
</style>
