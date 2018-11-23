import Mock from "mockjs";
console.log("MOCK begin--user details");
Mock.setup({timeout:1000});

/*
Mock.mock(/testUsrDetails1/,"post",{
	status:true,
	"list|20":[
		{
			usrId:"045bda43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"上海",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"北京",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"成都",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045b4a43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"郑州",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-ade2-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"苏州",
			lastAccessDate:"2018-09-21 05:34:41"
		}
	]
});


Mock.mock(/testUsrDetails2/,"post",{
	status:true,
	"list|10":[
		{
			usrId:"045bda43-aded-4b44-a518-7266cb933ca7",
			accessCount:10,
			accessLocation:"上海",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4c44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"北京",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-bded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"成都",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045b4a43-adcd-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"郑州",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-ede2-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"苏州",
			lastAccessDate:"2018-09-21 05:34:41"
		}
	]
});
*/
Mock.mock(/testUsrDetails1/,"post",function(options){
	let main={
	status:true,
	"list":[
		{
			usrId:"045bda43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"上海",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"北京",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"成都",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045b4a43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"郑州",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-ade2-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"苏州",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"上海",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"北京",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"成都",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045b4a43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"郑州",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-ade2-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"苏州",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"上海",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"北京",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"成都",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045b4a43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"郑州",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-ade2-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"苏州",
			lastAccessDate:"2018-09-21 05:34:41"
		}
	]
};
	
let test1={
	status:true,
	"list":[
		{
			usrId:"045bda43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"上海1",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"北京1",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"成都1",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045b4a43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"郑州1",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-ade2-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"苏州1",
			lastAccessDate:"2018-09-21 05:34:41"
		}
	]
};	

let test2={
	status:true,
	"list":[
		{
			usrId:"045bda43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"上海2",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"北京2",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"成都2",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045b4a43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"郑州2",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-ade2-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"苏州2",
			lastAccessDate:"2018-09-21 05:34:41"
		}
	]
};

let test3={
	status:true,
	"list":[
		{
			usrId:"045bda43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"上海3",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"北京3",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"成都3",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045b4a43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"郑州3",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-ade2-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"苏州3",
			lastAccessDate:"2018-09-21 05:34:41"
		}
	]
};

let test4={
	status:true,
	"list":[
		{
			usrId:"045bda43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"上海4",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"北京4",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"成都4",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045b4a43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"郑州4",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-ade2-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"苏州4",
			lastAccessDate:"2018-09-21 05:34:41"
		}
	]
};

let test5={
	status:true,
	"list":[
		{
			usrId:"045bda43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"上海5",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"北京5",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"成都5",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045b4a43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"郑州5",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-ade2-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"苏州5",
			lastAccessDate:"2018-09-21 05:34:41"
		}
	]
};
	    switch (JSON.parse(options.body).groupName){
    	case "mainList":
    		return main;
    	case "test1":
    		return test1;
    	case "test2":
    		return test2;
    	case "test3":
    		return test3;
    	case "test4":
    		return test4;
    	case "test5":
    		return test5;
    	default:
    		console.log("Error group Name");
    }		
});

Mock.mock(/testUsrDetails2/,"post",function(options){
	let main={
	status:true,
	"list":[
		{
			usrId:"045bda43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"上海",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"北京",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"成都",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045b4a43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"郑州",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-ade2-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"苏州",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"上海",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"北京",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"成都",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045b4a43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"郑州",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-ade2-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"苏州",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"上海",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"北京",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"成都",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045b4a43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"郑州",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-ade2-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"苏州",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"上海",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"北京",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"成都",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045b4a43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"郑州",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-ade2-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"苏州",
			lastAccessDate:"2018-09-21 05:34:41"
		}
	]
};
	
let test1={
	status:true,
	"list":[
		{
			usrId:"045bda43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"上海1",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"北京1",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"成都1",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045b4a43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"郑州1",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-ade2-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"苏州1",
			lastAccessDate:"2018-09-21 05:34:41"
		}
	]
};	

let test2={
	status:true,
	"list":[
		{
			usrId:"045bda43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"上海2",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"北京2",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"成都2",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045b4a43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"郑州2",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-ade2-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"苏州2",
			lastAccessDate:"2018-09-21 05:34:41"
		}
	]
};

let test3={
	status:true,
	"list":[
		{
			usrId:"045bda43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"上海3",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"北京3",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"成都3",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045b4a43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"郑州3",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-ade2-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"苏州3",
			lastAccessDate:"2018-09-21 05:34:41"
		}
	]
};

let test4={
	status:true,
	"list":[
		{
			usrId:"045bda43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"上海4",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"北京4",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"成都4",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045b4a43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"郑州4",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-ade2-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"苏州4",
			lastAccessDate:"2018-09-21 05:34:41"
		}
	]
};

let test5={
	status:true,
	"list":[
		{
			usrId:"045bda43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"上海5",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"北京5",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
			accessCount:10,
			accessLocation:"成都5",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045b4a43-aded-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"郑州5",
			lastAccessDate:"2018-09-21 05:34:41"
		},
		{
			usrId:"045bda43-ade2-4b44-a518-7266ca933ca7",
			accessCount:10,
			accessLocation:"苏州5",
			lastAccessDate:"2018-09-21 05:34:41"
		}
	]
};
	    switch (JSON.parse(options.body).groupName){
    	case "mainList":
    		return main;
    	case "test1":
    		return test1;
    	case "test2":
    		return test2;
    	case "test3":
    		return test3;
    	case "test4":
    		return test4;
    	case "test5":
    		return test5;
    	default:
    		console.log("Error group Name");
    }		
});


