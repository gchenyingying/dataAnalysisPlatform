<template>
	<div v-loading="loading" element-loading-text="加载中">
		<dataApp class="dataApp" v-if="availableDataApp" v-bind:dataAppData="dataAppData" v-bind:exitFlag="exitFlag">
		</dataApp>
		<errorInfo v-if="errorFlag"></errorInfo>
	</div>
</template>

<script>
import ajax from '../ajax/ajax';
import dataApp from "@/components/dataApp";
import errorInfo from "@/components/errorInfo";
export default {
  name: 'dataAppTable',
  components: {
    'dataApp': dataApp,
    'errorInfo':errorInfo
  },
  data:function(){
  	return {
  		loading:false,
  		availableDataApp:false,
  		errorFlag:false,
  		exitFlag:false,
  		//接受到的APP列表数据，APP数据不存在太多条目，一次性获取
  		dataAppData:{
  			appId:"",
  			domin:"",
  			pageInfo:[],//页面指标对象数组
  			eventInfo:[]//事件指标对象数组
  		}
  	};
  },
  props:["appId"],
  //可访问VUE实例
  created:function(){
  	if(this.appId==="newApp"){
  		//新建APP
  		this.availableDataApp=true;
  	}else{
  		//已有应用的名称与域名只读
		this.exitFlag=true;
  		this.fetch();  		
  	}
  },
  //某类路由切换中，或许存在组件复用的情况，即相同组件类型
  watch:{
  	$route:function(){
  		if(this.appId==="newApp"){
  			//新建APP
  			this.availableDataApp=true;
  		}else{
  			//已有应用的名称与域名只读
			this.exitFlag=true;
  			this.fetch();  		
  		}
  	}
  },
  methods:{
  	fetch:function(){
  		//等待中
  		this.loading=true;
  		
  		const options={  			
				method:"post",
				url:"/testGetDataApp",//for testing
				data:{
					appId:this.appId
				},
				//格式为this.dataAppData
				success:(data)=>{
					this.dataAppData=data;
					//启用APP数据组件
					this.availableDataApp=true;
					//解除等待
					this.loading=false;
				},
				fail:()=>{
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
	.dataApp{
		margin: 0 auto;
	}
</style>