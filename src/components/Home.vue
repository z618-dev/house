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
<<<<<<< HEAD:src/components/Home.vue
          <li class="layui-nav-item"><a href="">{{ $t("lang.house") }}</a></li>
          <li class="layui-nav-item"><a href="">我的日常工作</a></li>
          <li class="layui-nav-item"><a href="">消息中心</a></li>
          <li class="layui-nav-item"><a href="">客源管理</a></li>
          <li class="layui-nav-item"><a href="">任务管理</a></li>
          <!-- <li class="layui-nav-item">
            <a href="javascript:;">其它系统</a>
=======
          <li class="layui-nav-item"><a href="">房源管理</a></li>
          <li class="layui-nav-item">
            <a href="javascript:;">我的日常工作</a>
>>>>>>> 7efeaa788d472ae0bb8996c69a3c1a8caa95c098:src/components/HelloWorld.vue
            <dl class="layui-nav-child">
              <dd><a href="">跟进报告</a></dd>
              <dd><a href="">咨询</a></dd>
              <dd><a href="">预约</a></dd>
            </dl>
<<<<<<< HEAD:src/components/Home.vue
          </li> -->
=======
          </li>
          <li class="layui-nav-item"><a href="">消息中心</a></li>
          <li class="layui-nav-item"><a href="">客源管理</a></li>
          <li class="layui-nav-item"><a href="">任务管理</a></li>
>>>>>>> 7efeaa788d472ae0bb8996c69a3c1a8caa95c098:src/components/HelloWorld.vue
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
<<<<<<< HEAD:src/components/Home.vue
          <li class="layui-nav-item c-change" @click="changeLaguages()">切换语言</li>
=======
          <li class="layui-nav-item" @click="changeLaguages()"><span class="langug">切换语言</span></li>
>>>>>>> 7efeaa788d472ae0bb8996c69a3c1a8caa95c098:src/components/HelloWorld.vue
        </ul>
      </div>

      <div class="layui-side layui-bg-black">
        <div class="layui-side-scroll">
          <ul class="layui-nav layui-nav-tree" lay-filter="test">
            <li class="layui-nav-item layui-nav-itemed">
              <a href="javascript:;">我的房源</a>
              <dl class="layui-nav-child">
                <dd><a href="javascript:;">我的一手房</a></dd>
                <dd><a href="javascript:;">我的二手房</a></dd>
              </dl>
            </li>
            <li class="layui-nav-item">
              <a href="javascript:;">公盘房源</a>
              <dl class="layui-nav-child">
                <dd><a href="javascript:;">一手房</a></dd>
                <dd><a href="javascript:;">二手房</a></dd>
              </dl>
            </li>
            <li class="layui-nav-item"><a href="">客源管理</a></li>
            <li class="layui-nav-item"><a href="">任务管理</a></li>
          </ul>
        </div>
      </div>

      <div class="layui-body">
        <!-- 内容主体区域 -->
        <div>内容主体区域</div>
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
<<<<<<< HEAD:src/components/Home.vue

<style>
.c-change{
  cursor: pointer;
=======
<style scoped>
.langug{
  color: rgba(255,255,255,.7);
>>>>>>> 7efeaa788d472ae0bb8996c69a3c1a8caa95c098:src/components/HelloWorld.vue
}
</style>
