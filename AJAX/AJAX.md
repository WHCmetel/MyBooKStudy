# AJAX

## 一、AJAX简介

**AJAX**全称**Asynchronous Javascript And XML**，也就是异步的js和XML。

通过AJAX可以在浏览器中向服务器发送异步请求，其最大优势就是**无刷新获取数据**。AJAX不是新的编程语言，而是一种将现有标准组合在一起的新的数据请求方式。

XML是**可扩展标记语言**，主要用来传输和存储数据。它和HTML类似，不同的是HTML都是**预定义标签**，而XML中没有预定义标签，全是**自定义标签**，用来表示一些数据。例如：有一个学生数据 `name='张三'；age=18;gender='男'；`

```xml
//XML数据展示
<student>
    <name>张三</name>
    <age>18</age>
    <gender>男</gender>
</student>
```

之前AJAX请求数据都是使用XML格式的数据，但现在已经被**JSON**格式数据取代,它比XML更简洁，且更容易转化为js对象。

```json
//json数据展示
{"name":'张三',"age":18,"gender":'男'}
```

AJAX的优点：可以**无需刷新页面**就与服务器端进行通信，允许你根据用户事件来**更新页面部分的内容**。

AJAX的缺点：没有浏览历史，不能回退，存在**跨域问题**，SEO不友好。

**HTTP协议**又叫超文本协议，协议详细规定了浏览器和万维网服务器间互相通信的规则。大部分网页数据交互都是使用HTTP协议。

HTTP协议的内容主要分为：

+ 请求报文(http协议请求的内容)，其结构如下

  ```json
  请求行  GET /s?ie=wuss HTTP/1.1
  请求头  Host: www.aaa.cn
  	   Cookie: name=guigu
  	   Content-type: application/x-www-form-urlencode
  	   User-Agent: chrome 83
  空行
  请求体   username=admin&password=admin
  ```

+ 响应报文(http协议响应的内容),其结构如下

  ```json
  响应行  HTTP/1.1  200 ok
  响应头  Content-Type: text/html;charset=utf-8
  	   Content-length: 2048
  	   Content-encoding: gzip
  空行
  响应体   <html>
  			<head></head>
  			<body>
  				<h1>扎根是</h1>
  			</body>
  		 </html>
  ```

在浏览器的F12控制台中，在**网络**栏中直接选择具体请求就可查看其请求报文和响应报文。

## 二、JS原生AJAX

### 2.1 服务器准备

准备工作，这里我们使用nodejs和express框架快速搭建后台服务器。具体内容去学习node,服务器代码如下。

安装express框架指令：`npm i express`或指定版本`npm i express@4.17.1`，node版本与express版本要匹配才行。

编写服务器代码`server.js`

```js
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

//监听服务
app.listen(8000, () => {
  console.log("服务器启动，8000端口监听中");
});
```

启动服务器命令：`node server.js`

### 2.2 ajax请求基础

js中实现AJAX最简单的ajax请求操作步骤：

1. 创建`XMLHttpRequest`对象xhr;
2. 初始化，设置请求的方法与url;
3. 发送请求;
4. 事件绑定`onreadystatechange`，处理响应结果。

编写一个测试网页代码`test.html`：内容就是按钮点击就创建一个ajax的**GET请求**。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AJAX 请求</title>
    <style>
      #result {
        width: 200px;
        height: 100px;
        border: solid 1px pink;
      }
    </style>
  </head>
  <body>
    <button>点击发送请求</button>
    <div id="result"></div>
    <script>
      const btn = document.querySelector("button");
      const div = document.getElementById("result");
      //绑定按钮点击事件
      btn.onclick = function () {
        //最基本的ajax请求创建步骤
        //1. 创建对象 xhr是XMLHttpRequest单词首字母的简写，表示ajax类型的请求
        const xhr = new XMLHttpRequest();

        //2.初始化，设置请求的方法与url
        //无参数的GET请求
        // xhr.open("GET", "http://127.0.0.1:8000/server");
        //有参数的GET请求
        xhr.open("GET", "http://127.0.0.1:8000/server?a=100&b=200&c=300");

        //3.发送请求
        xhr.send();
        //4.事件绑定 处理服务端返回的结果
        //on是当什么的时候触发事件
        //readystate 是xhr对象中属性，表示对象状态有五个值
        /* 0 表示未初始化，最开始值
            1 表示open方法执行完毕
            2 表示send方法执行完毕
            3 表示服务端返回了部分结果
            4 表示服务端返回了全部的结果
        */
        //change表示改变，说明该函数在一次请求中会触发4次
        xhr.onreadystatechange = function () {
          //判断服务端返回了所有的结果
          if (xhr.readyState === 4) {
            //判断响应状态码 200，404 303 状态200到300间都是成功的
            if (xhr.status >= 200 && xhr.status < 300) {
              //处理成功结果 响应头 行 体
              console.log(xhr.status); //状态码
              console.log(xhr.statusText); //状态字符串
              console.log(xhr.getAllResponseHeaders); //所有响应头
              console.log(xhr.response); //响应体
              div.innerHTML = xhr.response;
            } else {
            }
          }
        };
      };
    </script>
  </body>
