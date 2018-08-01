//数据分析SDK 埋点

//发送api
function send(data,url){
	function addURLParam(url,name,value){
		url += (url.indexOf("?") == -1)?"?":"&";
		url += encodeURIComponent(name)+"="+encodeURIComponent(value);
		return url;
	}
	if(typeof data == "object"){
		
		
		/*$.each(data, function(name,value) {
			var ele=document.createElement("span");
			ele.innerHTML=name+value;
			document.body.appendChild(ele);
		});*/
		
		console.log(data);
		$.each(data, function(name,value) {
			url=addURLParam(url,data,value);
		});
		//console.log(url);
		var img=new Image();
		img.onload=function(){
			console.log("[img send] success.");
		};
		img.onerror=function(){
			cosole.log("[img send] fail.");
		}
		img.src=url;
	}
	else{
		console.log("[img send]data must be object.");
	}
}
//浏览器参数
function getBrowserInfo(){
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/edge\/([\d.]+)/)) ? Sys.edge = s[1] :
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
    (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
    (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
    (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
    (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

    if (Sys.edge) return { browser : "Edge", version : Sys.edge };
    if (Sys.ie) return { browser : "IE", version : Sys.ie };
    if (Sys.firefox) return { browser : "Firefox", version : Sys.firefox };
    if (Sys.chrome) return { browser : "Chrome", version : Sys.chrome };
    if (Sys.opera) return { browser : "Opera", version : Sys.opera };
    if (Sys.safari) return { browser : "Safari", version : Sys.safari };
    
    return { browser : "unknown", version : "unknow" };
}
//OS
function getOSInfo(){
	var ua=navigator.userAgent.toLowerCase();
	var platform=navigator.platform.toLowerCase();
	var osInfo="";
	if(ua.search(/iphone|ipad|ipod/) > -1){
		osInfo="ios";
	}else if(ua.search(/windows phone/)>-1){
		osInfo="windows phone";
	}else if(ua.search(/android/)>-1){
		osInfo="android";
	}else if(platform.search(/win/)>-1){
		osInfo="windows";
	}else if(platform.search(/mac/)>-1){
		osInfo="Macintosh";
	}else if((platform.search(/x11/)>-1) || (platform.search(/linux/)>-1)){
		osInfo="linux/unix";
	}else{
		osInfo="unknown";
	}
	return osInfo;
}
//uuid RFC-32-16进制
function getUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
 }
//cookie
var cookieUntil={
	get:function(cname){
		var name = encodeURIComponent(cname) + "=";
  		var cookieList = document.cookie.split(';');
  		for(var i=0; i<cookieList.length; i++) 
  		{
    		var cookieItem = cookieList[i].trim();
    		if (cookieItem.indexOf(name)==0){
    			var value=cookieItem.substring(name.length,cookieItem.length);
    			var cvalue=decodeURIComponent(value);
    			return cvalue;
    		}
    			
  		}
  		return undefined;
	},
	set:function(cname,cvalue,exdays,path){
		var cookieText=encodeURIComponent(cname)+"="+encodeURIComponent(cvalue);
		//0 过期时间-浏览器关闭
		if(typeof exdays == "number"&&exdays>0){
			var time = new Date();
  			time.setTime(time.getTime()+(exdays*24*60*60*1000));
  			cookieText = cookieText+"; expires="+time.toGMTString();
		}
  		if(typeof path == "string"){
  			cookieText = cookieText+"; path="+path;
  		}
  		document.cookie=cookieText;
	},
	remove:function(cname,path){
		this.set(cname,"",-1,path);//设置过去得任意值
	}
}
//city geolocation
function initializeBaiduMap() {
	var geolocation = new BMap.Geolocation();
	geolocation.getCurrentPosition(function(r){
		if(this.getStatus() == BMAP_STATUS_SUCCESS){
			var geoc = new BMap.Geocoder();//逆向解析地址
			geoc.getLocation(r.point, function(rs){
				if(rs!=null){
				var addComp = rs.addressComponents;
				cookieUntil.set("cityName",addComp.city,0,"/");				
				}else{
				console.log("[geocoder] failed");
				}
			});
		}else {//geolocation失败，采用IP地址定位
			console.log("[geolocation] failed:"+this.getStatus());
			function myFun(result){
				cookieUntil.set("cityName",result.name,1,"/");
			}
			var myCity = new BMap.LocalCity();
			myCity.get(myFun);
		}
	},{enableHighAccuracy: true});
} 
function loadBaiduGeoApi(){
	//异步加载baidu api
	function loadScript() {  
  		var script = document.createElement("script");  
  		script.src = "http://api.map.baidu.com/api?v=2.0&ak=3LQnukfDQBsEoSnfC1bx6UM3DmKjnBsR&callback=initializeBaiduMap";
  		document.body.appendChild(script);  
	}
	loadScript();
}
$.dataAnalysis=new Object();
$.dataAnalysis.pageDataHandler=function(){
	var pageInfo=new Object();
	pageInfo.type="document";
	//url
	pageInfo.protocol=window.location.protocol;
	pageInfo.hostname=window.location.hostname;
	pageInfo.port=window.location.port;
	pageInfo.pathname=window.location.pathname;
	pageInfo.search=window.location.search;
	pageInfo.hash=window.location.hash;
	pageInfo.href=window.location.href;
	//broswer
	var browserInfo=getBrowserInfo();
	pageInfo.browser=browserInfo.browser;
	pageInfo.browserVersion=browserInfo.version;
	//OS
	var osInfo=getOSInfo();
	pageInfo.os=osInfo;
	//usrId 30 days 全站
	var cvalue=cookieUntil.get("usrId");
	if(typeof cvalue == "undefined"){
		var guid=getUuid();
		cookieUntil.set("usrId",guid,30,"/")
	}
	pageInfo.usrId=cookieUntil.get("usrId");
	//city 全站 本次方位
	var cityName=cookieUntil.get("cityName");
	if(typeof cityName=="undefined")
	{
		loadBaiduGeoApi();
	}
	pageInfo.city=cookieUntil.get("cityName");
	//时间戳
	var now=new Date();
	pageInfo.timeStamp=now.getTime();
	
	//检测是否获取城市位置且发送页面数据
	if(typeof pageInfo.city=="undefined"){
		var counter=0,maxCheckCounts=50;//允许最大查询次数
		setTimeout(function checkCity(){
			if(typeof cookieUntil.get("cityName")!="undefined"){
				pageInfo.city=cookieUntil.get("cityName");
				send(pageInfo,"");
			}else{
					if(counter++<maxCheckCounts){
						setTimeout(checkCity,200);
					}else{
						pageInfo.city="unknown";
						send(pageInfo,"");
					}						
			}	
		},200);
	}else{
		send(pageInfo,"");
	}
}
//事件级
$.widget("dataAnalysis.eventHandler",{
	_create:function(){
		switch(true)
		{
			//统计单一元素点击量
			case this.options.click===true:
				this.element.on("click",this._clickHandler);
				break;
			//统计修改量
			case this.options.change===true:
				this.element.on("change",this._changeHandler);
				break;
			//统计元素以及后代点击量之和
			case this.options.containClick===true:
				this.element.on("click",this._containClickHandler);
				break;
			//统计元素曝光量
			case this.options.exposure===true:
				var eventType="";
				if(this._hasTouchEvent()===true)
					eventType="touchmove";//触摸设备
				else
					eventType="scroll";//桌面设备
				console.log("曝光量");
				this._throttledExposureHandler(eventType);
				break;
			//用户输入options错误或者未输入options
			default:
				console.log("[event handler]event type error");
		}
	},
	options:{
		click:false,
		containClick:false,
		change:false,
		exposure:false
	},
	_eventType:{
		click:1,
		change:2,
		exposure:3
	},
	_hasTouchEvent:function(){
		return ("ontouchmove"in document);//触摸设备存在touch事件,桌面设备scroll
	},
	_clickHandler:function(event){
		if(this===event.target){
			var eventInfo=$(this).data("dataAnalysis-eventHandler")._eventInfo(event.type,false);//单一元素统计
			send(eventInfo,"");
		}
	},
	_containClickHandler:function(event){		
		var eventInfo=$(this).data("dataAnalysis-eventHandler")._eventInfo(event.type,true);//元素以及后代统计
		send(eventInfo,"");
	},
	_changeHandler:function(event){
		var eventInfo=$(this).data("dataAnalysis-eventHandler")._eventInfo(event.type,false);//元素修改量统计
		send(eventInfo,"");
	},
	_throttledExposureHandler:function(eventType){
		//是否进入视口范围 true-视口内部 false-视口外部
		console.log("_throttledExposureHandler");
		function isViewport(element){
    		var win = $(window);   
    		var viewport = {top:win.scrollTop(),left:win.scrollLeft()};
    		viewport.right = viewport.left + win.width();
    		viewport.bottom = viewport.top + win.height();
     
    		var bounds = $(element).offset();
    		bounds.right = bounds.left + $(element).outerWidth();
    		bounds.bottom = bounds.top + $(element).outerHeight();   
    		return (!(viewport.right < bounds.left || viewport.left > bounds.right 
    			|| viewport.bottom < bounds.top || viewport.top > bounds.bottom))
		}
		var sendExposureStatus=false;//true-已发送曝光量 false-未发送曝光量
		var analysisElement=this.element[0];
		var inViewport=isViewport(analysisElement);
		console.log("inViewport"+inViewport);
		//元素初始状态在视口内部
		if(inViewport){
			var eventInfo=$(analysisElement).data("dataAnalysis-eventHandler")._eventInfo(eventType,false);
			send(eventInfo,"");
			sendExposureStatus=true;//状态设置为已发送		
		}
		function exposureAnalysis(){
			var inViewport=isViewport(analysisElement);
			//未发送曝光量且在视口内部-发送曝光量
			if(!sendExposureStatus&&inViewport){
				var eventInfo=$(analysisElement).data("dataAnalysis-eventHandler")._eventInfo(eventType,false);
				send(eventInfo,"");
				sendExposureStatus=true;//状态设置为已发送
				//console.log("进入视口");
			}
			//已发送曝光量且离开视口-下次重新激活上步
			if(sendExposureStatus&&!inViewport){
				sendExposureStatus=false;//状态设置为未发送
				//console.log("离开视口");
			}
		}
		var timerId,delayInterval=300;
		function exposureHandler(event){
			clearTimeout(timerId);
			timeId=setTimeout(exposureAnalysis,delayInterval);
		}
		$(document).on(eventType,exposureHandler);
	},
	_eventInfo:function(eventType,containType){
		var eventInfo=new Object();
		eventInfo.type="event";
		eventInfo.usrId=cookieUntil.get("usrId");
		eventInfo.elementId=this.element[0].id;
		eventInfo.elementType=this.element[0].nodeName;
		eventInfo.containType=containType;
		switch(eventType)
		{
			case "click":
				eventInfo.eventType=this._eventType.click;
				break;
			case "change":
				eventInfo.eventType=this._eventType.change;
				break;
			case "scroll":
			case "touchmove":
				eventInfo.eventType=this._eventType.exposure;
				break;
		}
		
		eventInfo.timeStamp=(new Date()).getTime();
		return eventInfo;
	}
});

