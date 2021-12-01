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

      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']">

          <el-submenu index="1">
            <template slot="title"><i class="el-icon-menu"></i>宿舍生活</template>
            <el-menu-item-group title="信息查询">
              <el-submenu index="1-1">
                <template slot="title">宿舍信息查询</template>
                <el-menu-item index="1-1-1">本宿舍信息</el-menu-item>
                <el-menu-item index="1-1-2">本楼宿舍信息查询</el-menu-item>
              </el-submenu>
              <el-menu-item index="1-2">水电查询</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">信息登记</template>
              <el-menu-item index="1-3">报修登记</el-menu-item>
              <el-menu-item index="1-4">访客登记</el-menu-item>
              <el-menu-item index="1-5">出入物品登记</el-menu-item>
            </el-menu-item-group>




          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-setting"></i>个人信息</template>
            <el-menu-item-group>
              <template slot="title">我的</template>
              <el-menu-item index="2-1">个人信息</el-menu-item>
              <el-menu-item index="2-2">密码设置</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="账号">
              <el-menu-item index="2-3">登出</el-menu-item>
              <el-menu-item index="2-4">切换账号</el-menu-item>
            </el-menu-item-group>

          </el-submenu>

          <el-submenu index="3">
            <template slot="title"><i class="el-icon-message"></i>联系方式</template>
            <el-menu-item index="3-1">辅导员</el-menu-item>
            <el-menu-item index="3-2">宿舍管理员</el-menu-item>
            <el-menu-item index="3-3">水电工</el-menu-item>
            <el-menu-item index="3-4">保卫处</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="Date" width="140">
          </el-table-column>
          <el-table-column prop="name" label="Name" width="120">
          </el-table-column>
          <el-table-column prop="address" label="Address">
          </el-table-column>
        </el-table>
      </el-main>

    </el-container>
  </el-container>
</template>

<style>
body{
  margin: 0;
  padding: 0;
}
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
  height: 100%;
}
.el-aside::-webkit-scrollbar{
  width:0;
}
</style>

<script>
export default {
  data() {
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    };
    return {
      tableData: Array(20).fill(item)
    }
  }
};
</script>