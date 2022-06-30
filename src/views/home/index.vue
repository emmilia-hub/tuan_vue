<template>
  <div class="h-back">
    <div class="home-container">
      <div class="wrap" ref="editor">
        <div class="product-info">
          <h1 class="title">综合图像对抗防御平台</h1>
          <ul class="introduce">
            <li v-for="(item, i) in content" :key="i">{{ item }}</li>
          </ul>
        </div>
        <pyramidTrend />
        <seamless />
        <scrollArc/>
      </div>
    </div>
  </div>
</template>

<script>
import LineCanvas from "vue-line-canvas";
import scrollArc from "@/components/scrollArc";
import pyramidTrend from "@/components/pyramidTrend"; // 金字塔趋势
import seamless from "@/components/seamless"; // 新闻无缝滚动
import { screenSize } from "@/assets/js/utils";
export default {
  name: "home",
  data() {
    return {
      canvasWidth: window.innerWidth, // canvas width
      canvasHeight: window.innerHeight, // canvas height
      dotsNum: 50, // dot number
      isColor: true, // is color
      content: [
        "综合图像对抗防御平台",
        "全面解决图像干扰问题",
        "对抗攻击：生成对抗样本",
        "对抗检测：对抗样本检测",
        "对抗防御：全面综合防御",
        "结果分析：可视结果分析"
      ],
    };
  },
  components: {
    LineCanvas,
    pyramidTrend,
    seamless,
    scrollArc,
  },
  mounted() {
    screenSize(this.$refs.editor);
    var elem = document.createElement("script");
    elem.src = "http://www.lanrenzhijia.com/ajaxjs/jquery.min.js";
    document.body.appendChild(elem);
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "@/css/lanrenzhijia.css";
@keyframes fadeInBig {
  from {
    opacity: 0;
    transform: scale(2.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.h-back {
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  z-index: -10;
  zoom: 1;
  background-position: center 0;
}
.product-info {
  width: 600px;
  height: 100%;
  padding-top: 20%;
}
span.reference {
  font-family: Arial;
  position: fixed;
  right: 10px;
  top: 10px;
  font-size: 10px;
}
span.reference a {
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  text-shadow: 1px 1px 1px #000;
  margin-left: 20px;
}
span.reference a:hover {
  color: #ddd;
}
h1.title {
  width: 600px;
  height: 180px;
  position: fixed;
  top: 100px;
  left: 20px;
  text-indent: -9000px;
  background: transparent url(@/assets/images/title.png) no-repeat top left;
  z-index: 2;
}
.introduce {
  font-size: 0;
  margin-top: 36px;
  margin-bottom: 80px;
  list-style: none;
}
.introduce li {
  color: #fff;
  font-size: 32px;
  text-align: left;
  margin-left: 20%;
  line-height: normal;
  margin-bottom: 25px;
  font-family: '华文隶书';
}
.introduce li:before {
    content: "";
    display: inline-block;
    background-color: #00d9ad;
    width: 14px;
    height: 14px;
    border-radius: 50px;
    margin-right: 10px;
    vertical-align: middle;
}
.home-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .wrap {
    transform-origin: 0px 0px 0px;
    background: url(@/assets/img/bj.jpg) no-repeat;
    background-size: contain;
    background-position: 50% 0;
    background-color: rgb(0, 0, 0);
    min-width: auto;
    width: 1920px;
    min-height: auto;
    height: 1080px;
    overflow: auto;
    .top {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 80px;
      background-color: transparent;
      background: url(@/assets/img/top_nav.png) no-repeat;
      background-position: 65% 0;
      border: none;
      overflow: hidden;
    }
  }
}
</style>