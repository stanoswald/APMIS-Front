<template>
  <div>
    <el-form label-width="80px">
      <el-form-item label="宿舍号">
        <el-input v-model="dormInfo.id" ></el-input>
        <el-button class="btn" type="primary" @click="submit">提交</el-button>
      </el-form-item>
      <el-form-item label="所属公寓">
        <el-input v-model="dormInfo.apartment" disabled></el-input>
      </el-form-item>
      <el-form-item label="宿舍长">
        <el-input v-model="dormInfo.leader" disabled></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="dormInfo.tel" disabled></el-input>
      </el-form-item>
      <el-form-item label="管理员">
        <el-input v-model="dormInfo.manager" disabled></el-input>
      </el-form-item>
    </el-form>

    <el-divider><span id="lbl" class="el-form-item__label">宿舍成员</span></el-divider>

    <el-table
        :data=tableData
        stripe
        style="width: 100%;">
      <el-table-column
          prop="name"
          label="姓名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="no"
          label="学号"
          width="180">
      </el-table-column>
      <el-table-column
          prop="tel"
          label="联系方式"
          width="180">
      </el-table-column>
      <el-table-column
          prop="dept"
          label="所属院系">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'DormInfo',
  data() {
    return {
      dormInfo: {
        id: '',
        apartment: '',
        leader: '',
        manager: '',
        tel: ''
      },
      tableData: [],
      stu_name: '',
      tel: '',
      dept: '',
    }
  },
  mounted() {
    this.$axios.get("my_dorm?dorm_id=" + sessionStorage.getItem("dormId")).then(resp => {
      this.tableData = resp.data.tableData;
      this.dormInfo = resp.data.dormInfo;
      this.dormInfo.id = resp.data.dormInfo.id.toString().substring(2)
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

.btn{
  margin-left: 40px;
}

#lbl {
  padding-right: 0;
}

.el-divider {
  margin-top: 100px;
}

.el-input {
  width: 30%;
}
</style>