</html>
```

创建POST请求

```js
//1. 创建对象
const xhr = new XMLHttpRequest();

//2.初始化，设置请求的方法与url POST请求
xhr.open("POST", "http://127.0.0.1:8000/server");

//设置请求头,要设置在发送前
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
//自定义请求头
xhr.setRequestHeader('name','张三');

//3.发送请求
//post无请求体的请求
// xhr.send();
//post带请求体的请求
xhr.send("a=100&b=200&c=300");

xhr.onreadystatechange = function () {
  //判断服务端返回了所有的结果
  if (xhr.readyState === 4) {
    //判断响应状态码 200，404 303 状态200到300间都是成功的
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log(xhr.response); //响应体
    }
  }
};
```

### 2.3 ajax响应JSON数据

AJAX中响应JSON字符串数据的两种方式：一种是直接使用JSON转化，一种是设置响应体数据类型为json自动转化。

```js
//1. 创建对象
const xhr = new XMLHttpRequest();
//b.自动转化响应数据，设置响应体数据类型
 xhr.responseType = "json";
//2.初始化，设置请求的方法与url POST请求
xhr.open("POST", "http://127.0.0.1:8000/server");

//设置请求头,要设置在发送前
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
//自定义请求头
xhr.setRequestHeader('name','张三');

//3.发送请求
//post无请求体的请求
// xhr.send();
//post带请求体的请求
xhr.send("a=100&b=200&c=300");

xhr.onreadystatechange = function () {
  //判断服务端返回了所有的结果
  if (xhr.readyState === 4) {
    //判断响应状态码 200，404 303 状态200到300间都是成功的
    if (xhr.status >= 200 && xhr.status < 300) {
      //a.手动对json数据进行转化
      //  let data = JSON.parse(xhr.response);
      //  console.log(data.name);
      console.log(xhr.response.name); //响应体
    }
  }
};
```

AJAX解决**IE浏览器缓存**内容的问题,就是在设置url时添加时间戳

```js
//初始化，设置请求的方法与url POST请求 发送内容添加时间戳，不同时间戳代表不同请求
xhr.open("POST", "http://127.0.0.1:8000/ie?t=" + Date.now());
```

### 2.4 ajax请求超时与网络异常

AJAX解决**请求超时**或**网络异常**的处理，**模拟延时响应**可以在服务器的响应上**添加定时器模拟**。**模拟网络异常**可直接在浏览器网络中设置为**离线**。

```js
//1. 创建对象
const xhr = new XMLHttpRequest();

//超时设置 2s就超时取消请求
xhr.timeout = 2000;

//超时回调
xhr.ontimeout = function () {
  alert("网络超时，请稍后重试");
};

//网络异常回调
xhr.onerror = function () {
  alert("网络异常，请稍后重试");
};
//2.初始化，设置请求的方法与url POST请求 发送内容添加时间戳
xhr.open("POST", "http://127.0.0.1:8000/server2");

//设置请求头
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("name", "aaa");
//3.发送请求
xhr.send("a=100&b=200&c=300");

