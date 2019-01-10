<template>
	<el-card class="box-card">
  		<div slot="header" style="overflow: hidden;">
    		<el-date-picker
      			v-model="dataFilter"
      			type="daterange"
      			range-separator="至"
      			start-placeholder="开始日期"
      			end-placeholder="结束日期"
      			align="right"
      			size="mini"
      			:picker-options="pickerOptions"
      			style="float:left;"
      			v-bind:disabled="disabled"
      			v-on:change="change"
      		>
    		</el-date-picker>
  		</div>
  		<div v-loading="loading" element-loading-text="加载中">
  			<!--此处height需调试-->
			<template v-if="initialFlag">
				<initialEventStatus style="height: 700px;margin: 0 auto;"></initialEventStatus>
			</template>
			<template v-else>
				<!--后续此处可更改为v-show效率更高-->
				<barChartAnalyze v-if="chartType==0" v-bind:data="data" style="height: 700px;margin: 0 auto;"></barChartAnalyze>
				<!--该组件后续需扩展，此处仅调试-->
				<otherChartAnalyze v-else v-bind:data="data" style="height: 700px;margin: 0 auto;"></otherChartAnalyze>
			</template>
		</div>
	</el-card>
</template>

<script>
	import initialEventStatus from "@/components/initialEventStatus";
	import barChartAnalyze from "@/components/barChartAnalyze";
	import otherChartAnalyze from "@/components/otherChartAnalyze";
	export default {
  		name: 'eventChartOption',
		props:["initialFlag", "chartType", "loading", "disabled", "data", "dataFilter"],
		components: {
    		'initialEventStatus': initialEventStatus,
    		'barChartAnalyze':barChartAnalyze,
    		'otherChartAnalyze':otherChartAnalyze
  		},
		data(){
			return{
				pickerOptions: {
       				disabledDate(time) {
            			return time.getTime() > Date.now();
          			},
          			shortcuts: [{
            			text: '最近一周',
            			onClick(picker) {
              				const end = new Date();
              				const start = new Date();
              				start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              				picker.$emit('pick', [start, end]);
            			}
          			}, {
            			text: '最近一个月',
            			onClick(picker) {
              				const end = new Date();
              				const start = new Date();
              				start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              				picker.$emit('pick', [start, end]);
            			}
          			}, {
            			text: '最近三个月',
            			onClick(picker) {
              				const end = new Date();
              				const start = new Date();
             				start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              				picker.$emit('pick', [start, end]);
            			}
          			}]
        		}
			};
		},
		methods:{
			change:function(){
				//console.log(this.dataFilter);
				this.$emit("changeDataFilter",this.dataFilter);
			}
		}
  	}		
</script>

<style>
</style>