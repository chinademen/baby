<template>
  <div class="appointment">
    <section class="appointment_main">
      <div class="appointment_meun">
        <el-steps :active="active" finish-status="finish" align-center>
          <el-step title="填写订单"></el-step>
          <el-step title="确认订单"></el-step>
        </el-steps>
      </div>
      <div class="appointment_form" v-if="active!==1">
        <div class="tip">
          <h3>完善基本信息，</h3>
          <p>让我们更好的为您服务：</p>
        </div>
        <!-- <ul>
                    <li>
                        <span> 您的称呼 <i>*</i> </span>
                        <el-input v-model="webuseradd.username" placeholder="请输您的称呼"></el-input>
                    </li>
                    <li>
                        <span> 电话号码 <i>*</i> </span>
                        <el-input v-model="webuseradd.telphone" placeholder="请输电话号码"></el-input>
                    </li>
                    <li>
                        <span> 微信 </span>
                        <el-input v-model="webuseradd.qq" placeholder="请输入微信"></el-input>
                    </li>
                    <li>
                        <span> QQ </span>
                        <el-input v-model="webuseradd.wechat" placeholder="请输入QQ"></el-input>
                    </li>
                    <li>
                        <span> 详细地址 </span>
                        <el-input v-model="webuseradd.address" placeholder="请输入详细地址"></el-input>
                    </li>
                    <li class="button">
                       
                        <el-button @click="next()" type="primary" round>提交订单</el-button>
                    </li>
        </ul>-->
        <el-form
          :model="webuseradd"
          status-icon
          :rules="rules"
          ref="webuseradd"
          label-width="100px"
          class="ul"
        >
          <el-form-item class="li" label="您的称呼" prop="username">
            <el-input v-model="webuseradd.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item class="li" label="电话号码" prop="telphone">
            <el-input v-model="webuseradd.telphone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item class="li" label="QQ" prop="qq">
            <el-input v-model.number="webuseradd.qq"></el-input>
          </el-form-item>
          <el-form-item class="li" label="微信" prop="wechat">
            <el-input v-model.number="webuseradd.wechat"></el-input>
          </el-form-item>
          <el-form-item class="li" label="详细地址" prop="address">
            <el-input v-model.number="webuseradd.address"></el-input>
          </el-form-item>

          <el-form-item class="button">
            <span>带*的为必须填写内容,其他的可以不需要填写^_^</span>
            <el-button type="primary" @click="submitForm('webuseradd')">确认提交</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="appointment_status" v-else>
        <div class="appointment_box">
          <i class="el-icon-success"></i>
          <h3>恭喜您,预约成功</h3>
          <p>稍后我们的工作人员会与您取得联系</p>
          <p>或者直接拨打24小时在线客服:13897521235</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      active: 0,
      webuseradd: {
        username: "",
        telphone: "",
        qq: "",
        wechat: "",
        address: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "该输入项为必填项!",
            trigger: "blur"
          }
        ],
        telphone: [
          {
            required: true,
            pattern: /^1[34578]\d{9}$/, //可以写正则表达式呦呦呦
            message: "请填写正确的手机号码",
            trigger: "blur"
          }
        ],
        qq: [
          {
            pattern: /^[1-9][0-9]{4,9}$/, //可以写正则表达式呦呦呦
            message: "请填写正确的QQ号码",
            trigger: "blur"
          }
        ],
        wechat: [
          {
            pattern: /^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/, //可以写正则表达式呦呦呦
            message: "请填写正确的微信号码",
            trigger: "blur"
          }
        ],
        address: [
          {
            pattern: /^1[34578]\d{9}$/, //可以写正则表达式呦呦呦
            message: "请填写正确的手机号码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  computed: {
    ...mapGetters({
      getIsUserAdd: "appointment/getIsUserAdd"
    })
  },
  methods: {
    ...mapActions({
      setUserAdd: "appointment/setUserAdd"
    }),

    submitForm(formName) {
    this.$refs[formName].validate(async (valid) => {
        if (valid) {
            await this.setUserAdd(this.webuseradd);
            if (this.getIsUserAdd == true) {
                this.active++;
            }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  destroyed() {
    if (this.active == 0 && this.webuseradd.telphone) {
      this.setUserAdd(this.webuseradd);
    }
  }
};
</script>

<style lang="less" scoped>
@import url("~assets/less/globalTheme.less");
.appointment {
  background-color: #theme_fu_color[fu_color5];
  .appointment_main {
    width: 1200px;
    margin: 0 auto;
    padding: 50px 0;
    .appointment_meun {
      background-color: #theme_fu_color[fu_color6];
      padding: 20px 85px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
      border-radius: 10px;
      margin-bottom: 20px;
    }
    .appointment_form {
      .appointment_meun();
      padding: 25px 85px;
      .tip {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        h3 {
          color: #theme_font_color[font_colo1];
          font-size: 24px;
          font-weight: 500;
        }
        p {
          color: #theme_font_color[font_colo2];
        }
      }
      .ul {
        .li {
          display: flex;
          align-items: center;
          padding: 20px 50px;
          border-bottom: 1px solid #theme_border_color[border_color3];
          overflow: hidden;
          font-size: 16px;
          span {
            width: 300px;
            color: #theme_font_color[font_colo1];
          }
          .el-input {
            width: 730px;
          }
          label {
            font-size: 16px;
          }
        }

        .button {
          span {
            flex: 1;
            color: #theme_fu_color[fu_color3];
          }
          .el-button {
            float: right;
          }
        }
      }
    }
    .appointment_status {
      .appointment_meun();
      height: 587px;
      background-color: #theme_fu_color[fu_color6];
      position: relative;
      .appointment_box {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        .el-icon-success {
          color: #theme_fu_color[fu_color1];
          font-size: 58px;
        }
        h3 {
          line-height: 40px;
          color: #theme_font_color[font_colo1];
        }
        p {
          line-height: 30px;
          color: #theme_font_color[font_colo2];
        }
      }
    }
  }
}
</style>
