<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <h2>后台管理系统</h2>
    <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.path" :key="item.path">
      <i :class="'el-icon-'+item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChildren" :index="item.path" :key="item.path">
      <template slot="title">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
        <el-menu-item :index="subItem.path">{{subItem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

  </el-menu>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
      isCollapse: false,
      menu:[
          {
            path:'/home',
            name:'home',
            label:'首页',
            icon:'s-home',
            url:'Home/home'
          },
        {
          path:'/goods',
          name:'goods',
          label:'商品管理',
          icon:'goods',
          url:'GoodsManage/GoodsManage'
        },
        {
          path:'/user',
          name:'user',
          label:'用户管理',
          icon:'user',
          url:'UserManage/UserManage'
        },
        {
          label:'其他',
          icon:'s-operation',
          children:[
            {
              path:'/page1',
              name:'page1',
              label:'页面1',
              icon:'',
              url:'Other/PageOne'
            },
            {
              path:'/page2',
              name:'page2',
              label:'页面2',
              icon:'',
              url:'Other/PageTwo'
            }

          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item){
      this.$router.push(
      {
        path:item.path
      });
    }
  },
  computed:{
    noChildren(){
      return this.menu.filter(item=>!item.children)
    },
    hasChildren(){
      return this.menu.filter(item=>item.children)

    }
  }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
  height: 100vh;
  border: none;
  h2 {
    color: #fff;
    //text-align: center;
    padding-left: 20px;
  }
}
</style>