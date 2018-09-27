<template>
  <div id="app">
  	<el-row>
  		  <el-col :span="24">
  		  	<navMenu class="navMenu"></navMenu>
  		  </el-col>
  			<el-col class="statusBar">
  				<statusBar v-bind:login="login"></statusBar>
  			</el-col>
  	</el-row>
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
.el-row {
	position: fixed;
	top:0px;
	width:100%;
  z-index:3;
}
.statusBar{
	width: 30%;
  position: absolute;
  top: 50%;
  margin-top: -16px;
  left: 70%;
  float:none;
  font-size: 14px;
  color: #909399;
}
.navMenu{
	width: 100%;
}
/*
.statusBar{
	width:40%;
	position:fixed;
	top:0px;
	left:60%;
}*/

.container{
	margin-top: 70px;
	position: absolute;
	top:0;
	bottom:0;
	width:100%;
	height: auto;
	z-index: -1;
}
html, body{
	margin:0;
}
</style>
