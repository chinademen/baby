<template>
  <div class="asidelist">
    <ele-title :titleMsg="titleMsg"/>
    <ul>
      <li @click="pageGo(item)" v-for="item in dataList.data.list" :key="item.id">
        <div>◆ {{item.title}}</div>
      </li>
    </ul>
    <div class="page">
      <el-pagination
        small
        background
        layout="prev, pager, next"
        :pageSize="10"
        @current-change="handlecurrenteChange"
        :total="dataList.data.totalRecord"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import eleTitle from "~/components/componentsTitle/eleTitle";
export default {
  components: {
    eleTitle
  },
  props:{
    dataList:Object,
    titleMsg:String,
  },
  methods: {
    ...mapActions({
      saveArticleId: "article/saveArticleId",
    }),
    pageGo(props) {
      this.saveArticleId(props);
      this.$router.push({ path: `/article/${props.id}`});
    },
    handlecurrenteChange(val) {
      this.$emit('asideListChangePage', val)
    }
  }
};
</script>

<style lang="less" scoped>
@import url("~assets/less/globalTheme.less");
.asidelist {
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
