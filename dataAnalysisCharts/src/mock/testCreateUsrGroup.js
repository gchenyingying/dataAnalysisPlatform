import Mock from "mockjs";
console.log("MOCK begin--create usr group");
Mock.setup({timeout:1000});


Mock.mock(/testUsrGroup/,"post",{
	status:true,
	"list|10":[
		{
			usrGroupName:"test1",
			usrCount:10
		},
		{
			usrGroupName:"test2",
			usrCount:20
		},
		{
			usrGroupName:"test3",
			usrCount:30
		},
		{
			usrGroupName:"test4",
			usrCount:40
		},
		{
			usrGroupName:"test5",
			usrCount:50
		}
	]
});

/*Mock.mock(/testUsrGroup/,"post",{
	status:false
});*/

Mock.mock(/testDelUsrGroup/,"post",{
	status:true
});

/*let counter=0;
Mock.mock(/testDemension/, function(options) {
	const city={
		status:true,
		option:[
		{label:"上海",value:0},
		{label:"北京",value:1},
		{label:"成都",value:2},
		{label:"郑州",value:3}
		]
	};
	const osVersion={
		status:true,
		option:[
		{label:"Android1.0",value:0},
		{label:"IOS12",value:1},
		{label:"MAC11",value:2},
		{label:"Linux9",value:3},
		{label:"Windows10",value:4}
		]
	};
	const os={
		status:true,
		option:[
		{label:"Android",value:0},
		{label:"IOS",value:1},
		{label:"MAC",value:2},
		{label:"Linux",value:3},
		{label:"Windows",value:4}
		]
	};
	const bsVersion={
		status:true,
		option:[
		{label:"chrome11",value:0},
		{label:"firefox10",value:1},
		{label:"safari9",value:2},
		{label:"edge10",value:3}
		]
	};
	const bs={
		status:true,
		option:[
		{label:"chrome",value:0},
		{label:"firefox",value:1},
		{label:"safari",value:2},
		{label:"edge",value:3}
		]
	};
	console.log(options.body);
	if(counter>0){
    switch (JSON.parse(options.body).dimensionName){
    	case 0:
    		return city;
    	case 1:
    		return osVersion;
    	case 2:
    		return os;
    	case 3:
    		return bsVersion;
    	case 4:
    		return bs;
    	default:
    		console.log("Error demension Name");
    }		
	}else{
		counter++;
	    switch (JSON.parse(options.body).dimensionName){
    	case 0:
    		city.status=false;
    		return city;
    	case 1:
    		osVersion.status=false;
    		return osVersion;
    	case 2:
    		os.status=false;
    		return os;
    	case 3:
    		bsVersion.status=false;
    		return bsVersion;
    	case 4:
    		bs.status=false;
    		return bs;
    	default:
    		console.log("Error demension Name");
    }	
	}

})*/

Mock.mock(/testDemension/, function(options) {
	const city={
		status:true,
		option:[
		{label:"上海",value:0},
		{label:"北京",value:1},
		{label:"成都",value:2},
		{label:"郑州",value:3}
		]
	};
	const osVersion={
		status:true,
		option:[
		{label:"Android1.0",value:0},
		{label:"IOS12",value:1},
		{label:"MAC11",value:2},
		{label:"Linux9",value:3},
		{label:"Windows10",value:4}
		]
	};
	const os={
		status:true,
		option:[
		{label:"Android",value:0},
		{label:"IOS",value:1},
		{label:"MAC",value:2},
		{label:"Linux",value:3},
		{label:"Windows",value:4}
		]
	};
	const bsVersion={
		status:true,
		option:[
		{label:"chrome11",value:0},
		{label:"firefox10",value:1},
		{label:"safari9",value:2},
		{label:"edge10",value:3}
		]
	};
	const bs={
		status:true,
		option:[
		{label:"chrome",value:0},
		{label:"firefox",value:1},
		{label:"safari",value:2},
		{label:"edge",value:3}
		]
	};
	console.log(options.body);
    switch (JSON.parse(options.body).dimensionName){
    	case 0:
    		city.status=true;
    		return city;
    	case 1:
    		osVersion.status=true;
    		return osVersion;
    	case 2:
    		os.status=true;
    		return os;
    	case 3:
    		bsVersion.status=true;
    		return bsVersion;
    	case 4:
    		bs.status=true;
    		return bs;
    	default:
    		console.log("Error demension Name");
    }		
})

Mock.mock(/testCreateUsrGroup/, function(options) {
	
	console.log(JSON.parse(options.body));
	return {status:true};	
})