Mock.mock(/testusrDescriptionContent/,"post",function(options){	
	let test1={
		  		baseInfo:{
  				usrId:"045bda43-aded-4b44-a518-7266ca933ca7",
  				city:"上海",
  				accessCount:10,
  				lastAccess:"2018/01/01",
  				bsVersion:"firefox 11",
  				osVersion:"windows 10"
  			},
  			eventCounter:[0,0,0,0,10,11,15,12,15,10,9,18,10,11,15,12,15,10,9,18,0,0,0,0],
  			eventDescription:[
  				{type:0,date:"2018/01/01/00:00",href:"www.sina.com.cn",eventType:0,elementType:"",elementId:""},
  				{type:1,date:"2018/01/01/01:00",href:"www.sina.com.cn",eventType:1,elementType:"DIV",elementId:"A"},
  				{type:1,date:"2018/01/01/02:00",href:"www.sina.com.cn",eventType:1,elementType:"DIV",elementId:"B"},
  				{type:1,date:"2018/01/01/03:00",href:"www.sina.com.cn",eventType:2,elementType:"INPUT",elementId:"A"},
  				{type:1,date:"2018/01/01/04:00",href:"www.sina.com.cn",eventType:2,elementType:"BUTTON",elementId:"C"},
  				{type:1,date:"2018/01/01/05:00",href:"www.sina.com.cn",eventType:3,elementType:"SPAN",elementId:"D"},
  				{type:1,date:"2018/01/01/06:00",href:"www.sina.com.cn",eventType:3,elementType:"H",elementId:"E"},
  				{type:1,date:"2018/01/01/07:00",href:"www.sina.com.cn",eventType:1,elementType:"INPUT",elementId:"F"},
  				{type:1,date:"2018/01/01/08:00",href:"www.sina.com.cn",eventType:2,elementType:"div",elementId:"A"}
  			]
	};

	let test2={
				baseInfo:{
  				usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
  				city:"北京",
  				accessCount:10,
  				lastAccess:"2018/02/01",
  				bsVersion:"firefox 11",
  				osVersion:"windows 10"
  			},
  			eventCounter:[0,0,0,0,10,11,15,12,15,10,9,18,10,11,15,12,15,10,9,18,0,0,0,0],
  			eventDescription:[
  				{type:0,date:"2018/01/01/00:00",href:"www.sina.com.cn",eventType:0,elementType:"",elementId:""},
  				{type:1,date:"2018/01/01/01:00",href:"www.sina.com.cn",eventType:1,elementType:"DIV",elementId:"A"},
  				{type:1,date:"2018/01/01/02:00",href:"www.sina.com.cn",eventType:1,elementType:"DIV",elementId:"B"},
  				{type:1,date:"2018/01/01/03:00",href:"www.sina.com.cn",eventType:2,elementType:"INPUT",elementId:"A"},
  				{type:1,date:"2018/01/01/04:00",href:"www.sina.com.cn",eventType:2,elementType:"BUTTON",elementId:"C"},
  				{type:1,date:"2018/01/01/05:00",href:"www.sina.com.cn",eventType:3,elementType:"SPAN",elementId:"D"},
  				{type:1,date:"2018/01/01/06:00",href:"www.sina.com.cn",eventType:3,elementType:"H",elementId:"E"},
  				{type:1,date:"2018/01/01/07:00",href:"www.sina.com.cn",eventType:1,elementType:"INPUT",elementId:"f"},
  				{type:1,date:"2018/01/01/08:00",href:"www.sina.com.cn",eventType:2,elementType:"div",elementId:"A"}
  			]
	};

	let test3={
				baseInfo:{
  				usrId:"045bda43-ade2-4b44-a518-7266ca933ca7",
  				city:"成都",
  				accessCount:10,
  				lastAccess:"2018/02/03",
  				bsVersion:"firefox 11",
  				osVersion:"windows 10"
  			},
  			eventCounter:[0,0,0,0,10,11,15,12,15,10,9,18,10,11,15,12,15,10,9,18,0,0,0,0],
  			eventDescription:[
  				{type:0,date:"2018/01/01/00:00",href:"www.sina.com.cn",eventType:0,elementType:"",elementId:""},
  				{type:1,date:"2018/01/01/01:00",href:"www.sina.com.cn",eventType:1,elementType:"DIV",elementId:"A"},
  				{type:1,date:"2018/01/01/02:00",href:"www.sina.com.cn",eventType:1,elementType:"DIV",elementId:"B"},
  				{type:1,date:"2018/01/01/03:00",href:"www.sina.com.cn",eventType:2,elementType:"INPUT",elementId:"A"},
  				{type:1,date:"2018/01/01/04:00",href:"www.sina.com.cn",eventType:2,elementType:"BUTTON",elementId:"C"},
  				{type:1,date:"2018/01/01/05:00",href:"www.sina.com.cn",eventType:3,elementType:"SPAN",elementId:"D"},
  				{type:1,date:"2018/01/01/06:00",href:"www.sina.com.cn",eventType:3,elementType:"H",elementId:"E"},
  				{type:1,date:"2018/01/01/07:00",href:"www.sina.com.cn",eventType:1,elementType:"INPUT",elementId:"f"},
  				{type:1,date:"2018/01/01/08:00",href:"www.sina.com.cn",eventType:2,elementType:"div",elementId:"A"}
  			]
	};
	
	let test4={
				baseInfo:{
  				usrId:"045bda43-ade2-4b44-a518-7266ca933ca7",
  				city:"成都",
  				accessCount:10,
  				lastAccess:"2018/02/04",
  				bsVersion:"firefox 11",
  				osVersion:"windows 10"
  			},
  			eventCounter:[0,0,0,10,20,0,0,15,20,25,40],
  			eventDescription:[]
	};
	console.log((new Date(JSON.parse(options.body).date)).toLocaleDateString());
	    switch (JSON.parse(options.body).usrId){
    	case "045bda43-aded-4b44-a518-7266ca933ca7":
    		return test2;
    	case "045bda43-aded-4b44-a518-7264ca933ca7":
    		return test4;
    	default:
    		return test3;
    }		
});

