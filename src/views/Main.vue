<template>
  <el-container>
    <el-header style="height: 80px">
      <header-com></header-com>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
// @ is an alias to /src
import sideCom from "@/components/sideCom.vue";
import headerCom from "@/components/headerCom.vue";

export default {
  name: "Main",
  components: {
    sideCom,
    headerCom,
  },
};
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
}
.el-header {
  background-color: black;
  color: #ffffff;
  text-align: center;
  line-height: 80px;
  top: 10px;
}
.el-main {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>