import Mock from "mockjs";
console.log("MOCK begin--event analyze");
Mock.setup({timeout:1000});

Mock.mock(/testGetMetric/,"post",function(){
	let main=["订单量","购买量","浏览量","游戏1点击量","游戏2点击量"];
	return main;
});

Mock.mock(/testChartData/,"post",function(options){
	let main1={
		"北京":100,
		"上海":110,
		"广州":90,
		"郑州":130,
		"成都":90,
		"苏州":180,
		"杭州":150,
		"北京1":100,
		"上海1":110,
		"广州1":90,
		"郑州1":130,
		"成都1":90,
		"苏州1":180,
		"杭州1":150,
		"北京2":100,
		"上海2":110,
		"广州2":90,
		"郑州2":130,
		"成都2":90,
		"苏州2":180,
		"杭州2":150,
		"北京3":100,
		"上海3":110,
		"广州3":90,
		"郑州3":130,
		"成都3":90,
		"苏州3":180,
		"杭州3":150,
		"北京4":100,
		"上海4":110,
		"广州4":90,
		"郑州4":130,
		"成都4":90,
		"苏州4":180,
		"杭州4":150,
		"北京5":100,
		"上海5":110,
		"广州5":90,
		"郑州5":130,
		"成都5":90,
		"苏州5":180,
		"杭州5":150,
		"北京6":100,
		"上海6":110,
		"广州6":90,
		"郑州6":130,
		"成都6":90,
		"苏州6":180,
		"杭州6":150
	};
	let main2={
		"windows":200,
		"ios":350,
		"linux":90,
		"android":400,
		"其他":50
	};
	let main3={
		"win7":100,
		"win10":80,
		"ubuntu1.0":20,
		"android6.0":90,
		"ios12":90,
		"ios11":150,
		"其他":100
	};
	let main4={
		"chrome":44,
		"firefox":34,
		"edge":69,
		"safari":55,
		"其他":30
	};
	let main5={
		"chrome11":44,
		"chrome12":44,
		"firefox10":34,
		"edge9":69,
		"safari11":55,
		"其他":30
	};
	switch (JSON.parse(options.body).dimension[0]){
    	case 0:
    		return main1;
    	case 1:
    		return main2;
    	case 2:
    		return main3;
    	case 3:
    		return main4;
    	case 4:
    		return main5;
    	default:
    		console.log("Error demension Name");
   }			
});
