<template>
  <div>
    <el-form label-width="80px">
      <el-form-item label="宿舍号">
        <el-input v-model="dormId" disabled></el-input>
      </el-form-item>

      <el-form-item label="选择月份">
        <div class="block">
          <el-date-picker
              v-model="month"
              type="month"
              value-format="yyyy-MM"
              placeholder="选择月">
          </el-date-picker>
          <el-button type="primary" @click="query">查询</el-button>
        </div>
      </el-form-item>

    </el-form>
    <el-divider></el-divider>

    <el-table
        :data=tableData
        stripe
        style="width: 100%;">
      <el-table-column
          prop="id"
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
          prop="stat"
          label="订单状态">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: 'BillInfo',
  data() {
    return {
      month: '',
      dormId: '',
      tableData: [],
    }
  },
  methods: {
    query() {
      this.$axios.get("bill_info?dorm_id="
          + sessionStorage.getItem("dormId") + "&month="
          + this.month).then(resp => {
        console.log(resp.data)
        this.tableData = resp.data;
      });
    }
  },
  mounted() {
    this.dormId = sessionStorage.getItem("dormId").substring(2)
    this.month = moment().format("YYYY-MM")
    this.query()
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

.el-button {
  margin-left: 40px;
}

.el-input {
  width: 30%;
}
</style>