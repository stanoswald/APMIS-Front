<template>
  <div>
    <el-form :model="form" ref="form" label-width="80px">
      <el-form-item label="宿舍号" prop="dormId">
        <el-input v-model="dormId" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="登记人" prop="name">
        <el-input v-model="name" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="tel" required>
        <el-input v-model="form.tel"></el-input>
        <el-button type="primary" plain @click="setMyTel" style="margin-left: 20px">我的</el-button>
      </el-form-item>
      <el-form-item label="报修详情" prop="detail">
        <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="form.detail">
        </el-input>
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
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  name: 'RepairReg',
  data() {
    return {
      stu_no: '',
      dormId: '',
      name: '',

      form: {
        tel: '',
        detail: '',
        value: '',
      },
      options: []
    }
  },
  methods: {
    setMyTel() {
      this.form.tel = sessionStorage.getItem("tel")
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submit() {
      let that = this
      this.$axios.post("/repair_ref", {
        dormId: sessionStorage.getItem("dormId"),
        reg: this.stu_no,
        tel: this.form.tel,
        detail: this.form.detail,
        propId: this.form.value[1],
      }).then(resp => {
            if (resp.data === "success") {
              this.$message({
                message: '提交成功',
                type: 'success'
              });

              setTimeout(function () {
                that.$router.go(0);
              }, 1000);

            } else this.$message({
              message: '提交失败',
              type: 'error'
            });
          }
      )
    }
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

    this.stu_no = sessionStorage.getItem("username")
    this.dormId = sessionStorage.getItem("dormId").substring(2)
    this.name = sessionStorage.getItem("name")
    this.form.tel = sessionStorage.getItem("tel")
  }
  ,

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