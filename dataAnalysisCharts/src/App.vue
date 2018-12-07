<template>
  <div id="app">
  	<div class="nav">
  	<el-row>
  		  <el-col :span="24">
  		  	<navMenu class="navMenu"></navMenu>
  		  </el-col>
  			<el-col class="statusBar">
  				<statusBar v-bind:login="login"></statusBar>
  			</el-col>
  	</el-row>
  	</div>
    <!--navMenu class="navMenu"></navMenu>
    <statusBar class="statusBar" v-bind:login="login"></statusBar-->
    <router-view class="container"/>
  </div>
</template>

<script>
import navMenu from "@/components/navMenu";
import statusBar from "@/components/statusBar";
export default {
  name: 'App',
  data:function(){
  	return {login:"退出"};
  },
  mounted:function(){
  	console.log(this.login);
  },
  components: {
    'navMenu': navMenu,
    'statusBar':statusBar
  }
}
</script>

<style scoped>
#app {
	width:100%;
}
.nav{
	width: 100%; 
	border-bottom: 1px solid rgb(230, 230, 230); 
	height: 60px;
	position:relative;
}
.el-row {
	position: fixed;
	top:0px;
	left: 50%;
	margin-left: -600px;
	width:1200px;
  z-index:3;
}
.statusBar{
	width: 200px;
  position: absolute;
  top: 50%;
  margin-top: -16px;
  right:0px;
  float:none;
  font-size: 14px;
  color: #909399;
}
.navMenu{
	width: 100%;
}
.navMenu >>> .el-menu.el-menu--horizontal{
	border-bottom: none;
}
.container{
	width:1200px;
	margin-top: 70px;
	position: absolute;
	top:0;
	bottom:0;
	left:50%;
	margin-left: -600px;
	height: auto;
	z-index: -1;
}
</style>
<style>
html, body{
	margin:0;
}
</style>
