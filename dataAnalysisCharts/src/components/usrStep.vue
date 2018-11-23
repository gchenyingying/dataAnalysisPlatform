<template>
	<el-collapse accordion>
		<template v-if="emptyFlag">
  			<el-collapse-item>
    			<template slot="title">
     				<i class="header-icon el-icon-warning"></i>
     				暂无数据
    			</template>
    			<ul>
    				<li>空</li>
    			</ul>
  			</el-collapse-item>
  		</template>
  		<template v-else>
  			<el-collapse-item v-for="item in eventDescription">
    			<template slot="title">
    				<el-row >
  						<el-col :span="6">
							<i :class="`header-icon ${icons[item.eventType]}`"></i>
							{{type[item.type]}}
  						</el-col>
  						<el-col :span="6" :offset="6">
							{{item.date}}				
  						</el-col>
					</el-row>	
    			</template>
    			<ul>
    				<li>{{item.href}}</li>
    				<li>{{operator[item.eventType]}}</li>
    				<template v-if="item.type===1">
    					<li>{{item.elementType}}</li>
    					<li>{{item.elementId}}</li>
    				</template>
    			</ul>
  			</el-collapse-item>  			
  		</template>
	</el-collapse>
</template>

<script>
export default {
  	name: 'usrStep',
  	//type-0-文档级别 1-事件级别
  	//href-URL
  	//usrId
  	//date-String
  	//eventType-0/1/2/3 0-页面浏览 1-点击 2-修改 3-曝光
  	//elementType
  	//elementId
  	props:["eventDescription"],
  	data:function(){
  		return {
  			emptyFlag:true,
  			type:["文档级别", "事件级别"],
  			icons:["el-icon-document","el-icon-edit","el-icon-edit","el-icon-view"],
  			operator:["页面浏览","点击","修改","曝光"]
  		};
  	},
  	watch:{
  		eventDescription:function(val, oldVal){
  				//接收到非空数组时
  				if(this.eventDescription.length>0){
  					this.emptyFlag=false;
  				}else{
  					//切换日期时恢复空列表
  					this.emptyFlag=true;
  				}
  		}
  	}
}
</script>

<style>
</style>