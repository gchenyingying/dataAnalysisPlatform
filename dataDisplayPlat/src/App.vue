<template>
  <div id="app">
    <router-view class="container"/>
    <!--span></span-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
	#app{
		position: absolute;
		width: 100%;
		height:auto;
		top:0px;
		bottom:0px;
	}
	.container{
		width:400px;
		height: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -76px;
		margin-left: -200px;
	}
</style>
