<template>
	<div id="eventBarChart"></div>
</template>

<script>
	export default {
  		name: 'eventBarChart',
  		computed:{
  			options:function(){
  				return {  				
    				color: ['#3398DB'],
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
    				xAxis : [{
            			type : 'category',
            			data : ['00:00','01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00','11:00',
            				'12:00','13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00','23:00'],
            			axisTick: {
                			alignWithLabel: true
            			}
        			}],
    				yAxis : [{
            				type : 'value'
       				}],
    				series : [{
            			name:'事件数量',
            			type:'bar',
            			barWidth: '60%',
            			data:this.eventCounter
        			}]	
  				};
  			}
  		},
		props:["eventCounter"],
		data:function(){
			return{
				chart:null
			};
		},
  		mounted:function(){
  			this.chart=this.$echarts.init(document.getElementById("eventBarChart"));
  			this.chart.setOption(this.options);
  			window.addEventListener("resize", this.chart.resize);
  		},
  		methods:{
  			updateChart:function(){
  				this.chart.setOption(this.options);     				
  			}
  		},
  		watch:{
  			eventCounter:{
  				//immediate: true,
  				handler:function(val, oldVal){
  				console.log("事件数量", this.eventCounter);
				this.updateChart();
  				}
  			}
  		}
  	}	
</script>

<style>
</style>