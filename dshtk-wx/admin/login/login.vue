<template>
	<view class="login-page">
		<uni-easyinput v-model="username" placeholder="请输入账号" />
		<div style="height: 10px;"></div>
		<uni-easyinput v-model="password" type="password" placeholder="请输入密码" />
		<button @click="handleSubmit" class="submit-button">登录</button>
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
				password: ''
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
				} else {
					loginApi.BusinessLogin(this.username, this.password).then(data => {
						console.log(data)
						if (data.Success) {
							commonutils.showToast('登录成功', 'success')
							appStorage.setStorage("adminId", data.Data.Id);
							uni.$u.route('/admin/home/home')
						} else {
							commonutils.showToast(data.Message, 'error')
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