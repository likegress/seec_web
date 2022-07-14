let Mock = require("mockjs");
let moment = require("moment");
let arr = [
  {
    date: "2022-05-02",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
  {
    date: "2022-05-04",
    name: "张小虎",
    address: "上海市普陀区金沙江路 1517 弄",
  },
  {
    date: "2022-05-01",
    name: "李小虎",
    address: "上海市普陀区金沙江路 1519 弄",
  },
  {
    date: "2022-05-03",
    name: "薛小虎",
    address: "上海市普陀区金沙江路 1516 弄",
  },
];
//数据请求
Mock.mock(/\/api\/all/, "get", (options) => {
  // console.log(options); // { url:"/api/aa",type:"get",body:null}
  return {
    status: 200,
    message: "success",
    tableData: arr,
  };
});
// 增加
Mock.mock(/\/api\/add/, "post", (options) => {
  // console.log(36, options);
  let body = JSON.parse(options.body);
  // body.date = moment(new Date(body.date)).format("YYYY-MM-DD");
  console.log(39, body);
  arr.push(body)
  
  // let { date, name, address } = body;

  return {
    status: 200,
    message: "success",
    data: arr,
  };
});
// 删除
Mock.mock(/\/api\/delete\?index=\d/, "delete", (options) => {
  /*
    body: null
    type: "DELETE"
    url: "/api/delete?index=1"
  */
  console.log(45, options);
  let url = options.url;
  let index = url.split("=")[1]
  let newArr = arr.splice(index,1);
  // console.log(arr); //删除后的数据

  // console.log(newArr);

  return {
    status: 200,
    message: "删除成功",
    data: arr,
  };
});
// 修改
Mock.mock("/api/update", "put", (options) => {

  const body = JSON.parse(options.body); 
  console.log(68,body);
  let {date,name,index,address} = body
  arr[index] = {...body} 
  return {
    status: 200,
    message: "success",
    data: arr,
  };
});
