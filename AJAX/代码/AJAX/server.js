const express = require("express");

const app = express();

//创建路由规则
app.get("/server", (request, response) => {
  //设置响应头,允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //设置响应体
  response.send("hello ajax");
});

//创建路由规则
app.post("/server", (request, response) => {
  //设置响应头,允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //允许自定义响应头
  response.setHeader("Access-Control-Allow-Headers", "*");
  //设置响应体
  response.send("hello ajax POST");
});

//处理所有类型的请求
app.all("/server1", (request, response) => {
  //设置响应头,允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //允许自定义响应头
  response.setHeader("Access-Control-Allow-Headers", "*");
  //响应一个对象数据
  const data = {
    name: "张三",
    age: 12
  };
  //对象转化为json字符串
  let str = JSON.stringify(data);
  //设置响应体
  response.send(str);
});

//延时响应
app.get("/server2", (request, response) => {
  //设置响应头,允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //延时响应3秒
  setTimeout(() => {
    response.send("延时内容");
  }, 3000);
});

//Jquery服务
app.all("/jquery-server", (request, response) => {
  //设置响应头,允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //允许自定义响应头
  response.setHeader("Access-Control-Allow-Headers", "*");
  //发送json数据
  const data = { name: "张三" };
  response.send(JSON.stringify(data));
});

//axios服务
app.all("/axios-server", (request, response) => {
  //设置响应头,允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //允许自定义响应头
  response.setHeader("Access-Control-Allow-Headers", "*");
  //发送json数据
  const data = { name: "张三" };
  response.send(JSON.stringify(data));
});

//fetch服务
app.all("/fetch-server", (request, response) => {
  //设置响应头,允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //允许自定义响应头
  response.setHeader("Access-Control-Allow-Headers", "*");
  //发送json数据
  const data = { name: "张三" };
  response.send(JSON.stringify(data));
});

app.get("/jsonp-server", (request, response) => {
  const data = {
    exist: 1,
    msg: "用户名存在，验证失败"
  };
  //将数据转化为json字符串
  let str = JSON.stringify(data);
  //end返回结果，没有多余请求头,注意返回结果是一段js代码，该代码是函数调用
  response.end(`handle(${str})`);
});

app.get("/jsonp-jquery-server", (request, response) => {
  const data = {
    name: "zhangshan",
    city: ["北京", "上海", "深圳"]
  };
  //接收请求参数 该参数就是调用的函数名
  let cb = request.query.callback;
  //将数据转化为json字符串
  let str = JSON.stringify(data);
  //使用获取的函数名拼接数据
  response.end(`${cb}(${str})`);
});

//响应页面的服务
app.get("/home", (request, response) => {
  //响应一个页面
  response.sendFile(__dirname + "/index.html");
});

//请求数据的服务
app.get("/data", (request, response) => {
  //响应一个数据
  response.send("用户数据");
});

//Cors请求服务
app.all("/cors-server", (request, response) => {
  //设置跨域允许响应头 使用*表示匹配所有，这里只匹配当前跨域的服务
  // response.setHeader("Access-Control-Allow-Origin", "*");
  //匹配特定的服务器
  response.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  //允许headers自定义
  response.setHeader("Access-Control-Allow-Headers", "*");
  //允许方法自定义
  response.setHeader("Access-Control-Allow-Method", "*");
  response.send("hello CORS");
});

//监听服务
app.listen(8000, () => {
  console.log("服务器启动，8000端口监听中");
});
