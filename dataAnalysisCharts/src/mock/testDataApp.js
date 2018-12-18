import Mock from "mockjs";
console.log("MOCK begin--data app");
Mock.setup({timeout:1000});

Mock.mock(/testDataApp/,"post",function(options){
	let main={
	status:true,
	"list":[
		{
			appId:"app1",
			lastModifyTime:"2018-09-21 05:34:41"
		},
		{
			appId:"app2",
			lastModifyTime:"2018-09-21 05:34:41"
		},
		{
			appId:"app3",
			lastModifyTime:"2018-09-21 05:34:41"
		},
		{
			appId:"app4",
			lastModifyTime:"2018-09-21 05:34:41"
		},
		{
			appId:"app5",
			lastModifyTime:"2018-09-21 05:34:41"
		},
		{
			appId:"app6",
			lastModifyTime:"2018-09-21 05:34:41"
		},
		{
			appId:"app7",
			lastModifyTime:"2018-09-21 05:34:41"
		},
		{
			appId:"app8",
			lastModifyTime:"2018-09-21 05:34:41"
		},
		{
			appId:"app9",
			lastModifyTime:"2018-09-21 05:34:41"
		},
		{
			appId:"app10",
			lastModifyTime:"2018-09-21 05:34:41"
		},
		{
			appId:"app11",
			lastModifyTime:"2018-09-21 05:34:41"
		},
		{
			appId:"app12",
			lastModifyTime:"2018-09-21 05:34:41"
		},
		{
			appId:"app13",
			lastModifyTime:"2018-09-21 05:34:41"
		},
		{
			appId:"app14",
			lastModifyTime:"2018-09-21 05:34:41"
		},
		{
			appId:"app15",
			lastModifyTime:"2018-09-21 05:34:41"
		}
	]
};
	return main;
});

Mock.mock(/testDelDataApp/,"post",function(options){
	let data={
		status:true
	};
	return data;
});

Mock.mock(/testCreateApp/,"post",function(options){
	console.log(options);
	let data={
		status:true
	};
	return data;
});

Mock.mock(/testGetDataApp/,"post",function(options){
	let data={
		  	appId:"appTest1",
  			domin:"www.sina.com.cn",
  			pageInfo:[
  					{name:"name1",//指标名称
   					elementId:"div1",//元素ID
   					operation:0,//采集操作
   					url:"https://elasticsearch.cn/book/elasticsearch_definitive_guide_2.x/index.html",//所属页面
   					enabled:false//启用 禁用
   					},
					{name:"name2",//指标名称
   					elementId:"div2",//元素ID
   					operation:1,//采集操作
   					url:"https://elasticsearch.cn/book/elasticsearch_definitive_guide_2.x/index.html",//所属页面
   					enabled:true//启用 禁用
   					}],//页面指标对象数组
  			eventInfo:[{
   					name:"name3",//指标名称
   					operation:0,//采集操作
   					url:"https://elasticsearch.cn/book/elasticsearch_definitive_guide_2.x/index.html",//所属页面
   					enabled:true//启用 禁用
   				},
  				{
   					name:"name4",//指标名称
   					operation:0,//采集操作
   					url:"https://elasticsearch.cn/book/elasticsearch_definitive_guide_2.x/index.html",//所属页面
   					enabled:false//启用 禁用
   			}]//事件指标对象数组
   			//pageInfo:[],
   			//eventInfo:[]
	};
	return data;
});
