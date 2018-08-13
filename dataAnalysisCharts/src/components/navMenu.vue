<template>
	<el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" router>
  		<el-menu-item index="/home">首页</el-menu-item>
  		<el-menu-item index="/dashboard">看板</el-menu-item>
  		<el-menu-item index="/singleChart">单图</el-menu-item> 
  		<el-submenu index="/analyze">
    		<template slot="title">分析</template>
    		<el-menu-item index="/analyze/event">事件分析</el-menu-item>
    		<el-menu-item index="/analyze/funnel">漏斗分析</el-menu-item>
    		<el-menu-item index="/analyze/retain">留存分析</el-menu-item>
    		<el-menu-item index="/analyze/au">活跃用户分析</el-menu-item>
  		</el-submenu>
  		<el-menu-item index="/dataManage">数据管理</el-menu-item> 
	</el-menu>
</template>

<script>	
export default {
  name: 'navMenu'
}
</script>

<style>
</style>