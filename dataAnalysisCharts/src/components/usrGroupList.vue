<template>
	<div class="usrGroupList">
		<el-button type="primary" icon="el-icon-plus" v-on:click="createUsrGroup" size="medium">创建分群</el-button>    								
		<usrGrouptable v-bind:list="usrGroupListData" v-on:getEmptyStatus="changeEmptyStatus"></usrGrouptable>
		<emptyInfo v-if="emptyFlagSelf" class="emptyInfo">
			未分群，您可创建新分群
		</emptyInfo>
	</div>
</template>

<script>
	import ajax from '../ajax/ajax';
	import usrGroupTable from "@/components/usrGroupTable";
	import emptyInfo from "@/components/emptyInfo";
	export default {
  		name: 'usrGroupList',
  		components: {
    		'usrGrouptable': usrGroupTable,
    		'emptyInfo':emptyInfo
  		},
  		data:function(){
  			return {
  				emptyFlagSelf:this.emptyFlag
  			};
  		},
  		props:["usrGroupListData","emptyFlag"],
  		methods:{
  			createUsrGroup:function(){
  				this.$router.push({path: '/usr/createUsrGroup'});
  			},
  			//更改空分群显示状态
  			changeEmptyStatus:function(status){
  				this.emptyFlagSelf=status;
  			}
  		} 
	}
</script>

<style scoped>
	.usrGroupList{
		margin: 0 auto;
		width: 90%;
	}
	.emptyInfo{
		text-align: center;
	}
</style>