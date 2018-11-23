<template>
	<div>
		<div class="top">
			<el-button type="primary" icon="el-icon-arrow-left" v-on:click="backTo" size="medium" class="button">返回上级</el-button>
			<el-date-picker v-model="date" 
				align="right" type="date" 
				placeholder="选择日期" 
				:picker-options="pickerOptions" 
				v-bind:clearable="false"
				v-bind:disabled="disableDatePicker"
				v-on:change="changeDate"
				class="datePicker">
    		</el-date-picker>			
		</div>
		<div class="middle">
			<el-row :gutter="2">
  				<el-col :span="6">
  					    <el-card :body-style="{ padding: '0px' }" style="height: 300px;display: table;width: 100%;" class="card">
							<usrBaseInfo v-bind:baseInfo="usrDescriptionData.baseInfo" class="usrBaseInfo"></usrBaseInfo>
    					</el-card>  					
  				</el-col>
  				<el-col :span="18">
  					    <el-card :body-style="{ padding: '0px' }">
  							<eventBarChart v-bind:eventCounter="usrDescriptionData.eventCounter" style="height: 300px;"></eventBarChart>
    					</el-card> 
  				</el-col>
			</el-row>
		</div>
		<div>
			<el-row >
  				<el-col :span="24">
						<usrStep v-bind:eventDescription="usrDescriptionData.eventDescription"></usrStep>					  					
  				</el-col>
			</el-row>			
		</div>
	</div>
</template>

<script>
import ajax from '../ajax/ajax';
import eventBarChart from "@/components/eventBarChart";
import usrBaseInfo from "@/components/usrBaseInfo";
import usrStep from "@/components/usrStep";
export default {
  	name: 'usrDescriptionContent',
  	components: {
    	'eventBarChart': eventBarChart,   
    	'usrBaseInfo':usrBaseInfo,
    	'usrStep':usrStep    
  	},
  	data:function(){
  		return {
        	pickerOptions: {
          	disabledDate(time) {
            	return time.getTime() > Date.now();
          	},
          	shortcuts: [{
            	text: '今天',
            	onClick(picker) {
              	picker.$emit('pick', new Date());
            	}
          	}, {
            	text: '昨天',
            	onClick(picker) {
              	const date = new Date();
              	date.setTime(date.getTime() - 3600 * 1000 * 24);
             	picker.$emit('pick', date);
            	}
          	}, {
            	text: '一周前',
            	onClick(picker) {
              	const date = new Date();
              	date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              	picker.$emit('pick', date);
            	}
          	}]
        	},
        	//初始化当日时间
        	date:new Date(),
        	//保存上一次时间，用户处理错误分支
        	lastDate:new Date(),
        	disableDatePicker:false
  		};
  	},
  	props:["usrId","groupName","usrDescriptionData"],
  	methods:{
  		backTo:function(){
  			this.$router.push({ path: `/usr/usrDetails/${this.groupName}`});
  		},
  		//目前方案，同日期的数据不需要重复获取
  		//时间过滤器不可清除
  		changeDate:function(){
  			console.log("changeDate~");  			
  			this.fetch();
  		},
  		fetch:function(){
  			//等待过程，禁止操作时间过滤器
  			this.disableDatePicker=true;
  			const options={  			
					method:"post",
					url:"/testusrDescriptionContent",//for testing
					data:{
						usrId:this.usrId,//用户ID
						date:this.date.getTime()//ms，指定筛选日期
					},				
					success:(data)=>{
						//有效用户一定可以获取固定数据，比如城市，最后登录时间等	
						//更新视图
						this.usrDescriptionData=data;					
						//启用时间过滤器
						this.disableDatePicker=false;
						//更新上一次操作时间
						this.lastDate=this.date;
					},
					fail:()=>{
						//恢复上一次时间
						this.date=this.lastDate;
						//启用时间过滤器
						this.disableDatePicker=false;											
					},
					timeout:()=>{
						//恢复上一次时间
						this.date=this.lastDate;
						//启用时间过滤器
						this.disableDatePicker=false;							
					},
					waitTime:5000			
  			};
  			//for testing,生成环境必须删除
  			console.log((new Date(options.data.date)).toLocaleDateString());
  			if((new Date(options.data.date)).toLocaleDateString()==="2018/11/15"){
  				options.url="/test";
  			}
  			ajax(options);
  		
  			return;
  			}
  		} 
	}
</script>

<style scoped>
	.top{
		overflow: hidden;
	}
	.middle{
		margin: 8px auto;
	}
	.button{
		float: left;
	}
	.datePicker{
		float: right;
	}
	.card >>> .el-card__body{
		display: table-cell;
		vertical-align: middle;
		margin:0 auto;
	}
	.usrBaseInfo{
		font-size: 13px;
	}
</style>