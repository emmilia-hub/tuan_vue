<template>
 <el-col>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.path" :key="item.path">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
      <el-submenu v-for="item in hasChildren" :key="item.path" :index="item.path">
        <template slot="title">
          <i :class="'el-icon-'+item.icon"></i>
          <span>{{item.label}}</span>
        </template>
        <el-menu-item-group v-for="(subItem,subIndex) in item.children" :key="subItem.path">
          <el-menu-item :index="subItem.path" :key="subIndex">
            <i :class="'el-icon-'+subItem.icon"></i>
            <span>{{subItem.label}}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item @click="clickMenu(item)" v-for="(item,i) in user" :index="item.path" :key="item.path">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 980px;
  }
</style>

<script>
  export default {
    data() {
      
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      clickMenu(item) {
        this.$router.push({
          name: item.name
        }).catch(err=>err)
      }
    },
    computed: {
      noChildren() {
        return this.menu.filter(item => !item.children);
      },
      hasChildren() {
        return this.menu.filter(item => item.children);
      }
    }
  }
</script>