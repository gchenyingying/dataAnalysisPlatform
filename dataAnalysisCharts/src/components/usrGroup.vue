<template>
	<div v-loading="loading" element-loading-text="加载中">
		<usrGroupList class="usrGroupList" v-if="availableUsrGroupList" v-bind:usrGroupListData="usrGroupListData" v-bind:emptyFlag="emptyFlag">
		</usrGroupList>
		<errorInfo v-if="errorFlag"></errorInfo>
	</div>
</template>

<script>
import ajax from '../ajax/ajax';
import usrGroupList from "@/components/usrGroupList";
import errorInfo from "@/components/errorInfo";
export default {
  name: 'usrGroup',
  components: {
    'usrGroupList': usrGroupList,
    'errorInfo':errorInfo
  },
  data:function(){
  	return {
  		loading:false,
  		availableUsrGroupList:false,
  		errorFlag:false,
  		emptyFlag:false,
  		//接受到的用户列表数据，分群数据不存在太多条目，一次性获取
  		usrGroupListData:[]
  	};
  },
  //可访问VUE实例
  created:function(){
  	this.fetch();
  },
  //某类路由切换中，或许存在组件复用的情况，即相同组件类型
  watch:{
  	$route:function(){
  		this.fetch();
  	}
  },
  methods:{
  	fetch:function(){
  		//等待中
  		this.loading=true;
  		
  		const options={  			
				method:"post",
				url:"/testUsrGroup",//for testing
				success:(data)=>{
					console.log("分组数据",data);
					//status true-有效数据 false-无有效数据
					//list 有效数据的数组
					if(data.status==true)
					{						
						data.list.forEach(function(item,index,array){
							item.loading=false;
							item.visible=false;
							item.disabled=false;
						});
						this.usrGroupListData=data.list;
					}else{
						this.emptyFlag=true;
					}
					
					//启用用户列表
					this.availableUsrGroupList=true;
					//解除等待
					this.loading=false;
				},
				fail:()=>{
					console.log("ajax fail");
					//启用错误组件
					this.errorFlag=true;
					//解除等待
					this.loading=false;											
				},
				timeout:()=>{
					//启用错误组件
					this.errorFlag=true;
					//解除等待
					this.loading=false;							
				},
				waitTime:5000			
  		};
  		ajax(options);
  		
  		return;
  	}
  } 
}
</script>

<style>
	.usrGroupList{
		margin: 0 auto;
	}
</style>