<template>
<div>
	<div>
    	<el-button type="primary" @click="getEventChart" :loading="loading">保存</el-button>
    	<el-button @click="resetEventChart" v-bind:disabled="disabled">重置</el-button>	
	</div>
	<div>
		<div style="float:left;width: 350px;">
			<chartIcon style="height: 160px;" 
				v-on:getChartType="changeChartType"
				v-bind:chartType="chartType"
				v-bind:disabled="disabled"
			>
			</chartIcon>
			<!--根据选中图表类型，呈现不同指标/维度组件-->
			<dataOption style="min-height: 200px;" 
				v-bind:chartType="chartType"
				v-bind:metric="metric"
				v-bind:dimension="dimension"
				v-bind:disabled="disabled"
			>
			</dataOption>
		</div>
		<div style="float:left;margin-left: 5px;width: 845px;height: 820px;">
			<eventChartOption 
				v-bind:chartType="chartTypeAck" 
				v-bind:initialFlag="initialFlag"
				v-bind:data="data"
				v-bind:disabled="disabled"
				v-bind:loading="loading"
				v-bind:dataFilter="dataFilter"
				v-on:changeDataFilter="changeDataFilter"
			>
			</eventChartOption>
		</div>
	</div>
</div>
</template>

<script>
import ajax from '../ajax/ajax';
import chartIcon from "@/components/chartIcon";
import dataOption from "@/components/dataOption";
import eventChartOption from "@/components/eventChartOption";
export default {
  name: 'eventAnalyze',
  components: {
    'chartIcon': chartIcon,
    'dataOption':dataOption,
    'eventChartOption':eventChartOption
  },
  data:function(){
  	return {
  		initialFlag:true,//初始状态，尚未选定图表类型charType；
  						//ajax成功后，设置false,进入图表呈现状态
  		chartType:0,//选中图表类型 0-柱状图
  		metric:[],//允许单指标和多指标，元素为String
  		dimension:[],//允许单维度和多维度，元素为Number
  		dataFilter:[],//时间过滤器
  		chartTypeAck:0, //ajax获取数据成功后，设置图表类型为chartType，用于呈现图表
  		data:null, //图表数据，接收到ajax后赋值
  		disabled:false //是否禁用当前页面的操作
  	};
  },
  methods:{
  	//获取图表类型
  	changeChartType:function(status){
  		this.chartType=status;
  	},
 	resetEventChart:function(){
 		//恢复图表初始的待添加状态
 		this.initialFlag=true;
 		this.chartType=0;
 		
 		this.metric=[];
 		this.dimension=[];
 		this.dataFilter=[];
 		this.chartTypeAck=0;
 		this.data={};
 	},
 	changeDataFilter:function(value){
 		console.log(value);
 		this.dataFilter=value;
 	},
 	getEventChart:function(){
 		let chartType=this.chartType;
 		let valid=false;
 		//按照图表类型，校验不同的数据
 		switch(chartType)
 		{
 			case 0:
 				//柱状图需要验证指标和维度
 				((this.metric.length==0) || (this.dimension.length==0))?
					(this.$message({
								showClose:true,
								message:"需选定指标、维度",
								center: true,
								type: 'warning',
								duration:1000
					}), valid=false ):(valid=true);
				console.log("valid", valid);
				if(valid==false){
					return;
				}
				break;
			default:
				//for testing
				this.$message({
								showClose:true,
								message:"相关图表项目暂未开通",
								center: true,
								type: 'warning',
								duration:1000
				});
				return;
 		}
 		//验证时间过滤器
 		console.log("dataFilter",this.dataFilter);
 		(this.dataFilter.length==0)?
					(this.$message({
								showClose:true,
								message:"需选定时间范围",
								center: true,
								type: 'warning',
								duration:1000
					}),valid=false):(valid=true);
		console.log("valid", valid);
		if(valid==false){
			return;
		}
		//验证通过
		//图表/按钮进入等待状态
		this.loading=true;
		//禁用页面操作
		this.disabled=true;
		
		const options={  			
				method:"post",
				url:"/testChartData",//for testing
				data:{
					chartType:this.chartType,
					metric:this.metric,
					dimension:this.dimension,
					dataFilter:[this.dataFilter[0].getTime(),this.dataFilter[1].getTime()]
				},
				success:(data)=>{
					console.log("分组数据",data);
					this.initialFlag=false;
					this.data=data;
					//启用页面操作
					this.disabled=false;
					//更新图表视图
					this.chartTypeAck=this.chartType;
					//图表/按钮解除等待状态
					this.loading=false;
				},
				fail:()=>{
					console.log("ajax fail");
					this.$message({
								showClose:true,
								message:"服务器内部原因",
								center: true,
								type: 'error',
								duration:1000
					});	
					//图表/按钮解除等待状态
					this.loading=false;
					//启用页面操作
					this.disabled=false;										
				},
				timeout:()=>{
					this.$message({
								showClose:true,
								message:"网络超时",
								center: true,
								type: 'error',
								duration:1000
					});	
					//图表/按钮解除等待状态
					this.loading=false;
					//启用页面操作
					this.disabled=false;						
				},
				waitTime:5000			
  		};
  		//for testing start
  		/*if(this.data != null){
  			options.waitTime=2000;
  		}*/
  		//end
  		ajax(options);
 	}
  }
}
</script>

<style>
</style>