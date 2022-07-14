let Mock = require("mockjs");
let arr = ["zhangsan", "lisi", "wangwu", "zhaoliu"];
// Mock.mock("/api/aa","get",(options)=>{
//     console.log(options); // { url:"/api/aa",type:"get",body:null}
//     return arr
// })
//正则 /api/aa
Mock.mock(/\/api\/aa/, "get", (options) => {
  console.log(options); // { url:"/api/aa",type:"get",body:null}
  return arr;
});
Mock.mock("/api/ab", "post", (options) => {
  console.log(10, options);
  return {
    status: 200,
    message: "success",
    data: arr,
  };
});
