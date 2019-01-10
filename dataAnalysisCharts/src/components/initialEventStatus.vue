<template>
	<div class="container">
		<div class="content">
			<div class="chart">
				<img src="../assets/chart.png" alt="请创建图表"/>
			</div>
			<div class="tip">
				请设置图表
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.container{
		display: table;
	}
	.content{
		display: table-cell;
		vertical-align: middle;
	}
	.tip{
		margin-top: 25px;
		width: 160px;
		height: 50px;
		border: dashed #53A2F7 2px;
		text-align: center;
		font-family: PingFangSC-Regular;
		font-size: 24px;
		color: #53A2F7;
		letter-spacing: -0.2px;
		line-height: 50px;
		vertical-align: middle;
	}
	.chart{
		text-align: center;
	}
</style>