<template>
  <el-form :model="form" ref="form" label-width="80px">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username" disabled></el-input>
    </el-form-item>
    <el-form-item label="姓名" prop="name">
      <el-input v-model="form.name" disabled></el-input>
    </el-form-item>
    <el-form-item label="用户角色" prop="role">
      <el-input v-model="form.role" disabled></el-input>
    </el-form-item>
    <el-form-item label="电话" prop="tel">
      <el-input v-model="form.tel"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="form.email"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'MyInfo',
  data() {
    return {
      form: {
        tel: '',
        email: ''
      }
    }
  },
  methods: {
    detail(row) {
      this.$alert(row.detail, '报修详情', {
        confirmButtonText: '确定'
      })
    },
    del(row) {
      let that = this
      this.$alert("确认删除？报修单号：" + row.id, '确认删除', {
        confirmButtonText: '确定'
      }).then(() => {
            that.$axios.get("repair_del?id=" + row.id).then(resp => {
              if (resp.data === "success") {
                this.$message({
                  message: '删除成功',
                  type: 'success'
                });
                setTimeout(function () {
                  that.$router.go(0);
                }, 1000);
              } else this.$message({
                message: '删除失败',
                type: 'error'
              });
            })
          }, () => {
          }
      )
    },
  },
  mounted() {
    this.$axios.get("repair_info?stu_no=" + sessionStorage.getItem("username"))
        .then(resp => {
          this.tableData = resp.data
        });
  },

}
</script>

<style scoped>
span {
  font-size: 18px;
  width: 100%;
  text-align: center;
}

.el-divider {
  margin: 40px 0 40px 0;
}

.el-input {
  width: 30%;
}
</style>