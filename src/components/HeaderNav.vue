<template>
  <div class="header">
    <div class="l-content">
      <el-button plain icon="el-icon-menu" size="mini"></el-button>
      <h4>首页</h4>
    </div>
    <div class="r-content">
      <el-dropdown trigger="hover" size="mini">
        <span>
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="less" scoped>
.header{
  display: flex;
  height: 100%;
  justify-content: space-between;//两端对齐
  align-items: center;
}
.l-content{
  display: flex;
  align-items: center;
  .el-button{
    margin-right: 20px;
  }
}
</style>