<template>
	<div>
		<div style="float: right;height:32px;line-height: 32px;margin:auto 5px;">{{ login }}</div>
		<el-button type="info" icon="el-icon-close" size="small" circle v-on:click="loginChange" style="float: right;"></el-button>
	</div>
</template>

<script>
	export default{
		name:"statusBar",
		props:["login"],
		methods:{
			loginChange:function(){
				if(sessionStorage.getItem("isLoginFlag")){
					//已登录，删除token，更改状态
					sessionStorage.removeItem("isLoginFlag");
					localStorage.removeItem("token");
					this.login="请登录";
				}else{
					//未登录，跳转到登录页面
					location.href="../login/index.html";
				}

			}
		}
	}
</script>

<style >
</style>