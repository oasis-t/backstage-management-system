<template>
  <el-container >
    <el-aside width="auto">
      <aside-nav></aside-nav>
    </el-aside>
    <el-container>
      <el-header>
        <header-nav></header-nav>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AsideNav from "../components/AsideNav";
import HeaderNav from "../components/HeaderNav";
export default {
  name: "Main",
  components:{
    AsideNav,
    HeaderNav
  },
}
</script>

<style lang="less" scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
}

.el-aside {
  background-color: #545c64;
  color: #333;
  //text-align: center;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  height: 100%;

}

</style>