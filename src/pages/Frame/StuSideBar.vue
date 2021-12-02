<template>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1']" router>

            <el-submenu index="1">
              <template slot="title"><i class="el-icon-menu"></i>宿舍生活</template>
              <el-menu-item-group title="信息查询">
                <el-submenu index="1-1">
                  <template slot="title">宿舍信息查询</template>
                  <el-menu-item index="/student/my-dorm">本宿舍信息</el-menu-item>
                  <el-menu-item index="/student/nearby-dorm">本楼宿舍信息查询</el-menu-item>
                </el-submenu>
                <el-menu-item index="/student/repair">报修查询</el-menu-item>
                <el-menu-item index="/student/bill">水电查询</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <template slot="title">信息登记</template>
                <el-menu-item index="/student/repair">报修登记</el-menu-item>
                <el-menu-item index="/student/visitor">访客登记</el-menu-item>
                <el-menu-item index="/student/property">出入物品登记</el-menu-item>
              </el-menu-item-group>

            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-setting"></i>个人信息</template>
              <el-menu-item-group>
                <template slot="title">我的</template>
                <el-menu-item index="/my/info">个人信息</el-menu-item>
                <el-menu-item index="/my/password">密码设置</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="账号">
                <el-menu-item index="/logout">登出</el-menu-item>
                <el-menu-item index="/switch-account">切换账号</el-menu-item>
              </el-menu-item-group>

            </el-submenu>

            <el-submenu index="3">
              <template slot="title"><i class="el-icon-message"></i>联系方式</template>
              <el-menu-item index="/contact/supervisor">辅导员</el-menu-item>
              <el-menu-item index="/contact/manager">宿舍管理员</el-menu-item>
              <el-menu-item index="/contact/plumber">水电工</el-menu-item>
              <el-menu-item index="/contact/security">保卫处</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
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

.el-main {
  padding-top: 40px;
}

.el-aside {
  color: #333;
  height: 100%;
}

.el-aside::-webkit-scrollbar {
  width: 0;
}
</style>

<script>
export default {
  name: "StuSideBar",
};
</script>





