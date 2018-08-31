<template>
	<div v-bind:id="id"></div>
</template>

<script>
	export default {
  		name: 'lineChart',
  		computed:{
  			options:function(){
  				return {
  							grid: {
  							    show:true,
        						containLabel: true
    						},
  							tooltip : {
        						trigger: 'axis',
        						axisPointer: {
            						type: 'cross',
            						animation: false,
            						label: {
                						backgroundColor: '#505765'
            						}
        						}    		
    						},
    						title: {
        						left: 'left',
        						text: this.text,
        						subtext: this.subtext
    						},
    						xAxis: {
        						type: 'category',
        						boundaryGap: false,
        						data: this.time,
        						axisTick:{
        							lineStyle:{
        								opacity:0
        							}
        						},
        						axisLabel:{
        							interval:59,
        							rotate:45
        						},
        						splitLine:{
        							show:true,
        							interval:59
        						}
    						},
    						yAxis: {
        						type: 'value',
        						axisTick:{
        							lineStyle:{
        								opacity:0
        							}
        						}
    						},
    						series:[{
            					name:'当天数据',
            					type:'line',
            					smooth:true,
            					symbol: 'none',
            					itemStyle:{
            						color:"#409eff"
            					},
            					lineStyle: {
              						width:2,
              						color:"#409eff"
            					},
            					areaStyle:{
            						color:new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        					offset: 1,
                        					color: '#FFFFFF'
                    					}, {
                        					offset: 0,
                        					color: '#409eff'
                    				}])         						
            					},
            					data: this.data 					
  							}],
  						};
  			}
  		},
		props:["id", "time", "data", "text", "subtext"],
		data:function(){
			return{
				chart:null
			};
		},
  		mounted:function(){
  			//console.log(this.id);
  			this.chart=this.$echarts.init(document.getElementById(this.id));
  			this.chart.showLoading();
  			//console.log(this.options);
  			this.chart.setOption(this.options);
  			window.addEventListener("resize", this.chart.resize);
  		},
  		methods:{
  			updateChart:function(){
  				this.chart.hideLoading();
  				this.chart.setOption(this.options);     				
  			}
  		},
  		watch:{
  			data:function(val, oldVal){
				this.updateChart();
  			},
  			time:function(){
  				this.updateChart();
  			}
  		}
  	}
</script>

<style>
</style>