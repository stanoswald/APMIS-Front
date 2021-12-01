<template>
  <div>
    <el-form label-width="80px">
      <el-form-item label="宿舍号">
        <el-input v-model="dormInfo.dormId"></el-input>
      </el-form-item>

      <el-form-item label="选择月份">
        <div class="block">
          <el-date-picker
              v-model="month"
              type="month"
              placeholder="选择月">
          </el-date-picker>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </div>
      </el-form-item>

    </el-form>
    <el-divider></el-divider>

    <el-table
        :data=tableData
        stripe
        style="width: 100%;">
      <el-table-column
          prop="billId"
          label="订单号"
          width="180">
      </el-table-column>
      <el-table-column
          prop="billDate"
          label="订单日期"
          width="180">
      </el-table-column>
      <el-table-column
          prop="detail"
          label="订单金额"
          width="180">
      </el-table-column>
      <el-table-column
          prop="registrant"
          label="登记人"
          width="180">
      </el-table-column>
      <el-table-column
          prop="billStat"
          label="订单状态">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'MyDormInfo',
  data() {
    return {
      month:'',
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
.el-button{
  margin-left: 40px;
}
.el-input {
  width: 30%;
}
</style>