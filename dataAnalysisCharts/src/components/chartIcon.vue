<template>
	<el-card class="box-card">
  		<div slot="header">
    		<span>选择图表样式</span>
  		</div>
  		<el-button style="border:none;" 
  				circle size="mini" 
  				v-on:click="selectChart(0)"
  				:disabled="disabled"
  				:class="iconClass[0]"
  		>
  		<span class="iconfont icon-barchart"></span>
  		</el-button>
  		<el-button style="border:none;" 
  				circle size="mini" 
  				v-on:click="selectChart(1)"
  				:disabled="disabled"
  				:class="iconClass[1]"
  		>
  		<span class="iconfont icon-chartline"></span>
  		</el-button>
  		<el-button style="border:none;" 
  				circle size="mini" 
  				v-on:click="selectChart(2)"
  				:disabled="disabled"
  				:class="iconClass[2]"
  		>
  		<span class="iconfont icon-table"></span>
  		</el-button>
  		<el-button style="border:none;" 
  				circle size="mini" 
  				v-on:click="selectChart(3)"
  				:disabled="disabled"
  				:class="iconClass[3]"
  		>
  		<span class="iconfont icon-chart1196056easyiconnet"></span>
  		</el-button>
  		<el-button style="border:none;" 
  				circle size="mini" 
  				v-on:click="selectChart(4)"
  				:disabled="disabled"
  				:class="iconClass[4]"
  		>
  		<span class="iconfont icon-chart-scatter-plot"></span>
  		</el-button>
	</el-card>
</template>

<script>
export default {
  name: 'chartIcon',
  data:function(){
  	return {
  		iconClass:["selected","noSelected","noSelected","noSelected","noSelected"],
  		type:this.chartType
  	};
  },
  props:["chartType", "disabled"],
  methods:{
  	selectChart:function(index){
  		//更新组件样式
  		//this.iconClass[type]="noSelected";
  		//this.iconClass[index]="selected";
  		this.$set(this.iconClass, this.type, "noSelected");
  		this.$set(this.iconClass, index, "selected");
  		//通知父组件图表类型变更
  		this.$emit("getChartType", index);
  		//更新本组件图表类型
  		this.type=index;
  	}
  },
  watch:{
  	chartType:function(newValue, oldValue){
  		//重置数据，选中第一个选项
  		if(newValue==0 && this.iconClass[0]!="selected"){
  		this.$set(this.iconClass, this.type, "noSelected");
  		this.$set(this.iconClass, newValue, "selected");  
  		this.type=newValue;
  		}
  	}
  }
}
</script>

<style scoped>
	.selected{
		background-color: #409EFF !important;
		color: white !important;
	}
	.noSelected{
		background-color: transparent !important;
		color: #303133 !important;
	}
	.box-card >>> .el-card__header{
		height: 65px;
		font-size: 14px;
	}
</style>