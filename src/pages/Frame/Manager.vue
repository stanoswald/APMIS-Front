<template>
  <el-container style="height: 100vh; overflow: auto">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-active="onRoutes" router>

        <el-submenu index="1">
          <template slot="title"><i class="el-icon-document"></i>宿舍管理</template>
          <el-menu-item-group>
            <template slot="title">信息管理</template>
            <el-menu-item index="/manager/dorm-info">宿舍信息</el-menu-item>
            <el-menu-item index="/manager/stu-info">学生信息</el-menu-item>
            <el-menu-item index="/manager/property">宿舍财产</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group title="信息查询">
            <template slot="title">宿舍信息查询</template>
            <el-menu-item index="/manager/bill">水电信息</el-menu-item>
            <el-menu-item index="/manager/repair">报修信息</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group>
            <template slot="title">信息审核</template>
            <el-menu-item index="/manager/prop-reg">出入物品</el-menu-item>
            <el-menu-item index="/manager/vis-reg">访客登记</el-menu-item>
          </el-menu-item-group>

        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-setting"></i>个人信息</template>
          <el-menu-item-group>
            <template slot="title">我的</template>
            <el-menu-item index="/manager/my-info">个人信息</el-menu-item>
            <el-menu-item index="/manager/set-pwd">密码设置</el-menu-item>
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





