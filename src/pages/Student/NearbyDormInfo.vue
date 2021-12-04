<template>
  <el-main>
    <div>
      <el-form label-width="80px">
        <el-form-item label="宿舍号">
          <el-input v-model="dstId"></el-input>
          <el-button type="primary" @click="near_dorm">提交</el-button>
        </el-form-item>
      </el-form>
      <el-divider></el-divider>
      <el-form label-width="80px">
        <el-form-item label="联系电话">
          <el-input v-model="dormInfo.tel"></el-input>
        </el-form-item>

        <el-form-item label="宿舍长">
          <el-input v-model="dormInfo.leader"></el-input>
        </el-form-item>

        <el-form-item label="公寓">
          <el-input v-model="dormInfo.ap"></el-input>
        </el-form-item>

        <el-form-item label="管理员">
          <el-input v-model="dormInfo.manager"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </el-main>
</template>

<script>
export default {
  name: 'NearbyDormInfo.vue',
  data() {
    return {
      dormInfo: {
        ap: '',
        leader: '',
        tel: '',
        manager: ''
      },
      dstId: ''
    }
  },
  methods: {
    near_dorm() {
      this.$axios.get("near_dorm?dorm_id="
          + sessionStorage.getItem("dormId") + "&dstId="
          + this.dstId
      ).then(resp => {
        this.dormInfo.ap = resp.data.apartment
        this.dormInfo.leader = resp.data.leader
        this.dormInfo.tel = resp.data.tel
        this.dormInfo.manager = resp.data.manager
      });
    }
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