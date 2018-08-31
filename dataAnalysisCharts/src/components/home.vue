<template>
	<ul>
		<li is="lineChart" class="charts" id="pageView" v-bind:subtext="subtext" v-bind:text="pageView.text" v-bind:data="pageView.data" v-bind:time="time"></li>
		<li is="lineChart" class="charts" id="webSession" v-bind:subtext="subtext" v-bind:text="webSession.text" v-bind:data="webSession.data" v-bind:time="time"></li>
		<li is="lineChart" class="charts" id="uniqueVisitor" v-bind:subtext="subtext" v-bind:text="uniqueVisitor.text" v-bind:data="uniqueVisitor.data" v-bind:time="time"></li>
		<li is="lineChart" class="charts" id="landingPageSession" v-bind:subtext="subtext" v-bind:text="landingPageSession.text" v-bind:data="landingPageSession.data" v-bind:time="time"></li>
		<li is="lineChart" class="charts" id="firstUniqueVisitor" v-bind:subtext="subtext" v-bind:text="firstUniqueVisitor.text" v-bind:data="firstUniqueVisitor.data" v-bind:time="time"></li>
	</ul>
</template>

<script>
import ws from "../websocket/websocket.js";
import lineChart from "@/components/lineChart";

export default {
  name: 'dashBoard',
  data:function(){
  	return {
  		pageView:{
  			//定义对象，方便后续扩展
  			data:[],
  			text:"页面浏览量"
  		},
  		webSession:{
  			data:[],
  			text:"网站访问量"
  		},
  		uniqueVisitor:{
  			data:[],
  			text:"访问用户量"
  		},
  		landingPageSession:{
  			data:[],
  			text:"进入量"
  		},
  		firstUniqueVisitor:{
  			data:[],
  			text:"新访问用户量"
  		},
  		time:[],
  		//ws是否处于open状态，true-open false-message
  		//设置为true，接收到新数据，冲刷整体data数组
  		//设置为false，接收到新数据，push到data数组
  		wsInitialFlag:false,
  		subtext:""
  	};
  },
  methods:{
  	getTodayTimeInterval:function(){
  		//获取默认时间区间
		//获取当天Date
		let now = new Date();
		//获取当天0点0分毫秒数
		let base = +new Date(now.getFullYear(), now.getMonth(), now.getDate());
		const oneMinute = 60*1000;
		const minPerDay = 24*60;
		let date = [];
	
		for (let i = 0; i < minPerDay; i++) {
    		let timeLable = new Date(base);
    		/*date.push(([timeLable.getFullYear(), timeLable.getMonth() + 1, timeLable.getDate()].join('/')+" "
    			+ timeLable.getHours()+":"+timeLable.getMinutes()).replace(" ", "\n"));*/
    		date.push(timeLable.toTimeString().trim().slice(0,5));
    		base += oneMinute;
		}
		return date;
  	},
  	//获取当天日期
  	getTodayDate:function(){
  		let now = new Date();
  		let date=[now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
  		
  		return date;
  	}
  },
  mounted:function(){
  	this.time=this.getTodayTimeInterval(); 
  	this.subtext=this.getTodayDate();
  	
  	let options={};
  	let self=this;
  	
  	options.url="ws://localhost:8080/";//for testing
  	options.autoConnect=true;
  	options.open=function(){
  		console.log("open");
  		//ws连接已打开，准备接收初始数据
  		self.wsInitialFlag=true;
  		//console.log("wsInitialFlag"+self.wsInitialFlag);
  	};
  	options.message=function(data){
  		console.log("message");
  		//console.log("wsInitialFlag"+self.wsInitialFlag);
  		//console.log(data);
  		const chartName=["pageView", "webSession", "uniqueVisitor", 
  			"landingPageSession", "firstUniqueVisitor"];
  		//ws初始状态，处理初始数据
  		if(self.wsInitialFlag){
  			console.log("初始状态OPEN接收数据");
  			//连接过程中，直接push到数组
  			self.wsInitialFlag=false;
  			
  			chartName.forEach(function(item, index, array){
  				self[item].data=data[item];
  				//console.log(self[item].data);
  			});
  			
  		}else{
  			console.log("message状态接收数据");
  			//ws连接中，推入数据
  			chartName.forEach(function(item, index, array){
  				self[item].data.push(data[item]);
  				//console.log(self[item].data);
  			}) ;		
  			
  		}
  		
  	};
  	//2s重连一次
  	ws.setReconnectInterval(2000);
  	//1min检测一次
  	ws.setHeartBeatsInterval(60000);
  	//打开websocket
  	ws.openWebSocket(options);
  },
  destroyed:function(){
  	ws.closeWebSocket();
  },
  components: {
	'lineChart': lineChart
  }
}
</script>

<style scoped>
	.charts{
		width:45%;
		height: 300px;
		display:inline-block;
	}
</style>