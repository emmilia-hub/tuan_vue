<template>
<div class="box"></div>
</template>

<style>
.el-row {
  margin-bottom: 20px;
  height: 600px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  height: 200px;
  background: #d3dce6;
  align-items: center;
  align-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.moreImg {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  border-radius: 50%;
  vertical-align: middle;
}
.user-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.u-info {
  height: 60px;
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: #d3dce6;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  font-size: 18px;
  color: #303030;
  text-align: center;
}
.u-desc {
  height: 200px;
  border-radius: 4px;
  background-color: #d3dce6;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  font-size: 18px;
  color: #303030;
}
.u-name {
  font-size: 24px;
  display: flex;
  justify-content: center;
}
.bg-purple-light {
  margin-left: 20px;
  width: 900px;
  height: 600px;
  padding: 20px;
  background: #e5e9f2;
  display: flex;
  flex-direction: column;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

<script>
export default {
  name: "user",
  data() {
    return {
      userImg: require("../user/profile.jpg"),
      moreImg: require("../user/more.png"),
      username: "wwqq",
      telephone: "1894829829",
      email: "wwqq@163.com",
      information: "wwqq",
    };
  },
};
</script>