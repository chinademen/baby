<template>
  <div class="baby_list">
    <ele-title :titleMsg="titleMsg"/>
    <ul>
      <li v-for="item in dataList.data.list" :key="item.id">
        <div class="top">
          <h3>{{ item.title }}</h3>
          <span>阅读 {{ item.views }}</span>
          <span>点击 {{ item.points }}</span>
        </div>
        <div class="botton">
          <img :src="item.imageurl" alt>
          <div class="right">
            <p v-html="item.content"></p>
          </div>
          <el-button class="list_button"  @click="pageGo(item)"  type="primary">查看更多</el-button>
        </div>
      </li>
    </ul>
    <div class="baby_pagination">
      <el-pagination
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
  props: {
    dataList: Object,
    titleMsg: String
  },
  methods: {
    ...mapActions({
      saveArticleId: "article/saveArticleId"
    }),
    handlecurrenteChange(val) {
      this.$emit("asideListChangePage", val);
    },
    pageGo(props) {
      this.saveArticleId(props);
      this.$router.push({ path: `/article/${props.id}` });
    }
  }
};
</script>
<style lang="less" scoped>
@import url("~assets/less/globalTheme.less");
.baby_list {
  width: 900px;
  float: left;
  background-color: #theme_fu_color[fu_color6];
  .baby_pagination {
    text-align: center;
    height: 50px;
    cursor: pointer;
    border-top: 20px solid #theme_fu_color[fu_color5];
    background-color: #theme_fu_color[fu_color5];
  }
  ul {
    overflow: hidden;
    padding: 20px;
    li {
      width: 100%;
      margin-bottom: 20px;
      cursor: pointer;
      .top {
        display: flex;
        justify-content: center;
        background-color: #theme_fu_color[fu_color5];
        padding: 10px;
        h3 {
          flex: 1;
          color: #theme_font_color[font_colo1];
          font-weight: 500;
        }
        span {
          margin-left: 10px;
          color: #theme_font_color[font_colo2];
        }
      }
      .botton {
        width: 100%;
        height: 200px;
        margin-top: 10px;
        position: relative;
        img {
          width: 300px;
          height: 200px;
          float: left;
        }
        .right {
          float: left;
          width: 560px;
          height: 200px;
          padding-left: 20px;
          text-indent: 2em;
          color: #theme_font_color[font_colo2];
          box-sizing: border-box;
          p {
            height: 150px;
            line-height: 30px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            /* autoprefixer: ignore next */
            -webkit-box-orient: vertical;
          }
        }
        .list_button {
          position: absolute;
          right: 0px;
          bottom: 0px;
        }
      }
    }
  }
}
</style>
