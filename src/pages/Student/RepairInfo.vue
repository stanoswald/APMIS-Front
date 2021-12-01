<template>
  <div>
    <el-table
        :data=tableData
        stripe
        style="width: 100%;">
      <el-table-column
          prop="billId"
          label="报修单号"
          width="180">
      </el-table-column>
      <el-table-column
          prop="billDate"
          label="登记人"
          width="180">
      </el-table-column>
      <el-table-column
          prop="detail"
          label="报修财产"
          width="180">
      </el-table-column>
      <el-table-column
          prop="registrant"
          label="维修日期"
          width="180">
      </el-table-column>
      <el-table-column
          prop="billStat"
          label="报修状态">
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