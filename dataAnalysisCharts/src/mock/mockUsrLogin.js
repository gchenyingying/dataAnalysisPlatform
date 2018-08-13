import Mock from "mockjs";

//Mock.setup({timeout:10000});
console.log("MOCK begin");
Mock.mock(/testUsrLogin/,"post",{status:0,token:"tokenStr"});
//Mock.mock(/testUsrLogin/,"get",{status:1});
//Mock.mock(/testUsrLogin/,"get",{status:2});
//Mock.mock(/testUsrLogin/,"get",{status:3});