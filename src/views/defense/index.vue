<template>
  <div class="box">
    <div id="slide1" style="display: none">
      <div class="all_card">
        <div
          class="card"
          v-for="(item, i) in reslutData"
          @click="selectItem(item.url,item.id)"
        >
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
        <div
          class="card"
          v-for="(item, i) in reslutData_2"
          @click="selectItem(item.url,item.id)"
        >
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
        <div
          class="card"
          v-for="(item, i) in reslutData_3"
          @click="selectItem(item.url,item.id)"
        >
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
        <div
          class="card"
          v-for="(item, i) in reslutData_4"
          @click="selectItem(item.url,item.id)"
        >
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
    <div id="slide">
      <div id="up_pre">
        <div class="upload" style="margin-top: 15%">
          <el-upload
            id="element-up"
            :class="{ hide: hideUpload }"
            :action="autoApi"
            list-type="picture-card"
            :limit="1"
            :http-request="modelUpload"
            :before-upload="handleBefore"
            :file-list="picList"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-change="handleIntroduceUploadHide"
            :on-success="handleSuccess"
            :on-error="handleError"
            ref="file"
            style="margin-bottom: 5px"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <img id="newPicture" :src="getURL" />
          <el-button :disabled="flag" @click="showResults"
            >点此选择从服务器上传</el-button
          >
        </div>
        <div class="btn">
          <el-select
            :disabled="flag"
            ref="myselect"
            v-model="value"
            @change="selectWorkName"
            placeholder="请选择防御方式"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-button
            plain
            :loading="confirmTag"
            :class="{ disabled: loading }"
            @click="handleConfirm()"
            >开始防御</el-button
          >
        </div>
      </div>
      <div id="up_next" style="display: none;min-width:1200px">
        <div style="clear: both; height: 30px"></div>
        <div id="original">
          <div
            id="imgOrig"
            style="
              float: left;
              width: 200px;
              height: 200px;
              border-radius: 4%;
              margin-left: 30px;
              margin-top: 30px;
            "
          >
            <img
              :src="imgOriginal"
              style="
              width: 200px;
              margin-bottom: 10px;
              height: 200px;
              border-radius: 4%;
            "
            />
            <el-button id="el_button_1" @click="downloadIamge()"
              >原图</el-button
            >
          </div>
          <!-- <img
            style="float: left; margin-left: 100px; margin-top: 60px"
            src="../../assets/images/err.png"
          /> -->
          <div class="table">
            <el-table
              id="table_1"
              :data="tableData"
              :header-cell-style="{ background: 'rgba(0,0,0,0.4)' }"
              :body-cell-style="{ color: '#fff' }"
              tooltip-effect="dark"
              style="width: 400px"
            >
              <el-table-column
                :label="item.label"
                :property="item.prop"
                v-for="item in tableHeader"
                :key="item.prop"
                align="center"
              >
                <template slot-scope="scope">
                  <span :style="{ color: '#fff' }">{{
                    scope.row[scope.column.property]
                  }}</span>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div id="bar_pre" ref="echarts"></div>
        </div>
        <div style="clear: both; height: 30px"></div>
        <div id="results">
          <div
            id="imgRes"
            style="
              float: left;
              width: 200px;
              height: 200px;
              margin-top: 30px;
              border-radius: 4%;
              margin-left: 30px;
            "
          >
            <img
              :src="imgResult"
              style="
              width: 200px;
              margin-bottom: 10px;
              height: 200px;
              border-radius: 4%;
            "
            />
            <el-button id="el_button_2" @click="downloadIamge()"
              >查看结果</el-button
            >
          </div>
          <!-- <img
            style="float: left; margin-left: 100px; margin-top: 60px"
            src="../../assets/images/err.png"
          /> -->
          <div class="table">
            <el-table
              id="table_2"
              :data="tableData_2"
              :header-cell-style="{ background: 'rgba(0,0,0,0.4)' }"
              tooltip-effect="dark"
              style="width: 400px"
            >
              <el-table-column
                :label="item.label"
                :property="item.prop"
                v-for="item in tableHeader"
                :key="item.prop"
                align="center"
              >
                <template slot-scope="scope">
                  <span :style="{ color: '#fff' }">{{
                    scope.row[scope.column.property]
                  }}</span>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div id="bar_next" ref="echarts"></div>
          <div style="clear: both"></div>
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
var names_1 = [];
var nums_1 = [];
var names_2 = [];
var nums_2 = [];
var book = 1;
import LineCanvas from "vue-line-canvas";
import resultCom from "@/components/resultCom.vue";
import cakeLink from "@/components/cakeLink.vue";
import echartsCom from "@/components/echartsCom.vue";
import * as echarts from "echarts";
import { getData } from "@/api/data.js";
let inputElement = null;
export default {
  name: "defense",
  data() {
    return {
      flag: false,
      imageTest: "",
      picture: "",
      autoApi: "http://42.192.132.174:9001/TuanAPI/domain",
      picList: [],
      imgOriginal: "",
      imgResult: "",
      confirmTag: false,
      hideUpload: false,
      limitCount: 1,
      loading: false,
      dialogImageUrl: "",
      dialogVisible: false,
      canvasWidth: window.innerWidth, // canvas width
      canvasHeight: window.innerHeight, // canvas height
      dotsNum: 50, // dot number
      isColor: true, // is color
      value: "",
      reslutData: [],
      reslutData_2: [],
      reslutData_3: [],
      reslutData_4: [],
      getURL: "",
      getId:"",
      options: [
        {
          value: "BF_adv",
          label: "BF_adv",
        },
        {
          value: "adv_inception_v3",
          label: "adv_inception_v3",
        },
        {
          value: "ens3_adv_inception_v3",
          label: "ens3_adv_inception_v3",
        },
        {
          value: "ens4_adv_inception_v3",
          label: "ens4_adv_inception_v3",
        },
      ],
      tableHeader: [
        {
          label: "结果标签",
          prop: "lab",
        },
        {
          label: "可能性",
          prop: "percent",
        },
      ],
      tableData: [],
      tableData_2: [],
    };
  },
  components: {
    LineCanvas,
    cakeLink,
    resultCom,
    echarts,
  },
  mounted() {
    var frame = document.getElementById("slide");
    frame.className = "slide fadein";
    var frame_1 = document.getElementById("slide1");
    frame_1.className = "slide1 fadein";
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
              url: this.data[i].rimg.url,
              id: this.data[i].rimg.id
            });
          } else if (i < 10) {
            this.reslutData_2.push({
              tag: this.data[i].tag,
              type: this.data[i].type,
              best_res: Object.keys(imgInfo)[0],
              url: this.data[i].rimg.url,
              best_pro: Object.values(imgInfo)[0],
              id: this.data[i].rimg.id
            });
          } else if (i < 15) {
            this.reslutData_3.push({
              tag: this.data[i].tag,
              type: this.data[i].type,
              best_res: Object.keys(imgInfo)[0],
              best_pro: Object.values(imgInfo)[0],
              url: this.data[i].rimg.url,
              id: this.data[i].rimg.id
            });
          } else {
            this.reslutData_4.push({
              tag: this.data[i].tag,
              type: this.data[i].type,
              best_res: Object.keys(imgInfo)[0],
              best_pro: Object.values(imgInfo)[0],
              url: this.data[i].rimg.url,
              id: this.data[i].rimg.id
            });
          }
        }
      });
  },
  methods: {
    selectItem(url,id) {
      this.getURL = url;
      this.getId = id;
      console.log(this.getURL);
      console.log(this.getId);
      let defense_type = this.$refs.myselect.selected.label;
      document.getElementById("slide1").style.display = "none";
      document.getElementById("slide").style.display = "table";
      document.getElementById("element-up").style.display = "none";
      document.getElementById("newPicture").style.display = "block";
    },
    modelUpload(param) {
      // 可以在上传之前就行文件类型和大小处理
      this.picture = param.file;
    },

    handleRemove(file, fileList) {
      this.hideUpload = fileList.length >= this.limitCount;
    },
    handlePictureCardPreview(file, fileList) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleIntroduceUploadHide(file, fileList) {
      this.picList = fileList;
      this.hideUpload = fileList.length >= this.limitCount;
    },
    handleConfirm() {
      this.$refs.file.submit(); // 手动上传
      let defense_type = this.$refs.myselect.selected.label;
      if (defense_type == "" || defense_type == null) {
        this.$message.error("请选择防御方式！");
      } else {
        this.confirmTag = true;
        this.flag = true;
      }
      var formData = new FormData();
      var baseUrl, param;
      formData.append("file", this.picture);
      if (this.getURL == "" || this.getURL == null) {
        baseUrl = "http://42.192.132.174:9001/TuanAPI/domain";
        param = {
          params: {
            tag: "defense",
            type: defense_type
          },
        };
      } else {
        baseUrl = "http://42.192.132.174:9001/TuanAPI/domainByRid";
        param = {
          params: {
            tag: "defense",
            type: defense_type,
            id: this.getId
          },
        };
      }
      console.log(baseUrl);
      this.$axios.post(baseUrl, formData, param).then((res) => {
        var i = 0,
          j = 0;
        this.data_1 = res.data.record.simg;
        this.data_2 = res.data.record.rimg;
        this.imgOriginal = this.data_1.url;
        this.imgResult = this.data_2.url;
        document.getElementById("up_pre").style.display = "none";
        document.getElementById("up_next").style.display = "block";
        document.getElementById("el_button_1").style.display = "inline";
        document.getElementById("el_button_2").style.display = "inline";
        document.getElementById("table_1").style.display = "inline";
        document.getElementById("table_2").style.display = "inline";
        this.confirmTag = false;
        this.flag = true;
        for (var imgName in this.data_1.imgInfo) {
          names_1[i] = imgName;
          nums_1[i] = this.data_1.imgInfo[imgName];
          i++;
        }
        for (var imgName in this.data_2.imgInfo) {
          names_2[j] = imgName;
          nums_2[j] = this.data_2.imgInfo[imgName];
          j++;
        }
        for (var i = 0; i < names_2.length; i++) {
          this.tableData.push({
            lab: names_1[i],
            percent: nums_1[i],
          });
          this.tableData_2.push({
            lab: names_2[i],
            percent: nums_2[i],
          });
        }
        var myChartBar_1 = echarts.init(
          document.getElementById("bar_next"),
          "dark"
        );
        var myChartBar_2 = echarts.init(
          document.getElementById("bar_pre"),
          "dark"
        );
        // 显示标题，图例和空的坐标轴
        myChartBar_2.setOption({
          title: {
            text: "防御前识别结果",
            textStyle: {
              color: "white",
              fontSize: "12",
              fontWeight: "400",
              fontStyle: "normal",
              position: "center",
            },
          },
          tooltip: {
            trigger: "axis", //坐标轴触发提示框，多用于柱状、折线图中
          },
          toolbox: {
            feature: {
              dataView: { show: true, readOnly: false },
              magicType: { show: true, type: ["line", "bar"] },
              restore: { show: true },
              saveAsImage: { show: true },
            },
          },
          xAxis: {
            name: "Label",
            nameLocation: "end",
            type: "category",
            data: names_1,
            axisLabel: {
              interval: 0,
              rotate: 40,
            },
          },
          yAxis: {},
          series: [
            {
              name: "probably",
              type: "bar",
              data: nums_1,
              barWidth: "20px",
            },
          ],
          color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80"],
        });
        myChartBar_1.setOption({
          title: {
            text: "防御后识别结果",
            textStyle: {
              color: "white",
              fontSize: "12",
              fontWeight: "400",
              fontStyle: "normal",
              position: "center",
            },
          },
          tooltip: {
            trigger: "axis", //坐标轴触发提示框，多用于柱状、折线图中
          },
          toolbox: {
            feature: {
              dataView: { show: true, readOnly: false },
              magicType: { show: true, type: ["line", "bar"] },
              restore: { show: true },
              saveAsImage: { show: true },
            },
          },
          xAxis: {
            name: "Label",
            nameLocation: "end",
            type: "category",
            data: names_2,
            axisLabel: {
              interval: 0,
              rotate: 40,
            },
          },
          yAxis: {},
          series: [
            {
              name: "probably",
              type: "bar",
              data: nums_2,
              barWidth: "20px",
            },
          ],
          color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80"],
        });
      });
    },
    selectWorkName(id) {
      let selectedName = {};
      selectedName = this.options.find((item) => {
        return item.value === id;
        //筛选出匹配数据，是对应数据的整个对象
      });
    },
    handleSuccess(response, file, fileList) {
      this.picList = fileList;
      this.$message({
        message: "图片上传成功",
        type: "success",
      });
      this.$refs.upload.clearFiles();
    },
    handleError(err, file, fileList) {
      this.$message.error(err.msg);
    },
    handleBefore(file) {
      // 格式、大小限制
      const isJPG =
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/jpg";
      const isLt = file.size / 1024 / 1024 < 10; // 大小控制 10 为 10M
      if (!isJPG) {
        this.$message.error("只能上传 JPG / PNG / JPEG 格式图片!");
      }
      if (!isLt) {
        this.$message.error("上传图片大小不能超过 10MB!");
      }
      return isJPG && isLt;
    },
    downloadIamge() {
      // 生成一个a元素
      var a = document.createElement("a");
      // 设置图片名称
      a.download = name || "防御结果图片";
      // 将生成的URL设置为a.href属性
      a.href = this.imgResult;
      // 触发a的单击事件
      a.click();
    },
    dialogTip() {},
    showResults() {
      document.getElementById("slide").style.display = "none";
      document.getElementById("slide1").style.display = "flex";
    },
  },
};
</script>
<style lang="less">
@import "@/css/reset.css";

