<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <div class="block" style="vertical-align: middle">
      <el-avatar
        @error="errorHandler"
        class="avatar"
        :size="70"
        :src="logo"
        alt="logo"
      ></el-avatar>
    </div>
    <el-menu-item
      @click="clickMenu(item)"
      v-for="item in noChildren"
      :index="item.path"
      :key="item.path"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <div
      class="block"
      @click="clickUser()"
      index="/user"
      key="/user"
    >
      <el-avatar
        @error="errorHandler"
        class="avatar"
        :size="40"
        alt="profile"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      >
        <img
          src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
        />
      </el-avatar>
    </div>
  </el-menu>
</template>

<script>
export default {
  name: "headerCom",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      userImg: require("../assets/images/profile.jpg"),
      logo: require("../assets/images/logo.png"),
      menu: [
        {
          path: "/home",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/attack",
          name: "attack",
          label: "对抗攻击",
          icon: "key",
          url: "Attack/Attack",
        },
        {
          path: "/defense",
          name: "defense",
          label: "对抗防御",
          icon: "umbrella",
          url: "Defense/Defense",
        },
        {
          path: "/results",
          name: "results",
          label: "对抗结果",
          icon: "document",
          url: "Results/Results",
        },
      ],
    };
  },
  computed: {
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    errorHandler() {
      return true;
    },
    clickMenu(item) {
      this.$router
        .push({
          name: item.name,
        })
        .catch((err) => err);
    },
    clickUser() {
      this.$router
        .push({
          name: 'user',
        })
        .catch((err) => err);
    },
  },
};
</script>

<style lang="less" scoped>
header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: black;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.u-all {
  .u-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: middle;
  }
}
.el-menu.el-menu--horizontal {
  border: none;
}
.el-menu {
  display: flex;
  justify-content: space-around;
  color: white;
  vertical-align: middle;
  height: 80px;
  background-color: black;
}
.el-menu--horizontal > .el-menu-item {
  height: 80px;
  float: left;
  line-height: 80px;
  margin: 0;
  border-bottom: 2px solid transparent;
  vertical-align: middle;
  color: white;
  border-bottom: none;
  text-decoration: none;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  color: lightcyan;
  outline: 0;
}
.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: rgb(28, 27, 27);
}
.avatar {
  vertical-align: middle;
}
</style>