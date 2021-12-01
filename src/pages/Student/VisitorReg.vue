<template>
  <div>
    <el-form label-width="80px">
      <el-form-item label="来访者">
        <el-input v-model="dormInfo.dormId"></el-input>
      </el-form-item>
      <el-form-item label="来访时间">
        <div class="block">
          <el-date-picker
              v-model="dateTime"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="来访详情">
        <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="textarea">
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>

    </el-form>
    <el-divider><span id="lbl" class="el-form-item__label">来访记录</span></el-divider>

    <el-table
        :data=tableData
        stripe
        style="width: 100%;">
      <el-table-column
          prop="billId"
          label="记录单号"
          width="180">
      </el-table-column>
      <el-table-column
          prop="billDate"
          label="来访者姓名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="detail"
          label="登记人"
          width="180">
      </el-table-column>
      <el-table-column
          prop="registrant"
          label="来访时间"
          width="180">
      </el-table-column>
      <el-table-column
          prop="billStat"
          label="来访状态">
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