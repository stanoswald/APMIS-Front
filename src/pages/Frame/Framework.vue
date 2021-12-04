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
      <span>{{name}}</span>
    </el-header>


    <router-view name="aside"></router-view>

  </el-container>
</template>

<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
  height: 100%;
}

.el-aside::-webkit-scrollbar {
  width: 0;
}

.el-main {
  padding-top: 40px;
  background-color: white;
}
</style>

<script>

import router from "@/router";

export default {
  name: "Framework",
  data() {
    return {
      name:''
    }
  },
  mounted() {
    this.name=sessionStorage.getItem("name")
    if (this.name == null) {
      router.push("/login")
    }
  }
}
</script>





