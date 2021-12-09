<template>
  <el-container style="height: 100vh; overflow: auto">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-active="onRoutes" router>

        <el-submenu index="1">
          <template slot="title"><i class="el-icon-menu"></i>宿舍生活</template>
          <el-menu-item-group title="信息查询">
            <el-submenu index="1-1">
              <template slot="title">宿舍信息查询</template>
              <el-menu-item index="/student/my-dorm">本宿舍信息
              </el-menu-item>
              <el-menu-item index="/student/nearby-dorm">本楼宿舍信息查询</el-menu-item>
            </el-submenu>
            <el-menu-item index="/student/repair">报修查询</el-menu-item>
            <el-menu-item index="/student/bill">水电查询</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">信息登记</template>
            <el-menu-item index="/student/repair-reg">报修登记</el-menu-item>
            <el-menu-item index="/student/visitor">访客登记</el-menu-item>
            <el-menu-item index="/student/property">出入物品登记</el-menu-item>
          </el-menu-item-group>

        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-setting"></i>个人信息</template>
          <el-menu-item-group>
            <template slot="title">我的</template>
            <el-menu-item index="/student/my-info">个人信息</el-menu-item>
            <el-menu-item index="/student/password">密码设置</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="操作">
            <el-menu-item @click="logout">登出</el-menu-item>
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
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "Student",
  computed: {
    onRoutes() {
      return this.$route.path
    }
  },
  methods: {
    logout() {
      let that = this
      this.$alert("确认登出？", '登出', {
        confirmButtonText: '确定'
      }).then(() => {
            this.$message({
              message: '登出成功，正在返回',
              type: 'success'
            });
            setTimeout(function () {
              that.$router.go(0)
              sessionStorage.clear()
            }, 500);
          }, () => {
          }
      )
    }

  }
};
</script>





