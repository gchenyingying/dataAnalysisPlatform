<template>	
<div>
	<el-table :data="list" stripe>
    	<el-table-column type="index" width="50" label="序号">
    	</el-table-column>
    	<el-table-column label="分群名称">
    		<template slot-scope="scope">
				<router-link :to="{ path: `/usr/usrDetails/${list[scope.$index].usrGroupName}` }">{{ list[scope.$index].usrGroupName }}</router-link>
    		</template>
    	</el-table-column>
    	<el-table-column prop="usrCount" label="分群人数" width="200">
    	</el-table-column>
    	<el-table-column label="操作" width="200">
    		<template  slot-scope="scope">
    			<el-popover placement="right" width="150" v-model="list[scope.$index].visible">
  					<p>确定分组删除吗？</p>
  					<div style="text-align: right; margin: 0">
    					<el-button type="text" size="mini"  @click="cancelPop(scope.$index)">取消</el-button>
    					<el-button type="primary" size="mini" @click="confirmPop(scope.$index)">确定</el-button>
  					</div>
  					<el-button style="border:none;background: transparent;" icon="el-icon-delete" 
  						circle size="mini" v-bind:loading="list[scope.$index].loading" 
  						v-bind:disabled="list[scope.$index].disabled" slot="reference">
  					</el-button>
				</el-popover>
    		</template>
    	</el-table-column>
 </el-table>
</div>
</template>

<script>
import ajax from '../ajax/ajax';
export default {
  name: 'usrGroupTable',
  props:["list","emptyFlag"],
  /*data:function(){
  	return{
  		visible:false,
  		loading:false
  	};
  },*/
  methods:{
  	confirmPop:function(index){
  		//隐藏弹出卡
  		this.list[index].visible=false;
  		//指示用户等待
		this.list[index].loading=true;
		//避免用户连续操作删除，导致多个ajax的错位处理
		//禁用其他操作按钮，保证一个接一个连续处理
		this.list.forEach(function(item,index,array){
			item.disabled=true;
		});
  		const options={  			
				method:"post",
				url:"/testDelUsrGroup",//for testing
				data:{
					usrGroupName:this.list[index].usrGroupName//抽取分群名称
				},
				success:(data)=>{
					//status true-成功删除 false-未删除
					if(data.status==true)
					{
				  		//删除当前条目对应的页面元素
  						this.list.splice(index, 1);
  						//删除后，数组是否为空
  						if(this.list.length==0)
  						{
  							//跳转到空分群状态
  							this.$emit('getEmptyStatus', true); 	
  						} 	
					}else{
							//某种原因未删除成功，提示失败
							this.$alert('服务器未删除分群，请稍后重试', '错误', {
          						confirmButtonText: '确定',
          						type: 'error',
          						center: true
          					});	
          					//恢复正常可操作状态
          					this.list[index].loading=false;
					}
					//启用删除操作
					this.list.forEach(function(item,index,array){
							item.disabled=false;
					});
				},
				fail:()=>{
							//服务器返回错误，提示失败
							this.$alert('服务器错误，请稍后重试', '错误', {
          						confirmButtonText: '确定',
          						type: 'error',
          						center: true
          					});	
          					//恢复正常可操作状态
          					this.list[index].loading=false;
							//启用删除操作
							this.list.forEach(function(item,index,array){
								item.disabled=false;
							});
				},
				timeout:()=>{
							//某种原因未删除成功，提示失败
							this.$alert('网络超时，请稍后重试', '错误', {
          						confirmButtonText: '确定',
          						type: 'error',
          						center: true
          					});	
          					//恢复正常可操作状态
          					this.list[index].loading=false;
     						//启用删除操作
							this.list.forEach(function(item,index,array){
								item.disabled=false;
							});     					
				},
				waitTime:5000			
  		};
  		ajax(options);		
  	},
  	cancelPop:function(index){
  		//隐藏弹出卡
  		this.list[index].visible=false;
  	}
  }
}	
</script>

<style>

</style>