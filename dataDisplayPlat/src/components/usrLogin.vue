<template>
<div>
	<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="demo-ruleForm">
  		<el-form-item label="" prop="mailBox">
    		<el-input  placeholder="请输入邮箱账号" prefix-icon="el-icon-message" v-model="ruleForm.mailBox" auto-complete="on">
    		</el-input>
  		</el-form-item>
  		<el-form-item label="" prop="password">
    		<el-input type="password" placeholder="请输入密码" prefix-icon="el-icon-edit"v-model="ruleForm.password" auto-complete="off">
    		</el-input>
  		</el-form-item>

  		<el-form-item>
    		<el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
  		</el-form-item>
	</el-form>
	<span></span>
</div>
</template>

<script>
import ajax from '../ajax/ajax';
export default {
  name: 'usrLogin',
  data () {
       //校验邮箱   
      let validateMailBox = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入邮箱账号'));
        } else {
        	if(!(this.isMailBox(value))){
        		callback(new Error('邮箱格式错误，请重新输入'));
        		return;
        	}
          callback();
        }
        return;
      };
      var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
        	if(!(this.isPassword(value))){
        		callback(new Error('6-20位大小写字母、数字、下划线'));
        		return;
        	}
          callback();
        }
        return;
      };
      return {
        ruleForm: {
          mailBox: '',
          password: ''
        },
        rules: {
          mailBox: [
            { validator: validateMailBox, trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ]
        }
      };
  },
  methods:{
  	isMailBox:function(str){
  		//邮箱正则表达式
  		let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
  		let flag = str.search(reg);
  		return ((flag != -1)?true:false);
  	},
  	isPassword:function(str){
  		//6-20位 a-zA-Z0-9_
  		let reg = /^(\w){6,20}$/;
  		let flag = str.search(reg);
  		return ((flag != -1)?true:false);  		
  	},
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
          	//禁用表单,防止多次提交
          	this.$refs[formName].disabled = true;
          	//构建AJAX选项
          	const options={
          		method:"post",
          		url:"/testUsrLogin",//url for testing mockjs
          		data:{
          			mailBox:this.ruleForm.mailBox,
          			password:this.ruleForm.password
          		},
          		success:(data)=>{
          			//接触表单禁用
          			this.$refs[formName].disabled = false;
          			switch(data.status){
          				case 0:
          					console.log("[login] 登陆成功");
          					//存储token
          					localStorage.setItem("token", data.token);
          					//设置为已登录
          					sessionStorage.setItem("isLoginFlag", JSON.stringify(true));
          					//跳转到数据页面
          					location.href="../data/data.html";
          					break;
          				case 1:
          					console.log("[login] 邮箱账号错误");
        					this.$alert('邮箱账号错误', '提示', {
          						confirmButtonText: '确定',
           						type: 'warning'
       						});		
          					break;
          				case 2:
          					console.log("[login] 登录密码错误");
          					this.$alert('登录密码错误', '提示', {
          						confirmButtonText: '确定',
           						type: 'warning'
       						});	
          					break;
          				default:
          					console.log("[login] 服务器内部原因");
          					this.$alert('服务器内部错误', '提示', {
          						confirmButtonText: '确定',
           						type: 'warning'
       						});	
          			}
          		},
          		fail:(status,statusText)=>{
          			this.$refs[formName].disabled = false;
          			this.$alert('网络错误', '提示', {
          				confirmButtonText: '确定',
           				type: 'warning'
       				});	
          			console.log("[login] 网络出错，请重试");
          			console.log("[login] 错误码 "+status);
          			console.log("[login] 错误信息"+statusText);
          		},         		
          		timeout:()=>{
          			this.$refs[formName].disabled = false;
          			this.$alert('网络超时', '提示', {
          				confirmButtonText: '确定',
           				type: 'warning'
       				});	
          			console.log("[login] 网络超时，请重试");
          		},
          		waitTime:5000
          	};
        
          	ajax(options);
          } else {
            console.log('[login] 未通过验证,请重新输入账号/密码');
            return false;
          }
        });
      }
  }
}
</script>

<style>

</style>