xhr.onreadystatechange = function () {
  //判断服务端返回了所有的结果
  if (xhr.readyState === 4) {
    //判断响应状态码 200，404 303 状态200到300间都是成功的
    if (xhr.status >= 200 && xhr.status < 300) {
      //手动对json数据进行转化
      //  let data = JSON.parse(xhr.response);
      //  console.log(data.name);
      console.log(xhr.response.name); //响应体
    }
  }
};
```

### 2.5 ajax取消请求

取消请求使用abort函数就可

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AJAX 请求</title>
  </head>
  <body>
    <button>点击发送请求</button>
    <button>点击取消请求</button>
    <script>
      const btns = document.querySelectorAll("button");
      let xhr = null;
      //绑定按钮点击事件
      btns[0].onclick = function () {
        xhr = new XMLHttpRequest();
        xhr.open("GET", "http://127.0.0.1:8000/server2?a=100&b=200&c=300");
        //3.发送请求
        xhr.send();
          
        console.log(xhr.response);
      };

      //绑定按钮点击事件
      btns[1].onclick = function () {
        //取消请求
        xhr.abort();
      };
    </script>
  </body>
</html>
```

取消请求的应用，可以结合**防抖写法**，编写代码解决**ajax短时间多次重复请求的问题**。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AJAX 请求</title>
  </head>
  <body>
    <button>点击发送请求</button>
    <script>
      const btn = document.querySelector("button");
      let xhr = null;
      //标识变量 标识是否正在发送Ajax请求
      let isSending = false;
      //绑定按钮点击事件
      btn.onclick = function () {
        //核心：判断标识,如果相同请求有就取消
        if (isSending) xhr.abort();
        xhr = new XMLHttpRequest();
        //修改标识
        isSending = true;
        xhr.open("GET", "http://127.0.0.1:8000/server2?a=100&b=200&c=300");
        //3.发送请求
        xhr.send();
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            //执行完成就修改标识
            isSending = false;
          }
        };
        console.log(xhr.response);
      };

      //绑定按钮点击事件
      btns[1].onclick = function () {
        //取消请求
        xhr.abort();
      };
    </script>
  </body>
</html>
```

## 三、JQuery中的AJAX

jquery中编写ajax请求很简单，只需要调用对应的请求函数，传递对应参数即可。

jquery中的ajax的get请求，使用`$.get()`。

jquery中的ajax的post请求，使用`$.post()`。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Jquery发送ajax请求</title>
    <!-- 引入bootstrap资源-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
    <!-- 引入jquery资源 crossorigin="anonymous"设置就是向该域名发送请求时，将不会携带当前域名下的cookie -->
    <script crossorigin="anonymous" src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  </head>
  <body>
    <div class="container">
      <h2 class="page-header">Jquery发送ajax请求</h2>
      <button class="btn btn-primary">GET</button>
      <button class="btn btn-danger">POST</button>
      <button class="btn btn-info">通用型方法ajax</button>
    </div>
    <script>
      //按钮1
      $("button")
        .eq(0)
        .click(function () {   
          //jquery编写ajax get请求
          //参数1 请求url地址
          //参数2 请求参数，是个对象
          //参数3 响应函数
          //参数4 响应体类型设置 一般设为json
          $.get( "http://127.0.0.1:8000/jquery-server",{ a: 100, b: "aa" },function (data) {
              console.log(data); //结果为字符串 {"name":"张三"}
            }
            }
          );
        });
      //按钮2
      $("button")
        .eq(1)
        .click(function () {
          //jquery编写ajax post请求
          //参数1 请求url地址
          //参数2 请求参数，是个对象 post参数将不会拼接在url中
          //参数3 响应函数
          //参数4 响应体类型设置 一般设为json
          $.post(
            "http://127.0.0.1:8000/jquery-server",
            { a: 100, b: "aa" },
            function (data) {
              console.log(data); //结果为对象 {"name":"张三"}
            },
            "json"
          );
        });
    </script>
  </body>
</html>
```

除了上边两种写法，jquery中还有一种**通用配置写法**，可以发送任何类型的ajax请求。使用`$.ajax()`，参数是一个**配置对象**。

通用写法虽然比get,post复杂一些，但可以根据需求自己配置更加灵活。

