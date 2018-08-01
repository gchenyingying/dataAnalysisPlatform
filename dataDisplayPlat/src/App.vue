<template>
  <div id="app">
    <router-view/>
    <span></span>
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
		text-align: center;
	}
	span{height: 100%;width:1px;vertical-align: middle;display:inline-block;}
</style>
