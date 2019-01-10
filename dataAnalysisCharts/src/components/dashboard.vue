<template>
	<p>
		{{message}}
		<span class="iconfont icon-tubiao"></span>
	</p>
</template>

<script>
export default {
  name: 'home',
  data:function(){
  	return {
  		message:"hello dashboard"
  	};
  },
  created:function(){
  	console.log("created");
  },
  mounted:function(){
  	console.log("mounted");
  }
}
</script>

<style>

</style>