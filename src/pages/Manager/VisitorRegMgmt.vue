<template>
  <div>
    <el-form label-width="80px" :model="form" ref="form">
      <el-form-item label="来访者" prop="vis_name" required>
        <el-input v-model="form.vis_name" placeholder="来访人姓名"></el-input>
      </el-form-item>
      <el-form-item label="来访时间" prop="dateTime" required>
        <div class="block">
          <el-date-picker
              v-model="form.dateTime"
              type="datetimerange"
              value-format="yyyy-MM-dd HH:mm"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="来访详情" prop="detail">
        <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="form.detail">
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>

    </el-form>
    <el-divider><span id="lbl" class="el-form-item__label">来访记录</span></el-divider>

    <el-table
        :data=tableData
        stripe
        style="width: 100%;">
      <el-table-column
          prop="id"
          label="来访单号"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="来访者姓名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="registrant"
          label="登记人"
          width="180">
      </el-table-column>
      <el-table-column
          prop="startTime"
          label="来访时间"
          width="180">
      </el-table-column>
      <el-table-column
          prop="stat"
          label="来访状态">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              size="small"
              type="primary"
              @click="detail(scope.row)">详情
          </el-button>
          <el-button
              v-if="scope.row.stat==='待审核'"
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
  name: 'VisitorRegMgmt',
  data() {
    return {
      username: '',
      form: {
        vis_name: '',
        dateTime: '',
        detail: '',
      },
      tableData: [],
    }
  },
  methods: {
    reset() {
      this.$refs['form'].resetFields()
    },
    submit() {
      let that = this
      this.$axios.post("vis_reg", {
        name: this.form.vis_name,
        detail: this.form.detail,
        registrant: this.username,
        startTime: this.form.dateTime[0],
        endTime: this.form.dateTime[1],
        stat: '待审核'
      }).then(resp => {
        if (resp.data === "success") {
          this.$message({
            message: '登记成功',
            type: 'success'
          });

          setTimeout(function () {
            that.$router.go(0);
          }, 1000);

        } else this.$message({
          message: '登记失败',
          type: 'error'
        });
      });
    }, detail(row) {
      this.$alert(row.detail, '来访', {
        confirmButtonText: '确定'
      })
    },
    del(row) {
      let that = this
      this.$alert("确认删除？来访单号：" + row.id, '确认删除', {
        confirmButtonText: '确定'
      }).then(() => {
            that.$axios.get("vis_del?id=" + row.id).then(resp => {
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
    this.username = sessionStorage.getItem("username")
    this.$axios.get("vis_info?reg=" + this.username).then(resp => {
      this.tableData = resp.data
    })
  }

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

#lbl {
  padding-right: 0;
}


.el-input {
  width: 30%;
}
</style>