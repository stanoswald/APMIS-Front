<template>
  <div>
    <el-form label-width="80px">
      <el-form-item label="宿舍号">
        <el-input v-model="dormInfo.dormId"></el-input>
      </el-form-item>
      <el-form-item label="登记人">
        <el-input v-model="dormInfo.leaderNo"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="dormInfo.tel"></el-input>
      </el-form-item>
      <el-form-item label="报修详情">
        <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="textarea">
        </el-input>
      </el-form-item>
      <el-form-item label="财产类型">
        <el-input v-model="dormInfo.tel"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  name: 'MyDormInfo',
  data() {
    return {
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
  mounted() {
    this.$axios.get("selectDormServlet?dorm_id=615").then(resp => {
      console.log(resp.data);
      this.tableData = resp.data.member;
      this.dormInfo = resp.data.dormInfo;
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