<template>
  <div class="result">
    <!-- 点击的图片 -->
    <div class="after">
      <div>
        <img
          :src="resultImg"
          style="width: 146px; height: 146px; border-radius: 4px; margin: 1px"
          @click="centerDialogVisible = true"
        />
      </div>
      <el-button
        style="position: absolute; left: 18%; margin-top: 10px"
        @click="downloadIamge()"
        >保存结果</el-button
      >
      <!-- 弹出dialog大图 -->
      <el-dialog
        :visible.sync="centerDialogVisible"
        width="50%"
        center
      >
        <span><img :src="resultImg" style="width:720px;height:405px"></span>
      </el-dialog>
    </div>
    <div class="after" style="margin-left: 20px">
      <div>
        <img
          :src="noiseImg"
          style="width: 146px; height: 146px; border-radius: 4px; margin: 1px"
          class="avatar"
        />
      </div>
      <el-button
        style="position: absolute; left: 18%; margin-top: 10px"
        type="info"
        plain
        >噪声展示</el-button
      >
    </div>
  </div>
</template>

<script>
import IMG from "@/assets/images/bg_2.jpg";
import noise from "@/assets/images/bg.jpg";
export default {
  name: "resultCom",
  data() {
    return {
      resultImg: IMG,
      noiseImg: noise,
      centerDialogVisible: false,
      imgViewDialogVisible: false, // 控制dialog显示隐藏
      imgViewDialog_imgSrc: "", // 控制图片src
    };
  },
  methods: {
    //保存
    downloadIamge() {
      let a = document.createElement("a"); // 生成一个a元素
      a.download = name || "PIC"; // 设置图片名称没有设置则为默认
      a.href = IMG; // 将生成的URL设置为a.href属性
      a.click(); // 触发a的单击事件
    },

    /**
     * 图片dialog_显示
     */
    imgViewDialog_show: function (item) {
      this.imgViewDialogVisible = true;
      this.imgViewDialog_imgSrc = item.src;
    },
    /**
     * 图片dialog_关闭
     */
    imgViewDialog_close: function () {
      this.imgViewDialogVisible = false;
      var self = this;
      setTimeout(function () {
        self.imgViewDialog_imgSrc = "";
      }, 100);
    },
  },
};
</script>

<style lang="less" scoped>
.result {
  padding: 1px;
  margin-top: 200px;
  display: flex;
  justify-content: center;
  margin-right: 100px;
}
.after {
  width: 148px;
  height: 148px;
  border-radius: 4px;
  border: 2px solid #fff;
  position: relative;
}
</style>