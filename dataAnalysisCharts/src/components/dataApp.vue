<template>
	<div>
		<el-form :model="dynamicValidateForm"
				status-icon ref="dynamicValidateForm" 
				label-width="100px" class="demo-dynamic demo-ruleForm dataApp">
			  		<!--el-form-item label="新建分群"-->
    					<el-button type="primary" @click="submitForm('dynamicValidateForm')" :loading="loading">保存</el-button>
    					<el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
  					<!--/el-form-item-->
  					<!--固定配置项-->
  					<el-form-item label="应用名称" class="item">
  						<el-row >
    					<el-col :span="5">
    						<!--规避只读项验证-->
    						<el-form-item v-if="exitFlag">
      							<el-input v-model="dynamicValidateForm.appId" readonly="true" placeholder="应用名称" size="small"></el-input>
      						</el-form-item>
    						<el-form-item :rules="rules.name" prop="appId" v-else>
      							<el-input v-model="dynamicValidateForm.appId" placeholder="应用名称" size="small"></el-input>
      						</el-form-item>
    					</el-col>
    					<el-col :span="5">
    						<el-form-item v-if="exitFlag">
      							<el-input v-model="dynamicValidateForm.domin" readonly="true" placeholder="域名" size="small"></el-input>
      						</el-form-item>
    						<el-form-item :rules="rules.domin" prop="domin" v-else>
      							<el-input v-model="dynamicValidateForm.domin" placeholder="域名" size="small"></el-input>
      						</el-form-item>
    					</el-col>
    					</el-row>
 	 				</el-form-item>
  					<!-- 事件循环列表 -->
  					<el-form-item label="事件指标" v-if="dynamicValidateForm.pageInfo.length>0" class="item">
  					<el-row v-for="(pageItem,pageItemIndex) in dynamicValidateForm.pageInfo"
  						v-key="pageItemIndex"
  					>
    					<el-col :span="5">
    						<el-form-item :rules="rules.name" :prop="'pageInfo.'+pageItemIndex+'.name'">
      							<el-input v-model="pageItem.name" placeholder="指标名称" size="small"></el-input>
      						</el-form-item>
    					</el-col>
    					<el-col :span="5">
    						<el-form-item :rules="rules.name" :prop="'pageInfo.'+pageItemIndex+'.elementId'">
      							<el-input v-model="pageItem.elementId" placeholder="元素ID" size="small"></el-input>
      						</el-form-item>
    					</el-col>
    					<el-col :span="5">
    						<el-form-item :rules="rules.urlPath" :prop="'pageInfo.'+pageItemIndex+'.url'">
      							<el-input v-model="pageItem.url" placeholder="所属URL" size="small"></el-input>
      						</el-form-item>
    					</el-col> 
    					<el-col :span="5">
    						<el-form-item :rules="rules.valueType" :prop="'pageInfo.'+pageItemIndex+'.operation'">
        						<el-select 
        							v-model="pageItem.operation" 
        							placeholder="采集类型"
        							size="small"
        						>
    								<el-option
      										v-for="item in pageOperations"
      										:key="item.value"
      										:label="item.label"
      										:value="item.value">
    								</el-option>
  								</el-select> 
  							</el-form-item>
    					</el-col>    					
    					<el-col :span="3">
      						<el-switch v-model="pageItem.enabled" active-text="启用" inactive-text="禁用" size="small">
							</el-switch>
    					</el-col>  
  						<el-col :span="1">
  							<el-form-item>
  							  	<el-button style="border:none;background: transparent;" 
  							  		icon="el-icon-close" 
  									circle size="mini" 
  									v-on:click="deletePageItem(pageItemIndex)"
  								>
  								</el-button>
      						</el-form-item>  									
  						</el-col> 
  						</el-row>
 	 				</el-form-item>
 	 				<!--页面指标-->
  					<el-form-item label="页面指标" v-if="dynamicValidateForm.eventInfo.length>0" class="item">
  					<el-row v-for="(eventItem,eventItemIndex) in dynamicValidateForm.eventInfo"
  						v-key="eventItemIndex"
  					>
    					<el-col :span="5">
    						<el-form-item :rules="rules.name" :prop="'eventInfo.'+eventItemIndex+'.name'">
      							<el-input v-model="eventItem.name" placeholder="指标名称" size="small"></el-input>
      						</el-form-item>
    					</el-col>
    					<el-col :span="5">
    						<el-form-item :rules="rules.urlPath" :prop="'eventInfo.'+eventItemIndex+'.url'">
      							<el-input v-model="eventItem.url" placeholder="所属URL" size="small"></el-input>
      						</el-form-item>
    					</el-col> 
    					<el-col :span="5">
    						<el-form-item :rules="rules.valueType" :prop="'eventInfo.'+eventItemIndex+'.operation'">
        						<el-select 
        							v-model="eventItem.operation" 
        							placeholder="采集类型"
        							size="small"
        						>
    								<el-option
      										v-for="item in eventOperations"
      										:key="item.value"
      										:label="item.label"
      										:value="item.value">
    								</el-option>
  							</el-select> 
  							</el-form-item>
    					</el-col>    					
    					<el-col :span="3">
      						<el-switch v-model="eventItem.enabled" active-text="启用" inactive-text="禁用" size="small">
							</el-switch>
    					</el-col>  
  						<el-col :span="1">
  							<el-form-item>
  							  	<el-button style="border:none;background: transparent;" 
  							  		icon="el-icon-close" 
  									circle size="mini" 
  									v-on:click="deleteEventItem(eventItemIndex)"
  								>
  								</el-button>			
      						</el-form-item>  									
  						</el-col>  
  					</el-row>
 	 				</el-form-item> 	 				
 	 				
			  		<el-form-item>
						<el-button size="mini" icon="el-icon-plus" round v-on:click="addPageItem">事件</el-button>
						<el-button size="mini" icon="el-icon-plus" round v-on:click="addEventItem">页面</el-button>
  					</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import ajax from '../ajax/ajax';
	export default {
  		name: 'dataApp',
  		data () {      
      		return {
      			loading:false,
      			dynamicValidateForm:this.dataAppData,
      			pageOperations:[{
      				label:"点击",
      				value:0
      			},{
      				label:"修改",
      				value:1
      			},{
      				label:"曝光量",
      				value:2
      			},{
      				label:"包含点击",
      				value:3
      			}],
      			eventOperations:[{
      				label:"浏览量",
      				value:0
      			}],
      	        rules: {
          			name: [
            			{type:"string", required: true, pattern:/^[a-zA-Z_]\w{3,15}$/,message: '4-16位字符,首字符字母下划线', trigger: 'blur'}
          			],
          			valueType: [
            			{type:"number",required: true, message: '请选择采集类型', trigger: 'change'  }
          			],         			
          			urlPath: [
            			{  type: 'url', required: true, message: '请输入URL', trigger: 'blur'  }
          			] ,
          			domin:[
          				{type:"string", required: true, pattern:/^[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?$/, message: '请输入域名', trigger: 'blur'}
          			]
        		}
      		};
  		},
  		props:["dataAppData", "exitFlag"],
  		methods:{
  			resetForm(formName){
        		this.$refs[formName].resetFields();
    		},
   			submitForm(formName){
	    		this.$refs[formName].validate((valid) => {   	  
          			if (valid) {
          			this.loading=true;
  					const options={  			
						method:"post",
						url:"/testCreateApp",//for testing
						data:{
							appData:this.dynamicValidateForm
						},
						//服务器返回一个状态
						success:(data)=>{
							//解除等待
							this.loading=false;
							//成功创建指标
							//返回satus状态，true-成功 false-失败
							if(data.status)
							{
								this.$message({
									message:"成功创建指标",
									type: 'success'	,
									center:true,
									duration:1000
								});
								//跳转到指标总览页面
								this.$router.push({path: '/dataManage'});
							}else{
								this.$message({
									showClose:true,
									message:"服务器创建出错",
									center: true,
									type: 'error',
									duration:1000
								});							
							}
						},
						//发生网络错误
						fail:()=>{
							//解除等待
							this.loading=false;	
							//弹出提示框，
							this.$message({
								showClose:true,
								message:"发生网络错误",
								center: true,
								type: 'error',
								duration:1000
							});	
						},
						timeout:()=>{
							//解除等待
							this.loading=false;	
							//弹出提示框，
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
  					ajax(options);              
          		} else {
           	 		return false;
        		}});   			
   			},
   			addPageItem:function(){
   				let pageItemInfo={
   					name:"",//指标名称
   					elementId:"",//元素ID
   					operation:"",//采集操作
   					url:"",//所属页面
   					enabled:true//启用 禁用
   				};
   				this.dynamicValidateForm.pageInfo.push(pageItemInfo);
   			},
   			addEventItem:function(){
   				let eventItemInfo={
   					name:"",//指标名称
   					operation:"",//采集操作
   					url:"",//所属页面
   					enabled:true//启用 禁用
   				};
   				this.dynamicValidateForm.eventInfo.push(eventItemInfo);
   			},
   			deletePageItem:function(index){
   				this.dynamicValidateForm.pageInfo.splice(index,1);
   			},
   			deleteEventItem:function(index){
   				this.dynamicValidateForm.eventInfo.splice(index,1);
   			}
  		}
}
</script>

<style scoped>
	.item{
		border: #DCDFE6 solid 1px;
		margin-top: 5px;
		padding-bottom: 2px;
	}
	.dataApp{
		margin: 0 auto;
	}
	.dataApp>>> .el-row{
		margin-bottom: 15px;
	}
</style>