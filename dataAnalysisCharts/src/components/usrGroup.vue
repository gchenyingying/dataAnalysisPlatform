<template>
	<p>
		{{message}}
	</p>
</template>

<script>
	export default {
  		name: 'usrGroup',
  		data:function(){
  			return {
  				message:"hello usrGroup"
  			};
  		},
  		created:function(){console.log("group");},
  		mounted:function(){console.log("group");}
	}
</script>

<style>
</style>