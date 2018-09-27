<template>
	<el-table :data="list" style="width: 90%" stripe class="table">
    	<el-table-column type="index" width="50" label="序号">
    	</el-table-column>
    	<el-table-column prop="usrId" label="用户ID" >
    	</el-table-column>
    	<el-table-column prop="accessCount" label="最近30天访问次数" width="150">
    	</el-table-column>
    	<el-table-column prop="accessLocation" label="最近30天访问地点" width="150">
    	</el-table-column>
    	<el-table-column prop="lastAccessDate" label="上次访问时间" width="200">
    	</el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'tableList',
  props:["list"]
}	
</script>

<style>
	.table{
		margin: 0 auto;
	}
</style>