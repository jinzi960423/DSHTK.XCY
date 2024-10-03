<template>
	<view class="login-page">
		<uni-easyinput v-model="username" placeholder="请输入账号" />
		<div style="height: 10px;"></div>
		<uni-easyinput v-model="password" type="password" placeholder="请输入旧密码" />
		<div style="height: 10px;"></div>
		<uni-easyinput v-model="newPwd" type="password" placeholder="请输入新密码" />
		<div style="height: 10px;"></div>
		<uni-easyinput v-model="confirmPwd" type="password" placeholder="再次输入新密码" />
		<button @click="handleSubmit" class="submit-button">确认修改</button>
	</view>
</template>
<script>
	import loginApi from './login.js';
	import appStorage from '../../utils/appStorage.js'
	import commonutils from '../../utils/common.js'
	export default {
		data() {
			return {
				username: '',
				password: '',
				newPwd: '',
				confirmPwd: '',
			};
		},
		methods: {
			handleSubmit() {
				// 在这里处理提交逻辑，比如验证账号和密码，然后发送请求到服务器  
				console.log('账号:', this.username);
				console.log('密码:', this.password);
				if (this.username == "") {
					commonutils.showToast('请输入账号', 'error')
				} else if (this.password == "") {
					commonutils.showToast('请输入密码', 'error')
				} else if (this.newPwd == "") {
					commonutils.showToast('请输入新密码', 'error')
				} else if (this.confirmPwd == "") {
					commonutils.showToast('请再次输入新密码', 'error')
				} else if (this.confirmPwd != this.newPwd) {
					commonutils.showToast('再次输入新密码不正确', 'error')
				} else {
					loginApi.updatePwd(this.username, this.password, this.newPwd).then(data => {
						console.log(data)
						if (data.Success) {
							commonutils.showToast('密码修改成功', 'success') 
							uni.$u.route('/admin/home/home')
						} else {
							commonutils.showToast("密码修改失败，请稍后重试", 'error')
						}
					})
				}
			}
		}
	};
</script>

<style>
	.login-page {
		padding: 20px;
	}

	.login-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.input-field {
		width: 100%;
		color: #303133;
		font-size: 15px;
		text-align: left;
		line-height: 26px;

		border-width: 0.5px !important;
		border-color: #dadbde !important;
		border-style: solid;
		padding-top: 6px;
		padding-bottom: 6px;
		padding-left: 9px;
		padding-right: 9px;
	}

	.submit-button {
		margin-top: 20px;
		width: 100%;
		background-color: #2979ff;
		color: #fff;
		border: none;
		border-radius: 4px;
	}
</style>