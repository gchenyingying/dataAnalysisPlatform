<template>
	<ul>
		<li v-for="item in list" :key="item.index">
			{{item.name}}&nbsp;:&nbsp;{{item.value}}
		</li>
	</ul>
</template>

<script>
export default {
  	name: 'usrBaseInfo',
  	props:["baseInfo"],
  	computed:{
  		list:function(){
  			return [{
  				name:"用户",
  				value:this.baseInfo.usrId
  			},{
  				name:"城市",
  				value:this.baseInfo.city  				
  			},{
  				name:"最近30天访问次数",
  				//Number类型
  				value:this.baseInfo.accessCount    				
  			},{
  				name:"上次访问时间",
  				value:this.baseInfo.lastAccess
  			},{
  				name:"浏览器版本",
  				value:this.baseInfo.bsVersion
  			},{
  				name:"操作系统版本",
  				value:this.baseInfo.osVersion
  			}];
  		}
  	}
 }
</script>

<style scoped>

</style>