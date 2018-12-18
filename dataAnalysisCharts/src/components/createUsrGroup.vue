<template>
	<div>
		<el-form :model="dynamicValidateForm" :rules="rules"
				status-icon ref="dynamicValidateForm" 
				label-position="left"
				label-width="30px" class="demo-dynamic demo-ruleForm usrGroup">
			  		<!--el-form-item label="新建分群"-->
    					<el-button type="primary" @click="submitForm('dynamicValidateForm')" :loading="loading">保存</el-button>
    					<el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
  					<!--/el-form-item-->
  					<!-- AND循环列表 -->
  					<el-form-item 
  						v-for="(dynamicAndItem,andIndex) in dynamicValidateForm"
  						v-key="dynamicAndItem.key"
  						v-bind:label="dynamicAndItem.labelPrefix" 
  						class="andItem"
  					>
						<template v-for=" (dynamicOrItem,orIndex) in (dynamicAndItem.items)"
							v-key="dynamicAndItem.key+orIndex">
							<el-row>
  								<el-col :span="5">
  									<el-form-item :prop="andIndex+'.items.'+orIndex+'.dimensionName'" :rules="rules.dimensionName">
        								<el-select v-model="dynamicOrItem.dimensionName" 
        									v-on:change="selectDemensionName(dynamicOrItem.dimensionName)"
        									v-on:blur="testBlur(dynamicOrItem.dimensionName)"
        									size="small"
        									placeholder="维度名称">
    										<el-option
      											v-for="item in dimensionNameOptions"
      											:key="item.value"
      											:label="item.label"
      											:value="item.value">
    										</el-option>
  										</el-select>
      								</el-form-item>
  								</el-col>
  								<el-col :span="5">
  									<el-form-item :prop="andIndex+'.items.'+orIndex+'.operator'" :rules="rules.operator">
        								<el-select v-model="dynamicOrItem.operator" 
        									size="small"
        									placeholder="操作符" 
        									v-on:change="changeOption(andIndex,orIndex)">
    										<el-option
      											v-for="item in operatorOptions"
      											:key="item.value"
      											:label="item.label"
      											:value="item.value">
    										</el-option>
  										</el-select>
      								</el-form-item>  									
  								</el-col>
  								<el-col :span="5">
  									<el-form-item :prop="andIndex+'.items.'+orIndex+'.dimensionValue'" 
  										:rules="(dynamicOrItem.mFlag)?(rules.dimensionValueM):(rules.dimensionValueS)">
        								<el-select v-bind:multiple="dynamicOrItem.mFlag" 
        									v-model="dynamicOrItem.dimensionValue" 
        									placeholder="维度值"
        									size="small"
        									v-on:focus="getDimensionValue(dynamicOrItem.dimensionName,andIndex,orIndex)"
        									v-bind:loading="dynamicOrItem.loading">
    										<el-option
      											v-for="item in getDimensionValueOptions(dynamicOrItem.dimensionName)"
      											:key="item.value"
      											:label="item.label"
      											:value="item.value">
    										</el-option>
  										</el-select>
      								</el-form-item>   									
  								</el-col>
  								<el-col :span="7">
  									<el-form-item :prop="andIndex+'.items.'+orIndex+'.dateFilter'" :rules="rules.dateFilter">
										<el-date-picker
      										v-model="dynamicOrItem.dateFilter"
      										type="daterange"
      										range-separator="至"
      										start-placeholder="开始日期"
      										end-placeholder="结束日期"
      										align="right"
      										size="small"
      										:picker-options="pickerOptions">
    									</el-date-picker>
      								</el-form-item>  									
  								</el-col>
  								<el-col :span="2">
  									<el-form-item>
  							  			<el-button style="border:none;background: transparent;" 
  							  				icon="el-icon-close" 
  											circle size="mini" 
  											v-on:click="deleteOrItem(andIndex,orIndex)"
  										>
  										</el-button>			
      								</el-form-item>  									
  								</el-col>  								
							</el-row>
						</template>
						<el-button size="mini" icon="el-icon-plus" round v-on:click="addOrItem(andIndex,orIndex)">OR</el-button>
  					</el-form-item>
			  		<el-form-item>
						<el-button size="mini" icon="el-icon-plus" round v-on:click="addAndItem">AND</el-button>
  					</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import ajax from '../ajax/ajax';
	export default {
  		name: 'createUsrGroup',
  		data () {      
      		return {
       			dynamicValidateForm: [{
       				key:"A",//区分AND item
       				labelPrefix:"A",//每一组AND前缀，比如，A/B/C...
       				items:[{
       					//每一AND下的单个OR
       					dimensionName:"",//维度名称
       					operator:"",//操作符
       					dimensionValue:"",//维度值
       					dateFilter:"",//时间过滤器，DATE
       					mFlag:false,//多选标记
       					loading:false
       				}]//每一AND对应的全部OR
       			}],
       			dimensionNameOptions:[{
       				value:0,
       				label:"地区"
       			},{
       				value:1,
       				label:"操作系统"
       			},{
       				value:2,
       				label:"操作系统版本"
       			},{
       				value:3,
       				label:"浏览器"
       			},{
       				value:4,
       				label:"浏览器版本"
       			}],
       			operatorOptions:[{
       				value:0,
       				label:"等于"
       			},{
       				value:1,
       				label:"不等于"
       			},{
       				value:2,
       				label:"在筛选范围内"
       			},{
       				value:3,
       				label:"不在筛选范围内"
       			}],
       			//初始状态为空数组，需要ajax动态后台获取
       			dimensionValueOptions:{
       				city:[],
       				osVersion:[],
       				os:[],
       				bsVersion:[],
       				bs:[]
       			},
       			dimensionNameList:["city","osVersion","os","bsVersion","bs"],
       			//true-允许发起AJAX请求 false-不允许发起AJAX请求
       			requestDimensionStatus:[true,true,true,true,true],
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
        		},       			
        		rules: {
          			dimensionName: [
            			{type:"number", message: '请选择维度名称', trigger: 'change'}
          			],
          			operator: [
            			{ type:"number", required: true, message: '请选择操作符', trigger: 'change'  }
          			],
          			dimensionValueS: [
            			{type:"number",required: true, message: '请选择维度值', trigger: 'change'  }
          			],
          			dimensionValueM: [
            			{ type:"array" ,required: true, message: '请选择维度值', trigger: 'change'  }
          			],          			
          			dateFilter: [
            			{  type: 'array', required: true, message: '请选择时间范围', trigger: 'blur'  }
          			]        
        		},
        		loading:false
      		};
  		},
  methods:{
  	testBlur:function(value){
  		console.log("blur");
  		console.log(value);
  	},
  	selectDemensionName:function(name){
  		console.log(name);
  		this.$forceUpdate();
  		console.log(name);
  		console.log("select demension name");
  	},
  	changeOption:function(andIndex,orIndex){
  		//获取AND条目
  		//获取OR条目
  		//console.log(this.dynamicValidateForm.indexOf(andIndex));
  		let item=this.dynamicValidateForm[andIndex].items[orIndex];
  		console.log(item);
  		switch(item.operator)
  		{
  			//= != 单选
  			case 0:
  			case 1:
  				//规避element ui多选切换的选择框大小bug 
  				item.mFlag=false;
  				item.dimensionValue="";  				
  				break;
  			//范围 多选
  			case 2:
  			case 3:
  			//规避element ui多选切换的数据不清空bug
  				item.mFlag=true;
  				item.dimensionValue=[];  				
  				break;
  			default:
  				console.log("[createUsrGroup]Operator error");
  		}
  		console.log(item.mFlag);
  		//触发页面更新
  		this.$forceUpdate();
  	},
  	//渲染select选项，从缓存中获取
  	//缓存为空，为空数组
  	//之前已缓存相关维度值，显示列表
  	getDimensionValueOptions:function(name){
  		let option=[];
  		switch(name){
  			case 0:
  				option=this.dimensionValueOptions.city;
  				break;
  			case 1:
  				option=this.dimensionValueOptions.osVersion;
  				break;
  			case 2:
  				option=this.dimensionValueOptions.os;
  				break;
  			case 3:
  				option=this.dimensionValueOptions.bsVersion;
  				break;
  			case 4:
  				option=this.dimensionValueOptions.bs;
  				break;
  			default:
  				console.log("[createUsrGroup]Name not selected");
  		}
  		return option;
  	},
  	//每个页面只需在首次发出ajax，之后相同维度从缓存中获取
  	getDimensionValue:function(dimensionName,andIndex,orIndex){
  		console.log("focus");
  		if(dimensionName===""){
  			console.log("empty name");
  			//没有选定维度类型
  			return;
  		}else if(this.getDimensionValueOptions(dimensionName).length!=0){
  			//不为空缓存
  			//this.$forceUpdate();
  			console.log("valid options");
  			return;
  		}else{
  			//发送AJAX请求或者等待首条请求返回值
  			//ajax请求维度值
  			//获取AND条目
  			//获取OR条目
  			let item=this.dynamicValidateForm[andIndex].items[orIndex];
  			//所有同维度名称的项目进入等待状态，但后添加的同纬度项目，只显示等待，但不触发ajax
  			//所有同纬度名称的项目，维度值均是首次ajax操作的返回值
  			item.loading=true;
  			//触发页面更新
  			this.$forceUpdate();  
  			console.log("ajax loading");
  			//仅允许首次的ajax操作，之后触发相同维度的ajax都只是等待首次的返回值
  			if(this.requestDimensionStatus[dimensionName]==true){
  				console.log("进入AJAX");
  				//不允许后续添加的同纬度项目触发ajax请求
  				this.requestDimensionStatus[dimensionName]=false;
		  		//获取维度名称，用于数据更新
  				const name=this.dimensionNameList[dimensionName];
  				let i,j;
	  			const options={  			
					method:"post",
					url:"/testDemension",//for testing
					data:{
						dimensionName:item.dimensionName//抽取维度名称
					},
					success:(data)=>{
						//status true-已获取 false-空数组
						//option [{label,value}]
						console.log("ajax receive");
						console.log(data);
						if(data.status==true)
						{
							//取消等待,全部的同纬度项目均取消等待状态
							for(i=0;i<this.dynamicValidateForm.length;i++){
								for(j=0;j<this.dynamicValidateForm[i].items.length;j++){
									if(this.dynamicValidateForm[i].items[j].dimensionName==dimensionName)
										this.dynamicValidateForm[i].items[j].loading=false;
								}								
							}
							//item.loading=fasle;	
							//this.$set(this.dimensionValueOptions,name,data.option);
							this.dimensionValueOptions[name]=data.option;
							//更新整个视图，包括所有同维度的项目
							this.$forceUpdate();
							this.requestDimensionStatus[dimensionName]=true;
						}else{
							//取消等待
							for(i=0;i<this.dynamicValidateForm.length;i++){
								for(j=0;j<this.dynamicValidateForm[i].items.length;j++){
									if(this.dynamicValidateForm[i].items[j].dimensionName==dimensionName)
										this.dynamicValidateForm[i].items[j].loading=false;
								}								
							}
							this.requestDimensionStatus[dimensionName]=true;
							//item.loading=fasle;
						}
					},
					fail:()=>{
						//取消等待
							for(i=0;i<this.dynamicValidateForm.length;i++){
								for(j=0;j<this.dynamicValidateForm[i].items.length;j++){
									if(this.dynamicValidateForm[i].items[j].dimensionName==dimensionName)
										this.dynamicValidateForm[i].items[j].loading=false;
								}								
							}
							this.requestDimensionStatus[dimensionName]=true;
							this.$forceUpdate();
						//item.loading=fasle;					
					},
					timeout:()=>{
						//取消等待
							for(i=0;i<this.dynamicValidateForm.length;i++){
								for(j=0;j<this.dynamicValidateForm[i].items.length;j++){
									if(this.dynamicValidateForm[i].items[j].dimensionName==dimensionName)
										this.dynamicValidateForm[i].items[j].loading=false;
								}								
							}
							this.requestDimensionStatus[dimensionName]=true;
							this.$forceUpdate();
						//item.loading=fasle;
						console.log("focus 超时");
					},
					waitTime:5000			
  				};
  				ajax(options);	  				
  			}

  		}
  	},
  	deleteOrItem:function(andIndex, orIndex){
  		if((andIndex==0) && (orIndex==0)){
  			//第一条规则禁止删除
  			this.$message('第一条规则禁止删除');
  			return;
  		}else{
  			//获取AND条目
  			let andItem=this.dynamicValidateForm[andIndex];
  			//获取OR条目
  			let orItem=andItem.items;
  			//删除OR条目
  			orItem.splice(orIndex, 1);
  			//OR条目为空，删除AND条目
  			(orItem.length==0)?(this.dynamicValidateForm.splice(andIndex,1),
  								//维护序号A/B...
  								this.dynamicValidateForm.forEach(function(item,index,array){
  																	const firstStr="A";
  																	item.key=String.fromCharCode(firstStr.charCodeAt(0)+index);
  																	item.labelPrefix=String.fromCharCode(firstStr.charCodeAt(0)+index);
  															})
  								)
  			:"";
  			this.$forceUpdate();
  		}
  	},
  	addOrItem:function(andIndex, orIndex){
  			const orInitialItem={
       					//每一AND下的单个OR
       					dimensionName:"",//维度名称
       					operator:"",//操作符
       					dimensionValue:"",//维度值
       					dateFilter:null,//时间过滤器，DATE
       					mFlag:false,//多选标记
       					loading:false
       			};

  			//获取AND条目
  			let andItem=this.dynamicValidateForm[andIndex];
  			//获取OR条目
  			let orItem=andItem.items;
  			
  			orItem.push(orInitialItem);
  			this.$forceUpdate();
  	},
  	addAndItem:function(){
  		const andInitialItem={
       				key:"A",//区分AND item
       				labelPrefix:"A",//每一组AND前缀，比如，A/B/C...
       				items:[{
       					//每一AND下的单个OR
       					dimensionName:"",//维度名称
       					operator:"",//操作符
       					dimensionValue:"",//维度值
       					dateFilter:null,//时间过滤器，DATE
       					mFlag:false,//多选标记
       					loading:false
       				}]//每一AND对应的全部OR
       			};
       	//当前数组长度
       	const length=this.dynamicValidateForm.length;
       	if(length == 10){
       		this.$message('AND规则最多添加10条');
       		return;
       	}
       	const firstStr="A";
       	//添加条目后，数组长度+1
       	andInitialItem.key=String.fromCharCode(firstStr.charCodeAt(0)+length);
       	andInitialItem.labelPrefix=String.fromCharCode(firstStr.charCodeAt(0)+length);
       	this.dynamicValidateForm.push(andInitialItem);
  	},
  	resetForm(formName){
        this.$refs[formName].resetFields();
    },
   	submitForm(formName){
   		this.$prompt('请输入分组名', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^[a-zA-Z_]\w{3,15}$/,//首字符字母下划线，之后3-15位字母数字下划线
          inputErrorMessage: '4-16位字符，首字符字母下划线，之后3-15位字母数字下划线'
        }).then(sendGroupInfo);
   		const that=this;
   		function sendGroupInfo(groupName){
   			console.log(this);
	    	that.$refs[formName].validate((valid) => {   	  
          	if (valid) {
          		that.loading=true;
          		let andOrData=null;
            	andOrData=that.dynamicValidateForm.map(function(item, index, array){
            			//构建单条AND规则，组合OR规则
            			let andItem=null;
            			andItem=item.items.map(function(item, index, array){
            				let obj=new Object();
            				//均为Number类型
            				obj.dimensionName=item.dimensionName;
            				obj.operator=item.operator;
            				obj.dimensionValue=item.dimensionValue;
            				//[start,end]
            				obj.dateFilter=item.dateFilter.map(function(item, index, array){
            					return item.getTime();
            				});
            		
            				return obj;
            			});
            			return andItem;
            	});
            
            	//打包发送AND/OR规则
            	//AND作为一个外层数组A，数组元素为单条AND规则B
           	 	//规则B为一个内层数组，数组元素为单条OR规则
  					const options={  			
						method:"post",
						url:"/testCreateUsrGroup",//for testing
						data:{
							groupName:groupName.value,//分组名4-16位
							andOrData:andOrData//AND OR打包数据
						},
						//服务器返回一个状态
						success:(data)=>{
							//解除等待
							that.loading=false;
							//成功创建规则
							if(data.status)
							{
								that.$message({
									message:"成功创建规则",
									type: 'success'	,
									center:true,
									duration:1000
								});
								//跳转分组列表页
								that.$router.push({path: '/usr/usrGroup'});
							}else{
								that.$message({
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
							that.loading=false;	
							//弹出提示框，
							that.$message({
								showClose:true,
								message:"发生网络错误",
								center: true,
								type: 'error',
								duration:1000
							});	
						},
						timeout:()=>{
							//解除等待
							that.loading=false;	
							//弹出提示框，
							that.$message({
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
				/*this.$message({
					showClose:true,
					message:"存在表单无效数据",
					type: 'warning'				
				});*/
           	 	return false;
         	}
        	});   			
   		}
    }    
  }
}
</script>

<style scoped>
	.andItem{
		border: #DCDFE6 solid 1px;
		margin-top: 5px;;
	}
	.usrGroup{
		margin: 0 auto;
	}
	.usrGroup>>> .el-date-editor--daterange.el-input__inner{
		width: auto;
	}
	.usrGroup>>> .el-row{
		margin-bottom: 15px;
	}
</style>