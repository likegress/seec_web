let Mock = require("mockjs");
Mock.mock("/api/login","post",(config)=>{
    // console.log(config);
    let body = JSON.parse(config.body) //string
    
    // console.log(body);
    if (body.username === "admin" && body.password === "123456") {
        return {
          status: 200,
          message: "success",
          data:{
            ...body,
            token:"asadasqweqweqqwe"
          }
        };
    }else {
        return {
            status:501,
            message:"fail"
        }
    }
    
})
