<template>
	<el-row class="errorInfo" type="flex" justify="center" align="middle">
  		<el-col :span="6">
  			<img src="../assets/lose_t.png" alt="页面走丢了">
  		</el-col>
  		<el-col :span="6"><div>加载页面出错，建议重试（F5/点击浏览器刷新按钮）或者联系技术人员</div></el-col>
	</el-row>
</template>

<script>
</script>

<style scoped>
	.errorInfo{
		height: 100%;
	}
</style>