个性化需要可查看jquery文档:https://www.apiref.com/jquery-zh/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Jquery发送ajax请求</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <!-- 引入jquery资源 crossorigin="anonymous"设置就是向该域名发送请求时，将不会携带当前域名下的cookie -->
    <script
      crossorigin="anonymous"
      src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
    ></script>
  </head>
  <body>
    <div class="container">
      <h2 class="page-header">Jquery发送ajax请求</h2>
      <button class="btn btn-primary">GET</button>
      <button class="btn btn-danger">POST</button>
      <button class="btn btn-info">通用型方法ajax</button>
    </div>
    <script>
      $("button")
        .eq(2)
        .click(function () {
          //通用配置写法
          //ajax函数参数是一个配置对象，属性配置顺序是不固定的，按需要写即可
          $.ajax({
            //url
            url: "http://127.0.0.1:8000/jquery-server",
            //请求参数
            data: { a: 100, b: "aa" },
            //请求类型 可设置GET POST，或者其他类型都可
            type: "GET",
            //响应体类型
            dataType: "json",
            //请求成功的回调函数
            success: function (data) {
              console.log(data);
            },
            //超时时间
            timeout: 2000,
            //失败的回调
            error: function (e) {
              console.log("出错了" + e);
            },
            //header头部信息设置
            headers: {
              a: 300,
              b: 400
            }
          });
        });
    </script>
  </body>
</html>
```

## 四、axios中的AJAX

axios中发送ajax请求，跟jQuery很类似，都有三种方式。`axios.get()`发送get请求、`axios.post()`发送post请求、`axios()`通用配置。其中通用配置也是**配置对象**。axios处理结果是由promise的`then`方法进行处理的。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>axios 发送ajax请求</title>
    <!-- 引入bootstrap -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <!-- 引入axios-->
    <!-- <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> -->
    <script
      crossorigin="anonymous"
      src="https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js"
    ></script>
  </head>
  <body>
    <div class="container">
      <h2 class="page-header">axios发送ajax请求</h2>
      <button class="btn btn-primary">GET</button>
      <button class="btn btn-danger">POST</button>
      <button class="btn btn-info">通用型方法ajax</button>
    </div>
    <script>
      const btns = document.querySelectorAll("button");
      //配置 baseURL 配置基本路径，用于简化路径
      axios.defaults.baseURL = "http://127.0.0.1:8000";

      btns[0].onclick = function () {
        //axios发送GET请求
        axios
          .get("/axios-server", {
            //url参数
            params: {
              id: 100,
              name: "zhang"
            },
            //请求头信息
            headers: {
              name: "aaa",
              age: 20
            }
          })
          .then((value) => {
            //axios请求的处理结果是基于promise进行处理的
            console.log(value);
            console.log(value.data); //会自动将json数据转化的为对象
          });
      };

      btns[1].onclick = function () {
        //axios发送POST请求
        axios
          .post(
            "/axios-server",
            {
              //请求体
              username: "admin",
              password: "admin"
            },
            {
              //请求头信息
              headers: {
                name: "aaa",
                age: 20
              }
            }
          )
          .then((value) => {
            //axios请求的处理结果是基于promise进行处理的
            console.log(value);
            console.log(value.data); //会自动将json数据转化的为对象
          });
      };

      btns[2].onclick = function () {
        //axios发送通用配置请求,参数是配置对象
        axios({
          //请求方法 默认GET
          method: "POST",
          //url
          url: "/axios-server",
          //请求参数
          params: {
            vip: 10,
            level: 30
          },
          //请求头信息
          headers: {
            name: "aaa",
            age: 20
          },
          //请求体参数
          data: {
            //请求体
            username: "admin",
            password: "admin"
          }
        }).then((value) => {
          //axios请求的处理结果是基于promise进行处理的
          console.log(value);
          console.log(value.data); //会自动将json数据转化的为对象
          console.log(value.status); //状态码
          console.log(value.statusText); //状态字符串
          console.log(value.headers); //响应头
        });
      };
    </script>
  </body>
</html>
```

## 五、fetch函数发送AJAX

fetch函数是最新的js的函数，它也可以通过配置的方式发送ajax请求。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>fetch 发送ajax请求</title>
  </head>
  <body>
    <button>ajax请求</button>

    <script>
      const btn = document.querySelector("button");

      btn.onclick = function () {
        //fetch返回结果是promise对象
        fetch("http://127.0.0.1:8000/fetch-server?name=33", {
          //请求方法
          method: "POST",
          //请求头
          headers: {
            name: "zz"
          },
          //请求体,请求体的内容格式可以随意,json，对象或者查询字符串
          body: "username=amdin&password=sss"
        })
          .then((response) => {
            console.log(response);
            // return response.text(); //返回响应体结果，默认是字符串
            return response.json(); //返回响应体结果为json数据
          })
          .then((response) => {
            console.log(response); //对象 {"name":"张三"}
          });
      };
    </script>
  </body>
