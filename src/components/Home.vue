<template>
  <div class="content">
    <!-- <span>{{ $t('lang.home')}}</span>
    <span>{{ $t('lang.name')}}</span>
    <span @click="changeLaguages()">切换语言</span> -->
    <div class="layui-layout layui-layout-admin">
      <div class="layui-header">
        <div class="layui-logo">{{ $t("lang.logo") }}</div>
        <!-- 头部区域（可配合layui已有的水平导航） -->
        <ul class="layui-nav layui-layout-left">
          <li class="layui-nav-item"><a href="">{{ $t("lang.house") }}</a></li>
          <li class="layui-nav-item"><a href="">{{ $t("lang.work") }}</a></li>
          <li class="layui-nav-item"><a href="">{{ $t("lang.information") }}</a></li>
          <li class="layui-nav-item"><a href="">{{ $t("lang.customer") }}</a></li>
          <li class="layui-nav-item"><a href="">{{ $t("lang.task") }}</a></li>
        </ul>
        <ul class="layui-nav layui-layout-right">
          <li class="layui-nav-item">
            <a href="javascript:;">
              <img src="http://t.cn/RCzsdCq" class="layui-nav-img" />
              贤心
            </a>
            <dl class="layui-nav-child">
              <dd><a href="">基本资料</a></dd>
              <dd><a href="">安全设置</a></dd>
            </dl>
          </li>
          <li class="layui-nav-item c-change" @click="changeLaguages()">切换语言</li>
      </ul>
      </div>

      <div class="layui-side layui-bg-black">
        <div class="layui-side-scroll">
          <ul class="layui-nav layui-nav-tree" lay-filter="test">
            <li class="layui-nav-item layui-nav-itemed">
              <a href="javascript:;">{{ $t("lang.myhouse") }}</a>
              <dl class="layui-nav-child">
                <dd><a href="javascript:;">{{ $t("lang.myfirsthouse") }}</a></dd>
                <dd><a href="javascript:;">{{ $t("lang.mysecondhouse") }}</a></dd>
              </dl>
            </li>
            <li class="layui-nav-item">
              <a href="javascript:;">{{ $t("lang.public") }}</a>
              <dl class="layui-nav-child">
                <dd><a href="javascript:;">{{ $t("lang.publicfirsthouse") }}</a></dd>
                <dd><a href="javascript:;">{{ $t("lang.publicsecondhouse") }}</a></dd>
              </dl>
            </li>
            <li class="layui-nav-item">
              <a href="javascript:;">{{ $t("lang.mycustomer") }}</a>
              <dl class="layui-nav-child">
                <dd><a href="javascript:;">{{ $t("lang.mycustomers") }}</a></dd>
              </dl>
            </li>
            <li class="layui-nav-item"><a href="">{{ $t("lang.mytask") }}</a></li>
          </ul>
        </div>
      </div>

      <div class="layui-body">
        <!-- 内容主体区域 -->
        <div class="search-box">
          <input placeholder="楼盘搜索" />
          <button type="perimary">搜索</button>
          <button class="add" type="perimary">新增</button>
        </div>
        <div class="box">
          <div class="item">
            <img class="item-img" src="../assets/image/1.jpg" />
            <div class="item-right">
              <div>MOSELF</div>
              <div>CARLINGFORD</div>
            </div>
            <div class="item-num">
              <div>访问总数：</div>
              <div>剩余房数：</div>
            </div>
          </div>

        </div>
      </div>

      <div class="layui-footer">© layui.com - 底部固定区域</div>
    </div>
  </div>
</template>

<script>
import api from "@/api/api";
export default {
  name: "Home",
  data() {
    return {
      lang: "zh",
    };
  },
  mounted() {
    // layui.use(["layer", "form"], function () {
    //   var layer = layui.layer
    //   layer.msg("Hello World");
    // });
  },
  methods: {
    changeLaguages() {
      let lang = this.$i18n.locale === "zh" ? "en" : "zh";
      this.$i18n.locale = lang;
      console.log(this.$i18n.locale);
    },
    getList() {
      api
        .getListAPI(data)
        .then((res) => {
          //数据处理
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
.c-change{
  cursor: pointer;
}
.search-box{
  text-align: right;
  flex: 1;
  margin: 10px;
  padding: 10px;
  height: 60px;
  border: 1px solid gainsboro;
}
.box{
  display: flex;
  justify-content: space-between; /* 横向中间自动空间 */
  flex-wrap: wrap;
}
.item{
  width: 18%;
  height: 120px;
  border: 1px solid gainsboro;
  margin: 10px;
}
.item-img{
  width: 30%;
  height: 60px;
  margin: 10px;
  border-radius: 4px;
  float: left;
}
.item-right{
  text-align: left;
  margin: 10px;
  float: right;
}
.item-num{
  float: left;
  margin-top:80px;
  margin-left: -100px;
}
</style>
