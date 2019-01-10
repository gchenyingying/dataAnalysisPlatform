function addURLParam(url,name,value){
	url += (url.indexOf("?") == -1)?"?":"&";
	url += encodeURIComponent(name)+"="+encodeURIComponent(value);
	return url;
}

//options {method,url,data,success,fail,timeout,waitTime}
function ajax(options){
	//创建XHR对象
	let xhr=new XMLHttpRequest();	
	let timerId;
	let timeoutFlag=false;
	//添加事件处理器
	xhr.onreadystatechange=function(){
		//完整接收响应时
		if(xhr.readyState==4){
			console.log(timerId);
			clearTimeout(timerId);
			console.log("清理定时器");
			//判断是否发生超时
			if(!timeoutFlag){
				if((xhr.status>=200 && xhr.status<300) || (xhr.status==304)){
					//正常响应
					//JSON解析字符串，得到对象
					let data=JSON.parse(xhr.responseText);
					options.success(data);
				}else{
					console.log("网络失败");
					
					//是否传入fail处理函数
					if((typeof options.fail)=="function")
						options.fail(xhr.status,xhr.statusText);
				}	
			}else{
				console.log("[ajax] 进入超时处理流程");
			}
		}
	};
	//处理发送url，如果是get，encodeURI数据
	let url=options.url;
	let data=null;
	if(options.method=="get"){
		for(let name in options.data){
			if(options.data.hasOwnProperty(name))
			{
				console.log(name);
				url=addURLParam(url,name,options.data[name]);
				console.log(url);
			}
		}
		console.log("[ajax] get发送数据"+url);
	}else if(options.method=="post"){
		data=JSON.stringify(options.data);
		console.log("[ajax] post发送数据"+data);
	}
	//超时处理，单位ms
	timerId=setTimeout(function(){
		console.log("超时开始");
		timeoutFlag=true;
		if((typeof options.timeout)=="function")
			options.timeout();
		console.log("超时结束");
		xhr.abort();	
	}, options.waitTime);
	xhr.open(options.method, url, true);	
	xhr.setRequestHeader("If-Modified-Since","0");
	console.log(data);
	xhr.send(data);
	//超时处理，单位ms
	/*
	timerId=setTimeout(function(){
		xhr.abort();
		if((typeof options.timeout)=="function")
			options.timeout();
	}, options.waitTime);
	*/
	return xhr;
}

export default ajax;
