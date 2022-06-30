<template>
  <div class="upload">
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
import typeCom from "@/components/typeCom.vue";
export default {
  data() {
    return {
      picList: [],
      dialogImageUrl: "",
      dialogVisible: false,
    };
  },
  components: {
    typeCom,
  },
  created() {
    this.id = this.$route.params.id; //唯一标识
    console.log(this.id);
    this.DownloadPicture(this.id);
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 获取图片转base64格式
    getBase64(file) {
      return new Promise(function (resolve, reject) {
        const reader = new FileReader();
        let imgResult = "";
        reader.readAsDataURL(file);
        reader.onload = function () {
          imgResult = reader.result; //base64编码
        };
        reader.onerror = function (error) {
          reject(error);
        };
        reader.onloadend = function () {
          resolve(imgResult);
        };
      });
    },

    // 删除图片
    delImg: function (no) {
      this.$http
        .post("/接口名", { no: no })
        .then((res) => {
          if (res.data._RejCode == "000000") {
            this.$message.success("删除成功");
            this.picList.splice(
              this.picList.findIndex((e) => e.no === no),
              1
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //手动保存图片并限制图片大小
    handleFileChange: function (e) {
      var test = document.getElementById("uploadBtn");
      const files = e.target.files;
      if (files && files[0]) {
        const file = files[0];
        if (file.size > 1024 * 1024 * 3) {
          test.value = "";
          return false;
        } else {
          this.getBase64(files[0]).then((res) => {
            test.value = "";
            this.uploadImg(res);
          });
        }
      }
    },
    // 下载图片
    DownloadPicture: function (id) {
      this.$http
        .post("/接口名", { id: id })
        .then((res) => {
          if (res.data._RejCode == "000000") {
            this.picList = res.data.pictureList;
          }
          console.log(this.picList);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 从后端传入图片
    uploadImg: function (base64) {
      var params = {
        picBase64: base64.split(",")[1],
        id: this.id,
      };
      this.$http
        .post("/接口名", params)
        .then((res) => {
          params.no = res.data.no;
          this.picList.push(params);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.upload {
  margin: 200px 100px 200px 100px;
  display: inline-block;
}
</style>