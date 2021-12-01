<template>
  <el-container style="height: 100vh;overflow: hidden">

    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>View</el-dropdown-item>
          <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item>Delete</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>Tom</span>
    </el-header>

    <el-container style="height: 100vh; overflow: auto">

      <sidebar></sidebar>
      <el-main>
        <router-view></router-view>
      </el-main>


    </el-container>
  </el-container>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
.el-main{
  padding-top: 40px;
}
</style>

<script>
import sidebar from "./components/SideBar";

export default {
  name: "app",
  components: {
    sidebar
  }
};
</script>