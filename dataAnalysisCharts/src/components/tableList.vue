<template>
	<el-table :data="list" stripe class="table">
    	<el-table-column type="index" width="50" label="序号">
    	</el-table-column>
    	<el-table-column label="用户ID" >    		
    		<template slot-scope="scope">
				<router-link :to="{ path: `/usr/description/${groupName}/${list[scope.$index].usrId}` }">{{list[scope.$index].usrId}}</router-link>
    		</template>    		
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
  props:["list","groupName"]
}	
</script>

<style>
	.table{
		margin: 0 auto;
	}
</style>