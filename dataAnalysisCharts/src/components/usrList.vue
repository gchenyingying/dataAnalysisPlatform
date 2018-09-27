<template>
	<div >
		<tableList v-bind:list="usrListData"></tableList>
		<div class="usrList">
			<emptyInfo v-if="emptyFlag"></emptyInfo>
			<el-button size="small" v-bind:loading="loading" v-on:click="loadMoreUsr" v-else>加载更多</el-button>
		</div>
	</div>
</template>

<script>
	import ajax from '../ajax/ajax';
	import tableList from "@/components/tableList";
	import emptyInfo from "@/components/emptyInfo";
	console.log("hello usrList");
	export default {
  		name: 'usrList',
  		components: {
    		'tableList': tableList,
    		'emptyInfo':emptyInfo
  		},
  		data:function(){
  			return {
  				loading:false
  			};
  		},
  		props:["usrListData","emptyFlag"],
  		created:function(){
  			console.log(this.usrListData);
  			console.log((this.usrListData) instanceof Array);
  			//console.log("created");
  		},
  		methods:{
  			loadMoreUsr:function(){
  				//等待中
  				this.loading=true;
  				
  				const usrSequenceRange={
  					start:this.usrListData.length+1,//从当前序号计数，一次最多取100条
  					count:100
  				};
  				const options={  			
					method:"post",
					url:"/testUsrDetails2",//for testing
					data:{
						usrSequenceRange:this.usrSequenceRange//抽取用户ID的序号范围
					},
					//查询到有效数据后，返回一个数组
					success:(data)=>{
						//解除等待
						this.loading=false;
						//接收到有效数据
						if(data.status)
						{
							this.usrListData=this.usrListData.concat(data.list);
						}else{
							this.$alert('暂无新数据，稍后请重试（点击页面加载按钮）', '提示', {
          						confirmButtonText: '确定',
          						type: 'info',
          						center: true
          					});						
						}
					},
					//发生网络错误
					fail:()=>{
						//解除等待
						this.loading=false;	
						//弹出提示框，
						this.$alert('网络或者服务器出错，建议稍后重试（点击页面加载按钮或联系技术人员）','错误', {
          					confirmButtonText: '确定',
          					type: 'error',
          					center: true
          				});
					},
					timeout:()=>{
						//解除等待
						this.loading=false;	
						//弹出提示框，
						this.$alert('网络超时，建议稍后重试（点击页面加载按钮或联系技术人员）', '错误', {
          					confirmButtonText: '确定',
          					type: 'error',
          					center: true
          				});										
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
	.usrList{
		text-align: center;
	}
</style>