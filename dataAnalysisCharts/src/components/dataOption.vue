<template>
	<el-card class="box-card">
  		<div slot="header">
    		<span>应用数据</span>
  		</div>
		<barChartApp v-if="chartType==0" 
			v-bind:disabled="disabled"
			v-bind:metric="metric"
			v-bind:dimension="dimension"
			class="middle"
		>
		</barChartApp>
		<otherChartApp v-else 
			v-bind:disabled="disabled"
			v-bind:metric="metric"
			v-bind:dimension="dimension"	
			class="middle"
		>
		</otherChartApp>
	</el-card>
</template>

<script>
import barChartApp from "@/components/barChartApp";
import otherChartApp from "@/components/otherChartApp";
export default {
  name: 'dataOption',
  components: {
    'barChartApp': barChartApp,
    'otherChartApp':otherChartApp
  },
  props:["chartType", "disabled", "dimension", "metric"]
}
</script>

<style scoped>
	.middle{
		margin: 0 auto;
	}
	.box-card >>> .el-card__header{
		height: 65px;
		font-size: 14px;
	}
</style>