<template>
  <div class="">
    <el-container>
      <el-aside width="200px" class="aside">
        <!-- 菜单 -->
        <el-row class="tac">
          <el-col>
            <!-- 
              default-active:当前激活菜单的索引 
              open close submenu 展开和收起触发的事件
              二级菜单 el-submenu
            -->
            <el-menu
              :router="true"
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="rgb(191,203,217)"
              active-text-color="deepskyblue"
              :collapse="isCollapse"
            >
              <el-menu-item index="/home/index">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
              </el-menu-item>
              <el-menu-item index="/home/document">
                <i class="el-icon-menu"></i>
                <span slot="title">文档</span>
              </el-menu-item>
              <el-menu-item index="/home/lead">
                <i class="el-icon-menu"></i>
                <span slot="title">引导页</span>
              </el-menu-item>
              <!-- 二级菜单 -->
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>权限测试页</span>
                </template>
                <el-menu-item index="4-1">页面权限</el-menu-item>
                <el-menu-item index="4-2">指令权限</el-menu-item>
                <el-menu-item index="4-3">角色权限</el-menu-item>
              </el-submenu>
              <!-- 图标 -->
              <el-menu-item index="5">
                <i class="el-icon-menu"></i>
                <span slot="title">图标</span>
              </el-menu-item>
              <!-- 连续二级菜单 -->
              <el-submenu index="6">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>组件</span>
                </template>
                <el-menu-item index="6-1">页面权限</el-menu-item>
                <el-menu-item index="6-2">指令权限</el-menu-item>
                <el-menu-item index="6-3">角色权限</el-menu-item>
              </el-submenu>
              <!-- 7 -->
              <el-submenu index="7">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>图标</span>
                </template>
                <el-menu-item index="7-1">页面权限</el-menu-item>
                <el-menu-item index="7-2">指令权限</el-menu-item>
                <el-menu-item index="7-3">角色权限</el-menu-item>
              </el-submenu>
              <!-- 8-->
              <el-submenu index="8">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>路由嵌套</span>
                </template>
                <el-menu-item index="8-1">页面权限</el-menu-item>
                <el-menu-item index="8-2">指令权限</el-menu-item>
                <el-menu-item index="8-3">角色权限</el-menu-item>
              </el-submenu>
              <!-- 9 -->
              <el-submenu index="9">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>table</span>
                </template>
                <el-menu-item index="9-1">页面权限</el-menu-item>
                <el-menu-item index="9-2">指令权限</el-menu-item>
                <el-menu-item index="9-3">角色权限</el-menu-item>
              </el-submenu>
              <!-- 10 -->
              <el-submenu index="10">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>综合实例</span>
                </template>
                <el-menu-item index="10-1">页面权限</el-menu-item>
                <el-menu-item index="10-2">指令权限</el-menu-item>
                <el-menu-item index="10-3">角色权限</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <!-- 路由 -->

      <el-container>
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import instance from "@/api/api";
export default {
  name: "homeView",
  data() {
    return {
      isCollapse: false, //是否折叠
    };
  },
  created() {
    instance.get("/aa").then((res) => console.log(res));
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
// .el-container {
//   height: 100vh;
// }
// .tac,.el-col {
//   height: 100%;
// }
.aside {
  padding: 0;
  margin: 0;

  .el-menu-vertical-demo {
    // width: 200px;
    height: 100vh;
    overflow: hidden;
    
  }
  //  .el-menu-item:focus, .el-menu-item:hover {
  //     background: yellowgreen !important;
  //   }
    
    
}
</style>
