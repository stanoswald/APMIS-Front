<template>
  <div>
    <el-form label-width="80px">
      <el-form-item label="宿舍号">
        <el-input v-model="dormInfo.dormId"></el-input>
      </el-form-item>
      <el-form-item label="登记人">
        <el-input v-model="dormInfo.dormId"></el-input>
      </el-form-item>
      <el-form-item label="登记类型">
        <el-radio v-model="radio" label="1">移出物品</el-radio>
        <el-radio v-model="radio" label="2">移入物品</el-radio>
      </el-form-item>
      <el-form-item label="财产号">
        <el-input v-model="dormInfo.dormId"></el-input>
      </el-form-item>


      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>

    </el-form>
    <el-divider><span id="lbl" class="el-form-item__label">登记记录</span></el-divider>

    <el-table
        :data=tableData
        stripe
        style="width: 100%;">
      <el-table-column
          prop="billId"
          label="登记单号"
          width="180">
      </el-table-column>
      <el-table-column
          prop="billDate"
          label="财产类型"
          width="180">
      </el-table-column>
      <el-table-column
          prop="detail"
          label="登记人"
          width="180">
      </el-table-column>
      <el-table-column
          prop="registrant"
          label="审核状态">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'MyDormInfo',
  data() {
    return {
      dateTime:"",
      radio:"",
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