#bar_pre,
#bar_next,
#table_1,
#table_2 {
  float: right;
  margin-right: 30px;
}
#bar_pre,
#bar_next {
  height: 280px;
  width: 500px;
}
.original,
.results {
  width: 100%;
  height: 50%;
  vertical-align: middle;
}
#table_1,
#table_2 {
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid gray;
  max-height: 300px;
}
.results {
  width: 100%;
  height: 250px;
}
.upload {
  position: relative;
  display: block;
}
.btn {
  margin-top: 10px;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  line-height: 50px;
  width: 150px;
  height: 100px;
}
.el-tag {
  background-color: black;
  color: white;
}
.el-input--suffix .el-input__inner {
  padding-right: 0px;
}
.el-input__inner {
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid grey;
}
#newPicture {
  line-height: 200px;
  clear: both;

  width: 200px;
  height: 200px;
  border-radius: 4%;
  border: 1px dotted #ffffff;
  vertical-align: middle;
  display: none;
  margin: 10px auto;
}
.el-upload {
  line-height: 200px;
  width: 200px;
  height: 200px;
  color: white;
  font-size: 16px;
  font-weight: bolder;
  vertical-align: middle;
  border: 1px dotted #ffffff;
  border-radius: 4%;
  background-color: rgba(0, 0, 0, 0.5);
}
.el-message-box {
  background-color: rgba(33, 47, 63, 0.5);
  color: white;
}
.el-message-box__title {
  color: white;
}
.el-message-box__message {
  color: aqua;
}
.el-upload-list--picture-card .el-upload-list__item-actions {
  width: 200px;
  height: 200px;
}
.el-upload-list--picture-card .el-upload-list__item {
  width: 200px;
  height: 200px;
  background-color: black;
}
.hide .el-upload--picture-card {
  display: none;
}
.el-upload i {
  width: 20px;
  height: 20px;
}
.el-button {
  background-color: black;
  border: 1px solid grey;
  color: whitesmoke;
}

#el_button_1,
#el_button_2,
#table_1,
#table_2 {
  display: none;
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
/*最外层透明*/
.el-table,
.el-table__expanded-cell {
  background-color: rgba(0, 0, 0, 0.5);
}
/* 表格内背景颜色 */
.el-table th,
.el-table tr,
.el-table td {
  background-color: rgba(0, 0, 0, 0.5);
}
/* 表格表头字体颜色 */
.el-table thead {
  color: #ffffff;
  font-weight: 500;
}

.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #212e3e !important;
}
</style>