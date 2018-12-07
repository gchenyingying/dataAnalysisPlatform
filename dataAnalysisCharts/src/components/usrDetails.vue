<template>
	<div v-loading="loading" element-loading-text="加载中">
		<usrList  v-if="availableUsrList" 
			v-bind:usrListData="usrListData" 
			v-bind:emptyFlag="emptyFlag" 
			v-bind:groupName="groupName">
		</usrList>
		<errorInfo v-if="errorFlag"></errorInfo>
	</div>
</template>

<script>
import ajax from '../ajax/ajax';
import usrList from "@/components/usrList";
import errorInfo from "@/components/errorInfo";
export default {
  name: 'usrDetails',
  components: {
    'usrList': usrList,
    'errorInfo':errorInfo
  },
  data:function(){
  	return {
  		loading:false,
  		availableUsrList:false,
  		errorFlag:false,
  		emptyFlag:false,
  		//起始序号,每次加载100条，top100
  		usrSequenceRange:{
  			start:1,
  			count:100
  		},
  		//接受到的用户列表数据，
  		usrListData:[]
  	};
  },
  props:["groupName"],
  //可访问VUE实例
  created:function(){
  	this.fetch();
  	console.log("created~");
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
				url:"/testUsrDetails1",//for testing
				data:{
					groupName:this.groupName,//mainList-主用户列表 其他-分群用户列表
					usrSequenceRange:this.usrSequenceRange//抽取用户ID的序号范围
				},
				success:(data)=>{
					console.log("列表数据", data);
					//status true-有效数据 false-无有效数据
					//list 有效数据的数组
					if(data.status==true)
					{
						this.usrListData=data.list;
						console.log(this.usrListData);
					}else{
						this.emptyFlag=true;
					}
					
					//启用用户列表
					this.availableUsrList=true;
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
	
</style>