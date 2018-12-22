<template>
  <div class="user-info">
    <el-col :span="8" class="user-img">
			<img src="../assets/profile-photo.png" class="user-photo">
      <!-- <el-upload class="upload-demo">
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload> -->
    </el-col>
    <el-col :span="10">
			<!-- <div class="user-input" v-for='(user,index) in userInput' :key='index'>
        <div class="input-name">{{user.label}}</div>
        <el-input placeholder=""></el-input>
      </div> -->
      <div class="user-input">
        <div class="input-name">用户名</div>
        <el-input value="Amanda" disabled></el-input>
      </div>
      <div class="user-input">
        <div class="input-name">昵称</div>
        <el-input value="swallow" disabled></el-input>
      </div>
      <div class="user-input">
        <div class="input-name">原始密码</div>
        <el-input placeholder="请输入原始密码"></el-input>
      </div>
      <div class="user-input">
        <div class="input-name">新密码</div>
        <el-input placeholder="请输入新密码"></el-input>
      </div>
      <div class="user-input">
        <div class="input-name">确认新密码</div>
        <el-input placeholder="请再次输入新密码"></el-input>
      </div>
      <div class="user-input">
        <div class="input-name">新增日期</div>
        <el-date-picker
      v-model="value6"
      type="datetimerange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="['12:00:00']">
    </el-date-picker>
      </div>
      <div class="user-input">
        <div class="input-name">最后登录时间</div>
        <el-input placeholder></el-input>
      </div>
      <div class="user-input">
        <div class="input-name">登录次数</div>
        <el-input placeholder></el-input>
      </div>
      <div class="user-input">
        <div class="input-name">余额</div>
        <el-input value="123,456,789" disabled></el-input>
      </div>
      <div class="user-input">
        <div class="input-name">返点比例</div>
				<el-button type="text" @click="dialogTableVisible = true">查看</el-button>
        <el-dialog title="返点比例" :visible.sync="dialogTableVisible">
          <el-table :data="rebateData">
            <el-table-column prop="name" label="返点平台"></el-table-column>
            <el-table-column prop="lowRebate" label="最低返点"></el-table-column>
            <el-table-column prop="highRebate" label="最高返点"></el-table-column>
          </el-table>
        </el-dialog>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
	name: "User",
	data() {
		return {
			// userInput: [
			// 	{ label: '用户名', text: 'woshipm01' },
			// 	{ label: '昵称', text: 'woshipm01' },
			// 	{ label: '原始密码', text: '请输入原始密码' },
			// 	{ label: '新密码', text: '请输入新密码' },
			// 	{ label: '确认新密码', text: '请再次输入新密码' },
			// 	{ label: '新增日期' },
			// 	{ label: '最后登录时间' },
			// 	{ label: '登录次数' },
			// 	{ label: '余额' },
			// 	{ label: '返点比例' }
      // ]
      rebateData: [{
          name: 'AG视讯',
          lowRebate: '0.1',
          highRebate: '0.5'
        }, {
          name: 'OG视讯',
          lowRebate: '0.1',
          highRebate: '0.5'
        }, {
          name: 'BB视讯',
          lowRebate: '0.1',
          highRebate: '0.5'
        }, {
          name: 'AB视讯',
          lowRebate: '0.1',
          highRebate: '0.5'
        }],
        dialogTableVisible: false,
		};
	},
	methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./style";
</style>