</html>
```

## 六、同源策略与跨域

### 6.1 同源

同源策略(Same-Origin Policy)最早由Netscape公司提出的，是浏览器的一种安全策略。

同源是指**协议、域名、端口号必须完全相同**。违背同源策略就是**跨域**。**ajax请求是默认遵循同源策略的**。

编写一个响应页面的服务和get请求数据的服务：

```js
const express = require("express");

const app = express();

//响应页面的服务
app.get("/home", (request, response) => {
  //响应一个页面
  response.sendFile(__dirname + "/index.html");
});

//请求数据的服务
app.get("/data", (request, response) => {
  //响应一个数据
  response.send('用户数据');
});

//监听服务
app.listen(8000, () => {
  console.log("服务器启动，8000端口监听中");
});
```

响应页面`index.html`的内容，直接可以使用ajax请求数据，因为**响应页面和请求数据的服务器同源**。

响应页面的请求路径是`http://127.0.0.1:8000/home`，数据请求路径是`http://127.0.0.1:8000/data`,都是`http://127.0.0.1:8000/`，因此是同源的。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>响应页面</h1>
    <button>点击获取数据</button>

    <script>
      const btn = document.querySelector("button");
      btn.onclick = function () {
        const x = new XMLHttpRequest();
        // 当前页面的请求路径是http://127.0.0.1:8000/home
        // 完整请求路径是http://127.0.0.1:8000/data,由于是同源页面，前面的内容一样是可以省略的
        x.open("GET", "/data");
        x.send();
        x.onreadystatechange = function () {
          if (x.readyState === 4) {
            if (x.status >= 200 && x.status < 300) {
              console.log(x.response); //响应数据
            }
          }
        };
      };
    </script>
  </body>
</html>
```

解决跨域请求的有两种方式：**JSONP**和**CORS**。

### 6.2 JSONP

JSONP(JSON with Padding)是一个非官方的跨域解决方案，纯粹程序员自己开发出来的，**只能解决get请求跨域**。

JSONP原理是利用网页中有一些标签**天生具有的跨域能力**，例如：img、link、iframe、**script**等。

JSONP就是利用script标签的跨域能力来发送请求，获取返回一段**包含函数调用js代码**，从而获取到数据。

> 注意: js标签中请求获取的内容只能是js代码，字符串或者其他数据会报错。

**案例：模拟script跨域请求**

编写一个get服务用于获取get请求，请求路径是`http://127.0.0.1:8000/jsonp-server`

```js
const express = require("express");

const app = express();

//jsonp服务
app.get("/jsonp-server", (request, response) => {
  const data = {
    name: "json名称测试"
  };
  //将数据转化为json字符串
  let str = JSON.stringify(data);
  //end返回结果，没有多余请求头,注意返回结果是一段js代码，该代码是函数调用
  response.end(`handle(${str})`);
});

//监听服务
app.listen(8000, () => {
  console.log("服务器启动，8000端口监听中");
});
```

利用js标签进行跨域请求，该html页面打开链接`file:///F:/学习/AJAX/代码/test7.html`,而script中的请求是`http://127.0.0.1:8000/jsonp-serverhttp://127.0.0.1:8000/jsonp-server`,两者完全不同源，因此是**跨域**请求。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JSONP解决跨域问题</title>
    <style>
      #result {
        width: 200px;
        height: 100px;
        border: solid red 1px;
      }
    </style>
  </head>
  <body>
    <div id="result"></div>
    <script>
      //处理函数
      function handle(data) {
        const div = document.getElementById("result");
        div.innerHTML = data.name;
      }
    </script>

    <script src="http://127.0.0.1:8000/jsonp-server"></script>
  </body>
</html>
```

最终结果，script请求成功，html中的handle函数被调用执行，页面div中展示服务器数据`json名称测试`。

**案例：利用JSONP模拟用户名验证**，该案例只验证是否存在，不验证数据

服务器端内容，返回是**函数调用**。

```js
const express = require("express");

const app = express();

//jsonp服务
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

//监听服务
app.listen(8000, () => {
  console.log("服务器启动，8000端口监听中");
});
```

html内容，核心就是使用js创建script标签节点，设置src为服务器地址。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JSONP验证用户名</title>
  </head>
  <body>
    用户名<input type="text" id="username" />
    <p></p>
    <script>
      const input = document.querySelector("input");
      const p = document.querySelector("p");
      //handle处理函数
      function handle(data) {
        input.style.border = "solid 1px #f00";
        p.innerHTML = data.msg;
      }
	  //input光标检测
      input.onblur = function () {
        //获取input中的用户名
        let username = this.value;
        //向服务器发送请求，验证用户名
        //1.创建script标签
        const script = document.createElement("script");
        //2.设置src属性
        script.src = "http://127.0.0.1:8000/jsonp-server";
        //3.插入到文档中
        document.body.appendChild(script);
      };
    </script>
  </body>
</html>
```

