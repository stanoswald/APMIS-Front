<template>
  <div>
    <el-table
        :data=tableData
        stripe
        style="width: 100%;">
      <el-table-column
          prop="id"
          label="报修单号"
          width="180">
      </el-table-column>
      <el-table-column
          prop="registrant"
          label="登记人"
          width="180">
      </el-table-column>
      <el-table-column
          prop="propId"
          label="报修财产"
          width="180">
      </el-table-column>
      <el-table-column
          prop="fixDate"
          label="维修日期"
          width="180"
      >
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              size="small"
              type="primary"
              @click="detail(scope.row)">详情
          </el-button>
          <el-button
              v-if="scope.row.fixDate===undefined"
              size="small"
              type="danger"
              @click="del(scope.row)">撤销
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'MyDormInfo',
  data() {
    return {
      month: '',
      dormInfo: {
        dormId: '',
        apId: '',
        leaderNo: '',
        tel: ''
      },
      tableData: [],
      stu_name: '',
      tel: '',
      dept: ''
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