Mock.mock(/testUsrDescription/,"post",function(options){	
	let test1={
		  		baseInfo:{
  				usrId:"045bda43-aded-4b44-a518-7266ca933ca7",
  				city:"上海",
  				accessCount:10,
  				lastAccess:"2018/01/01",
  				bsVersion:"firefox 11",
  				osVersion:"windows 10"
  			},
  			eventCounter:[0,0,0,0,10,11,15,12,15,10,9,18,10,11,15,12,15,10,9,18,0,0,0,0],
  			eventDescription:[
  				{type:0,date:"2018/01/01/00:00",href:"www.sina.com.cn",eventType:0,elementType:"",elementId:""},
  				{type:1,date:"2018/01/01/01:00",href:"www.sina.com.cn",eventType:1,elementType:"DIV",elementId:"A"},
  				{type:1,date:"2018/01/01/02:00",href:"www.sina.com.cn",eventType:1,elementType:"DIV",elementId:"B"},
  				{type:1,date:"2018/01/01/03:00",href:"www.sina.com.cn",eventType:2,elementType:"INPUT",elementId:"A"},
  				{type:1,date:"2018/01/01/04:00",href:"www.sina.com.cn",eventType:2,elementType:"BUTTON",elementId:"C"},
  				{type:1,date:"2018/01/01/05:00",href:"www.sina.com.cn",eventType:3,elementType:"SPAN",elementId:"D"},
  				{type:1,date:"2018/01/01/06:00",href:"www.sina.com.cn",eventType:3,elementType:"H",elementId:"E"},
  				{type:1,date:"2018/01/01/07:00",href:"www.sina.com.cn",eventType:1,elementType:"INPUT",elementId:"F"},
  				{type:1,date:"2018/01/01/08:00",href:"www.sina.com.cn",eventType:2,elementType:"div",elementId:"A"}
  			]
	};

	let test2={
				baseInfo:{
  				usrId:"045bda43-aded-4b44-a518-7264ca933ca7",
  				city:"北京",
  				accessCount:10,
  				lastAccess:"2018/02/01",
  				bsVersion:"firefox 11",
  				osVersion:"windows 10"
  			},
  			eventCounter:[0,0,0,0,10,11,15,12,15,10,9,18,10,11,15,12,15,10,9,18,0,0,0,0],
  			eventDescription:[
  				{type:0,date:"2018/01/01/00:00",href:"www.sina.com.cn",eventType:0,elementType:"",elementId:""},
  				{type:1,date:"2018/01/01/01:00",href:"www.sina.com.cn",eventType:1,elementType:"DIV",elementId:"A"},
  				{type:1,date:"2018/01/01/02:00",href:"www.sina.com.cn",eventType:1,elementType:"DIV",elementId:"B"},
  				{type:1,date:"2018/01/01/03:00",href:"www.sina.com.cn",eventType:2,elementType:"INPUT",elementId:"A"},
  				{type:1,date:"2018/01/01/04:00",href:"www.sina.com.cn",eventType:2,elementType:"BUTTON",elementId:"C"},
  				{type:1,date:"2018/01/01/05:00",href:"www.sina.com.cn",eventType:3,elementType:"SPAN",elementId:"D"},
  				{type:1,date:"2018/01/01/06:00",href:"www.sina.com.cn",eventType:3,elementType:"H",elementId:"E"},
  				{type:1,date:"2018/01/01/07:00",href:"www.sina.com.cn",eventType:1,elementType:"INPUT",elementId:"f"},
  				{type:1,date:"2018/01/01/08:00",href:"www.sina.com.cn",eventType:2,elementType:"div",elementId:"A"}
  			]
	};

	let test3={
				baseInfo:{
  				usrId:"045bda43-ade2-4b44-a518-7266ca933ca7",
  				city:"成都",
  				accessCount:10,
  				lastAccess:"2018/02/03",
  				bsVersion:"firefox 11",
  				osVersion:"windows 10"
  			},
  			eventCounter:[0,0,0,0,10,11,15,12,15,10,9,18,10,11,15,12,15,10,9,18,0,0,0,0],
  			eventDescription:[
  				{type:0,date:"2018/01/01/00:00",href:"www.sina.com.cn",eventType:0,elementType:"",elementId:""},
  				{type:1,date:"2018/01/01/01:00",href:"www.sina.com.cn",eventType:1,elementType:"DIV",elementId:"A"},
  				{type:1,date:"2018/01/01/02:00",href:"www.sina.com.cn",eventType:1,elementType:"DIV",elementId:"B"},
  				{type:1,date:"2018/01/01/03:00",href:"www.sina.com.cn",eventType:2,elementType:"INPUT",elementId:"A"},
  				{type:1,date:"2018/01/01/04:00",href:"www.sina.com.cn",eventType:2,elementType:"BUTTON",elementId:"C"},
  				{type:1,date:"2018/01/01/05:00",href:"www.sina.com.cn",eventType:3,elementType:"SPAN",elementId:"D"},
  				{type:1,date:"2018/01/01/06:00",href:"www.sina.com.cn",eventType:3,elementType:"H",elementId:"E"},
  				{type:1,date:"2018/01/01/07:00",href:"www.sina.com.cn",eventType:1,elementType:"INPUT",elementId:"f"},
  				{type:1,date:"2018/01/01/08:00",href:"www.sina.com.cn",eventType:2,elementType:"div",elementId:"A"}
  			]
	};
	
	let test4={
				baseInfo:{
  				usrId:"045bda43-ade2-4b44-a518-7266ca933ca7",
  				city:"成都",
  				accessCount:10,
  				lastAccess:"2018/02/04",
  				bsVersion:"firefox 11",
  				osVersion:"windows 10"
  			},
  			eventCounter:[0,0,0,10,20,0,0,15,20,25,40],
  			eventDescription:[]
	};

	    switch (JSON.parse(options.body).usrId){
    	case "045bda43-aded-4b44-a518-7266ca933ca7":
    		return test4;
    	case "045bda43-aded-4b44-a518-7264ca933ca7":
    		return test2;
    	default:
    		return test3;
    }		
});