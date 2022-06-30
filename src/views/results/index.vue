<template>
  <div class="box">
    <div
      id="slide1"
    >
      <div class="all_card">
        <div class="card" v-for="(item, i) in reslutData">
          <img
            :src="item.url"
            class="image"
            style="
              width: 160px;
              margin: 10px;
              margin-bottom: 0px;
              height: 160px;
              border-radius: 4%;
            "
          />
          <div style="padding: 14px; vertical-align: middle">
            <p>
              <span>类型：</span>
              <span>{{ item.tag }}</span>
            </p>
            <p>
              <span>方法：</span>
              <span>{{ item.type }}</span>
            </p>
            <p>
              <span>最优结果：</span>
              <span>{{ item.best_res }}</span>
            </p>
            <p>
              <span>最优概率：</span>
              <span>{{ item.best_pro }}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="all_card">
        <div class="card" v-for="(item, i) in reslutData_2">
          <img
            :src="item.url"
            class="image"
            style="
              width: 160px;
              margin: 10px;
              margin-bottom: 0px;
              height: 160px;
              border-radius: 4%;
            "
          />
          <div style="padding: 14px; vertical-align: middle">
            <p>
              <span>类型：</span>
              <span>{{ item.tag }}</span>
            </p>
            <p>
              <span>方法：</span>
              <span>{{ item.type }}</span>
            </p>
            <p>
              <span>最优结果：</span>
              <span>{{ item.best_res }}</span>
            </p>
            <p>
              <span>最优概率：</span>
              <span>{{ item.best_pro }}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="all_card">
        <div class="card" v-for="(item, i) in reslutData_3">
          <img
            :src="item.url"
            class="image"
            style="
              width: 160px;
              margin: 10px;
              margin-bottom: 0px;
              height: 160px;
              border-radius: 4%;
            "
          />
          <div style="padding: 14px; vertical-align: middle">
            <p>
              <span>类型：</span>
              <span>{{ item.tag }}</span>
            </p>
            <p>
              <span>方法：</span>
              <span>{{ item.type }}</span>
            </p>
            <p>
              <span>最优结果：</span>
              <span>{{ item.best_res }}</span>
            </p>
            <p>
              <span>最优概率：</span>
              <span>{{ item.best_pro }}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="all_card">
        <div class="card" v-for="(item, i) in reslutData_4">
          <img
            :src="item.url"
            class="image"
            style="
              width: 160px;
              margin: 10px;
              margin-bottom: 0px;
              height: 160px;
              border-radius: 4%;
            "
          />
          <div style="padding: 14px; vertical-align: middle">
            <p>
              <span>类型：</span>
              <span>{{ item.tag }}</span>
            </p>
            <p>
              <span>方法：</span>
              <span>{{ item.type }}</span>
            </p>
            <p>
              <span>最优结果：</span>
              <span>{{ item.best_res }}</span>
            </p>
            <p>
              <span>最优概率：</span>
              <span>{{ item.best_pro }}</span>
            </p>
          </div>
        </div>
      </div>
    
    </div>
    <LineCanvas
      :canvasWidth="canvasWidth"
      :canvasHeight="canvasHeight"
      :dotsNum="dotsNum"
      :isColor="isColor"
    >
    </LineCanvas>
  </div>
</template>
    
<script>
import LineCanvas from "vue-line-canvas";
import * as echarts from "echarts";
import { getResultData } from "@/api/data.js";
let inputElement = null;
export default {
  name: "results",
  data() {
    return {
      count: 0,
      canvasWidth: window.innerWidth, // canvas width
      canvasHeight: window.innerHeight, // canvas height
      dotsNum: 50, // dot number
      isColor: true, // is color
      reslutData: [],
      reslutData_2: [],
      reslutData_3: [],
      reslutData_4: [],
      onFetching: false,
      page: 1,
    };
  },
  mounted() {
    // let rec = true;
    // var v_page = this.page;
    // document.addEventListener("scroll", this.scrollHandle);
    var frame = document.getElementById("slide1");
    frame.className = "slide1 fadein";
    this.$axios
      .post("http://42.192.132.174:9001/TuanAPI/getRecentResRecords")
      .then((res) => {
        this.data = res.data;
        for (var i = 0; i < 20; i++) {
          var imgInfo = this.data[i].rimg.imgInfo;
          if (i < 5) {
            this.reslutData.push({
              tag: this.data[i].tag,
              type: this.data[i].type,
              best_res: Object.keys(imgInfo)[0],
              best_pro: Object.values(imgInfo)[0],
              url: this.data[i].rimg.url
            });
          } else if(i >=5 && i < 10) {
            this.reslutData_2.push({
              tag: this.data[i].tag,
              type: this.data[i].type,
              best_res: Object.keys(imgInfo)[0],
              best_pro: Object.values(imgInfo)[0],
              url: this.data[i].rimg.url
            });
          }else if(i>=10 && i < 15) {
            this.reslutData_3.push({
              tag: this.data[i].tag,
              type: this.data[i].type,
              best_res: Object.keys(imgInfo)[0],
              best_pro: Object.values(imgInfo)[0],
              url: this.data[i].rimg.url
            });
          }else {
            this.reslutData_4.push({
              tag: this.data[i].tag,
              type: this.data[i].type,
              best_res: Object.keys(imgInfo)[0],
              best_pro: Object.values(imgInfo)[0],
              url: this.data[i].rimg.url
            });
          }
        }
      });
  },
  components: {
    LineCanvas,
  },
};
</script>

<style lang="less" scoped>
@import "@/css/reset.css";
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.all_card {
  
  display: flex;
  justify-content: flex-start;
}
.card {
  width: 200px;
  height: 300px;
  margin: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.5s;
  border-radius: 4%;
  color: white;
}
.card:hover {
  zoom: 0.98;
}
</style>