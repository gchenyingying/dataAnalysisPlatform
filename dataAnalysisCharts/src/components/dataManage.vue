<template>
	<div v-loading="loading" element-loading-text="加载中">
		<dataAppList class="dataAppList" v-if="availableDataAppList" v-bind:dataAppListData="dataAppListData" v-bind:emptyFlag="emptyFlag">
		</dataAppList>
		<errorInfo v-if="errorFlag"></errorInfo>
	</div>
</template>

<script>
import ajax from '../ajax/ajax';
import dataAppList from "@/components/dataAppList";
import errorInfo from "@/components/errorInfo";
export default {
  name: 'usrGroup',
  components: {
    'dataAppList': dataAppList,
    'errorInfo':errorInfo
  },
  data:function(){
  	return {
  		loading:false,
  		availableDataAppList:false,
  		errorFlag:false,
  		emptyFlag:false,
  		//接受到的APP列表数据，APP数据不存在太多条目，一次性获取
  		dataAppListData:[]
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
				url:"/testDataApp",//for testing
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
						this.dataAppListData=data.list;
					}else{
						this.emptyFlag=true;
					}
					
					//启用用户列表
					this.availableDataAppList=true;
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
	.dataAppList{
		margin: 0 auto;
	}
</style>