**案例：使用jQuery发送JSONP请求**

服务器端代码，注意获取**请求参数callback**。

```js
const express = require("express");

const app = express();

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

//监听服务
app.listen(8000, () => {
  console.log("服务器启动，8000端口监听中");
});
```

html内容,jquery的发送JSONP请求的核心就是发送请求时包含**callback参数**，该参数值作为**回调函数名使用**。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Jquery发送JSONP请求</title>
    <script
      crossorigin="anonymous"
      src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
    ></script>
    <style>
      #result {
        width: 300px;
        height: 100px;
        border: 1px solid red;
      }
    </style>
  </head>
  <body>
    <button>Jquery发送Jsonp请求</button>
    <div id="result"></div>
    <script>
      //
      $("button")
        .eq(0)
        .click(function () {
          //请求的url后面要必须要追加写法 callback=?
          $.getJSON(
            "http://127.0.0.1:8000/jsonp-jquery-server?callback=?",
            function (data) {
              $("#result").html(`
              名称：${data.name}<br/>
              校区：${data.city}`);
            }
          );
        });
    </script>
  </body>
</html>
```

### 6.3 CORS

**CORS(Cross-Origin Resource Sharing),跨域资源共享**。CORS是官方的跨域解决方案，它的特点是不需要在客户端做任何特殊的操作，**完全在服务器中进行处理**。支持get和post请求。

跨域资源共享标准新增了**一组HTTP首部字段**，允许服务器声明哪些源站通过浏览器有权限访问哪些资源。

CORS通过**设置一个响应头**来告诉浏览器，该请求允许跨域，浏览器收到该响应以后就会对响应放行。

服务器,核心就是设置响应头`setHeader("Access-Control-Allow-Origin", "*")`。

```js
const express = require("express");

const app = express();

//Cors请求服务
app.all("/cors-server", (request, response) => {
  //设置跨域允许响应头 使用*表示匹配所有，这里只匹配当前跨域的服务
  // response.setHeader("Access-Control-Allow-Origin", "*");
  //匹配特定的服务器
  response.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  //允许headers自定义
  response.setHeader("Access-Control-Allow-Headers", "*");
  //允许方法自定义,指定了访问资源时允许使用的请求方法
  response.setHeader("Access-Control-Allow-Method", "*");
  //让服务器把允许浏览器访问的头部信息放入白名单,这样浏览器就能通过X-My-Custom-Header,X-Another-Custom-Header响应头
  response.setHeader("Access-Control-Expose-Headers", "X-My-Custom-Header,X-Another-Custom-Header");
  //给定了该预检请求可供缓存的时间长短，单位为秒，默认值是5秒。在有效时间内，浏览器无须为同一请求再次发起预检请求
  response.setHeader("Access-Control-Max-Age", 86400);
  //指定了当浏览器的 credentials 设置为 true 时是否允许浏览器读取 response 的内容。
  response.setHeader("Access-Control-Allow-Credentials", true);
  response.send("hello CORS");
});

//监听服务
app.listen(8000, () => {
  console.log("服务器启动，8000端口监听中");
});
```

发送ajax请求的html页面

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #result {
        width: 300px;
        height: 100px;
        border: 1px solid red;
      }
    </style>
  </head>
  <body>
    <button>发送ajax请求</button>
    <div id="result"></div>

    <script>
      const btn = document.querySelector("button");
      const div = document.querySelector("div");
      btn.onclick = function () {
        const x = new XMLHttpRequest();

        x.open("GET", "http://127.0.0.1:8000/cors-server");
        x.send();
        x.onreadystatechange = function () {
          if (x.readyState === 4) {
            if (x.status >= 200 && x.status < 300) {
              console.log(x.response);
              div.innerHTML = x.response;
            }
          }
        };
      };
    </script>
  </body>
</html>
```

除了允许跨域设置外，CORS还有其他的响应头设置。详细内容可查看官方文档https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Guides/CORS。



