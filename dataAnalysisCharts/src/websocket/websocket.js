    let ws=null;
    //由于网络等外界原因，导致websocket断开，部分浏览器，如firefox，会触发close事件，
    //但chrome之类，不会主动触发close事件，因此，检测到连接断开时，对firefox之类，手动调用close(),会两次
    //触发close事件，需定义变量锁，避免重复连接
    //默认值false，进入reconnect流程时，是否允许重连
    let lockReconnect = false;
    //启动自动重连的标志,true-enabled false-disabled
    let autoConnect=false;
    //重连间隔,默认值2s
    let reconnectInterval=2000;
    //心跳间隔，默认值60s
    let heartBeatsInteval=60000;
    
    //options: url-目标地址 autoConnect-是否启动自动重连
    //open-onopen回调函数 message-onmessage回调函数 close-onclose回调函数 error-onerror回调函数
    function createWebSocket(options) {
        try {
        	//用户是否启动自动重连
        	autoConnect=options.autoConnect;
        	//无法建立websocket连接时，WebSocket抛出异常
            ws = new WebSocket(options.url);
            initEventHandle(options);
            //成功连接还原lockReconnect状态，允许后续重连
            lockReconnect=false;
        } catch (e) {
        	//还原lockReconnect状态，允许后续重连
        	lockReconnect=false;
        	//是否自动重连
        	autoConnect?reconnect(options):console.log("建立websocket失败");
        }     
    }

    function initEventHandle(options) {
        ws.onclose = function () {
        	console.log("进入close阶段");
        	//执行close回调函数
        	(typeof options.close=="function")? options.close():'';
        	//启用自动重连
        	autoConnect?reconnect(options):console.log("关闭websocket");        
        };
        ws.onerror = function () {
        	//执行error回调函数
        	(typeof options.error=="function")? options.error():'';
        	//启用自动重连
        	autoConnect?reconnect(options):console.log("websocket出错");  
        };
        ws.onopen = function () {
        	//执行open回调函数
        	options.open();        	
            //开启心跳检测
            autoConnect?heartCheck.reset().start():console.log("非自动重连模式");
        };
        ws.onmessage = function (event) {
        	let data=JSON.parse(event.data);
        	//执行message回调函数
        	options.message(data);         	
            //如果获取到消息，心跳检测重置
            //拿到任何消息都说明当前连接是正常的
            autoConnect?heartCheck.reset().start():console.log("非自动重连模式");
        }
    }

    function reconnect(options) {
    	console.log("进入重连函数");
        if(lockReconnect) {
        	console.log("离开重连函数");
        	return;
        }       
        //避免触发多次close事件导致的重复连接
        lockReconnect = true;
        //多次连接直至成功，设置延迟避免请求过多
        //默认2s重连一次
        console.log("执行重连");
        setTimeout(function () {
            createWebSocket(options);
            //lockReconnect = false;
        }, reconnectInterval);
    }
	
	function sendWebSocket(data){
		ws.send(JSON.stringify(data));
	}
    
    function closeWebSocket(){
    	autoConnect=false;
    	ws.close();
    }
    //心跳检测 ms
    //必须createWs之前调用，否则无效
    function setReconnectInterval(value){
    	reconnectInterval=value;
    }
    function setHeartBeatsInterval(value){
    	heartBeatsInteval=value;
    }    
    let heartCheck = {
        timeout: heartBeatsInteval,
        timeoutObj: null,
        serverTimeoutObj: null,
        reset: function(){
            clearTimeout(this.timeoutObj);
            clearTimeout(this.serverTimeoutObj);
            return this;
        },
        start: function(){
        	//解决定时器作用域问题
            var self = this;
            this.timeoutObj = setTimeout(function(){
                //这里发送一个心跳，后端收到后，返回一个心跳消息，
                //onmessage拿到返回的心跳就说明连接正常
                try{
                		//浏览器检测到未打开连接，send抛出错误，转向catch分支
                		ws.send("HeartBeat");
                		console.log("已发送send");
                		//浏览器侧连接正常，判断后台连接是否正常
                		self.serverTimeoutObj = setTimeout(function(){
                		//如果超过一定时间还没重置，说明后台连接异常
                		//关闭连接，进入重连流程
                    	ws.close();
                	}, self.timeout);
            	}catch(ex){
            		cosole.log("send失败，进入重连模式");
            	}

            }, this.timeout)
        }
    };
    
    export default{
    	openWebSocket:createWebSocket,
    	sendWebSocket:sendWebSocket,
    	closeWebSocket:closeWebSocket,
    	//openWebSocket之前调用，设置心跳/重连时间间隔
    	setReconnectInterval:setReconnectInterval,
    	setHeartBeatsInterval:setHeartBeatsInterval
    };
