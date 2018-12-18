<template>
	<div class="dataAppList">
		<el-button type="primary" icon="el-icon-plus" v-on:click="createDataApp" size="medium">创建应用</el-button>    								
		<dataAppTable v-bind:list="dataAppListData" v-on:getEmptyStatus="changeEmptyStatus"></dataAppTable>
		<emptyInfo v-if="emptyFlagSelf" class="emptyInfo">
			未创建应用，您可创建新应用
		</emptyInfo>
	</div>
</template>

<script>
	import ajax from '../ajax/ajax';
	import dataAppTable from "@/components/dataAppTable";
	import emptyInfo from "@/components/emptyInfo";
	export default {
  		name: 'dataAppList',
  		components: {
    		'dataAppTable': dataAppTable,
    		'emptyInfo':emptyInfo
  		},
  		data:function(){
  			return {
  				emptyFlagSelf:this.emptyFlag
  			};
  		},
  		props:["dataAppListData","emptyFlag"],
  		methods:{
  			createDataApp:function(){
  				this.$router.push({path: '/dataManageApp/newApp'});
  			},
  			//更改空分群显示状态
  			changeEmptyStatus:function(status){
  				this.emptyFlagSelf=status;
  			}
  		} 
	}
</script>

<style scoped>
	.dataAppList{
		margin: 0 auto;
	}
	.emptyInfo{
		text-align: center;
	}
</style>