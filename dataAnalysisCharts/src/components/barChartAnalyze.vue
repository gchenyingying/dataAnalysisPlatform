<template>
	<div id="barCharAnalyze"></div>
</template>

<script>
	export default {
  		name: 'barChartAnalyze',
  		computed:{
  			options:function(){
  				return { 
  					title: {
        				text: '柱状图',
        				subtext: '单分类 单指标'
    				},
    				tooltip : {
        				trigger: 'axis',
        				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            				type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        				}
    				},
    				grid: {
        				show:true,
        				containLabel: true
    				},
    				xAxis : {
            			data : this.dimension,
            	        axisLabel: {
            				inside: true,
           	 				textStyle: {
                				color: '#fff'
            				}
        				},
        				axisTick: {
            				show: false
        				},
        				axisLine: {
            				show: false
        				},
        				z: 10
        			},
    				yAxis : {
    					axisLine:{
            				show: false
        				},
        				axisTick: {
            				show: false
        				},
        				axisLabel: {
            				textStyle: {
                				color: '#999'
           					}
            			}
        			},
        			dataZoom: [{
            			type: 'inside'
        			}],
    				series : [{
    					name:'累加和',
            			type: 'bar',
            			itemStyle: {
                			normal: {
                    			color:new  this.$echarts.graphic.LinearGradient(
                        		0, 0, 0, 1,
                        		[
                            		{offset: 0, color: '#83bff6'},
                            		{offset: 0.5, color: '#188df0'},
                            		{offset: 1, color: '#188df0'}
                        		]
                    		)
                		},
                		emphasis: {
                    		color: new this.$echarts.graphic.LinearGradient(
                        	0, 0, 0, 1,
                        	[
                            	{offset: 0, color: '#2378f7'},
                            	{offset: 0.7, color: '#2378f7'},
                            	{offset: 1, color: '#83bff6'}
                        	])
                		}
            		},
            		data: this.metric
        		}]
  				};
  			},
  			dimension:function(){
				return Object.keys(this.data);
			},
			metric:function(){
				let metrics=[];
				console.log(this.data);
				Object.keys(this.data).forEach((item)=>{
					metrics.push(this.data[item]);
				});
				return metrics;
			}
  		},
  		data(){
  			return {
  				chart:null
  			};
  		},
		props:["data"],
  		mounted:function(){
  			this.chart=this.$echarts.init(document.getElementById("barCharAnalyze"));
  			this.chart.setOption(this.options);
  			// Enable data zoom when user click bar.
			var zoomSize = 6;
			let mychart=this.chart;
			mychart.on('click',  (params)=>{
    			mychart.dispatchAction({
        		type: 'dataZoom',
        		startValue: this.dimension[Math.max(params.dataIndex - zoomSize / 2, 0)],
       			endValue: this.dimension[Math.min(params.dataIndex + zoomSize / 2, this.metric.length - 1)]
    		});});
  			
  			window.addEventListener("resize", this.chart.resize);
  		},
  		methods:{
  			updateChart:function(){
  				this.chart.setOption(this.options);     				
  			}
  		},
  		watch:{
  			data:{
  				//immediate: true,
  				handler:function(val, oldVal){
  				//console.log("事件数量", this.eventCounter);
				this.updateChart();
  				}
  			}
  		}
  	}
</script>

<style>
</style>