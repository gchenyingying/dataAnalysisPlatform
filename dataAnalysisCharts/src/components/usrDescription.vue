<template>
	<div v-loading="loading" element-loading-text="加载中" element-loading-spinner="el-icon-loading"
    	element-loading-background="rgba(0, 0, 0, 0.8)">
		<usrDescriptionContent class="usrDescriptionContent" 
			v-if="availableUsrDescription" 
			v-bind:usrDescriptionData="usrDescriptionData"
			v-bind:groupName="groupName"
			v-bind:usrId="usrId">
		</usrDescriptionContent>
		<errorInfo v-if="errorFlag"></errorInfo>
	</div>
</template>

<script>
import ajax from '../ajax/ajax';
import usrDescriptionContent from "@/components/usrDescriptionContent";
import errorInfo from "@/components/errorInfo";
export default {
  name: 'usrDescription',
  components: {
    'usrDescriptionContent': usrDescriptionContent,
    'errorInfo':errorInfo
  },
  data:function(){
  	return {
  		loading:false,
  		availableUsrDescription:true,
  		errorFlag:false,
  		//接受到的用户描述信息
  		//Object，包括baseInfo eventCounter eventDescription
  		usrDescriptionData:{
  			baseInfo:{
  				usrId:"",
  				city:"",
  				accessCount:0,
  				lastAccess:"",
  				bsVersion:"",
  				osVersion:""
  			},
  			eventCounter:[],
  			eventDescription:[]
  		}
  	};
  },
  props:["usrId","groupName"],
  //可访问VUE实例
  created:function(){
  	this.fetch();
  	console.log("created描述");
  },
  mounted:function(){
  	console.log("mounted");
  },
  //某类路由切换中，或许存在组件复用的情况，即相同组件类型
  watch:{
  	$route:function(){
  		this.fetch();
  	}
  },
  beforeUpdate:function(){
  	console.log("beforeUpdate",this.$data);
  },
  updated:function(){
  	console.log("updated",this.$data);
  },
  methods:{
  	fetch:function(){
  		//等待中
  		this.loading=true;
  		
  		const options={  			
				method:"post",
				url:"/testUsrDescription",//for testing
				data:{
					usrId:this.usrId,//用户ID
					date:(new Date()).getTime()//ms，指定获取用户信息的筛选日期
				},				
				success:(data)=>{
					console.log("用户画像", data);
					//有效用户一定可以获取固定数据，比如城市，最后登录时间等					
					this.usrDescriptionData=data;
					//解除等待
					this.loading=false;
				},
				fail:()=>{
					//启用错误组件
					this.errorFlag=true;
					//关闭用户描述
					this.availableUsrDescription=false;
					//解除等待
					this.loading=false;											
				},
				timeout:()=>{
					//启用错误组件
					this.errorFlag=true;
					//关闭用户描述
					this.availableUsrDescription=false;
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

<style scoped>
	.usrDescriptionContent{
		margin: 0 auto;
		width:90%;
	}
</style>