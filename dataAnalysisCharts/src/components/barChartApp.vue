<template>
	<!--指标-->
	<div>
	<el-popover	placement="right" width="200" trigger="click"
		v-on:show="getMetric"	
		v-on:hide="cancelMetricReq"
	>
		<div style="min-height: 200px;" v-loading="loading" element-loading-text="加载中">
			<ul>
				<template v-if="valid">
					<li v-for="item in allMetric" v-on:click="selectMetric(item)" style="text-align: center;height: 30px;">
						<i class="el-icon-arrow-left" style="float: left;"></i>
						{{item}}
					</li>
				</template>
				<template v-else>
					<li style="text-align: center;height: 30px;">
						空列表
					</li>
				</template>
			</ul>
		</div>
  		<el-button slot="reference" 
  			style="width: 300px;height: 30px;line-height: 8px;"
  			v-bind:disabled="disabled"	
  		>
  			<i class="el-icon-circle-plus" style="float: left;margin-top: -3px;"></i><span style="margin-left: -14px;vertical-align: middle;">添加指标</span>
  		</el-button>
	</el-popover>
	<div v-for="metricItem in metric" class="item">
		{{metricItem}}
	</div>
	<!--维度-->
	<el-popover	placement="right" width="200" trigger="click">
		<div style="text-align: center;">
			<ul>
				<li v-for="(item,index) in allDimension" v-on:click="selectDimension(item,index)" style="text-align: center;height: 30px;">
					<i class="el-icon-arrow-left" style="float: left;"></i>
					{{item}}
				</li>
			</ul>
		</div>
  		<el-button slot="reference" 
  			style="width: 300px;height: 30px;line-height: 8px;"
  			v-bind:disabled="disabled"	
  		>
  			<i class="el-icon-circle-plus" style="float: left;margin-top: -3px;"></i><span style="margin-left: -14px;vertical-align: middle;">添加维度</span>
  		</el-button>
	</el-popover>
	<div v-for="dimensionItem in dimension" class="item">
		{{allDimension[dimensionItem]}}
	</div>	
	</div>
</template>

<script>
import ajax from '../ajax/ajax';
export default {
  name: 'barChartApp',
  data:function(){
  	return {
		allMetric:[],//接收到的指标组
		//地区-0 操作系统-1 操作系统版本-2 浏览器-3 浏览器版本-4
		allDimension:["地区", "操作系统", "操作系统版本", "浏览器", "浏览器版本"],
		loading:false,
		ajaxObj:null,
		valid:false
  	};
  },
  props:["metric", "dimension", "disabled"],
  methods:{
	getMetric:function(){
		this.loading=true;
		
		const options={  			
				method:"post",
				url:"/testGetMetric",//for testing
				success:(data)=>{
					console.log("分组数据",data);
					this.allMetric=data;
					this.loading=false;
					this.ajaxObj=null;
					this.valid=true;
				},
				fail:()=>{
					console.log("ajax fail");
					this.loading=false;	
					this.ajaxObj=null;
					this.valid=false;
					this.$message({
								showClose:true,
								message:"服务器内部原因",
								center: true,
								type: 'error',
								duration:1000
					});														
				},
				timeout:()=>{
					this.loading=false;	
					this.ajaxObj=null;
					this.valid=false;
					this.$message({
								showClose:true,
								message:"网络超时",
								center: true,
								type: 'error',
								duration:1000
					});
				},
				waitTime:5000			
  		};
  		this.ajaxObj=ajax(options);
	},
	cancelMetricReq:function(){
		this.loading=false;
		(this.ajaxObj!==null)?(this.ajaxObj.abort()):"";
	},
	selectMetric:function(item){
		//单指标
		this.$set(this.metric,0,item);
	},
	selectDimension:function(item, index){
		//单维度
		this.$set(this.dimension,0,index);
	}
  }
}
</script>

<style scoped>
	.item{
		width: 300px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size: 14px;
	}
	ul{
		list-style-type:none;
		padding: 0px;
	}
	li{
		cursor: pointer;
		height: 30px;
	}
</style>