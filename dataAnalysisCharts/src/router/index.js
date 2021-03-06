import Vue from 'vue'
import Router from 'vue-router'
import ajax from '../ajax/ajax';
const home = () => import('@/components/home');
const dashboard = () => import('@/components/dashboard');
const singleChart = () => import('@/components/singleChart');
const dataManage = () => import('@/components/dataManage');
const eventAnalyze = () => import('@/components/eventAnalyze');
const funnelAnalyze = () => import('@/components/funnelAnalyze');
const retainAnalyze = () => import('@/components/retainAnalyze');
const auAnalyze = () => import('@/components/auAnalyze');
const usrGroup = () => import('@/components/usrGroup');
const usrDetails = () => import('@/components/usrDetails');
const createUsrGroup = () => import('@/components/createUsrGroup');
const usrDescription = () => import('@/components/usrDescription');
const dataManageApp = () => import('@/components/dataManageApp');

/*
import home from '@/components/home';
import dashboard from '@/components/dashboard';
import singleChart from '@/components/singleChart';
import dataManage from '@/components/dataManage';
import eventAnalyze from '@/components/eventAnalyze';
import funnelAnalyze from '@/components/funnelAnalyze';
import retainAnalyze from '@/components/retainAnalyze';
import auAnalyze from '@/components/auAnalyze';
import usrGroup from '@/components/usrGroup';
import usrDetails from '@/components/usrDetails';
import createUsrGroup from '@/components/createUsrGroup';
import usrDescription from '@/components/usrDescription';
*/

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
			redirect: "/home"
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/singleChart',
      name: 'singleChart',
      component: singleChart   	
    },
    {
      path: '/dataManage',
      name: 'dataManage',
      component: dataManage   	
    },
		{
      path: '/analyze/event',
      name: 'eventAnalyze',
      component: eventAnalyze 	
		},
		{
      path: '/analyze/funnel',
      name: 'funnelAnalyze',
      component: funnelAnalyze 	
		},
		{
      path: '/analyze/retain',
      name: 'retainAnalyze',
      component: retainAnalyze 	
		},	
		{
      path: '/analyze/au',
      name: 'auAnalyze',
      component: auAnalyze 	
		},
		{
      path: '/usr/usrGroup',
      name: 'usrGroup',
      component: usrGroup 	
		},	
		{
      path: '/usr/usrDetails/:groupName',
      name: 'usrDetails',
      component: usrDetails,
      props:true
		},
		{
      path: '/usr/createUsrGroup',
      name: 'createUsrGroup',
      component: createUsrGroup 	
		},
		{
      path: '/usr/description/:groupName/:usrId',
      name: 'usrDescription',
      component: usrDescription,
      props:true
		},
		{
      path: '/dataManageApp/:appId',
      name: 'dataManageApp',
      component: dataManageApp,
      props:true			
		}
  ]
});

router.beforeEach((to, from, next) => {
	//是否处于登录状态，并且，未删除token
	if(!(sessionStorage.getItem("isLoginFlag")&&localStorage.getItem("token"))){
		//检测是否存在token
			if(!localStorage.getItem("token")){
				//不存在token，跳转到登录页
				location.href="../login/index.html";
				return;
			}
			//存在token，自动登录
			const options={
				method:"post",
				url:"/testUsrLogin",//for testing
				data:localStorage.getItem("token"),
				success:(data)=>{
					switch(data.status){
						case 0:
							//设置为已登录
							sessionStorage.setItem("isLoginFlag", JSON.stringify(true));
							router.app.$children[0].login="退出";//控制相关状态
							console.log("登录状态"+router.app.$children[0].login);
							next();
							break;
						default:
							//自动登录失败，跳转到登录页面，手动登录
							location.href="../login/index.html";
							break;							
					}
				},
				fail:()=>{
							//自动登录失败，跳转到登录页面，手动登录
							location.href="../login/index.html";				
				},
				timeout:()=>{
							//自动登录失败，跳转到登录页面，手动登录
							location.href="../login/index.html";							
				},
				waitTime:5000
			};
			ajax(options);
			return;
	}
	//已登录，且存在token,跳过钩子
	next();
})

export default router;
