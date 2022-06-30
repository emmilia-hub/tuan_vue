<template>
  <div class="type">
    <div><img src="../assets/images/err.png" style="width:120px;height:120px"/> </div>
    <el-select v-model="value" placeholder="选择方式">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
    };
  },
};
</script>

<style lang="less" scoped>
.type {
  margin-top: 200px;
  margin-right: 100px;
  vertical-align: middle;
}
.el-select{
  width: 120px;
}
</style>