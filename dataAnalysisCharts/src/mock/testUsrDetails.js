import Mock from "mockjs";
console.log("MOCK begin--user details");
Mock.setup({timeout:1000});


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
