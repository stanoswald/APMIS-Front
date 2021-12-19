<template>
  <div>
    <el-form label-width="80px" ref="form" :model="form">
      <el-form-item label="宿舍号">
        <el-input v-model="form.dormId" disabled></el-input>
      </el-form-item>
      <el-form-item label="登记人">
        <el-input v-model="form.name" disabled></el-input>
      </el-form-item>
      <el-form-item label="登记类型">
        <el-radio v-model="form.regType" label="移出物品">移出物品</el-radio>
        <el-radio v-model="form.regType" label="移入物品">移入物品</el-radio>
      </el-form-item>
      <el-form-item label="财产类型" prop="value" required>
        <el-cascader
            v-model="form.value"
            :options="options"
            :props="{ expandTrigger:'hover'}"
        ></el-cascader>
      </el-form-item>


      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>

    </el-form>
    <el-divider><span id="lbl" class="el-form-item__label">登记记录</span></el-divider>

    <el-table
        :data=tableData
        stripe
        style="width: 100%;">
      <el-table-column
          prop="id"
          label="登记单号"
          width="180">
      </el-table-column>
      <el-table-column
          prop="propId"
          label="财产类型"
          width="180">
      </el-table-column>
      <el-table-column
          prop="regType"
          label="登记类型"
          width="180">
      </el-table-column>
      <el-table-column
          prop="registrant"
          label="登记人"
          width="180">
      </el-table-column>
      <el-table-column
          prop="stat"
          label="审核状态"
          width="180">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
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
  name: 'PropertyInfo',
  data() {
    return {
      username: '',
      form: {
        regType: '',
        dormId: '',
        name: '',
        value: '',
      },
      tableData: [],
      options: []
    }
  },
  methods: {
    reset() {
      this.$refs['form'].resetFields()
    },
    submit() {
      let that = this
      this.$axios.post("prop_reg", {
        dormId: sessionStorage.getItem("dormId"),
        propId: this.form.value[1],
        reg: this.username,
        type: this.form.regType,
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
    },
    del(row) {
      let that = this
      this.$alert("确认删除？来访单号：" + row.id, '确认删除', {
        confirmButtonText: '确定'
      }).then(() => {
            that.$axios.get("prop_reg_del?id=" + row.id).then(resp => {
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
    this.$axios.get("get_prop").then(resp => {
      const allP = resp.data.allProp;

      for (const t in resp.data.type) {
        let arr = []

        for (const p in allP) {
          if (resp.data.type[t] === allP[p].name) {
            arr.push({value: allP[p].id, label: allP[p].model})
          }
        }
        this.options.push({label: resp.data.type[t], children: arr})
      }
    });

    this.username = sessionStorage.getItem("username")
    this.form.regType = "移出物品"
    this.form.name = sessionStorage.getItem("name")
    this.form.dormId = sessionStorage.getItem("dormId").substring(2)

    this.$axios.get("prop_reg_info?reg=" + this.username).then(resp => {
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