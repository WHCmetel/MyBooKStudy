# JS学习

[TOC]



## 一、JavaScript简介

JS就是JavaScript的简称，它是一种**轻量级的脚本语言**。

> 所谓**脚本语言**，指的是它只能用于编写**控制其他大型应用程序**的脚本,不具备**开发操作系统的能力**。
>
> JS脚本语言不需要编译，运行过程中由js解释器(js引擎)逐行来进行**解释并立即执行**。也就是**边编译边执行**的语言，也叫做**解释型语言**。
>
> Java语言是先编译文件生成中间代码，然后再执行中间代码运行程序。这种语言叫做**编译型语言**。

JavaScript也是一种**嵌入式（embedded）语言**。所谓嵌入式，就是它可以直接在HTML文本中直接开发。它本身提供的核心语法不算很多，因此学起来很简单。
JavaScript语言的优势:

* 具有操作浏览器
* 广泛的使用领域，可写前后端APP、微信小程序以及Android应用等
* 易学性

浏览器为什么能执行JS代码，主要是由于浏览器由**渲染引擎**和**JS引擎**构成。

+ **渲染引擎**主要用来解析HTML和CSS,也就是浏览器内核。例如：blink和老版本的webkit；
+ **JS引擎**主要用来读取网页中的JS代码，对其逐行进行解释(转化为机器语言)并执行。例如：chrome的V8引擎；

### 1.1 JS的组成

JS主要由三部分组成，分别是`ECMAScript(JS的基础语法)`、`DOM(页面文档对象模型)`、`BOM(浏览器对象模型)`。其中DOM与BOM是浏览器提供的**API接口**,脱离了浏览器就无效。我们学习js的流程也是**先JS基础再DOM最后BOM**。

**ECMAScript**与**JavaScript**的关系:前者是后者的一种规范，后者是前者的一种实现。通常可互换。例如:ES6规范对应的版本就是js6。

![image-20260613234244757](./assets/image-20260613234244757.png)

### 1.2 js代码引入方式

js代码使用的方式有三种与CSS引入很类似：

* **行内式js**,就是js代码直接写到html标签中，不常用。

  ```html
  <input type="button" value="aaa" onclick="alert('hello js')">
  ```

* **内嵌式js**，就是直接写到HTML文件body标签的`script`标签中

  ```html
  <body>
      <script>
         // js代码
         var age = 10;
      </script>
  </body>
  ```

* **外部式js**，其中外部也分为两种，一是**引入本地独立js文件**，其中最关键的就是type文件类型必须为**text/javascript**，src指定**文件存放路径**。js文件的后缀名为.js。

  ```html
  <body>
   <script type="text/javascript" src="./本地文件.js"></script>
  </body>
  ```

* 二是**引入网络来源文件**，核心是src指定**网络文件网址**。

  ```html
  <body>
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  </body>
  ```

> 注意:外部式的两种方法既可以写在body中引入，也可以在head中引入，一般推荐body中引入。

## 二、JavaScript语法

js代码是从上到下依次执行的，每一行代码就是一个**语句**，语句以**分号**结尾，一个分号就表示一个语句结束。案例如下

```js
var num = 10;
```

### 2.1 注释

所谓**注释**，就是不被引擎所解释的内容。它的作用就是对代码进行标注解释。

**js注释**(有两种)

```js
// 单行注释

/*
多行
注释
*/
```

**css注释**

```css
h3{
    /* color: red；*/
    font-size: 30px；
}
```

**html注释**

```html
<!-- 注释 -->
```

注释会让**代码变灰色**也就是表明该代码不可用。VScode软件中注释的快捷键为：`Ctrl+/`

### 2.2 JS的输入输出方式

js常用输入方式`prompt`

```js
//这是一个输入弹窗
var age = prompt("请输入年龄");

//这是输出弹窗,输出输入的内容
alert(age);
```

js常用的输出方式有三种:

```js
//1.对话框输出
alert("输出内容");
//2.控制台文本输出
console.log("输出内容");
// 3. html页面文本输出,这是其中document是DOM的知识，这里只了解即可
document.write("输出内容");
```

### 2.3 变量

**变量(variable)**指的是动态变化的值，因为值要动态变化，所以变量实际上是用于**存放数据的容器**。通过**变量名**可获取变量的数据，也可对数据进行修改。

> 变量的本质是程序在内存中申请的一块用来存放数据的空间。

变量的使用主要分为两步:

1. **声明变量**，也就是给变量命名，声明变量后计算机就会自动为变量分配内存空间，其名称就是你的变量名。

   > var是js声明变量的关键字，它就是variable的简写。

   ```js
   var age; //声明变量age
   ```

2. **赋值变量**，在变量中存储数据。

   ```js
   age = 10; //age赋值10
   ```

变量声明与赋值可同时编写，这种写法就叫做**变量的初始化**。

```js
//变量初始化
var num = 10;
console.log(num); //打印变量
//变量更新
num = 30; //num变量重新赋值为30，原来的值就会被覆盖

// 同时声明多个变量,然后赋值
var a, b, c;
a = 10;
b = 20;
c = 30;

//同时初始化多个变量
var d = 20,e = 30;

//声明变量的特殊情况
//1. 只声明不赋值
var aaa;
console.log(aaa); //undefined

//2. 只赋值不声明，不会报错但不推荐这样写
sex = "男";
console.log(sex); //男

//3.不声明不赋值，会报错
console.log(user); //报错

//4.不声明不赋值，但变量名为name,不会报错,且打印为空
console.log(name);//空数据
```

**变量提升**:JavaScript引擎的工作方式是先解析代码，获取所有被声明的变量，然后再一行行从上到下依次执行代码。这造成的结果就是不管变量声明在何处，最终都会被提升到**代码头部**。

```js
console.log(num);
var num = 10;
```

该代码运行结果并不是报错 而是打印了**undefined**。其原因就是变量提升，将代码变为了:

```js
var num;
console.log(num); //undefined
num = 10;
```

**变量的命名规范**:

1. 由字母(A_Za_z)、数字(0-9)、下划线(_)以及美元符号($)组成;
2. 严格区分大小写，app与App是两个变量;
3. 不能以数字开头;18age是错误的;
4. 不能是**关键字**、**保留字**。例如var、for等，name也不要用，对于有些浏览器它是有含义的;
5. 变量名必须有意义。常用英文单词，用age不用nianling;
6. 使用驼峰命名法。也就是首字母小写，后面每个单词首字母大写。例如myFirstName;

**标识（zhi）符**指的是用来识别各种值的合法名称，例如**变量名**、**属性名**、**函数名**以及**参数名**等。规范的变量命名就是合法的标识符。

> 中文是合法的标识符，但不推荐使用。

标识符不能是**关键字**和**保留字**。

**关键字**指的是JS本身已经使用的名字，不能再用它们充当变量名与方法名。

> 包括：break、case、catch、continue、default、delete、do、else、finally、for、function、if、in、instanceof、new、return、switch、this、throw、try、typeof、var、void、while、with等

**保留字**指的是JS预留的"关键字",就是现在没使用但未来可能成为关键字的名字。

>包括：boolean、byte、char、class、const、debugger、double、enum、export、extends、final、float、goto、implements、import、int、interface、long、mative、package、private、protected、public、short、static、super、synchronized、throws、transient、volatile等

关键字与保留字不用专门记忆，用多了就自然就熟悉了。

案例:交换两个变量值

```js
var a = 10,b = 20;
console.log(a, b); //10 20
//临时变量
var temp;
temp = a;
a = b;
b = temp;
console.log(a, b); //20 10
```

### 2.4 数据类型

#### 2.4.1 数据类型定义

在计算机中，不同的数据所占用的存储空间大小是不同的，为了便于把数据分成所需内存大小不同的数据，充分利用存储空间，于是就产生了**数据类型**。

js是一种**弱类型**或者**动态类型**的语言。这意味着js代码不用提前声明变量类型，**在程序运行过程中，类型会根据赋值的数据来自动确定**。

```js
//Java语言
int num = 10; //num在变量声明阶段就确定是int数字类型

//js语言
var num2; //不确定num2的数据类型
num2 = 10; //num2是数字类型
num2 = "aa"; //num2又变为字符串类型，说明类型是动态的
```

#### 2.4.2 数据类型分类

在ES5的规范中，js中数据类型有六种。主要被分为两大类:

+ **简单数据类型(基本/原始数据类型)**，分别是`数值(数字)`、`布尔值`、`字符串`、`null`、`undefined`。
+ **引用数据类型(复合/合成数据类型)**，只有一个`对象(object)类型`，它往往是由多个简单数据类型组合而成的。

> 在ES6中又新增了两种**Symbol**类型与**Bigint**类型。

##### 2.4.2.1 数字型（number）

```js
var num1 = 10; //整数
var num2 = 3.14; //小数,浮点数

//1. 八进制 0~7 八进制以0o开始 老版本是0开始
var num3 = 0o011;
console.log(num3); //9,console输出默认会转化为十进制

//2. 十六进制 0~9 a~f 以0x开始
var num4 = 0x01a;
console.log(num4); //26

//3. 二进制 只有01,以0b开始
var num5 = 0b00001100;
console.log(num5); //12

//十进制与其他进制的相互转化
console.log(parseInt("1010", 2)); //二进制变十进制,其他进制修改第二个参数即可
console.log((10).toString(2)); //十进制变二进制
console.log((10).toString(8)); //十进制变八进制
console.log((10).toString(16)); //十进制变十六进制

//4. 数字型最大值与最小值
console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MIN_VALUE); //5e-324

//5.数字型的特殊值
console.log(Infinity); //正无穷大
console.log(Number.MAX_VALUE * 2); //正无穷大 Infinity
console.log(-Number.MAX_VALUE * 2); //负无穷大 -Infinity
console.log("aaa" - 100); //NAN，非数字 not a number

console.log(typeof Infinity); //number数字类型
console.log(typeof NAN); //undefined类型
```

验证是否为非数字类型的方法`isNAN`，如果是数字返回false，不是数字返回true。

```js
console.log(isNaN(12)); //false
console.log(isNaN(-Infinity)); //false
console.log(isNaN("aa")); //true
```

##### 2.4.2.2 字符串型（string）

字符串就是零个或多个排在一起的字符，放在**单引号**或**双引号**中。HTML中使用的双引号，JS中更推荐使用单引号。

```js
//2. 字符串类型，被双引号或单引号包裹大类型
var name = '张三';
var name = "李四";
```

字符串是可以嵌套的。也就是单引号内部可使用双引号，双引号内部可使用单引号。如果双引号(单引号)中要使用双引号(单引号)就需要转义字符`\`进行转义。
字符串默认只写一行，如果要**换行编写字符串**，也需要使用转义字符才行。

```js
//1. 单双引号嵌套
var c = 'ABC"双引号"';
var d = "哈哈哈'单引号'dd";

//2. 双引号嵌套
var e = 'adn"大喊大叫"对的axcs';

//3. 字符串换行编写
var g =
  "换行\
对对对\
ddd\
大";

//4. 字符串换行
var h = "你好 \n 未来";
console.log(c); //ABC"双引号"
console.log(e); //adn"大喊大叫"对的axcs
console.log(g); //换行对对对ddd大
console.log(h); //你好 (换行)未来
```

JS中常用的转义符

| 转义符 | 解释说明                 |
| ------ | ------------------------ |
| \n     | 换行符，n是newline的意思 |
| \\\    | 斜杠\                    |
| \\\'   | 单引号                   |
| \\"    | 双引号                   |
| \t     | tab缩进                  |
| \b     | 空格，b是blank的意思     |

>**温馨提示:**
>字符串通常都使用**单引号**，单双引号嵌套一般不要写会引发字符串混乱。

`length`属性用于检测字符串长度，可返回**字符串的长度值**，该属性是无法改变**只读的**。

```js
var str = "zhangshang";
console.log(str.length); //10
```

字符串拼接，使用`+`号,口诀为**数值相加，字符相连**。

```js
console.log("沙漠" + "骆驼"); //沙漠骆驼
console.log("我的年龄" + 18); //我的年龄18
console.log("我的年龄" + true); //我的年龄true
console.log(18 + 18); //36
console.log("18" + 18); //1818
//拼接变量,交互小案例
var age = prompt("请输入你的年龄:");
var str = "我的年龄" + age + "岁!";
alert(str);
```

##### 2.4.2.3 布尔型（boolean）

布尔类型，值只有`true`与`false`，true表示1，false表示0。

```js
console.log(true); //true
console.log(false); //false
console.log(true + 1); //2
console.log(false + 1); //1
```

##### 2.4.2.4 undefined与null

一个变量被声明时默认值为undefined。`undefined`表示数值为空。

```js
var age;
console.log(age); //undefined
var a = undefined;
console.log(a + "AA"); //undefinedAA
console.log(a + 1); //NAN
console.log(a + true); //NAN
```

`null`是空值或空对象。一般用于赋值对象为空。也就是变量本打算存储对象，但暂时没想好因此用null先代替。

```js
var space = null;
console.log(space + "AA"); //nullAA
console.log(space + 1); //1
console.log(space + true); //1
```

##### 2.4.2.5 数据类型检测 typeof

js中有专门的**运算符**用于帮助我们判断数据类型，它就是`typeof`。

```js
var age = 10;
var name = "张三";
var sex = true;
var person = {};
console.log(typeof age); //结果为number 也就是数字类型
console.log(typeof name); //结果为string 也就是字符串类型
console.log(typeof sex); //结果为 boolean 也就是布尔类型
console.log(typeof undefined); //undefined

//typeof判断复合类型不一定准确，多种情况都是object
console.log(typeof person); //object
console.log(typeof []); //object
console.log(typeof null); //object

//prompt输入数字时的变量类型
var ss = prompt("请输入年龄:");
console.log(ss);
console.log(typeof ss); //string
```

数据类型也可以通过浏览器控制台打印内容的颜色判断，黑色为字符串类型，蓝色是数值型，浅蓝色是布尔型，灰色是undefined与null。

> **字面量**就是在源代码中固定值的表示法。通俗来说就是字面量就是表示如何表达这个值。
>
> 数字字面量：8，9，10
>
> 字符串字面量：'aaa',"张三"
>
> 布尔字面量：true,false

* 未写**引用数据类型**，又叫复合/合成数据类型，其往往是由多个原始数据类型组合而成的**对象（object）**。
  ```js
  // {}包裹对象，赋值用冒号，每个原始数据用逗号分隔开
  var user = {
      name: "张三",
      age: 10,
      learned: true,
      //可嵌套
      add: {
            name2: "gg"
      },
      //数组
      array: [1, 2, 3]
  };
  //打印属性
  console.log(user.name);//张三
  console.log(user.add.name2);//gg
  console.log(user.array[1]);//2
  ```

##### 2.4.2.6 数据类型转换

数据类型转换就是把一种数据类型的变量转换成另外一种数据类型。

**数字转换字符串**

```js
var num = 10;
//1. toString方法转换
console.log(num.toString()); 
//2. String方法强制转换
console.log(String(num));
//3. 隐式转换，利用字符串+拼接的原理
console.log(num + ""); 
```

**字符串类型转换数字型**

```js
//1. parseInt方法转换为整数
console.log(parseInt("18")); //18
console.log(parseInt("3.98")); //3
console.log(parseInt("120px")); //120,会去掉单位，该效果必须数字开头才行，遇到字母就结束
console.log(parseInt("aa120px")); //NAN

//2. parseFloat方法转换为小数
console.log(parseFloat("18")); //18
console.log(parseFloat("3.98")); //3.98
console.log(parseFloat("120px")); //120,会去掉单位，该效果必须数字开头才行，遇到字母就结束
console.log(parseFloat("aa120px")); //NAN

//3. 强制转换，Number方法
console.log(Number("123")); //123

//4. 隐式转换,利用算术运算 - * /号码
console.log("10" - 1); //9
console.log("10" - "0"); //10
console.log("10" * "2"); //20
console.log("10" / "5"); //2
```

案例:简单字符串数字相加求和

```js
var num1 = prompt("输入1号数字:");
var num2 = prompt("输入2号数字:");
var result = parseFloat(num1) + parseFloat(num2);
console.log(result);
//简便写法
var result2 = num1 - -num2;
console.log(result2);
```

**转换为布尔型**

```js
//转换布尔型使用Boolean方法，除了下面五个特殊值为false，其他值转换都为true
console.log(Boolean("")); //false
console.log(Boolean(0)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false

console.log(Boolean("aa")); //true
console.log(Boolean(12)); //true
console.log(Boolean(" ")); //空格也为true
```



### 2.5 运算符

**运算符(operator)**也被称为操作符，是用于实现赋值、比较和执行算术运算等功能的**符号**。

**表达式**：是由数字、运算符、变量等以能求得数值的有意义的排列方法所得的组合，简单来讲就是由数字、运算符、变量组成的式子。

**返回值**：所有的表达式都会有一个结果返回，返回的值就称为返回值。例如：1+1就是表达式，结果为2就是返回值。

```js
//将表达式的返回值赋值给变量
var num = 1 + 2;
```

#### 2.5.1 算术运算符

算术运算符主要用于两个变量或值的算术运算。常用的有**加减乘除取余运算符**。

```js
var num1 = 15;
var num2 = 10;
//加法运算符
console.log(num1 + num2); //25
//减法运算符
console.log(num1 - num2); //5
//乘法运算符
console.log(num1 * num2); //150
//除法运算符
console.log(num1 / num2); //1.5
//取余运算符，它可以用于判断数字是否能被整除，只要结果为0就表示能被整除
console.log(num1 % num2); //5
console.log(3 % 5); //3
```

**浮点数算术运算**有不精确的问题，因为所有运算其实都是先将十进制数字转换的二进制，运算完成后再转换为十进制的。所有浮点数的运算精度远远不如整数。浮点数最高精度是**17位小数**。

```js
console.log(0.1 + 0.2); //0.30000000000000004
console.log(0.07 * 100); //7.000000000000001

//不能直接使用浮点数进行相等比较
var num = 0.1 + 0.2;
console.log(num == 0.3); //false
```

**自增自减运算符**，想要变量自己加一或减一，传统的表达式太麻烦，这时就可以考虑自增自减运算符。**该运算符必须和变量一起使用，普通数字不能使用。**

```js
//前置自增与后置自增的区别练习
//原始的变量加一的写法
var num = 1;
num = num + 1;
console.log(num);

//自增加一写法
//前置递增运算符
console.log(++num); //3
//前置递减运算符
console.log(--num); //2
//后置递增运算符
console.log(num++); //2
//后置递减运算符
console.log(num--); //3
```

自增自减运算符根据运算符放在**变量的前后**位置不同，可以分为**前置自增运算符**和**后置自增运算符**。前置与后置的区别：**前置递增是先变量加一然后再返回变量值；后置递增是先返回变量值然后再变量加一。**

```js
//前置自增与后置自增的区别练习
//该案例要考虑算术优先级，++优先级高于+,因此会先执行完成自增自减然后再进行+
var a = 10;
++a;
var b = ++a + 2;
console.log(b); //12+2=14

var c = 10;
c++;
var d = c++ + 2;
console.log(d); //11+2=13

var e = 10;
var f = e++ + ++e; //10+12，e++执行完成e会变为11
console.log(f); //22

var e1 = 10;
var f1 = ++e1 + e1++; //11+11
console.log(f1); //22
```

自增自减运算符还拥有**转换字符串为数字类型**的效果

```js
var num = "11";
console.log(num++ + 2); //数字13
```

#### 2.5.2 赋值运算符

**赋值运算符（=）**，主要用于将等号右边的值赋值给等号左边。

```js
var x = 10; //就是将10赋值给x
var y = x; //y的值等于10

//赋值运算符结合算术运算符
x += 10; //x=20,相当于x=x+10
y -= 5; //y=5,相当于y=y-5
x /= y; //x=4,相当于x=x/y
y *= y; //y=25
y %= x; //y=1
```

#### 2.5.3 比较运算符

比较运算符又叫关系运算符主要用于**比较两个数据的大小或是否相等**，返回的值为**布尔值**。

```js
var x = 10;
var y = 20;
console.log(x > y); //false
console.log(x < y); //true
console.log(x >= y); //false
console.log(x <= y); //true

//相等运算符，只要值相等就返回true，==会转换字符型为数值型
var num1 = 10;
var num2 = "10";
console.log(num1 == num2); //true
//严格相等运算符，值与类型都必须相同才返回true
console.log(num1 === num2); //false

//不等运算符，只要值不相等就返回true
var num1 = 10;
var num2 = "10";
console.log(num1 != num2); //false
//严格不等运算符，值与类型都必须不相同才行，一个不等都返回true
console.log(num1 !== num2); //true
```

#### 2.5.4 布尔运算符

布尔运算符是**逻辑运算符**，它主要用于**进行布尔值运算**，经常用于多个条件判断。它的返回结果也是**布尔值**。

| 逻辑运算符 | 说明              |
| ---------- | ----------------- |
| **&&**     | 逻辑与，and的意思 |
| **\|\|**   | 逻辑或，or的意思  |
| **！**     | 逻辑非，not的意思 |

**取反运算符（!）**，逻辑非。true变false，false变true。它也有转换类型的效果。

```js
//布尔值取反
console.log(!true); //false
console.log(!false); //true

//非布尔值取反，一般会把取反的内容先转化为布尔值，然后再取反。除了下面六个的内容其他为true，其他都为false。
console.log(!undefined); //true
console.log(!null);
console.log(!false);
console.log(!0);
console.log(!NaN);
console.log(!""); //空字符串 true

console.log(!100); //false
```

**且运算符（&&）**，表示多个条件必须同时为true才返回true，否则返回false。

```js
console.log(10 < 20 && false); //false
console.log(10 < 20 && true); //true
```

**或运算符（||）**，表示多个条件只要有一个为true就返回true。同时为false才返回false。

```js
console.log(10 < 20 || false); //true
console.log(10 > 20 || false); //false
```

#### 2.5.5 逻辑中断(重要)

逻辑中断又叫做**短路运算**，其原理是当有多个表达式(数值)时，左边的表达式的值可以确定结果时，就不再继续运算右边的表达式的值。

```js
//1. 逻辑与的短路运算,如果表达1为真，则直接返回表达式2的值。如果表达1为假则直接返回表达式1。
console.log(123 && 456); //456
console.log(0 && 456); //0
console.log(0 && 1 + 2 && 456 * 5678); //0，只要开始为false，后面再多表达式都无效
console.log("" && 1 + 2 && 456 * 5678); //''，只要开始为false，后面再多表达式都无效

//2. 逻辑或的短路运算,如果表达1为真，则直接返回表达式1的值。如果表达1为假则直接返回表达式2。
console.log(123 || 456); //123
console.log(0 || 456); //456
console.log(123 || (1 + 2 && 456 * 5678)); //123，只要开始为true，后面再多表达式都无效
console.log(0 || 456 || (1 + 2 && 456 * 5678)); //456，只要开始为true，后面再多表达式都无效

//逻辑中断会影响代码的执行结果
var num = 0;
console.log(123 || num++); //123
console.log(num); //num结果还是0，num++被中断无法执行
```

#### 2.5.6 运算符优先级

运算符的执行顺序与其优先级有关。

| 优先级 | 运算符     | 顺序                    |
| ------ | ---------- | ----------------------- |
| 1      | 小括号     | ()                      |
| 2      | 一元运算符 | ++，--，！              |
| 3      | 算术运算符 | 先乘*除/取余%，后加+减- |
| 4      | 关系运算符 | >,>=,<=,<               |
| 5      | 相等运算符 | ==,!=,===,!==           |
| 6      | 逻辑运算符 | 先与**&&**后或**\|\|**  |
| 7      | 赋值运算符 | =                       |
| 8      | 逗号运算符 | ,                       |

```js
//因为&&与||的优先级最低,因此执行顺序先将&&与||两边的4个表达式，,四个表达式算出结果为false || true && true && true,然后先算与再算或结果为true
console.log(4 >= 6 || "a" != "aa" && !(12 * 2 == 144) && true); //true,

//下面两个也是同理,赋值运算最后
var num = 10;
console.log(5 == num / 2 && (2 + 2 * num).toString() === "22"); //true

var d = !(3 > 5) || (2 === "2" && true);
console.log(d); //true
```

#### 2.5.7 三元运算符

所谓三元运算符，就是需要的运子(运算元素)有三个。不同运算符区分:

+ 取反运算符是**一元运算符**，因为它只要一个元素，**!true**，true就是元素。
+ 比较运算符是**二元运算符**，因为它需要两个元素，**a>b**，a与b就是元素。
+ 三元运算符，它主要用于逻辑判断。其格式为`(条件a)？表达式b:表达式c`，其中a，b，c就是三个元素。**其执行效果为:条件a如果为true，返回表达式b，为false返回表达式c。**
  ```js
  var x = 1;
  var y = 2;
  console.log(x > y ? "x>y" : "x<=y"); //结果为x<=y
  ```

> 三元运算符可以视为if...else条件语句的简写形式。可用于多种场合。

```js
var num = 12;
//判断奇数还是偶数
if (num % 2 === 0) {
 console.log("偶数");
} else {
 console.log("奇数");
}
//使用三元运算符替换写法
var result = num % 2 === 0 ? "偶数" : "奇数";
console.log(result);//运行结果都是偶数

//数字补零案例，用户输入0-59的数字用于倒计时。
var time = prompt("请你输入一个0-59的数字:");
var reuslt = time < 10 ? "0" + time : time;
alert(reuslt);
```

### 2.6 流程控制-条件语句

流程控制就是控制代码按照什么结构顺序执行。js中有三种流程控制结构：

+ **顺序结构**：默认代码的执行顺序，就是按照代码编写的顺序从上到下执行；
+ **分支结构**：根据不同的条件，执行不同的路径代码，从而得到不同的结果（多选一）。选择条件为真的语句执行；
+ **循环结构**：根据条件重复多次执行同样的代码，直到条件不满足时结束循环。

#### 2.6.1 if语句

if语句是根据单个条件判断是否执行代码的语句。条件成立，执行大括号内的代码，否则什么也不做。

```js
var flag = false;
if (flag) {
  //flag条件为true执行{内部内容}
  console.log("条件为true就执行");
}
```

if语句只执行满足条件的内容，如果想要执行不满足条件的内容，则用`if...else...`语句

```js
var m = 3;
if (m === 3) {
  console.log("满足条件时执行");
} else {
  console.log("不满足条件时执行");
}
```

案例：判断闰年

```js
//闰年条件,能被4整除且不能被100整除为闰年或者能被400整除的为闰年
var year = prompt("请你输入年份：");
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  alert("闰年");
} else {
  alert("平年");
}
```

如果要进行多个条件判断，则可通过连接多个if...else完成。

```js
var score = prompt("请输入成绩：");
if (score >= 90) {
  //满足score大于等于90执行
  alert("成绩A");
} else if (score >= 80) {
  //满足score大于等于80小于90执行
  alert("成绩B");
} else if (score >= 70) {
  //满足score大于等于70小于80执行
  alert("成绩C");
} else if (score >= 60) {
  //满足score大于等于60小于70执行
  alert("成绩D");
} else {
  alert("成绩不及格");
}
```

if...else可嵌套使用。嵌套if就是多层次逻辑判断。

```js
var m = 13;
if (m > 10) {
  if (m >= 20) {
    console.log("m大于等于20");
  } else {
    console.log("m大于10小于20");
  }
} else {
  console.log("m小于等于10");
}
```

> **温馨提示:**
> if总是找离它最近的同级else进行匹配。

#### 2.6.2 switch条件语句

多个if...else一起使用代码过多，可使用更简洁的switch语句代替。

switch与if的条件一般不同，switch的条件是**特定值**。特定值就是固定值，例如1，"张三"等，if的条件大部分是范围值，例如大于50。

switch与if执行效果也不一样，它会**直接跳到条件满足的语句执行**，而不会像if那样依次判断条件执行，因此**有时switch效率高于if**。

```js
var day = 3;
switch (day) {
 case 0:
   //day === 0时才满足条件
   console.log("星期一");
   break;
 case 1:
   console.log("星期二");
   break;
 case 2:
   console.log("星期三");
   break;
 case 3:
   console.log("星期四");
   break;
 case 4:
   console.log("星期五");
   break;
 defalut: 
   console.log("周末");
}
```

> **温馨提示:**
> **case**语句用于判断条件，条件满足则进入内部执行，**break**语句用于**跳出switch结构**，没有break语句只要满足一个条件，后面所有的逻辑语句都会执行，**default**表示其他条件，与else效果一致。

**缺少break的案例**

```js
var x = 2;
switch (x - 1) {
  case 0:
    console.log("x=1");
  case 1:
    console.log("x=2");
  case 2:
    console.log("x=3");
  default:
    console.log("其他");
}  //执行结果为"x=2，x=3，其他"都会打印
```

### 2.7 流程控制-循环语句

循环语句就是用于**重复执行某些的语句**。被重复执行的语句叫做**循环体**。

#### 2.7.1 for循环语句

for语句是循环命令，可指定循环的**起点**、**终点**和**终止条件**。

```js
for(初始化表达式；条件；迭代因子){
    //循环体
}
```

> **for执行顺序流程为**:
>
> 先执行初始化表达式，然后执行条件判断，条件成立执行循环体，然后执行迭代因子，这时第一次循环完成，
>
> 接下来就用变化的迭代因子再次执行条件判断，条件成立执行循环体，然后执行迭代因子，后续循环以此类推，
>
> 直到条件不满足时，结束循环。

for循环的括号中有三个表达式:

1. **初始化表达式(initialize)**，确定循环变量的初始值，只在循环中执行一次，用于**计数**。
2. **条件表达式(test)**，每次循环开始时，都要执行的条件，只有条件为真，才能继续循环。
3. **迭代因子(increment)**，每次循环最后执行的操作，通常用来**更新循环变量**。

```js
//从1打印到100
for (var i = 1; i <= 100; i++) {
   console.log(i);
}
```

**浏览器的断点调试(重要)**，打断点主要用于我们观察程序的执行过程，也是找出**程序bug**的方法。

![image-20260622233626411](./assets/image-20260622233626411.png)

for循环的三个表达式，可以省略任何一个，也可全省略，全部省略就是无限循环(死循环)。死循环会让浏览器卡死。

```js
//注意分号不能省略
for (;;) {
   console.log("死循环");
}
```

逻辑比较复杂时，就会使用**双重for循环**也叫循环嵌套。外层循环执行一次，里层循环执行全部。

```js
//打印五行五列星星
var str = "";
for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= 5; j++) {
    str += "★";
  }
  //换行
  str = str + "\n";
}
console.log(str);
```

案例:九九乘法表

```js
for (var i = 1; i <= 9; i++) {
  //换行
  document.write("<br/>");
  for (var j = 1; j <= i; j++) {
     sum = i * j;
     document.write("|", j, "*", i, "=", sum, "|", " ");
  }
}
```

#### 2.7.2 while循环

while（当...的时候）循环包含一个循环条件和一段代码块，只要条件为真，就不断循环执行代码。直到条件为假才结束循环。

```js
while(条件){
  //循环体
}
```

while可以看作是一种特殊的for循环。for需要的结构它其实都有。

```js
//打印1到100
//可以看出for是可以改为while循环的
var i = 1;  //相当于for循环的初始化表达式
while (i <= 100) { //相当于for循环的条件表达式
  console.log(i);
  i++; //相当于for循环的迭代因子
}
```

如果条件一直为true，则会无限循环，也就是死循环。

```js
while(true){
  console.log("无限循环");
}
```

while循环与for循环不同之处在于while可以做**比较复杂的条件判断**，for循环的条件一般只是数字，用于计数。

```js
var message = prompt("请输入你的名字：");
//while的判断条件为字符串
while (message !== "张三") {
  message = prompt("名字错误，请重新输入你的名字：");
}
alert("名字正确！");
```

#### 2.7.3 do while循环

do...while语句其实是while语句的一个变体。该循环会**先执行一次代码块**，然后对条件表达式进行判断，如果条件为真，就会重复执行循环体，否则退出循环。while不同之处是一开始就先对条件进行判断再执行代码块。

> do while的代码块至少会执行一次，while的代码块可能一次都不执行。

```js
//打印1到100，执行结果与while是一样的
//do while循环的
var i = 1;  //相当于for循环的初始化表达式
do { 
  console.log(i);
  i++; //相当于for循环的迭代因子
}while (i <= 100)  //条件表达式
```

do...while与while的不同,修改前面while的复杂条件案例就可看出区别。

```js
//do while的判断条件为字符串
do {
  var message = prompt("请输入你的名字："); //默认执行一次因此可省略前面的内容
} while (message !== "张三");
alert("名字正确！");
```

#### 2.7.4 break语句和continue语句

break语句和continue语句都具有**跳转作用**，可以让代码不按既有顺序执行。
break语句用于**跳出代码块**或**循环结束**，switch语句和for循环中都可使用。

```js
//如果i等于5，就直接结束循环
for (var i = 0; i < 10; i++) {
  if (i === 5) {
    //跳出循环
    break;
  }
  console.log(i);
} //运行结果 1，2，3，4
```

continue是**跳出单次循环**，它是立即终止本轮循环然后开始下一轮循环。

```js
//如果i等于5，就跳出单次循环，不结束循环,注意跳出的只是循环体内容，迭代因子i++还是会执行
for (var i = 0; i < 10; i++) {
  if (i === 5) {
    //跳出单次循环
    continue;
  }
  console.log(i);
} //运行结果 1，2，3，4，6，7，8，9

//求1-100之间，除了能被7整除之外的整数和
var sum = 0;
for (var i = 1; i <= 100; i++) {
  if (i % 7 == 0) {
    continue;
  }
  sum += i;
}
console.log(sum);//4315
```

综合案例：**简易ATM机**(该案例不考虑输入负数金额的问题)

```js
//简易ATM
var atmChoose = prompt(
  "请输入你要的操作：\n 1.存钱  \n 2.取钱 \n 3.显示余额 \n 4.退出"
);
var money = 0;

while (atmChoose != 4) {
  if (atmChoose == 1) {
    //存钱
    var saveMoney = prompt("请输入你要存入的金额：");
    money += parseFloat(saveMoney);
    alert("你当前的总金额是：" + money);
  } else if (atmChoose == 2) {
    //取钱
    var getMoney = prompt("请输入你要取出的金额：");
    while (getMoney > money) {
      getMoney = prompt("你的余额不足,请重新输入取钱金额:");
    }
    money -= parseFloat(getMoney);
    alert("你当前的总金额是：" + money);
  } else if (atmChoose == 3) {
    //显示余额
    alert("你当前的余额是：" + money);
  } else {
    atmChoose = prompt(
      "请输入你要的操作：\n 1.存钱  \n 2.取钱 \n 3.显示余额 \n 4.退出"
    );
    continue;
  }
  atmChoose = prompt(
    "请输入你要的操作：\n 1.存钱  \n 2.取钱 \n 3.显示余额 \n 4.退出"
  );
}
alert("你已退出ATM");
```

### 2.8 数组

**数组(Array)**是一组数据的**集合**，其中每个数据被称为**元素**。数组是**按次序排列**的一组值。每个值的位置(又被称为**下标**)都有编号(从0开始)，数组用方括号`[]`表示。

创建数组的方式有两种：

1. 使用new关键字创建数组；
2. 使用字面量创建数组。

```js
//new创建数组对象
var arr1 = new Array();

//字面量创建数组,[]就表示一个数组
var arr2 = []; //空数组
//数组的初始化
var arr3 = [1, 2, "ss", true]; //js数组数据类型可以为任意类型,每个数据由逗号分隔
```

#### 2.8.1 数组的元素访问

数组主要是利用**数组索引(下标)**来访问数组元素的，它是从0开始的。获取格式为`数组名[索引号]`。

```js
//创建数组直接赋值
var arr1 = ["张", "三", "aaa"];

//也可利用下标对空数组赋值
var arr2 = [];
arr2[0] = "张";
arr2[1] = "三";
arr2[2] = "aaa";

console.log(arr1); //['张', '三', 'aaa'],直接打印数组所有数据
console.log(arr2); //arr1与arr2内容一样

console.log(arr1[0]); //"张"

console.log(arr1[5]); //数组越界，值为undefined
```

数组内部可以放任何数据类型，包括数组本身，如果多个数组嵌套也被称为**多维数组**。

```js
var arr = [1, true, "张", [0, "三"]];

console.log(arr[3][1]); //打印结果为"三"
```

数组有**length属性**，它表示数组的长度。

```js
var arr = [1, "44", [4, true]];

console.log(arr.length); //3
//打印二维数组长度
console.log(arr[2].length); //2
```

**数组新增元素**

```js
//新增元素
//方法1:直接修改数组长度
var arr = ["a", "b", "b"];
arr.length = 5;
console.log(arr); //['a', 'b', 'b', 空属性 × 2],这种新增的元素为两个空数据，都为undefined

//方法2:通过修改数组的索引新增元素
var arr1 = ["a", "b", "b"];
arr1[3] = "c";
console.log(arr1); //追加元素在数组末尾 ['a', 'b', 'b', 'c']
arr1[2] = "d"; //如果索引号被占用，则会变成数组元素修改,新元素覆盖原本的元素
console.log(arr1); //['a', 'b', 'd', 'c']
```

案例：筛选数组元素

```js
//筛选数组元素,选出数组中大于10的元素
var arr = [2, 0, 6, 7, 3, 4, 0, 23, 0, 88, 0, 19];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > 10) {
    //利用新数组的长度作为索引，可直接追加元素
    newArr[newArr.length] = arr[i];
  }
}
console.log(newArr);
```

#### 2.8.2 数组遍历

数组的遍历，就是依次访问一遍数组所有数据，一般使用for循环或者while循环。

```js
var username = ["id", "IME", "ddak", "Frank"];
//for循环遍历,数组索引从0开始
for (var i = 0; i < username.length; i++) {
  console.log(username[i]);
}

//while循环遍历
var k = 0;
while (k < username.length) {
  console.log(username[k]);
  k++;
}
```

数组遍历案例

```js
//1.求数组的和与平均值
var arr1 = [2, 6, 1, 7, 4];
var sum = 0;
var average = 0;
for (var i = 0; i < arr1.length; i++) {
  sum += arr1[i];
}
average = sum / arr1.length;
console.log(sum, average); //20 4

//2.求数组中的最大值
var arr2 = [2, 5, 22, 42, 78, 23, 4, 8, 12, 4];
//最大值开始为数组的第一个元素,这样for就可以从数组索引1开始
var max = arr2[0];
for (var i = 1; i < arr2.length; i++) {
  if (arr2[i] > max) {
    max = arr2[i];
  }
}
console.log(max); //78

//3.数组转换为字符串
var arr3 = ["red", "blue", "green", "pink"];
//分隔符
var sep = "|";
var str = "";
for (var i = 0; i < arr3.length; i++) {
  str += arr3[i] + sep;
}
console.log(str);

//4.数组翻转元素
var arr4 = ["red", "blue", "green", "pink", "yellow"];
var newArr = [];
for (var i = arr4.length - 1; i >= 0; i--) {
  newArr[newArr.length] = arr4[i];
}
console.log(newArr);
```

**冒泡排序算法**，是把一系列数据按照一定顺序排列显示的算法。简单来说就是对数组元素进行从大到小或从小到大排序。

冒泡排序的原理是通过两层for循环，分别遍历数组所有元素**两两比较**，如果遇到顺序错误，就交换两个元素的位置。外层循环就是需要比较数组元素的个数，内层循环每个元素要与其他元素比较的次数，该次数是会慢慢减少的。

```js
//冒泡排序 从小到大
var arr = [5, 3, 4, 2, 1, 6];
//arr.length长度减一是因为最后只剩一个元素时不用比较，因为之前已经比较完成了
for (var i = 0; i <= arr.length - 1; i++) {
  //arr.length - i - 1是因为随着交换的元素越多，后续需要比较的元素次数会逐渐减少
  for (var j = 0; j <= arr.length - i - 1; j++) {
    //交换变量
    if (arr[j] > arr[j + 1]) {
      var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);//[1, 2, 3, 4, 5, 6]
```

扩展：**for...in遍历数组**，看上去与for循环类似，但实际上是一种特殊的循环。

```js
var arr = ["zhan", "jjs", "adk", "Frank"];

for (var i in arr) {
  console.log(arr[i]);
}
```

### 2.9 函数

**函数**就是封装一段可以被反复调用执行的**代码块**。通过此代码块可以实现大量**代码的复用**。

#### 2.9.1 函数的声明与调用

`function`命令声明的代码区域就是**函数**。最简单的函数声明与调用如下:

```js
//1.function声明函数的关键字，add是函数名，一般为动词。函数不调用自己是不执行的。
function add() {
  console.log("函数内部");
}
//2.函数调用，就是通过"函数名+()"进行调用，调用一次函数就执行一次
add(); //"函数内部"
add(); //"函数内部"
```

函数名也有**函数名提升**。js引擎将函数名视同为**变量名**，所以function声明函数时，整个函数声明也会像变量声明一样被提升到代码头部。

```js
add(); //"函数名提升"
function add() {
  console.log("函数名提升");
}
```

**函数的封装**是把一个或多个功能通过函数的方式封装起来，对外只提供一个简单的函数接口用于调用。

```js
//函数封装
//封装一个功能为计算1-100之间的累加和的函数
//1.声明函数
function getSum() {
  var sum = 0;
  for (var i = 1; i <= 100; i++) {
    sum += i;
  }
  console.log(sum);
}

//2.调用函数
getSum();
getSum();
```

其实函数还有一种声明方式，我们称之为函数表达式的方式，该方式声明的函数是**匿名函数**。

```js
//1.利用函数关键字自定义函数(命名函数)
function getSum() {
  console.log("函数有名称，是命名函数");
}
getSum();

//2.函数表达式，它是直接赋值给变量，没有名称因此被称为匿名函数
var fun = function () {
  console.log("函数表达式");
};
fun(); //调用方式跟命名函数一样,fun是变量名
```

> 通过函数表达式可以看出，js中的变量范围很广泛，**函数也是一种变量**。

#### 2.9.2 函数参数

之前的函数只能重复相同的代码，每次函数执行结果都相同，如果想要函数实现函数重复不同代码就需要传递**函数参数**。

函数参数相当于函数的外部数据，通过不同外部数据得到不同结果，这种外部数据就是**参数**。

**函数声明**部分的参数被称为**形参**，也就是形式上的参数，没有具体的值。**函数调用**时传递的参数被称为**实参**。也就是实际的参数。

形参与实参是一一对应的关系。形参是接受实参的。相当于一个不用声明的变量。

```js
function add(a, b) {
  //a与b是形参
  console.log(a + b);
}

add(1, 2); //1,2是实参，在函数调用时，程序会把实参传递给形参,类似a=1,b=2，然后再执行函数体内容。
```

参数的作用：在函数内部某些值不能固定，我们可以通过参数在调用函数时传递不同的值进去。

```js
//求任何两个数之间的和
function getSums(start, end) {
  var sum = 0;
  for (var i = start; i <= end; i++) {
    sum += i;
  }
  console.log(sum);
}

getSums(1, 100); //5050
getSums(1, 10); //55
```

**形参与实参个数匹配规则**

```js
function getSums(num1, num2) {
  console.log(num1 + num2);
}

//1.形参与实参个数一致，则正常输出结果
getSums(1, 100); //101

//2.实参个数大于形参的个数，正常输出结果。会取到形参的个数,多出的参数会无效。
getSums(1, 100, 2); //101

//3.形参个数大于实参的个数，输出结果错误，没有实参的形参会默认赋值为undefined
getSums(1); //NaN
```

#### 2.9.3 函数的返回值

有时如果需要将**函数内部数据或函数的结果返回给调用者**，则需要使用`return`语句返回值。

其运行原理就是当函数遇到return,就会把后面的结果返回给函数的调用者，相当于`函数名()=return的结果`。

```js
//求任意两个数的最大值的函数
function getMax(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

//两种接受函数结果的方式
console.log(getMax(23, 70)); //70
var max = getMax(33, 88);
console.log(max); //88
```

return后面不要添加任何代码，因为return就表示**函数结束**，后面的代码都不会执行，是无效的。return只能返回一个值，写多个值也只会返回最后写的值。没有return默认返回**undefined**。

```js
//1. return会终止函数
function add(num1, num2) {
  return num1 + num2;
  alert("aa"); //不会被执行
}
console.log(add(1, 2)); //3

//2. return一次只返回一个值
function fn(num1, num2) {
  return num1, num2;
}
console.log(fn(10, 20)); //20

//要返回多个值，则可返回数组或对象
function fn2(num1, num2) {
  return [num1, num2];
}
console.log(fn2(10, 20)); //[10, 20]

//3. 函数如果没有return，默认会返回一个undefined
function fn3(num1, num2) {
  num1 + num2;
}
console.log(fn3(10, 20)); //undeifed
```

#### 2.9.4 动态参数—arguments对象

当我们不确定有多少参数需要传递时，可使用`arguments`来获取实参。arguments实际上是当前函数的一个**内置对象**。所有函数都内置了该对象，arguments对象中存储了**传递过来的所有实参**。所谓**内置对象**，就是js内部编写好的对象，直接使用就行。

arguments是一种**伪数组**，它并不是真正意义上的数组，只是拥有部分数组特性。arguments拥有数组长度**length变量**，也可使用**索引号**访问内部数据，但它**不具有数组内置方法**，例如pop，push等。

```js
//argumens使用
function fn() {
  console.log(arguments);
  console.log(arguments.length); //3,5
  console.log(arguments[2]); //4,6
  //遍历所有参数
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

fn(1, 2, 4); //Arguments(3) [1, 2, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
fn(1, 2, 3, 5, 6);
```

案例：**求任意个数的最大值**

```js
function getMax() {
  var max = arguments[0];
  for (var i = 1; i <= arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

console.log(getMax(1, 2, 3)); //3
console.log(getMax(1, 22, 45, 8)); //45
console.log(getMax(11, 23, 23, 99, 108, 2, 3)); //108
```

除了使用arguments外，也可通过传递**数组参数**，从而实现传递**数据数量动态**。

案例：**翻转任意数组**

```js
//翻转任意数组
function reverse(arr) {
  var newArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArr[newArr.length] = arr[i];
  }
  return newArr;
}

var arr1 = reverse([1, 2, 3, 6, 9]);
var arr2 = reverse(["red", "yellow", "green"]);
console.log(arr1); // [9, 6, 3, 2, 1]
console.log(arr2); //['green', 'yellow', 'red']
```

因为每个函数都是独立的代码块，如果需要完成复杂的功能，就需要**函数相互调用**的情况。也就是一个函数调用另外一个函数。

```js
//输入年份，判断2月份的天数
function backDay() {
  var year = prompt("请输入年份：");
  if (isRunYear(year)) {
    alert("是闰年，2月份有29天");
  } else {
    alert("是平年，2月份有28天");
  }
}

backDay(); //函数可以运行是因为下面的函数声明被提升了
//判断闰年的函数
function isRunYear(year) {
  var flag = false;
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    flag = true; //是闰年返回true
  }
  return flag;
}
```

除了上变自定义函数外，js也有一些**内置函数**，可提供给我们直接调用,一般内置函数都会在内置对象或构造函数中，后续会说明。

#### 2.9.5 立即执行函数(重要)

所谓立即执行函数，不需要调用的，函数立马就能直接执行函数。

立即执行函数最大的作用就是**独立创建了一个作用域**，里面所有的变量都是局部变量（函数作用域）。**避免命名冲突**的情况。这种写法最常见的就是写在外部js文件最开始，这样就能保证每个js引入都不会有命名冲突。

```js
//普通函数
function fn() {
  console.log("普通函数");
}

fn(); //需要调用才能执行

//1.立即执行函数的两种写法，本质是编写好函数后直接使用()调用,立即执行函数必须以;结尾
//推荐第一种
(function () {
  console.log("立即执行函数1");
})();

(function () {
  console.log("立即执行函数2");
}());

//2.立即执行函数也可以传递参数
(function (a, b) {
  console.log(a + b);
  var num = 10; //局部变量,不会影响
})(1, 2);

//3.立即执行函数也可命名，但其不能单独调用，因为不在其作用域中
(function fn2(a, b) {
  console.log(a + b);
  var num = 20; //局部变量,不会影响
})(3, 4);
//不能调用
// fn2(5, 6);
```

### 2.10 作用域

#### 2.10.1 作用域的定义

**作用域**指的是限定代码名称(例如变量名)**可用性的代码范围**。作用域作用是可以提高程序逻辑的局部性，增强程序的可靠性，**减少命名冲突**。

**命名冲突**指的是在同一作用域下命名**同名的变量或函数**就会发生冲突，后面的会覆盖前面的命名。

JS中作用域**在ES6之前**主要有两种：

+ **全局作用域**：Html中的**整个script标签范围**或者是**一个单独的js文件**。
+ **局部作用域（函数作用域）**：在函数内部就是局部作用域，该名称只在函数内部起效果和作用。

```js
//全局作用域
var num = 10;
var num = 100; //命名冲突，后命名的num会覆盖前面的num

function fn() {
  //局部作用域,命名同名num不会有冲突
  var num = 20;
  console.log(num); //20
}
fn();
//局部作用域的变量不生效
console.log(num); //100
```

> **注意：**
>
> js在ES6后会新增**块级作用域**的。所谓块级作用域，就是{}包含的代码就是块级作用域。例如在java中：
>
> if(x){ 
>
>   int num = 10;//该num变量就是在块级作用域定义的，外面是不能使用的
>
> }
>
> print(num); //会报错，num是块级作用域内部的

#### 2.10.2 变量的作用域

在js中，根据作用域的不同，变量也可以分为两种：

+ **全局变量**：在全局作用域下声明的变量或在**函数内部没有声明直接赋值的变量**，在全局作用域中都可使用。
+ **局部变量**：在局部作用域下声明的变量或**函数的形参**，**只能在声明的函数内部**中使用

```js
//全局变量
var num = 10;

function fn() {
  console.log(num); //可在局部作用域中打印全局变量
}

//形参aru也只能在函数内部使用，也是局部变量
function fn1(aru) {
  var num1 = 20;
  console.log(num1); //20
  //在函数内部没有声明直接赋值的变量也是全局变量，不建议使用
  num2 = 30;
}

fn();
fn1();
//局部变量失效
console.log(num2); //30
console.log(aru); //报错，局部变量没声明
```

从执行效率上看，全局变量只有在浏览器关闭时才会销毁，比较占内存。反之局部变量则是**当其所在的代码被执行时才初始化，代码执行完成后就会被销毁**，因此更节省内存空间。

#### 2.10.3 作用域链

我们知道只要是代码就有其作用域。函数内部就是局部作用域。如果**函数中嵌套函数**，那么在该局部作用域中会有新的局部作用域，又根据内部函数能够访问外部函数变量的原则，**用链式查找决定哪些数据能被内部函数访问**就被称为**作用域链**。

简单来说，就是**内部函数访问外部数据**，采用**就近原则**一层层往外查找。

```js
var num = 10;

function fn() {
  var num = 20;
  function fn2() {
    console.log(num); //20,链式查找就是就近查找，一层层往外查找
  }
  fn2();
}
fn();
```

作用域链案例

```js
var a = 1;
function fn1() {
  var a = 2;
  var b = "22";
  fn2();
  function fn2() {
    var a = 3;
    //这里函数先使用后声明，涉及了预解析，函数提升的内容
    fn3();
    function fn3() {
      var a = 4;
      console.log(a); //4
      console.log(b); //'22'
    }
  }
}
fn1();
```

### 2.11 预解析

JS代码是由浏览器中的JavaScript解析器(js引擎)来执行的。JavaScript解析器在运行js代码的时候主要分为两步：

1. **预解析**：js引擎会把js里面所有的**var变量声明**和**function函数声明**提升到**当前作用域的最前面**，该过程就叫**变量提升**和**函数提升**。
2. **代码执行**：按照代码书写地的顺序从上往下执行。

预解析分为变量提升和函数提升：

+ **变量提升**就是把所有的变量声明提升到当前作用域最前面，只提升变量声明不提升赋值。

  ```js
  console.log(a); //undefined
  var a = 10;
  
  fun(); //会报错，函数表达式也是一种变量
  var fun = function () {
    console.log(22);
  };
  ```

  预解析**变量提升**后代码如下：

  ```js
  var a;
  console.log(a); //undefined
  a = 10;
  
  var fun;
  fun(); //会报错
  fun = function () {
    console.log(22);
  };
  ```

+ **函数提升**就是把所有的函数声明提升到当前作用域最前面，只提升函数声明不提升函数调用。

  ```js
  fun(); //不会报错
  function fun() {
    console.log(22);
  }
  ```

  预解析**函数提升**后代码如下：

  ```js
  function fun() {
    console.log(22);
  }
  fun(); //不会报错
  ```

预解析案例

```js
var num = 10;
fun();
function fun() {
  console.log(num); //undefined,预解析＋作用域就近原则
  var num = 20;
}

fn1();

console.log(c);//9
console.log(b);//9
console.log(a);//报错
function fn1() {
  //注意是a=b=c=9不是var a=9,b=9,c=9;
  //它相当于 var a=9;b=9;c=9; //注意每个都是分号
  var a = (b = c = 9);
  console.log(a); //9
  console.log(b); //9
  console.log(c); //9
}
```

预解析后的真正的代码

```js
var num;
function fun() {
  var num;
  console.log(num); //undefined,预解析＋作用域就近原则
  num = 20;
}
num = 10;
fun();

function fn1() {
  var a;
  a = 9;
  b = 9;//b,c为全局变量
  c = 9;
  console.log(a);
  console.log(b);
  console.log(c);
}
fn1();
console.log(c);
console.log(b);
console.log(a); //报错
```

### 2.12 对象(重要)

#### 2.12.1 对象的概念

`对象(object)`是js语言的核心概念，也是**最重要的数据类型**。 对象就是一组`"键值对"(key-value)`的集合，是一种**无序的相关属性与方法的集合**。所有**复杂数据类型**都是对象，例如之前的字符串、数组等都是**对象类型**。在现实生活中对象就是一个**具体的事物**。

对象由属性和方法组成：

+ **属性**：描述对象的特征，在对象中用属性（也就是**变量**）来表示（常用名词）；
+ **方法**：描述对象的行为，在对象中用方法（也就是**函数**）来表示（常用动词）。

属性、变量、函数、方法的区别：

+ 变量：单独声明赋值，单独存在；
+ 属性：对象里面的变量，不用声明，用来描述对象的特征，必须使用`对象.属性名`才能使用；
+ 函数：单独存在，通过函数名就可直接使用；
+ 方法：对象里面的函数，不需要声明。使用`对象.方法名（）`方式调用，方法用于描述对象的行为与功能。

> **思考：**
>
> 为什么要使用对象？
>
> 在js中保存一个值，使用**变量**就可以。保存多个值，使用**数组**就可以。但如果要保存一个人的完整信息，是否可以使用变量或数组？
>
> 首先一个人有很多信息，也就是多个值，变量就不行。而如果使用数组保存，效果如下
>
> var person =['张三'，'男'，128，154]，我们会发现很多信息表达很不清晰，我们无法区分128与154哪个是身高与体重。
>
> 而使用对象就能完美解决上述问题，让结构更清晰。
>
> var person ={
>
>   name:'张三'，
>
>   sex:'男'，
>
>   体重:128，
>
>   身高：154；
>
> }

最简单的对象如下：

```js
var user = {
  //name就是键名,"zhang"就是对应的值
  name: "zhang"
};
```

如果属性的值还是一个**对象**，也就是对象嵌套，这种就会形成**链式引用**。

```js
var user = {
  name: "aa",
  age: 12,
  pp: [1, 5],
  container: {
    flag: true,
    front: "前端"
  },
  add: function () {
    console.log("aa");
  }
};
//链式调用
console.log(user.container.front); //"前端"
```

#### 2.12.2 对象的创建

对象的创建主要有三种方式:

一、**字面量创建对象**，也就是`{}`创建,属性使用**键值对**方式，用`：`分开，多个属性间用`，`分开。对象的每一个键名又被称为**属性(property)**，它的键值就是属性值可以是**任何数据类型**。
如果一个属性的值为**函数**，通常把该属性称为**方法**，它可以像函数那样被调用。

```js
var obj = {}; //空对象
var user = {
  //name就是键名,"zhang"就是对应的值
  name: "zhang",
  age: 19,
  sayHi: function () {
    console.log("hi");
  },
  //方法
  getName: function (name) {
    return name;
  }
};
//属性的调用两种方式,使用.和[]
console.log(user.name); //"zhang"
console.log(user["age"]); //19,属性名必须有引号
//方法的调用
user.sayHi(); //"hi"
//方法调用
console.log(user.getName("张三")); //"张三"
```

二、**使用`new Object`创建对象**，跟之前的`new Array`很类似。使用`=`赋值方法添加对象属性与方法，用每个属性与方法`；`分隔开。

```js
var obj = new Object(); //创建一个空对象
//对象属性赋值
obj.uname = "李四";
obj.age = 24;
obj.sex = "男";
obj.sayHi = function () {
  console.log("hello");
};

//调用
console.log(obj.uname);
console.log(obj["age"]);
obj.sayHi();
```

三、**使用构造函数的方法创建对象**。下面具体说明。

#### 2.12.3 构造函数（重要）

**使用构造函数的方法创建对象**，因为我们一次只能创建一个对象，里面很多的属性与方法都是大量相同的。如果要创建多个，就可以利用函数的方式封装这些重复的代码，我们就把这个函数称为**构造函数**。

构造函数中封装的不是普通代码，而是对象中抽取出来的属性与方法。因此它是一种特殊的函数，主要就是**用于初始化对象**。它总是和`new运算符`一起使用。它的本质很**java中的类**很像。

```js
//构造函数名的首字母必须大写
function Star(uname, age, sex) {
  //构造函数中属性前面必须使用this，代表当前对象
  this.name = uname;
  this.age = age;
  this.sex = sex;
  //构造函数不需要return就能返回结果
  //封装方法
  this.sing = function (sang) {
    console.log("唱的歌曲为" + sang);
  };
}

//使用构造函数实例化对象
var ldh = new Star("刘德华", 18, "男");
console.log(typeof ldh); //object,返回的是对象
console.log(ldh.name); //'刘德华'
console.log(ldh["age"]); //18
ldh.sing("冰雨"); //唱的歌曲为冰雨

//再次创建对象
var zxy = new Star("张学友", 19, "男");
console.log(zxy);
zxy.sing("hhh");
```

**构造函数与创建对象的关系**：

+ 构造函数，抽取的对象的公共部分，封装到函数里，它泛指某一大类对象（class）。例如Star()；
+ 创建对象，特指某一个对象，通过new关键字创建对象的过程我们称为对象实例化。例如new Star();

**new关键字的执行过程**：

1. 构造函数遇到new后，首先会在内存中创建一个空对象；
2. this关键字都会指向该空对象；
3. 执行构造函数中的代码，给空对象添加属性与方法；
4. 返回这个对象(所有不需要return)。

#### 2.12.4 遍历对象

因为对象中的**属性是无序的**，传统的for循环无法遍历，这时就需要使用`for...in`语句来遍历对象。它是专门用于遍历对象的。

```js
var obj = {
  name: "aaa",
  age: 18,
  sex: "男",
  sayHi: function () {
    console.log("hi");
  }
};

//for in遍历对象，key就是存放遍历的属性变量，通常写为key或k方便理解
for (key in obj) {
  console.log(key); //属性名name、age、sex,方法名为sayHi
  console.log(obj[key]); //属性值aaa、18、男，
  //一般不用来遍历方法，遍历方法的属性值就是该方法的内容ƒ () {console.log("hi");}
}
```

### 2.13 内置对象

js中对象主要分为3种，**自定义对象**、**内置对象**以及**浏览器对象**。其中自定义对象就是**自己创建的对象**，内置对象是**JS内部自带的对象**。前两个对象都是JS的内容，属于ECMAScript；第三个浏览器对象属于浏览器的，是JS独有的，后续会在JS API中讲解。

内置对象就是JS内部定义的对象，这些对象供开发者使用，并提供了一些**常用的**或是最基本属性与方法。它最大的优点就是帮助我们快速开发。

JS中常用的内置对象：Math、Date、Array、String等。

#### 2.13.1 查阅文档

内置对象有很多，其中包含的属性方法更多，因此完全记住是不现实的。因此学会查阅文档方法，才能帮助我们更好的学习内置对象。

通常我们查阅的文档主要是**MDN**[https://developer.mozilla.org/zh-CN/]网站和**W3C**[https://www.w3school.com.cn/]网站的文档。下面我们以MDN网站为例，其主要步骤为：

1. 先搜索要查阅的对象，例如以Math对象为例，现在搜索栏搜索Math对象就行；
2. 搜索到方法页面后，如果是其他语言就先选择中文；

如果要查阅学习对象中的属性其步骤为以`Math.PI`为例：

1. 先查阅该属性的主要功能：**`Math.PI`**为静态数据属性表示圆的周长与直径的比例；
2. 再查阅该属性的值以及特性：其值约为 3.14159；
3. 最后编写demo进行测试，也可查看学习文档的demo。

如果要查阅学习对象中的方法其步骤为以`Math.max()`为例：

1. 先查阅该方法的主要功能：该函数返回一组数中的最大值；
2. 再查阅参数的意义与类型：0个或多个数字，将在其中选择，并返回最大的值。
3. 然后查阅函数的返回值：返回给定数值中最大的数。如果任一参数不能转换为数值，则返回NaN。如果没有提供参数，返回-Infinity。
4. 最后编写demo进行测试，也可查看学习文档的demo。

#### 2.13.2 Math对象

Math对象是数学对象，它提供了各种**数学功能**。它是一个**内置静态对象**而不是一个函数对象，也就是不是构造函数不用使用new。

属性**PI**,圆周率值

```js
//圆周率
console.log(Math.PI); //3.141592653589793
```

**max与min函数**，max返回参数最大值，min返回参数最小值，如果参数为空，min返回`infinity`，max返回`-infinity`

```js
console.log(Math.max(2, -1, 5)); //5
console.log(Math.min(2, -1, 5)); //-1
//没有参数返回值
console.log(Math.max()); //-infinity，负无穷大
console.log(Math.min()); //infinity 正无穷

//有字符串时返回值,数字字符串正常返回，非数字则为NaN
console.log(Math.max(2, -1, "5")); //5
console.log(Math.min(2, -1, "5")); //-1

console.log(Math.max(2, "hi", "5")); //NaN
console.log(Math.min(2, "hi", "5")); //NaN
```

案例:**封装自己的Math对象**，理解Math对象的原理

```js
var myMath = {
  PI: 3.141592653,
  max: function () {
    if (arguments.length === 0) {
      return -Infinity;
    }
    var max = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      if (!parseFloat(arguments[i]) || !parseFloat(max)) {
        return NaN;
      }
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
  },
  min: function () {
    if (arguments.length === 0) {
      return -Infinity;
    }
    var min = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      if (!parseFloat(arguments[i]) || !parseFloat(min)) {
        return NaN;
      }
      if (arguments[i] < min) {
        min = arguments[i];
      }
    }
    return min;
  }
};

//对象属性方法调用
console.log(myMath.PI);
console.log(myMath.max("aa", 1, 2));
console.log(myMath.max(1, 1, "aa"));
console.log(myMath.max(12, -1, "2"));
console.log(myMath.max());

console.log(myMath.min(12, -1, "2")); //-1
```

**abs函数**，返回参数绝对值，也就是负数变正数

```js
console.log(Math.abs(1)); //1
console.log(Math.abs(-1)); //1
//特殊情况
console.log(Math.abs("-1")); //1
console.log(Math.abs("hi")); //NaN
console.log(Math.abs()); //NaN
```

**取整函数**：

+ **floor函数**：返回**小于**参数值的**最大整数**，也就是**向下取整**；
+ **ceil函数**：返回**大于**参数值的**最小整数**。也就是**向上取整**；
+ **round函数**：四舍五入版，就近取整，主要1.5与-1.5。

```js
//向下取整，往最小值取 floor是地板的意思
console.log(Math.floor(3.2)); //3
console.log(Math.floor(-3.2)); //-4

//向下取整，往最大值取 ceil是天花板的意思
console.log(Math.ceil(3.2)); //4
console.log(Math.ceil(-3.2)); //-3

//四舍五入，.5很特殊，它往大的取，1.5取2，-1.5取-1
console.log(Math.round(1.2)); //1
console.log(Math.round(2.5)); //3
console.log(Math.round(-1.1)); //-1
console.log(Math.round(-1.5)); //-1,特殊情况
console.log(Math.round(-1.51)); //-2

console.log(Math.round("-1.51")); //-2
console.log(Math.round()); //NaN
console.log(Math.floor("aaa")); //NaN
```

**random函数（重要）**，返回0到1之间的一个**伪随机数**，返回随机的浮点数，**范围为[0，1)**，可等于0，但一定小于1。该函数特别常用。

```js
console.log(Math.random()); //0.3334699
```

生成任意范围的随机数函数

```js
//1. 获得两个数之间的随机整数，不包含两个数
function getRandomArbitrary(min, max) {
  //(最大值-最小值)*随机数=0～最小值之间的随机数+最小值=最小值～最大值之间的数
  var r = Math.random() * (max - min) + min;
  //向下取整，怕超过最大值
  r = Math.floor(r);
  return r;
}
//2 获得两个数之间的随机整数，并且包含两个数
function getRandom(min, max) {
  //(最大值-最小值+1)*随机数=1～最小值之间的随机数+最小值=最小值～最大值之间的数(包含最大值)
  var r = Math.random() * (max - min + 1) + min;
  r = Math.floor(r);
  return r;
}

//生产[1，20）范围的随机整数
console.log(getRandomArbitrary(1, 20)); //16，可以得到1但得不到20
console.log(getRandom(1, 20)); //16，1和20都可以得到

//随机点名
var arr = ["张三", "aa", "lady", "李四", "安安"];
console.log(arr[getRandom(0, arr.length - 1)]);
```

案例：猜数字游戏

```js
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var random = getRandom(1, 10);
while (true) {
  var num = prompt("你猜数字，请输入1-10范围的数字：");
  console.log(num);
  if (num > random) {
    alert("数字大了");
  } else if (num < random) {
    alert("数字小了");
  } else {
    alert("bingo");
    break; //退出循环
  }
}
```

#### 2.13.3 Date对象

Date对象是**专门处理日期与时间的对象**。它是一个**构造函数**，因此必须使用new来创建日期对象实例。

```js
//1. 没有参数就是返回系统当前时间的date对象
var date = new Date();
console.log(date); //Sat Jun 27 2026 23:05:19 GMT+0800 (中国标准时间)

//2.有参数，参数有两种写法，
// 一是数字型，注意数字型的月份默认比实际小一个月
var date1 = new Date(2019, 5, 7); //是2019年6月7日00：00：00
console.log(date1); //Fri Jun 07 2019 00:00:00 GMT+0800 (中国标准时间)

var date2 = new Date(2019, 5, 7, 12, 34, 24); //是2019年6月7日12：34：24
console.log(date2); //Fri Jun 07 2019 12:34:24 GMT+0800 (中国标准时间)
// 二是字符串型,常用，这种月份不会出错
var date3 = new Date("2019-5-7 12:34:24"); //是2019年5月7日12：34：24
console.log(date3); //Tue May 07 2019 12:34:24 GMT+0800 (中国标准时间)

var date4 = new Date("2019/5/7 8:8:8"); //是2019年5月7日12：34：24
console.log(date4); //Tue May 07 2019 08:08:08 GMT+0800 (中国标准时间)
```

**日期对象的方法**,Date常用的获取时间的方法如下：

```js
var d = new Date(); //当前实际对象

//获取年份
d.getFullYear(); //2020
//获取月份，0表示1月，11表示12月 这就是为什么之前输入数字参数月份少1的原因
d.getMonth(); //4
//获取日期，从1号开始
d.getDate(); //6
//获取星期，星期一是1...星期六是6但星期天是0
d.getDay(); //3

//获取小时，0-23
d.getHours(); //15
//获取分钟
d.getMinutes(); //20
//获取秒
d.getSeconds(); //21

//特殊的方法
//获取毫秒，不常用
d.getMilliseconds();

//返回距离1900年的年数
d.getYear(); //120年
```

案例：利用日期对象方法对日期进行格式化

```js
var date = new Date();

//格式化日期
function myFormatDate(date) {
  //必须星期日开始
  var arr = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
  var year = date.getFullYear();
  var month = date.getMonth() + 1; //月份必须加1
  var dates = date.getDate();
  var day = date.getDay();
  return year + "年" + month + "月" + dates + "日" + " " + arr[day];
}


//格式化时间
function myFormatTime(date) {
  var h = date.getHours();
  //补零
  h = h > 10 ? h : "0" + h;
  var m = date.getMinutes();
  m = m > 10 ? m : "0" + m;
  var s = date.getSeconds();
  s = s > 10 ? s : "0" + s;
  return h + ":" + m + ":" + s;
}

console.log(myFormatDate(date)); //2026年6月27日 星期六
console.log(myFormatTime(date)); //23:30:02
```

**时间戳**是指以格林威治时间**1970年1月1日00:00:00**(北京时间**1970年1月1日08:00:00**)起到某个时间点间隔的**总毫秒数**。

它以**1970年1月1日00:00:00**作为时间的零点，可以表示的时间范围是**前后各1亿天**。(单位为毫秒)

> 格林威治时间的来历，其实就是在20世纪70年代初出现了Unix操作系统，Unix设置1970年1月1日0点为时间纪元。js语言也遵循了这一规则。北京时间不同的原因是有时区不同。

```js
//时间戳，总的毫秒数,该值具有唯一性
//方式一，利用时间对象转化为时间戳
var date = new Date();
console.log(date.valueOf()); //1782574419474
console.log(date.getTime()); //1782574419474

//方式二，简单写法，比较常用，new之前加+号
var date1 = +new Date();
console.log(date1); //1782574419474

//方式三，H5新增的方法
console.log(Date.now()); //1782574419474

//时间戳转化为日期对象
var d = new Date(date1); //根据时间戳创建时间对象
console.log(d); //Sat Jun 27 2026 23:37:51 GMT+0800 (中国标准时间)
```

由于拥有时差，因此在北京的系统正确初始时间为`1970-1-1 08:00:00`。

```js
//格林时间
var time1 = +new Date("1970-1-1 00:00:00");
//北京时间
var time2 = +new Date("1970-1-1 08:00:00");
//当前时间
var time3 = Date.now();

console.log(time1); //-28800000
console.log(time2); //0
console.log(time3); //1782575863007
console.log(time3 - time2); //1782575863007，正确的时间戳应该减去北京时间
```

**案例:倒计时**，需要使用时间戳计算时间差

```js
//倒计时
function countDown(time) {
  var nowTime = +new Date(); //当前时间毫秒数
  var inputTime = +new Date(time); //用户输入时间毫秒数
  var times = (inputTime - nowTime) / 1000; //剩余时间总秒数(1秒=1000毫秒)

  var d = parseInt(times / 60 / 60 / 24); //天
  d = d > 10 ? d : "0" + d;
  var h = parseInt((times / 60 / 60) % 24); //小时
  h = h > 10 ? h : "0" + h;
  var m = parseInt((times / 60) % 60); //分钟
  m = m > 10 ? m : "0" + m;
  var s = parseInt(times % 60); //秒
  s = s > 10 ? s : "0" + s;
  return d + "天" + h + "时" + m + "分" + s + "秒";
}

console.log(countDown("2026/6/29 12:30:30"));
```

**案例:计算获得本年度剩余天数**

```js
function leftDays() {
  var today = new Date();
  //结束时间是12月31号23:59:59:999ms
  var endYear = new Date(today.getFullYear(), 11, 31, 23, 59, 59, 999);
  //转化参数
  var msPerDay = 24 * 60 * 60 * 1000;
  var result = Math.round((endYear.getTime() - today.getTime()) / msPerDay);
  return result;
}

console.log(leftDays());
```

#### 2.13.4 字符串对象 String

字符串对象里的**所有方法都不会修改字符串本身**（字符串的不可变性），操作完成会返回一个新字符串。

##### 2.13.4.1 基本包装类型

```js
var str = "pink";
console.log(str.length); //4
```

上述案例中，str是字符串类型，它是一个简单数据类型，按照正常逻辑，简单数据类型不是对象，它不应该会有**length属性或方法**。但结果却是它拥有。其实它就是一种**基本包装类型**。

所谓基本包装类型，就是**把简单数据类型包装为一个复杂数据类型（对象）**，让其拥有属性与方法。相当于js内部帮我们做了下列操作：

```js
//创建一个临时对象String类型，内容是简单数据的内容
var temp = new String("pink"); 
//赋值替换
str = temp;
//销毁临时变量
temp = null;
```

> 除了String外，其实还有两个引用类型分别是Number与Boolean。
>
> String对象是构造函数。另外两个也是。

##### 2.13.4.2 字符串的不可变性

该特性指的是在JS中用户创建的字符串值一般是不改变的，有时虽然看上去是改变的内容，实际上只是地址变了，在内存中新开辟了一个内容空间。下边的案例看着像是字符串内容修改了，**实际上andy与tom都有单独的内存空间**，变量的赋值操作只是把**内存空间的地址**改变了。

> 简单来说，js中的string类型实际是引用类型，也就是变量存储空间地址而不是值。
>
> 注意：只有string类型有该特性，数字与Boolean类型是直接替换值内容。

```js
//字符串不可变性
var str = "andy";
console.log(str); //andy
str = "tom";
console.log(str); //tom
```

根据该特性，我们一般不要大量的进行字符串赋值或拼接，否则内存空间很容易爆满卡顿。

```js
//卡顿案例
var str = "a";
for (var i = 1; i < 1000000; i++) {
  str += i;
}
console.log(str)
```

##### 2.13.4.3 charAt方法（根据位置返回字符）

根据位置获取字符的方法有三种：

1. `charAt`方法返回指定位置的字符，参数索引是从**0**开始编号;
2. `chatCodeAt`方法返回指定位置的字符的ASCII码，参数索引是从**0**开始编号;
3. `str[index]`获取指定位置初字符，H5后新增的。

```js
var s = new String("zhangshang");
console.log(s.charAt(5)); //s
console.log(s.charCodeAt(5)); //115,ASCII码常用于判断用户按了哪一个按键
console.log(s[5]); //s
//打印最后一个字符
console.log(s.charAt(s.length - 1)); //g

//查询负数位置或者超过字符串长度都会返回空字符串。
console.log(s.charAt(-2)); //""
console.log(s.charAt(12)); // ""

//遍历所有字符
for (var i = 0; i < s.length; i++) {
  console.log(s.charAt(i));
}
```

思路：**判断一个对象是否拥有某个属性的方法**

```js
var o = {
  age: 0
};

//该方法不能判断属性为0或者字符串为空的情况,必须为undefined才是没有该属性
if (o["age"]) {
  console.log("o拥有age属性");
} else {
  console.log("o没有age属性");
}

//优化,该方法依然无法判断属性值为undefined的情况，但其他情况都已解决
if (o["age"] !== undefined) {
  console.log("o拥有age属性");
} else {
  console.log("o没有age属性");
}
```

经典案例，返回一个字符串中出现最多的字符并统计其次数

```js
var str = "abcoefoxyozpppzzzopp";
//1.空对象保存查询出的字符
var o = {};

for (var i = 0; i < str.length; i++) {
  var chars = str.charAt(i);
  //判断对象中是否存在查询出的字符
  if (o[chars] !== undefined) {
    //存在就加一次
    o[chars]++;
  } else {
    o[chars] = 1;
  }
}
console.log(o);

//2.遍历对象
var max = 0;
//保存属性,使用数组保存多个同数最大值
var char = [];
for (var k in o) {
  if (o[k] >= max) {
    //最大数相同
    if (o[k] === max) {
      char.push(k);
    } else {
      //重置数组
      char = [];
      char[0] = k;
      max = o[k];
    }
  }
}
console.log("最多的字符是：" + char + "出现次数为：" + max);
```

##### 2.13.4.4 concat方法

concat方法主要用于多个字符串拼接，它会返回一个新字符串，不会改变原字符串。

```js
var s1 = "hello";
var s2 = "world";
var s3 = "!";
var num = 100;
var result1 = s1.concat(s2);
console.log(result1); //helloworld
//多个字符串拼接，遇到数字会先转化为字符串再拼接
var result2 = s1.concat(s2, s3, num);
console.log(result2); //hellowrold!100
```

要实现字符串拼接，还有更简单的方式,就是使用`+`符号进行拼接。(常用)

```js
var s1 = "hello";
console.log(s1 + "world" + "!" + 100); //hellowrold!100
```

> **concat与+的区别:**
>
> concat不管是什么类型都是先转化为字符串再拼接;
>
> 而+符号是重载了数字加法原本的运算，因此两个数字相加会直接求和，数字(字符)与字符相加会先把数字转化为字符串然后再进行拼接。

```js
var one = 1;
var two = 2;
var three = "3";

console.log("".concat(one, two, three)); //123
console.log(one + two + three); //33
```

##### 2.13.4.5 substring方法与slice方法

`substring`方法用于**从原字符串中截取子字符串并返回**，不改变原字符串。它的第一个参数表示子字符串的**开始截取位置**，第二个参数表示**结束位置(返回结果不包含该位置)**。不接受负数。

`slice`方法用于**从原字符串中截取子字符串并返回**，不改变原字符串。它的第一个参数表示子字符串的**开始截取位置**，第二个参数表示**结束位置(返回结果不包含该位置)**。接受负数，表示从反方向开始，具体值为`index+ array.length`。

```js
var str = "zhangshang";
console.log(str.substring(0, 2)); //zh，注意不包含a

//省略第二个参数，会直接从开始位置截取到结束
console.log(str.substring(2)); //angshang

//如果第一个参数大于第二个参数，substring会自动更换两个参数位置
console.log(str.substring(9, 2) === str.substring(2, 9)); //true

//如果参数为负数，substring会自动将负数变为0
console.log(str.substring(-3)); //zhangshang

console.log(str.substring(2, -3)); //zh

//slice，接受负数，负数表示从反方向开始，也就是start + array.length=7
console.log(str.slice(-3)); //ang
//第二次参数为负数，表示结束位置从反方向开始，也就是end + array.length=7
console.log(str.slice(2, -3)); //angsh
```

##### 2.13.4.6 substr方法

`substr`方法也用于**从原字符串中取出字符串并返回**，不改变原字符串，这点跟substring一样。
两者不同之处为substr第一个参数是**子字符串的开始位置(从0开始)**，第二个参数是**子字符串的长度**。新版js已经弃用。

```js
var str = "zhangshang";
console.log(str.substr(2, 7)); //angshan

//省略第二个参数，效果跟substring一样
console.log(str.substr(2)); //angshang

//第一个参数为负数，则表示倒数(反方向)计算(从1开始)初始字符位置。如果第二个参数是负数，则自动转为0，因此会返回空字符串。

console.log(str.substr(-7)); //ngshang
console.log(str.substr(4, -2)); //""
```

##### 2.13.4.7 indexOf方法(根据字符返回位置)

`indexOf`方法用于确定一个字符串在另一个字符串中**第一次出现的位置(查询功能)**，返回结果是第一次匹配的位置。如果返回`-1`表示不匹配。

`lastIndexOf`方法用于确定一个字符串在另一个字符串中**最后出现的位置(从后往前)**，返回结果也是第一次匹配的位置。如果返回`-1`表示不匹配。

```js
var str = "helloworld!";
//查询的内容可以是单个字符也可以是多个
console.log(str.indexOf("l")); //2
console.log(str.lastIndexOf("l")); //8
console.log(str.indexOf("esl")); //-1

//indexOf方法还有第二个参数，表示从该位置开始向后匹配,包含该位置
console.log(str.indexOf("l", 9)); //-1
console.log(str.indexOf("l", 8)); //8

//indexOf主要还是用于查询，使用结果进行判断
var name = "张三、李四、王五";
if (name.indexOf("李") > -1) {
  console.log("有姓李的");
} else {
  console.log("没有姓李的");
}

//案例：返回所有o出现的位置以及次数
var str1 = "abcoefoxyozozopp";
var index = "";
var num = 0;
index = str1.indexOf("o");
while (index !== -1) {
  console.log(index);
  num++;
  //查询完第一次，就可以根据位置依次查询后续的
  index = str1.indexOf("o", index + 1);
}
console.log("o出现的次数:" + num);
```

##### 2.13.4.8 trim方法

trim方法用于**去除字符串两端的空格**，返回一个新的字符串，不改变原本字符串。
该方法去除的不仅仅是空格，还包括**制符表(\t，\v)、换行符(\n)和回车符(\r)**。

```js
var str1 = "  hello world ";
console.log(str1.trim()); //hello world

var str2 = "\r\n 你好， world \t";
console.log(str2.trim()); //你好， world
```

ES6扩展了字符串trim方法，多了`trimEnd()`和`trimStart()`。

```js
var str = " hello world ";
//去除结尾的空格
console.log(str.trimEnd()); // hello world
//去除开头的空格
console.log(str.trimStart()); //hello world 
```

##### 2.13.4.9 split方法

split方法按照给定的规则**分割字符串**，返回一个由分割出来的**字符串组成的数组**。

```js
var str = "hello|world|你好|a|!";
console.log(str.split("|")); //["hello"，"world"，你好，a，!]
//如果分割字符串使用空字符串，则返回每个字符的数组
console.log("a|b|c".split("")); //["a"，"|"，"b"，"|"，"c"]
//如果省略参数，则返回原字符串的数组
console.log("ABC".split()); //["ABC"]
```

split方法还有第二个参数，用于**限定返回数组的最大成员数**。超出最大长度则只返回最大长度的内容

```js
var str = "hello|world|!";
console.log(str.split("|", 0)); //[]，返回空数组
console.log(str.split("|", 1)); //["hello"]，
console.log(str.split("|", 2)); //["hello"，"world"]
```

##### 2.13.4.10 repalce方法，替换字符串

replace方法返回一个新字符串，其中有两个参数的`pattern`被替换为`replacement`。pattern是被替换的字符串，replacement是替换后的字符串。

```js
//一次只能替换第一个重复字符串
var str = "tomo";
console.log(str.replace("o", "b")); //tbmo
console.log(str.replace("om", "b")); //tbo

//全部替换则需要使用循环,常用于过滤敏感词
while (str.indexOf("o") !== -1) {
  str = str.replace("o", "*");
}
console.log(str);
```

##### 2.13.4.11 toUpperCase与toLowerCase方法，转化字符大小写

```js
var str = "aabbCC";
//转化小写
console.log(str.toLowerCase());//aabbcc
//转化大写
console.log(str.toUpperCase());//AABBCC
```

#### 2.13.5 数组对象

之前学习过创建数组的方式有两种：**字面量方式**与**new Array()**。

```js
//1.字面量创建数组
var arr = [1, 2, 3];
console.log(arr[1]); //2

//2.利用new Array方式创建数组，该方式是构造函数的方式
var arr1 = new Array(); //创建一个空数组
console.log(arr1); //[]
console.log(arr1[0]); //undefined

var arr2 = new Array(2); //一个参数,依然创建一个空数组，2表示数组的长度，里面有两个空元素
console.log(arr2); //[空属性 × 2]
console.log(arr2[0]); //undefined

var arr3 = new Array(2, 3, "aa"); //多个元素，传入的参数就会作为数组的元素，等价于字面量创建
console.log(arr3); //[2, 3, 'aa']
console.log(arr3[0]); //2
```

##### 2.13.5.1 Array.isArray 检测是否为数组 

检测是否为数组有两种方式：

1. 使用运算符`instanceof`检测；
2. 使用数组方法`Array.isArray`检测(H5新增的方法）。Array.isArray方法返回一个布尔值，用于**验证是否为数组类型**，它弥补了`typeof`运算符不能验证数组的不足。

```js
//typeof无法检测数组类型
var arr = ["as", "44", 2];
var num = 2;
console.log(typeof arr); //结果为object并非array

//使用运算符检测
console.log(arr instanceof Array); //true,表示为数组
console.log(num instanceof Array); //false,表示不为数组
//使用方法检测
console.log(Array.isArray(arr)); //true，表示为数组
console.log(Array.isArray(num)); //false,表示不为数组
```

> 当检测Array实例时，Array.isArray优于instanceof,因为Array.isArray能检测iframes。iframes是DOM中的元素对象，后续会学习到，现在只需要知道它也是一种数组即可。

```js
var iframe = document.createElement("iframe");
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length - 1].Array;
var arr = new xArray(1, 2, 3);

//Array.isArray优于instanceof
console.log(Array.isArray(arr)); //true
console.log(arr instanceof Array); //false
```

##### 2.13.5.2 push与pop方法（添加删除）

**push(推）**方法用于**在数组的末端(尾部)添加一个或多个元素**，并返回**添加新元素后的数组长度**。注意，该方法会改变原数组。

**pop（拿出）**方法用于**删除数组的最后一个元素**，并**返回删除是元素**。注意，该方法会改变原数组。

```js
//push添加元素
var arr = [];
arr.push("aaa"); //1
console.log(arr.push(true, "bbb")); //3，返回新数组的长度
console.log(arr); //["aaa"，true，"bbb"]

//pop删除元素
console.log(arr.pop()); //"bbb"，返回删除的元素
console.log(arr); //["aaa"，true]
```

案例：筛选数组

```js
//筛选出数组中大于2000的工资
var arr = [1500, 1200, 2000, 2100, 1800];
var newArr = [];
var newArr1 = [];

//不用数组方法的写法
for (var i = 0; i < arr.length; i++) {
  if (arr[i] < 2000) {
    newArr[newArr.length] = arr[i];
  }
}
console.log(newArr);

//使用数组方法的写法,写法更简单
for (var i = 0; i < arr.length; i++) {
  if (arr[i] < 2000) {
    newArr1.push(arr[i]);
  }
}
console.log(newArr1);
```

##### 2.13.5.3 shift与unshift方法（添加删除）

shift方法用于**删除数组的第一个元素**，并**返回该元素**。会改变原数组。

unshift方法用于**在数组的第一个位置(首部)添加元素**，并返回**添加元素后的数组长度**。会改变原数组。

```js
var arr = [];
arr.unshift("zhang"); //1
console.log(arr.unshift(true, "干活")); //3
console.log(arr); //[true，"干活"，"zhang"]

console.log(arr.shift()); //true
console.log(arr); //["干活"，"zhang"]
```

shift如果删除空数组，返回值为**undefined**，利用该特性可以很方便清空一个数组

```js
var list = [1, 2, 3, 4];
var item;
while ((item = list.shift())) {
  console.log(item);
}

console.log(list); //[]
```

##### 2.13.5.4 join方法(数组转化字符串)

简单方式`toString`方法直接转化,该方法只能转化为逗号分隔

```js
var arr = [1, 2, 3, 4];
console.log(arr.toString()); //1,2,3,4
console.log(arr.toString("|")); //1,2,3,4
```

`join`方法是以指定参数作为**分隔符**，将所有数组成员连接为一个字符串并返回(本质就是**将数组转化为字符串的方法**)。如果不提供参数，默认以**逗号**分隔。

```js
var arr = [1, 2, 3, 4];
console.log(arr.join(" ")); // "1 2 3 4"
console.log(arr.join("|")); //"1|2|3|4"
console.log(arr.join(",")); //"1，2，3，4"
console.log(arr.join("")); //"1234"
console.log(arr.join()); //默认，"1,2,3,4"
```

如果数组成员为`undefined`或`null`或`空位`，则都会被转化成**空字符串**。

```js
var arr = [1, 2, undefined, null, ,];
console.log(arr.join("|")); //"1|2|||"
console.log(arr.join("")); //"12"
```

数组的join函数配合字符串的split函数可以**实现数组与字符串的互换**。

```js
var arr = ["hello", "world"];
//使用空格字符串切割
var result1 = arr.join(" ");
console.log(result1); //"hello world"
var arr1 = result1.split(" ");
console.log(arr1); //["hello"，"world"]

//如果使用空字符串进行切割
var result2 = arr.join("");
console.log(result2); //"helloworld"
var arr2 = result2.split("");
console.log(arr2); //["h"，"e"，"l"，"l"，"o"，"w"，"o"，"r"，"l"，"d"]
```

##### 2.13.5.5 concat方法

数组的concat方法**用于多个数组的合并**。它将新数组成员添加到原数组成员的后部，然后返回一个新数组。原数组内容不变。

```js
var a = ["hello"];
var b = ["world"];
var c = ["!"];

console.log(a.concat(b)); //["hello"，"world"]
console.log(a.concat(c, "啊啊")); //["hello"，"!"，"啊啊"]

//数组之间不能使用+进行合并，合并结果会变成一个字符串
console.log(a + b + c); //helloworld!
```

除了数组作为参数，concat也接受**其他类型的值**作为参数，默认会添加到目标数组的尾部。

```js
var arr = [10];
console.log(arr.concat(2, 3, "aa")); //[10,2,3,"aa"]

console.log(arr.concat(11, 12, [13, 14])); //[10,11,12,13,14]
```

> 数组合并最常用的场景就是**上拉加载**与**合并数据**。

##### 2.13.5.6 reverse方法与sort方法

`reverse`方法用于**颠倒排列数组元素**（翻转数组），返回改变后的数组。会改变原数组。

```js
var a = [1, 2, 3, 4];
a.reverse();
console.log(a); //[4,3,2,1]
```

利用该方法可实现**字符串反转**。

```js
var str = "hello";
var arr = str.split("");
arr.reverse();
console.log(arr.join("")); //"olleh"

//简写形式
console.log("hello".split("").reverse().join("")); //"olleh"
```

`sort`方法用于实现数组元素排序，返回改变后的数组。会改变原数组。

```js
//没有参数只适合单数排序
var arr = [3, 4, 7, 1];
arr.sort();
console.log(arr); //[1, 3, 4, 7]

var arr1 = [3, 14, 227, 1];
arr1.sort();
console.log(arr1); //[1, 14, 227, 3]，结果不正确，因为默认排序是比较首字母。227是2开头因此为第三位

//使用参数，配置一个函数解决,数字排序就使用下面的函数
var arr2 = [3, 14, 227, 1];
arr2.sort(function (a, b) {
  return a - b; //a-b表示升序排序,b-a表示降序
});
console.log(arr2);//[1, 3, 14, 227]
```



##### 2.13.5.7 indexOf方法和lastIndexOf方法

数组的`indexOf`方法**返回给定元素在数组中第一次出现的位置**，如果没出现则返回`-1`。效果跟字符串的一样。indexOf也有第二个参数，表示**搜索开始的位置**。

数组的`lastIndexOf`方法**返回给定元素在数组中最后一次出现的位置**，如果没出现则返回`-1`。效果跟字符串的一样。

```js
//1.indexOf的使用
var arr = [10, 20, 30, 40, 30];
console.log(arr.indexOf(30)); //2
console.log(arr.indexOf(60)); //-1

//常用于判断是否存在元素
if (arr.indexOf(30) > -1) {
  console.log("存在元素30");
} else {
  console.log("不存在元素30");
}
//指定开始位置,包含开始位置，参数设为2结果就是2
console.log(arr.indexOf(30, 3)); //4

//2.lastIndexOf的使用
var arr1 = ["red", "blue", "green", "pink", "blue"];
console.log(arr1.lastIndexOf("blue")); //4
console.log(arr1.lastIndexOf("blue1")); //-1
//指定结束位置,包含结束位置，参数设为3结果就是找3，2，1，0
console.log(arr1.lastIndexOf("blue", 3)); //1
```

案例：**数组去除重复的元素(重要)**

```js
//去重函数
function unique(arr) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    //利用新数组元素查询旧数组内容，没有才添加，有就跳过
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

var arr = ["c", "a", "z", "a", "x", "a", "x", "c", "b"];
var arr1 = ["blue", "yellow", "blue", "green"];
console.log(unique(arr)); //['c', 'a', 'z', 'x', 'b']
console.log(unique(arr1)); //['blue', 'yellow', 'green']
```

##### 2.13.5.8 slice方法与splice方法

**`slice()`**方法是一个**复制数组的方法**，它返回一个新的数组对象，这一对象是一个由 `start` 和 `end` 决定的原数组的**浅拷贝**（包括`start`，不包括`end`），其中`start`和`end`代表了数组元素的索引。**原始数组不会被改变**。

> 对象的**浅拷贝**是属性与拷贝的源对象属性共享相同的**引用**指向相同的底层值的副本。因此，当你更改源对象或副本时，也可能导致另一个对象发生更改。与之相比，在**深拷贝**中，源对象和副本是完全独立的。

```js
const animals = ["ant", "bison", "camel", "duck", "elephant"];
//一个参数表示从索引号为2开始拷贝数组
console.log(animals.slice(2)); //['camel', 'duck', 'elephant']
//两个参数表示从索引号为2开始在4的地方结束拷贝数组，不包括4
console.log(animals.slice(2, 4)); //["camel", "duck"]
//如果开始索引是负数，则从数组末尾开始计算——如果 start < 0，则使用 start + array.length。
console.log(animals.slice(-2)); //["duck", "elephant"] ,-2+5=3，表示从3开始
//如果结束索引是负数，则从数组末尾开始计算——如果 end < 0，则使用 end + array.length。
console.log(animals.slice(2, -1)); //["camel", "duck"],-1+5=4,表示2到4
//没有参数就表示全部拷贝
console.log(animals.slice()); //['ant', 'bison', 'camel', 'duck', 'elephant']
```

**`splice()`**方法要创建一个**删除**和/或**替换部分内容**。**它会改变原数组内容**。该方法比slice更强大，它在**裁剪数组的同时还可以新增元素到数组中**。如果要不改变原数组内容直接创建新数组请使用`toSpliced()`。

它主要有三大参数：

1. **start**，表示从0开始计算的索引，表示要开始改变数组的位置，负数效果跟slice一样；
2. **deleteCount**，一个整数，表示数组中要从`start`开始删除的元素数量；
3. 后续参数`item1...itemN`,从`start`开始要加入到数组中的元素。该参数可以是任意多个。

它的返回值：一个包含了删除的元素的数组。，如果只移除一个元素，则返回一个元素的数组。如果没有删除任何元素，则返回一个空数组。

```js
const months = ["Jan", "March", "April", "June"];

//从1开始删除0个元素，也就是插入一个元素
var r1 = months.splice(1, 0, "Feb");
console.log(months); //["Jan", "Feb", "March", "April", "June"]
console.log(r1); //[]

//表示从4开始，删除一个元素，然后添加一个元素
var r2 = months.splice(4, 1, "May");
console.log(months); //['Jan', 'Feb', 'March', 'April', 'May']
console.log(r2); //['June']

//删除两个元素，并追加两个
var r3 = months.splice(-2, 2, "ddd", "aaa");
console.log(months); //['Jan', 'Feb', 'March', 'ddd', 'aaa']
console.log(r3); //['April', 'May']
```

### 2.14 数据存储原理

#### 2.14.1 简单与复杂数据类型存储

我们已经知道js中数据类型主要分为**简单数据类型**与**复合数据类型**。

简单数据类型又叫值类型，因为它的变量在内存中存储的是**值本身**。

复合数据类型又叫引用数据类型，因为它的变量在内存中存储的是**值所在内存的地址**，主要是十六进制数，相当于java中的指针引用。它是用new关键字创建的。

> 要理解上边的概念，我们先理解**堆**与**栈**的概念。
>
> 栈是由操作系统自动分配释放存放函数的参数值、局部变量的值等。其操作方式类似于数据结构中的栈，**简单数据类型的值就是存放在栈里**。
>
> 堆是存储复杂类型（对象）。一般由程序员分配释放，若程序员不释放，则由垃圾回收机制回收。**复合数据类型的值就是存放在堆里**。

其实在JS中是没有堆栈的概念，我们只是通过堆栈的方式来理解JS代码的执行方式，便于学习。

```js
//简单数据类型创建流程，当变量创建时，系统就会在栈中创建一块空间，名称为age，将数据的值放到这块创建的空间中
var age = 18;

//复合数据类型创建流程，当变量创建时，系统就先会在堆中创建一块空间，将数据的值放到这块创建的空间中
//然后再在栈中创建一块空间，其名称为arr，最后将堆中存放数据空间的地址放到该arr中,该地址为十六进制,例如:0X11aacc
var arr = [1, 2, 3];
```

#### 2.14.2 简单与复杂数据类型传参

由于简单与复杂数据类型存放方式不同，因此在函数传参时也会出现不同的效果。

```js
//简单数据类型传参,传参相当于将数据的值复制一份赋值给形参，不会改变源数据的值
function fn(a) {
  a++;
  console.log(a); //11
}
var x = 10;
fn(x);
console.log(x); //10

//复合数据类型传参,传参相当于将数据的值引用（也就是数据地址）赋值给形参，会改变源数据的值
function Person(name) {
  this.name = name;
}

function f1(x) {
  console.log(x.name); //张三
  x.name = "李四";
  console.log(x.name); //李四
}

var p = new Person("张三");
console.log(p.name); //张三
f1(p);
console.log(p.name); //李四
```

## 三、Web APIS

**API(Application Programming Interface)应用程序编程接口**是一些预先定义的函数，目的是提供应用程序与开发人员基于某软件或者硬件得以访问一组例程的能力，它无需访问源码或理解内部工作机制细节就可使用。简单来说API就是**一个或多个功能函数的接口**，程序员调用接口就可直接实现功能，跟之前的内置对象函数很像。

**Web API**是**浏览器提供**的一套**操作浏览器功能和页面元素的API**。之前的`alert函数`其实就是一个Web API函数，它的全写是`window.alert("内容")`,window对象就是Web API中的窗口对象。

Web API一般都是有输入与输出的，它就类似于函数的**参数传参**与**返回值**。学习API的方法可以参考之前**官网学习内置对象的流程**。

官方MDN网站[https://developer.mozilla.org/zh-CN/docs/Web/API]

其他MDN网站[https://mdn.org.cn/en-US/docs/Web/API]

**Web APIS**就是一系列Web API的集合(也就是DOM与BOM)。**Web APIS**是W3C组织定义的标准，它是独立于JS的接口，也就是离开JS其他语言也能实现，只是现在大部分网页都是使用JS实现的接口，它主要用于帮助我们完成页面的交互功能。

之前就知道JS主要由三大块组成:

1. **ECMAScript语法**也就是之前学习的内容，它是**JS的基础语法**，但如果只学习基本语法，是做不了常用的网页交互效果的;
2. **DOM**（页面文档对象模型）,它属于Web APIS一部分，是JS的扩展内容,主要用于操作**网页元素**；
3. **BOM**（浏览器对象模型），它也属于Web APIS一部分，也是JS的扩展内容，主要用于**操作浏览器对象**。

> **总结：**
>
> JS基础语法是为后续学习作铺垫，类似于建筑地基；
>
> Web APIS是JS的扩展应用接口，帮助我们完成各种页面交互效果，类似于在地基上修房屋。

### 3.1 DOM的概述

DOM是W3C组织推荐的处理可扩展标记语言（HTML或XML)的标准编程**API接口**，全称为**文档对象模型(Document Object Model)**。它的作用是将**网页内容转化为一个JavaScript对象**，从而通过js脚本进行各种网页元素操作(例如元素增删改内容)。

> **DOM操作网页的原理:**
>
> * 首先浏览器会根据DOM模型，将结构化文档HTML的内容解析成一系列的**节点**，所有节点在DOM中都是**对象**，
> * 然后再由这些节点组成一个树状结构(DOM Tree)，该树是倒立的。
> * 最后DOM树与其所有的节点都生成规范的对外接口。

DOM本身只是一种**接口规范**，它可使用任意语言实现。不一定使用js语言，**只是js是最常用操作DOM的语言而已**。离开的DOM，js也能工作只是不能再操作控制网页。

#### 3.1.1 节点

DOM中的最小组成单位就是**节点(node)**。一个html网页中的所有内容都是节点,不管是标签、属性、文本或注释。

DOM的节点类型主要有七种:

* **Document**:文档节点，表示整个文档，它位于整个DOM树的顶层，也代表就是DOM树本身；
* **DocumentType**:html开头的**doctype标签**的节点。唯一特殊的节点。
* **Element**:**元素节点(重要)**，由网页各种**HTML标签**转化的节点，例如div->div节点；
* **Attribute**:**元素属性节点(重要）**，对应各网页标签内部属性内容节点。例如"class=right"属性就是一个class节点，值为right
* **Text**:**文本节点**，**标签之间的换行**或**标签包含的文本元素**转化的节点。
* **Comment**:注释内容的节点。
* **DocumentFragment**:文档的片段节点。截取文档片段内容的节点。

> **DOM中所有的节点都是对象，element节点又称为element元素对象。**
>
> 我们操作最频繁的就是由Html标签转化而成的element节点与document根节点。
>
> 本质上document也是一种特殊的element节点，只是它表示的是根节点。

**nodeType属性**:可通过该属性判断节点的类型，不同类型对应不同的常量。

> 文档节点(document):值为9，对应常量Node.DOCUMENT_NODE
> **元素节点(element):值为1**，对应常量Node.ELEMENT_NODE
> **属性节点(attr):值为2**，对应常量Node.ATTRIBUTE_NODE
> **文本节点(text):值为3**，对应常量Node.TEXT_NODE
> 文档片段节点(DocumentFragment):值为11，对应常量Node.DOCUMENT_FRAGMENT_NODE

案例:nodeType属性的使用

```js
console.log(document.nodeType); //打印值为9
if (document.nodeType === Node.DOCUMENT_NODE) {
  console.log("节点为文档类型");
}
```

**nodeName属性**表示节点类型名，例如div标签转化的节点就是DIV。

**nodeValue属性**表示节点值，该属性大部分时值为null,注意节点值并不是元素内部的文本值。

#### 3.1.2 节点树(DOM树)

DOM树就是由各种不同类型的节点组成。每个节点都可看作是DOM树的一片叶子。一个文档的所有节点，按照所在层级，可抽象成一种树状结构。这种树状结构就是**DOM树**。它由一个顶层节点开始，下一层是顶层节点的子节点，然后字节点又有自己的子节点，这样层层衍生出一个金字塔结构，它倒过来就像一棵树。

浏览器提供了**原生的`document`节点**，代表整个html文档，也就DOM树最顶层的节点也叫**根节点**。js中可直接使用。

```js
console.log(document); //整个文档树
```

除了根节点，其他节点都有**三种层级关系**:

1. **父节点关系(parentNode)**:直接找到该节点的上级节点
2. **子节点关系(childNode)**:直接找到该节点的下级节点
3. **同级兄弟关系(sibling)**:直接找到拥有同一个父节点的节点

这三种关系对应了三种查询节点的方式，可通过该方式找到相关节点（后面会详细说明）。

### 3.2 Element对象操作

对应网页的元素，我们一般的操作都是围绕**增删改查**来进行的。首先要查询到对应元素，也就是获取元素。

> 该部分案例中会**简单使用事件绑定**，这里只需要会使用即可。先不具体说明，后续会详细讲解事件内容。

#### 3.2.1 获取元素（document查询）

因为所有的页面元素都在文档对象中，因此可通过document对象去查询。通过**document对象**，就可以不同的方式搜索元素对象，其方式主要有以下几种(可参考CSS获取元素的方法类比学习)：

##### 3.2.1.1 html标签id属性值获取元素

由于html中id属性值是唯一的，因此获取不再是数组而是单个元素对象。成功直接返回元素对象，失败返回null对象。其实方法名`getElementById`是驼峰命名法命名的,传递参数id值是**大小写敏感的字符串**，稍微不同结果就不一样。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- 因为文档页面是从上往下加载，所有必须先有标签才能用js获取，所以目前script要写在标签下面。 -->
    <script>
      //id属性查询
      var id = document.getElementById("root");
      //大小写敏感
      var id2 = document.getElementById("Root");
      console.log(id); //<div id="root"></div>
      console.log(id2); //null
      console.log(typeof id); //object
      //log方法无法查看元素对象具体属性，可使用dir方法查看具体的属性与方法
      console.dir(id);
    </script>
  </body>
</html>
```

##### 3.2.1.2 html标签名(TagName)获取元素

成功返回**伪数组的对象**(`HtmlColletion`实例)，其可**实时反映html文档的变化**。失败表示没有匹配任何元素，返回一个**空集**。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <ul>
      <li>html的li标签1</li>
      <li>html的li标签2</li>
      <li>html的li标签3</li>
      <li>html的li标签4</li>
      <li>html的li标签5</li>
    </ul>

    <ol>
      <li>ol中的li标签1</li>
      <li>ol中的li标签2</li>
      <li>ol中的li标签3</li>
      <li>ol中的li标签4</li>
      <li>ol中的li标签5</li>
    </ol>

    <p>html的p标签</p>

    <script>
      //1. 返回li标签的所有元素
      var lis = document.getElementsByTagName("li");
      console.log(lis); //HTMLCollection(10)集合

      //返回首个li标签的元素
      var li = document.getElementsByTagName("li")[0];
      //其作用就是可通过该元素修改html内容
      li.innerHTML = "aaa";

      //2. 即使只有一个元素依然返回伪数组集合
      var p = document.getElementsByTagName("p");
      console.log(p); //HTMLCollection [p]

      //3. 返回空集合,查询失败依然返回集合，只是里面的元素是undefined
      var aaa = document.getElementsByTagName("lis");
      console.log(aaa); //HTMLCollection []
      console.log(aaa[0]); //undefined

      //4. 只返回ol中的li对象，也就是特定标签内部元素(重要)
      var ol = document.getElementsByTagName("ol"); //先获取父元素
      var ols = ol[0].getElementsByTagName("li"); //利用父元素获取其子元素的内容
      console.log(ols); //HTMLCollection(5) [li, li, li, li, li]

      //5. 传入*就表示匹配所有标签
      var allparas = document.getElementsByTagName("*");
      console.log(allparas);
    </script>
  </body>
</html>
```

##### 3.2.1.3 html标签class属性值获取元素

其返回结果跟标签名查询一样。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <p class="ttt">hello</p>

    <script>
      var p = document.getElementsByClassName("ttt")[0];
      p.innerHTML = "hhh";

      //class参数可以是多个，用空格进行分隔
      var es = document.getElementsByClassName("food aaa");
      console.log(es);
    </script>
  </body>
</html>
```

> js中为什么使用className而不是class直接表示？
> 因为js中class是**保留字**表示类。而html与css中没有保留字，因此使用className。

##### 3.2.1.4 html标签name属性值获取元素(使用率低)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <form name="aaa"></form>

    <script>
      //name属性查询
      var forms = document.getElementsByName("aaa");
      console.log(forms);
    </script>
  </body>
</html>
```

##### 3.2.1.5 通用选择器方式获取元素

在Html5版本后又新增的两个类似于CSS选择器的方法：
①`querySelector`方法,通过匹配一个**css选择器**，返回匹配该选择器的元素节点。如果有多个节点满足条件，也只返回第一个匹配的节点。不匹配则返回null。

> css选择器，如果是id属性，用#号开始，如果是class属性，使用.开始。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root" class="aaa"></div>

    <script>
      //类名
      var el1 = document.querySelector(".aaa");
      console.log(el1); //<div id="root" class="aaa"></div>

      //id
      var el2 = document.querySelector("#root");
      console.log(el2); //<div id="root" class="aaa"></div>

      //标签名
      var el3 = document.querySelector("div");
      console.log(el3); //<div id="root" class="aaa"></div>
    </script>
  </body>
</html>
```

②`querySelectorAll`方法,使用与querySelector类似，区别是返回一个**nodeList对象**，包含匹配的所有选择器的元素。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root" class="aaa"></div>

    <script>
      var elList = document.querySelectorAll(".aaa");
      console.log(elList[0]); //<div id="root" class="aaa"></div>
    </script>
  </body>
</html>
```

##### 3.2.1.6 HTML元素与Body元素获取

通过前面的方法，我们基本可以获取页面的全部元素，但有些比较特殊的元素例如**body**或**html**它们在页面中都是唯一的，就可以直接获取并不需要上边的方式查询。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root" class="aaa"></div>

    <script>
      //获取body元素对象
      var body = document.body;
      console.log(body);

      //获取html元素对象
      var html = document.documentElement;
      console.log(html);
    </script>
  </body>
</html>
```

#### 3.2.2 获取元素(节点方式)

之前document方式已经可以获取所有的页面的元素节点，但它有个缺点，就是编写很繁琐，且逻辑性不强。因此有时我们会利用**节点的层级关系来获取元素**。利用**父子兄节点关系**获取元素，该方式逻辑性强，但兼容性稍微差一点。

##### 3.2.2.1 父级节点 parentNode

通过子节点获取它上一级的父级节点。得到的是离元素最近的父节点。如果找不到父节点就返回null。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="demo">
      <div class="father">
        <span class="son">x</span>
      </div>
    </div>

    <div class="cc"></div>
    <script>
      //以前获取上边两个节点的方式
      // var father = document.querySelector(".father");
      // var son = document.querySelector(".son");

      //通过子节点获取父节点的方式
      var son = document.querySelector(".son");
      var father = son.parentNode;
      console.log(father);

      var demo = son.parentNode.parentNode; //获取爷爷的节点
      console.log(demo);

      var cc = document.querySelector(".cc");
      console.log(cc.parentNode); //body

      console.log(document.body.parentNode); //body父亲是html
      console.log(document.documentElement.parentNode); //html的父亲是document
      console.log(document.parentNode); //null
    </script>
  </body>
</html>
```

##### 3.2.2.2 子级节点 

与获取父节点相反，获取子节点就是由它的父级节点来获得，但由于一个父级会有很多子节点，因此获取子节点元素返回的是一个集合。

有两种获取方式，官方是`childNodes`它会获取所有子节点，不好用，推荐使用`children`获取所有子元素节点。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
    <div class="demo">
      <div class="father">
        <span class="son">x</span>
      </div>
    </div>

    <script>
      var ul = document.querySelector("ul");
      //官方标准写法，childNodes获取所有节点，不仅包含元素节点也包含文本节点
      var lis = ul.childNodes;
      console.log(lis); //得到的结果是9个元素，这是因为换行文本也算节点，因此4个离前后都有一个空文本节点

      //要只获得元素节点，需要排除文本节点,通过nodeType判断
      for (var i = 0; i < ul.childNodes.length; i++) {
        if (ul.childNodes[i].nodeType === 1) {
          //打印出全部元素节点
          console.log(ul.childNodes[i]);
        }
      }

      //children,推荐使用
      console.log(ul.children);

      //子节点的获取也是只获取最近一层的子节点，子节点的子节点需要链式嵌套
      var demo = document.querySelector(".demo");
      console.log(demo.childNodes[1].childNodes);
      console.log(demo.children[0].children);
    </script>
  </body>
</html>
```

**获取第一个子节点与最后一个子节点**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <ol>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ol>

    <script>
      var ol = document.querySelector("ol");
      //1. firstChild 获取的是第一个子节点，文本节点也包含在内
      console.log(ol.firstChild); //text
      //lastChild 获取的是最后一个子节点，文本节点也包含在内
      console.log(ol.lastChild); //text

      //2. firstElementChild 获取的是第一个元素子节点 ,IE9以上才可使用
      console.log(ol.firstElementChild); //li
      //lastElementChild 获取的是最后一个子节点，文本节点也包含在内
      console.log(ol.lastElementChild); //li

      //3.下标获取
      console.log(ol.children[0]); //li
      console.log(ol.children[ol.children.length - 1]); //li
    </script>
  </body>
</html>
```

案例，新浪下拉菜单

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      li {
        list-style-type: none;
      }

      a {
        text-decoration: none;
        font-size: 14px;
      }

      .nav {
        margin: 100px;
      }

      .nav > li {
        position: relative;
        float: left;
        width: 80px;
        height: 41px;
        text-align: center;
      }

      .nav li a {
        display: block;
        width: 100%;
        height: 100%;
        line-height: 41px;
        color: #333;
      }

      .nav > li > a:hover {
        background-color: #eee;
      }

      .nav ul {
        display: none;
        position: absolute;
        top: 41px;
        left: 0;
        width: 100%;
        border-left: 1px solid #fecc5b;
        border-right: 1px solid #fecc5b;
      }

      .nav ul li {
        border-bottom: 1px solid #fecc5b;
      }

      .nav ul li a:hover {
        background-color: #fff5da;
      }
    </style>
  </head>
  <body>
    <ul class="nav">
      <li>
        <a href="#">微博</a>
        <ul>
          <li>
            <a href="">私信</a>
          </li>
          <li>
            <a href="">评论</a>
          </li>
          <li>
            <a href="">@我</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">微博</a>
        <ul>
          <li>
            <a href="">私信</a>
          </li>
          <li>
            <a href="">评论</a>
          </li>
          <li>
            <a href="">@我</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">微博</a>
        <ul>
          <li>
            <a href="">私信</a>
          </li>
          <li>
            <a href="">评论</a>
          </li>
          <li>
            <a href="">@我</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">微博</a>
        <ul>
          <li>
            <a href="">私信</a>
          </li>
          <li>
            <a href="">评论</a>
          </li>
          <li>
            <a href="">@我</a>
          </li>
        </ul>
      </li>
    </ul>

    <script>
      var nav = document.querySelector(".nav");
      var lis = nav.children; //得到4个标签节点
      for (var i = 0; i < lis.length; i++) {
        //鼠标经过
        lis[i].onmouseover = function () {
          //第二个孩子ul显示
          this.children[1].style.display = "block";
        };

        //鼠标离开
        lis[i].onmouseout = function () {
          //第二个孩子ul隐藏
          this.children[1].style.display = "none";
        };
      }
    </script>
  </body>
</html>
```

##### 3.2.2.3 兄弟级节点

所谓兄弟节点，也就是对应元素**相邻的同级元素**。获取兄弟节点，一般只会寻找该节点元素的上一个同级元素或者下一个同级元素。它的放回的也是一个元素对象而不是集合。如果找不到就返回null。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div>111</div>
    <span>span</span>
    <script>
      var div = document.querySelector("div");
      //获取div下一个兄弟节点，也包含元素节点和文本节点
      console.log(div.nextSibling); //依然是换行的文本节点

      //获取div上一个兄弟节点，也包含元素节点和文本节点
      console.log(div.previousSibling); //依然是换行的文本节点
      console.log(div.previousSibling.previousSibling); //null

      //获得下一个兄弟元素节点,依然需要IE9以上才支持
      console.log(div.nextElementSibling); //span
      //获得上一个兄弟元素节点
      console.log(div.previousElementSibling); //null
    </script>
  </body>
</html>
```

如果要解决IE版本问题，只能自己封装函数

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div>111</div>
    <span>span</span>
    <script>
      var div = document.querySelector("div");

      //解决兼容性封装的函数
      function getNextElementSibling(element) {
        var el = element;
        //使用while循环不停查找下一个子节点直到其类型为元素节点
        while ((el = el.nextSibling)) {
          if (el.nodeType === 1) {
            //return也能跳出循环
            return el;
          }
        }
        //没有下一个元素
        return null;
      }
      console.log(getNextElementSibling(div)); //span
    </script>
  </body>
</html>
```

#### 3.2.3 修改元素

获取到元素后，我们就可以利用DOM操作元素来改变元素里面的内容、属性的等。

##### 3.2.3.1 修改元素文本内容

可通过属性`innerText`或`innerHTML`修改。两者功能大部分类似但也有不同之处：

+ `innerText`,该属性是可读写的，写入方面是完全修改元素的文本全部内容，但它不会识别新文本中的html标签。读取数据方面是不会读取html标签内容，且同时会移除文本中的空格和换行；
+ `innerHTML`,该属性是可读写的，写入方面是完全修改元素的文本全部内容，但它会识别新文本中的html标签。读取数据方面是会读取html标签内容，且**不会移除文本中的空格和换行**；

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root">div默认内容</div>
    <div id="root1">div默认内容</div>
    <div id="root2">div默认内容</div>
    <p>
      我是文章
      <span>123</span>
    </p>
    <script>
      var div = document.getElementById("root");
      div.innerText = "新内容"; //默认页面开始加载就会执行，修改div的内容

      //innerText与innerHTML区别
      //innerText不识别html标签，非官方标准
      var div1 = document.querySelector("#root1");
      div1.innerText = "<strong>今天是：</strong>        2019";

      //innerHTML识别html标签，W3C官方标准 推荐使用
      var div2 = document.querySelector("#root2");
      div2.innerHTML = "<strong>今天是：</strong>        2019";

      //这两属性也可获得元素内容
      var p1 = document.querySelector("p");
      console.log(p1.innerText); //获取的数据会移除html标签，并同时移除空格换行
      console.log(p1.innerHTML); //获取原有结构的所有内容
    </script>
  </body>
</html>
```

##### 3.2.3.2 修改元素属性

元素除了文本内容外，修改标签中的属性也是很常见的。例如image标签中的`src`、`alt`、`title`属性等。

**获取元素属性的方式**是先获取元素，然后使用`元素.属性名`方式获取属性并修改。

案例：不同时间显示不同图片内容

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      img {
        width: 200px;
        height: 100px;
      }
    </style>
  </head>
  <body>
    <img src="images/001.jpg" alt="上午" title="'上午图" />
    <div>上午图片</div>
    <script>
      var img = document.querySelector("img");
      var div = document.querySelector("div");

      //根据时间小时数判断当前是什么时候,并改变元素内容
      var date = new Date();
      var h = date.getHours();
      if (h < 12) {
        img.src = "images/001.jpg";
        img.alt = "上午";
        img.title = "上午图";
        div.innerHTML = "上午好";
      } else if (h < 18) {
        img.src = "images/002.jpg";
        img.alt = "下午";
        img.title = "下午图";
        div.innerHTML = "下午好";
      } else {
        img.src = "images/003.jpg";
        img.alt = "晚上";
        img.title = "晚上图";
        div.innerHTML = "晚上好";
      }
    </script>
  </body>
</html>
```

注意：**修改class属性**内容使用的属性名是`className`而并非class。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- myId就是自定义属性 -->
    <div class="box">hello</div>
    <script>
      //获取div元素
      var root = document.getElementById("root");
      //操作class属性，可直接读取打印，该属性比较特殊使用属性名是className，因为class是关键字
      root.className = "box box2";

    </script>
  </body>
</html>
```

##### 3.2.3.3 修改表单元素内容

在html中表单属性与其他标签不同，要想修改表单的文本内容，则要修改`value`属性的值，innerText是无效的。除了value外表单中其他属性`type`、`checked`、`selected`、`disabled`等也经常被修改。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <input type="text" value="输入内容" />
    <button>禁用按钮</button>
    <input type="text" value="123456" id="pwd" />
    <script>
      //修改表单文本内容
      var input = document.querySelector("input");
      input.value = "表单文本内容修改";

      //禁用表单内容
      var button = document.querySelector("button");
      button.disabled = true;

      //修改表单文本类型
      var pwd = document.querySelector("#pwd");
      pwd.type = "password";
    </script>
  </body>
</html>
```

综合小案例:**仿造京东显示隐藏密码明文**(图片就是网上的眼睛图标)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        position: relative;
        width: 400px;
        border-bottom: 1px solid #ccc;
        margin: 100px auto;
      }

      .box input {
        width: 370px;
        height: 30px;
        border: 0;
        /* 去掉默认边框 */
        outline: none;
      }

      .box img {
        /* 子元素绝对定位 */
        position: absolute;
        top: 6px;
        right: 0px;
        width: 24px;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <!-- label与input经常搭配使用 -->
      <label for="">
        <img src="/images/close.png" alt="" id="eye" />
      </label>
      <input type="password" name="" id="pwd" />
    </div>
    <script>
      var eye = document.getElementById("eye");
      var pwd = document.getElementById("pwd");
      //记录点击状态,眼睛闭上是0,睁开是1
      var flag = 0;
      eye.onclick = function () {
        if (flag === 0) {
          this.src = "images/open.png"; //修改按钮图片
          pwd.type = "text"; //修改密码文本框类型
          flag = 1;
        } else {
          this.src = "images/close.png"; //修改按钮图片
          pwd.type = "password"; //修改密码文本框类型
          flag = 0;
        }
      };
    </script>
  </body>
</html>
```

##### 3.2.3.4 修改自定义属性

自定义属性是程序员自己添加的属性，不能直接通过之前的方式`元素.属性`获取，只能通过第二种方式`getAttribute`获取。

之前的方式主要是获取html**元素的内置属性**也就是**元素自带的属性**。`getAttribute`则是获取自定义属性，它也能获取内置属性。

既然能获取，当然也能**修改属性**，使用`setAttribute`方法进行修改。该方法修改的属性如果不存在，则会**创建属性**。

**移除属性**则使用`removeAttribute`方法。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="demo" myId="aaa" class="ddd"></div>

    <script>
      var div = document.querySelector("div");

      //1.获取属性值
      console.log(div.id); //demo
      console.log(div.getAttribute("id")); //demo
      console.log(div.myId); //undefined
      console.log(div.getAttribute("myId")); //aaa
	  //class属性比较特殊
      console.log(div.className); //ddd
      console.log(div.getAttribute("class")); //ddd

      //2.修改属性值
      div.myId = "111"; //无效的
      div.setAttribute("myId", 222);

      div.setAttribute("class", "xxx"); //修改class属性

      //3. 添加属性,只要修改的属性不存在就会默认添加
      div.setAttribute("class1", "xxx");

      //4.移除属性
      div.removeAttribute("class1");
    </script>
  </body>
</html>
```

**重点案例：tab栏切换**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      li {
        list-style-type: none;
      }

      .tab {
        width: 978px;
        margin: 100px auto;
      }

      .tab_list {
        height: 39px;
        border: 1px solid #ccc;
        background-color: #f1f1f1;
      }

      .tab_list li {
        float: left;
        height: 39px;
        line-height: 39px;
        padding: 0 20px;
        text-align: center;
        cursor: pointer;
      }

      .tab_list .current {
        background-color: #c81623;
        color: #fff;
      }

      .item_info {
        padding: 20px 0 0 20px;
      }

      .item {
        /* 隐藏内容 */
        display: none;
      }
    </style>
  </head>
  <body>
    <div class="tab">
      <div class="tab_list">
        <ul>
          <li class="current">商品介绍</li>
          <li>规格与包装</li>
          <li>售后保障</li>
          <li>商品评价（50000）</li>
          <li>手机社区</li>
        </ul>
      </div>
      <div class="tab_con">
        <!-- display: block显示隐藏内容 -->
        <div class="item" style="display: block">商品介绍模块内容</div>
        <div class="item">规格与包装模块内容</div>
        <div class="item">售后保障模块内容</div>
        <div class="item">商品评价（50000）模块内容</div>
        <div class="item">手机社区模块内容</div>
      </div>
    </div>

    <script>
      //1.选项卡模块
      var tab_list = document.querySelector(".tab_list");
      var lis = tab_list.querySelectorAll("li");
      var items = document.querySelectorAll(".item");
      //for循环绑定点击事件
      for (var i = 0; i < lis.length; i++) {
        //设置索引
        lis[i].setAttribute("index", i);

        lis[i].onclick = function () {
          //排它思想
          for (var i = 0; i < lis.length; i++) {
            //该操作还有一个效果，就是给所有li都会添加class属性，内容为空
            lis[i].className = "";
          }
          //必须使用this,i的作用域范围。
          this.className = "current";

          //2. 显示内容模块,通过给上述li设置自定义属性索引号，获得点击的索引
          //排它思想
          for (var i = 0; i < items.length; i++) {
            items[i].style.display = "none";
          }
          items[this.getAttribute("index")].style.display = "block";
        };
      }
    </script>
  </body>
</html>
```

##### 3.2.3.5 H5自定义属性

自定义属性目的大部分是为了在**页面保存并使用数据**。但如果自定义属性命名不规范，很容易引发歧义，让用户无法判断是**内部属性**还是**自定义属性**。因此在最新H5中就统一规定自定义属性必须以`data-`开头作为属性名并赋值。

> H5自定义属性要在IE11版本后才支持，之前的版本不支持。

`dataset`是所有以data开头的自定义属性对象的集合。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- 直接设置H5自定义属性,ie要在ie11以上版本才支持 -->
    <div getTime="20" data-index="2" data-index-name="zhang"></div>

    <script>
      var div = document.querySelector("div");
      //新增自定义属性
      div.setAttribute("data-time", "aa");
      //获取自定义属性
      console.log(div.getAttribute("data-time")); //aa

      //H5提供新的方法获取自定义属性,dataset对象表示自定义属性对象的集合
      console.log(div.dataset.index); //2
      console.log(div.dataset["time"]); //aa

      //获取长名自定义属性,长名的-以驼峰命名替代
      console.log(div.dataset.indexName); //zhang
      console.log(div.dataset["indexName"]); //zhang
    </script>
  </body>
</html>
```

##### 3.2.3.6 修改元素样式（CSS样式)

css操作是指通过js设置css样式的方式。主要有两种方法：

+ **style**修改样式，该方式有三种写法，核心都是操作**style**属性；
+ **className**，类名操作样式，该方法主要通过操作样式类名来操作样式，主要有两种写法。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="box"></div>
    <script>
      //box就是一个空div
      var box = document.getElementById("box");
      
      //方式1，设置元素属性的style属性，css如果太复杂就不适用
      box.setAttribute("style", "width:200px;height:200px;background:red;");

      //方式2，设置元素节点的style属性，该方式比较常用
      box.style.width = "300px";
      box.style.height = "300px";
      box.style.backgroundColor = "green";

      //方式3，使用cssText属性，也就是把css样式变成单独的字符串，该方式适合直接读取外部css文件内容
      box.style.cssText = "width:200px;height:200px;background:blue";
    </script>
  </body>
</html>
```

使用style样式操作的样式，不管使用什么方式，最终产生的都是**行内样式**。它的权限比较高，会覆盖**内嵌样式**。

案例：循环精灵图，该案例中主要使用精灵图中的元素上下距离始终相差44px完成

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      li {
        list-style-type: none;
      }

      .box {
        width: 250px;
        margin: 100px auto;
      }

      .box li {
        float: left;
        width: 24px;
        height: 24px;
        background-color: pink;
        margin: 15px;
        /* 背景图使用一个精灵图 */
        background: url(images/sprite.png) no-repeat;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <script>
      var lis = document.querySelectorAll("li");
      for (var i = 0; i < lis.length; i++) {
        //index的负数就是精灵图的y左边
        var index = -i * 44;
        lis[i].style.backgroundPosition = "0 " + index + "px";
      }
    </script>
  </body>
</html>
```

上边的修改元素的样式都是通过**style属性**完成的。但在实际开发中，如果修改的样式比较多，功能比较复杂，就不建议使用style修改样式，而是通过`className`对象属性来修改样式。或者使用`classList`对象方法修改样式。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      /* 样式一 */
      .box {
        width: 200px;
        height: 200px;
      }
      /* 样式2通过js追加 */
      .box2 {
        background: red;
      }
    </style>
  </head>
  <body>
    <div class="box" id="root">hello</div>
    <script>
      //获取div元素
      var root = document.getElementById("root");

      //1.直接操作class属性，可直接读取打印
      console.log(root.className); // box
      //也可修改class属性值，这里的修改方式是追加一个class属性，该方式最常用，多一个class属性就可以让网页样式改变，这里的效果就是让div背景变为红色
      root.className = "box2"; //如果直接赋值新样式，这样会默认覆盖原本的样式，是错误的追加方式
      root.className = "box box2";
      root.className += " box2"; //必须有空格

      //2.通过classList操作class属性
      //添加属性
      root.classList.add("box3");
      console.log(root.className); // box box2 box3
      //同时添加多个属性
      root.classList.add("box4", "box5");
      console.log(root.className); //box box2 box3 box4 box5
      //删除属性
      root.classList.remove("box3");
      console.log(root.className); //box box2 box4 box5
      //属性有就删除，没有就添加
      root.classList.toggle("box2");
      console.log(root.className); //box  box4 box5
      //contains检查是否包含某个class
      if (root.classList.contains("box3")) {
        console.log("有box3属性");
      } else {
        console.log("没有box3属性");
      }
    </script>
  </body>
</html>
```

#### 3.2.4 创建元素

根据创建内容的不同，js中创建元素的方法主要有三种:

1. 创建**元素节点**(html标签)，`createElement`，创建节点默认是无效的，必须把节点添加到父元素上`appenChild`才可生效。
2. 创建**文本内容**，`createTextNode`,同样也需要`appenChild`添加到元素节点上才生效;
3. 创建**节点属性**，`createAttribute`,需要`setAttributeNode`才能把节点属性添加到元素节点上。

案例:在html文件中的div标签中添加一个p标签

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="contain">
      aaa
      <!-- 在此处添加p标签 -->
    </div>
    <script>
      //创建元素节点
      var text = document.createElement("p");
      //创建文本内容
      var content = document.createTextNode("文本内容");
      //将文本内容作为子元素添加到元素节点上
      text.appendChild(content);
      //创建属性内容，属性名与属性值
      var id = document.createAttribute("id");
      id.value = "root";
      //将属性内容添加到元素节点上
      text.setAttributeNode(id);
      console.log(text); //<p id="root">文本内容</p>

      //将创建的元素添加到html中
      //先查询出父元素节点
      var container = document.getElementById("contain");
      container.appendChild(text);
    </script>
  </body>
</html>
```

创建节点元素有两种追加方式，一个是`appendChild`在末尾添加，也可使用`insertBefore`在指定子元素的前面添加。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <ul>
      <li>123</li>
    </ul>
    <script>
      var ul = document.querySelector("ul");
      //创建元素节点
      var li = document.createElement("li");
      //1.在末尾添加
      ul.appendChild(li);
      //2.在指定子元素的前面添加
      var lili = document.createElement("li");
      //直接赋值也可插入元素文本内容
      lili.innerHTML = "张三";
      //参数1为插入元素，参数2为参考的子元素
      ul.insertBefore(lili, ul.children[0]);
    </script>
  </body>
</html>
```

案例：发布留言案例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      body {
        padding: 100px;
      }

      textarea {
        width: 200px;
        height: 100px;
        border: 1px solid pink;
        outline: none;
        resize: none;
      }

      ul {
        margin-top: 50px;
      }

      li {
        width: 300px;
        padding: 5px;
        background-color: rgb(245, 209, 243);
        color: red;
        font-size: 14px;
        margin: 15px 0;
      }
    </style>
  </head>
  <body>
    <textarea name="" id=""></textarea>
    <button>发布</button>
    <ul></ul>
    <script>
      var btn = document.querySelector("button");
      var textarea = document.querySelector("textarea");
      var ul = document.querySelector("ul");

      //创建元素节点
      btn.onclick = function () {
        //创建元素,也就是新增留言
        var li = document.createElement("li");
        if (textarea.value === "") {
          alert("请在文本域输入内容");
          return false;
        }
        li.innerHTML = textarea.value;
        textarea.value = ""; //清空文本内容
        //因为新发布的在上边，因此使用insertBefore
        ul.insertBefore(li, ul.children[0]);
      };
    </script>
  </body>
</html>
```

创建**元素节点**也有三种方式，但这三种方式对应的效果又有所不同：

1. `document.write()`,该方式是直接在文档中写入标签内容，但如果你的文档流执行完成，它会导致**页面全部重绘**；

   > 所谓页面重绘本质就是**write方法是覆写页面全部**，如果在页面绘制完毕后使用，就会覆盖原本页面的全部内容。html原本的标签head配置的内容也会消失，重新生成一个简单的html

2. `element.innerHTML`，该方式相当于是write的扩展版，但它**不会有页面重绘的问题**。但该方式使用+拼接字符串创建元素效率特别慢；

3. `document.createElement`,该方式创建最正规，代码结构最清晰，它**也不会有页面重绘的问题**，只是编写代码步骤比较麻烦一些。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <button>点击</button>
    <p>abc</p>
    <div class="inner"></div>
    <div class="create"></div>
    <script>
      // 1.document.write创建元素,直接在文档中写入标签内容，但如果你的文档流执行完成，它会导致页面全部重绘
      //页面重绘问题使用按钮点击创建元素最容易发现
      var btn = document.querySelector("button");
      btn.onclick = function () {
        document.write("<div>123</div>"); //效果为点击按钮后，原本页面的内容消失，只有新编写的div。
      };
      //除了使用按钮点击外，也可以使用window.onload()方法展示页面重绘的效果,该方法也是页面加载完时调用的
      // window.onload = function () {
      //   document.write("<div>123</div>");
      // };

      //2. innerHTML创建元素 它也是直接写入标签
      var inner = document.querySelector(".inner");
      inner.innerHTML += "<a href='#'>百度</a>";

      //3. createElement创建元素
      var create = document.querySelector(".create");
      var a = document.createComment("a"); //没有内容的a标签默认会被注释掉
      create.appendChild(a);
    </script>
  </body>
</html>
```

对比innerHTML与createElement效率。发现实际上innerHTML比createElement效率高，但由于使用+会导致效率变低，因此一般使用数组存储然后在一次性放入innerHTML中就可解决问题。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      //1.记录innerHTML运行时间的函数
      function fn1() {
        var d1 = +new Date(); //记录开始时间戳

        var str = "";
        for (var i = 0; i < 1000; i++) {
          document.body.innerHTML +=
            "<div style='width:100px;height:2px;border:1px solid blue;'>aa</div>";
        }

        var d2 = +new Date(); //记录结束时间
        console.log(d2 - d1);
      }

      //2.记录createElemrnt运行时间的函数
      function fn2() {
        var d1 = +new Date(); //记录开始时间戳

        for (var i = 0; i < 1000; i++) {
          var div = document.createElement("div");
          div.style.width = "100px";
          div.style.height = "2px";
          div.style.border = "1px solid red";
          div.innerHTML = "aa";
          document.body.appendChild(div);
        }

        var d2 = +new Date(); //记录结束时间
        console.log(d2 - d1);
      }

      //3.采取数组的形式解决拼接字符串的问题
      function fn3() {
        var d1 = +new Date(); //记录开始时间戳

        var arr = [];
        for (var i = 0; i < 1000; i++) {
          arr.push(
            "<div style='width:100px;height:2px;border:1px solid blue;'>aa</div>"
          );
        }

        document.body.innerHTML = arr.join("");
        var d2 = +new Date(); //记录结束时间
        console.log(d2 - d1);
      }

      fn1(); //运行时间：1800ms
      fn2(); //运行时间：5ms
      fn3(); //运行时间: 2ms 效率最高
    </script>
  </body>
</html>
```

#### 3.2.5 删除元素

`node.removeChild(child)`方法是从DOM中删除一个子节点，返回删除的节点。node一般为删除节点的父节点。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <script>
      //获取父节点
      var ul = document.querySelector("ul");
      //删除父元素下的第一个节点
      var clild = ul.removeChild(ul.children[0]);
      console.log(clild); //返回删除的节点<li>1</li>
    </script>
  </body>
</html>
```

案例：删除留言的案例,是之前的留言案例中扩展。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      body {
        padding: 100px;
      }

      textarea {
        width: 200px;
        height: 100px;
        border: 1px solid pink;
        outline: none;
        resize: none;
      }

      ul {
        margin-top: 50px;
      }

      li {
        width: 300px;
        padding: 5px;
        background-color: rgb(245, 209, 243);
        color: red;
        font-size: 14px;
        margin: 15px 0;
      }
      /* 删除按钮样式,让其浮动右边对齐 */
      li a {
        float: right;
      }
    </style>
  </head>
  <body>
    <textarea name="" id=""></textarea>
    <button>发布</button>
    <ul></ul>
    <script>
      var btn = document.querySelector("button");
      var textarea = document.querySelector("textarea");
      var ul = document.querySelector("ul");

      //创建元素节点
      btn.onclick = function () {
        //创建元素,也就是新增留言
        var li = document.createElement("li");
        if (textarea.value === "") {
          alert("请在文本域输入内容");
          return false;
        }
        //1.添加文本内容同时添加删除按钮节点，阻止链接跳转，一般添加javascript:void(0)或javascript:;。使用#号依然会跳转链接并在新链接后产生#号
        li.innerHTML = textarea.value + "<a href='javascript:;'>删除</a>";
        textarea.value = ""; //清空文本内容

        //因为新发布的在上边，因此使用insertBefore
        ul.insertBefore(li, ul.children[0]);

        //2.删除元素,给所有的删除链接都添加删除功能
        var as = document.querySelectorAll("a");
        for (var i = 0; i < as.length; i++) {
          as[i].onclick = function () {
            //爷爷节点删除父级节点,内部必须用this，因为i的作用域范围不允许
            ul.removeChild(this.parentNode);
          };
        }
      };
    </script>
  </body>
</html>
```

#### 3.2.6 复制元素

`node.cloneNode()`方法调用返回复制节点的一个副本。称为**复制元素节点**或者叫做**克隆元素节点**。

克隆有两种方式：

1. **浅层拷贝**，就是只克隆节点本身，不克隆里面的内容与子节点，可通过设置cloneNode()方法参数为**空**或**false**实现；
2. **深层拷贝**，就是不仅克隆节点本身，还会克隆里面的内容与子节点，可通过设置cloneNode()方法参数为**true**实现；

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li><button>按钮</button></li>
    </ul>
    <script>
      var ul = document.querySelector("ul");
      //复制元素，如果函数参数为空或false,复制的元素没有元素内容，是浅层复制，只克隆元素本身，不克隆里面的子节点
      var lili = ul.children[0].cloneNode();
      //在父元素上添加复制/克隆的元素
      ul.appendChild(lili);
      //复制元素，如果函数参数true,复制的元素就包含元素内容，是深层复制，不仅克隆元素本身，还克隆里面的子节点元素
      var lili2 = ul.children[0].cloneNode(true);
      ul.appendChild(lili2);

      var lili3 = ul.children[3].cloneNode(true);
      ul.appendChild(lili3);
    </script>
  </body>
</html>
```

**综合案例：动态生成表格(重要)**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      table {
        width: 500px;
        margin: 100px auto;
        border-collapse: collapse;
        text-align: center;
      }

      td,
      th {
        border: 1px solid #333;
      }

      thead tr {
        height: 40px;
        background-color: #ccc;
      }
    </style>
  </head>

  <body>
    <table cellspacing="0">
      <!--表格头部内容固定 -->
      <thead>
        <tr>
          <th>姓名</th>
          <th>科目</th>
          <th>成绩</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
    <script>
      // 1.先准备好表格的数据，采取对象形式存储
      var datas = [
        {
          name: "魏璎珞",
          subject: "JavaScript",
          score: 100
        },
        {
          name: "弘历",
          subject: "JavaScript",
          score: 98
        },
        {
          name: "傅恒",
          subject: "JavaScript",
          score: 99
        },
        {
          name: "明玉",
          subject: "JavaScript",
          score: 88
        },
        {
          name: "大猪蹄子",
          subject: "JavaScript",
          score: 0
        }
      ];
      var tbody = document.querySelector("tbody");
      //2. 创建行，根据对象数据数量确定行数
      for (var i = 0; i < datas.length; i++) {
        //创建tr行
        var tr = document.createElement("tr");
        tbody.appendChild(tr);
        //3.添加行元素,也就是创建单元格，单元格数由数据内容数决定
        for (var key in datas[i]) {
          var td = document.createElement("td");
          //设置td内容
          td.innerHTML = datas[i][key];
          tr.appendChild(td);
        }

        //4. 创建删除单元格，删除为一个链接
        var tds = document.createElement("td");
        tds.innerHTML = "<a href='javascript:;'>删除</a>";
        tr.appendChild(tds);
        //5.绑定删除事件,删除一行数据
        tds.onclick = function () {
          tbody.removeChild(this.parentNode);
        };
      }
      //删除按钮第二种写法,写法的不同注意在于绑定的时间不同
      // var as = document.querySelectorAll("a");
      // for (var i = 0; i < as.length; i++) {
      //   as[i].onclick = function () {
      //     tbody.removeChild(this.parentNode.parentNode);
      //   };
      // }
    </script>
  </body>
</html>
```

#### 3.2.7 获取元素位置

js操作元素除了查询元素，创建元素，修改元素内容外，还需要获得**元素在页面中的位置**。

其重要分为三大系列：offset系列、client系列以及scroll系列。

##### 3.2.7.1 offset

offset翻译过来就是偏移量的意思。使用offset属性可以**动态的**得到元素的位置(偏移)、大小等。

+ 获取元素距离**带有定位父元素**的位置
+ 获取元素自身的大小(宽度高度)

> **温馨提示：**
>
> offset返回的数值是不带单位的。
>
> offset获得的数值是动态的，也就是页面中CSS中数值发生改变，获得的数值就会改变。
>
> offset为什么要求父集元素有定位，是根据css浮动的规则，**没有定位的父级它是实际是没有位置的**

| 属性         | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| offsetHeight | 元素的CSS垂直高度(单位像素)，包括元素本身的高度、padding和border的高度 |
| offsetWidth  | 元素的CSS水平宽度(单位像素)，包括元素本身的宽度、padding和border的宽度 |
| offsetLeft   | 到定位父级左边界的间距                                       |
| offsetTop    | 到定位父级上边界的间距                                       |
| offsetParent | 返回作为该元素带有定位的父级元素，如果父级元素没有定位，则会继续向上查找直到body对象 |

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      .father {
        width: 200px;
        height: 200px;
        background-color: pink;
        margin: 100px;
      }
      .son {
        width: 100px;
        height: 100px;
        background-color: red;
        margin: 40px;
      }

      .father1 {
        /* 带有定位 */
        position: relative;
        width: 200px;
        height: 200px;
        background-color: pink;
        margin: 100px;
      }
      .son1 {
        width: 100px;
        height: 100px;
        background-color: red;
        margin: 40px;
      }
      .w {
        width: 200px;
        height: 200px;
        background-color: blue;
        margin: 0 auto 200px;
        padding: 20px;
        border: 10px solid red;
      }
    </style>
  </head>
  <body>
    <div class="father">
      <div class="son"></div>
    </div>

    <div class="father1">
      <div class="son1">
        <div class="test"></div>
      </div>
    </div>

    <div class="w"></div>
    <script>
      var father = document.querySelector(".father");
      var son = document.querySelector(".son");
      var son1 = document.querySelector(".son1");
      var father1 = document.querySelector(".father1");
      //1.没有父元素就直接获取距离body的偏移量
      console.log(father.offsetTop); //100,没有单位
      console.log(father.offsetLeft); //100

      //2.有父元素但父元素没有定位，也是直接获取距离body的偏移量
      console.log(son.offsetTop); //100,由于边距塌陷因此值为100
      console.log(son.offsetLeft); //140

      //3.有父元素但父元素有定位，也是直接获取距离父元素的偏移量
      console.log(son1.offsetTop); //0
      console.log(son1.offsetLeft); //40

      //4.当页面有滚动条时,offset的偏移量是实际元素距离页面顶部的偏移量,而不是距离页面上边界的位置.
      console.log(father1.offsetTop); //400,视图中没有100,实际为400
      console.log(father1.offsetLeft); //100

      //5.获取元素宽高,是实际元素宽高+padding+border的总宽高
      var w = document.querySelector(".w");
      console.log(w.offsetWidth); //200+20+20+10+10=260,但因为有误差,实际只有259.2,因此最终为259
      console.log(w.offsetHeight); //259

      //6.获取父元素,对比offsetParent与parentNode的区别
      console.log(son.offsetParent); //body
      console.log(son1.offsetParent); //father1
      console.log(son1.parentNode); //father1,返回最近父级,不管有没有定位

      var test = document.querySelector(".test");
      console.log(test.offsetParent); //father1
      console.log(test.parentNode); //son1
    </script>
  </body>
</html>
```

offset获取元素样式与style获取元素样式的区别：

1. offset可以获取**任意样式表**中的样式，style只能获取**行内样式表**中的样式；
2. offset获取的数值没有单位，style获取的样式有单位；
3. offsetWidth获取包含padding+border+width的值,style.width获取的是包含padding与border的值；
4. offsetWidth获取的属性说**只读属性**，只能获得值不能修改，style.width是**可读写属性**，即可读取也可修改值；

**总结：想要获取元素大小与位置，使用offset属性，而想要给元素赋值修改样式，则必须使用style属性。**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        width: 200px;
        height: 200px;
        padding: 10px;
        border: 10px red solid;
        background-color: red;
      }
    </style>
  </head>
  <body>
    <div class="box" style="width: 100px"></div>
    <script>
      var box = document.querySelector(".box");

      console.log(box.offsetWidth); //139,包含padding+bordor的值
      console.log(box.offsetHeight); //239
      console.log(box.style.width); //100px 只能获取行内样式
      console.log(box.style.height); //空值

      box.offsetWidth = "350px"; //无效,无法赋值
      box.style.height = "100px";
    </script>
  </body>
</html>
```

案例：获取鼠标在盒子内的坐标,公式：鼠标在页面中的位置-盒子在页面中的位置=鼠标在盒子中的位置

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        width: 200px;
        height: 200px;
        padding: 10px;
        border: 10px red solid;
        background-color: red;
         /* 要设置margin,盒子在边缘会有问题 */
        margin: 0 auto 100px;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
    <script>
      var box = document.querySelector(".box");

      //鼠标移动事件mousemove
      box.addEventListener("mousemove", function (e) {
        //pageX是鼠标在页面中位置
        var x = e.pageX - box.offsetLeft;
        var y = e.pageY - box.offsetTop;
        box.innerHTML = "x坐标:" + x + "px\n" + "y坐标:" + y + "px";
      });
    </script>
  </body>
</html>
```

##### 3.2.7.2 高级综合案例（建议最后看，因为包含后续知识）

**高级案例：模态框的拖拽功能**,拖拽功能对应三个事件，鼠标按下+鼠标移动+鼠标弹起

**核心公式：盒子的位置=鼠标位置（变化的）-鼠标在盒子内的坐标（不变的）**

```html
<!DOCTYPE html>
<html>
  <head lang="en">
    <meta charset="UTF-8" />
    <title></title>
    <style>
      .login-header {
        width: 100%;
        text-align: center;
        height: 30px;
        font-size: 24px;
        line-height: 30px;
      }

      ul,
      li,
      ol,
      dl,
      dt,
      dd,
      div,
      p,
      span,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      a {
        padding: 0px;
        margin: 0px;
      }

      .login {
        display: none;
        width: 512px;
        height: 280px;
        position: fixed;
        border: #ebebeb solid 1px;
        left: 50%;
        top: 50%;
        background: #ffffff;
        box-shadow: 0px 0px 20px #ddd;
        z-index: 9999;
        /* 让固定定位水平居中 */
        transform: translate(-50%, -50%);
      }

      .login-title {
        width: 100%;
        margin: 10px 0px 0px 0px;
        text-align: center;
        line-height: 40px;
        height: 40px;
        font-size: 18px;
        position: relative;
        /* 改变鼠标样式 */
        cursor: move;
      }

      .login-input-content {
        margin-top: 20px;
      }

      .login-button {
        width: 50%;
        margin: 30px auto 0px auto;
        line-height: 40px;
        font-size: 14px;
        border: #ebebeb 1px solid;
        text-align: center;
      }

      .login-bg {
        display: none;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0px;
        left: 0px;
        background: rgba(0, 0, 0, 0.3);
      }

      a {
        text-decoration: none;
        color: #000000;
      }

      .login-button a {
        display: block;
      }

      .login-input input.list-input {
        float: left;
        line-height: 35px;
        height: 35px;
        width: 350px;
        border: #ebebeb 1px solid;
        text-indent: 5px;
      }

      .login-input {
        overflow: hidden;
        margin: 0px 0px 20px 0px;
      }

      .login-input label {
        float: left;
        width: 90px;
        padding-right: 10px;
        text-align: right;
        line-height: 35px;
        height: 35px;
        font-size: 14px;
      }

      .login-title span {
        position: absolute;
        font-size: 12px;
        right: -20px;
        top: -30px;
        background: #ffffff;
        border: #ebebeb solid 1px;
        width: 40px;
        height: 40px;
        border-radius: 20px;
      }
    </style>
  </head>

  <body>
    <div class="login-header">
      <a id="link" href="javascript:;">点击，弹出登录框</a>
    </div>
    <!-- 模态框 -->
    <div id="login" class="login">
      <div id="title" class="login-title">
        登录会员
        <span
          ><a id="closeBtn" href="javascript:void(0);" class="close-login"
            >关闭</a
          ></span
        >
      </div>
      <div class="login-input-content">
        <div class="login-input">
          <label>用户名：</label>
          <input
            type="text"
            placeholder="请输入用户名"
            name="info[username]"
            id="username"
            class="list-input"
          />
        </div>
        <div class="login-input">
          <label>登录密码：</label>
          <input
            type="password"
            placeholder="请输入登录密码"
            name="info[password]"
            id="password"
            class="list-input"
          />
        </div>
      </div>
      <div id="loginBtn" class="login-button">
        <a href="javascript:void(0);" id="login-button-submit">登录会员</a>
      </div>
    </div>
    <!-- 遮盖层 -->
    <div id="bg" class="login-bg"></div>
    <script>
      // 1. 获取元素
      var login = document.querySelector(".login");
      var mask = document.querySelector(".login-bg");
      var link = document.querySelector("#link");
      var closeBtn = document.querySelector("#closeBtn");
      var title = document.querySelector("#title");
      // 2. 点击弹出层这个链接 link  让mask 和login 显示出来
      link.addEventListener("click", function () {
        mask.style.display = "block";
        login.style.display = "block";
      });
      // 3. 点击 closeBtn 就隐藏 mask 和 login
      closeBtn.addEventListener("click", function () {
        mask.style.display = "none";
        login.style.display = "none";
      });
      // 4. 开始拖拽,只有title部分才能进行拖拽
      // (1) 当我们鼠标按下， 就获得鼠标在盒子内的坐标
      title.addEventListener("mousedown", function (e) {
        //获得鼠标在盒子内的位置
        var x = e.pageX - login.offsetLeft;
        var y = e.pageY - login.offsetTop;
        // (2) 鼠标移动的时候，把鼠标在页面中的坐标，减去 鼠标在盒子内的坐标就是模态框的left和top值
        //鼠标移动必须在鼠标按下事件中。
        document.addEventListener("mousemove", move);

        function move(e) {
          //不能直接使用offsetLeft,它只有初始值,鼠标移动后offsetLeft值的不确定的,必须计算才能得到
          // login.style.left = login.offsetLeft + "px"; //错误
          //盒子的位置=鼠标位置-鼠标在盒子内的距离
          login.style.left = e.pageX - x + "px";
          login.style.top = e.pageY - y + "px";
        }
        // (3) 鼠标弹起，就让鼠标移动事件移除
        document.addEventListener("mouseup", function () {
          document.removeEventListener("mousemove", move);
        });
      });
    </script>
  </body>
</html>
```

**高级案例：仿京东放大镜效果**，html与CSS样式页面，js操作的核心是mask与大图片显示的样式

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>京东放大图片</title>
    <style>
      /* base.css */
      /*清除元素默认的内外边距  */
      * {
        margin: 0;
        padding: 0;
      }

      /*取消链接的下划线*/
      a {
        color: #666;
        text-decoration: none;
      }

      a:hover {
        color: #e33333;
      }

      body {
        background-color: #fff;
        font: 12px/1.5 "Microsoft YaHei", "Heiti SC", tahoma, arial,
          "Hiragino Sans GB", \\5B8B\4F53, sans-serif;
        color: #666;
      }

      /*清除浮动*/
      .clearfix:after {
        visibility: hidden;
        clear: both;
        display: block;
        content: ".";
        height: 0;
      }

      /* css common */
      .fl {
        float: left;
      }
      .fr {
        float: right;
      }
      @font-face {
        font-family: "icomoon";
        src: url("../fonts/icomoon.eot?7kkyc2");
        src: url("../fonts/icomoon.eot?7kkyc2#iefix")
            format("embedded-opentype"),
          url("../fonts/icomoon.ttf?7kkyc2") format("truetype"),
          url("../fonts/icomoon.woff?7kkyc2") format("woff"),
          url("../fonts/icomoon.svg?7kkyc2#icomoon") format("svg");
        font-weight: normal;
        font-style: normal;
      }
      .fr .icomoon {
        font-family: "icomoon";
        font-size: 16px;
        line-height: 26px;
      }
      /*版心*/
      .w {
        width: 1200px;
        margin: auto;
      }

      .de_container {
        margin-top: 20px;
      }

      .crumb_wrap {
        height: 25px;
      }

      .crumb_wrap a {
        margin-right: 10px;
      }

      .preview_wrap {
        width: 400px;
        height: 590px;
      }

      /* 图片 */
      .preview_img {
        position: relative;
        height: 398px;
        border: 1px solid #ccc;
      }
      /* 遮罩层，使用绝对定位 */
      .mask {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 300px;
        height: 300px;
        background: #fede4f;
        opacity: 0.5;
        border: 1px solid #ccc;
        cursor: move;
      }
      /* 放大的大图片div，也是使用绝对定位 */
      .big {
        display: none;
        position: absolute;
        left: 410px;
        top: 0;
        width: 500px;
        height: 500px;
        background-color: pink;
        z-index: 999;
        border: 1px solid #ccc;
        overflow: hidden;
      }
      /* 大图片的img */
      .big img {
        position: absolute;
        top: 0;
        left: 0;
      }

      .preview_list {
        position: relative;
        height: 60px;
        margin-top: 60px;
      }

      .list_item {
        width: 320px;
        height: 60px;
        margin: 0 auto;
      }

      .list_item li {
        float: left;
        width: 56px;
        height: 56px;
        border: 2px solid transparent;
        margin: 0 2px;
      }

      .list_item li.current {
        border-color: #c81623;
      }

      .arrow_prev,
      .arrow_next {
        position: absolute;
        top: 15px;
        width: 22px;
        height: 32px;
        background-color: purple;
      }

      .arrow_prev {
        left: 0;
        background: url(../img/arrow-prev.png) no-repeat;
      }

      .arrow_next {
        right: 0;
        background: url(../img/arrow-next.png) no-repeat;
      }

      /*  */
      .itemInfo_wrap {
        width: 718px;
      }

      .sku_name {
        height: 30px;
        font-size: 16px;
        font-weight: 700;
      }

      .news {
        height: 32px;
        color: #e12228;
      }

      .summary dl {
        overflow: hidden;
      }

      .summary dt,
      .summary dd {
        float: left;
      }

      .summary dt {
        width: 60px;
        padding-left: 10px;
        line-height: 36px;
      }

      .summary_price,
      .summary_promotion {
        position: relative;
        padding: 10px 0;
        background-color: #fee9eb;
      }

      .price {
        font-size: 24px;
        color: #e12228;
      }

      .summary_price a {
        color: #c81623;
      }

      .remark {
        position: absolute;
        right: 10px;
        top: 20px;
      }

      .summary_promotion {
        padding-top: 0;
      }

      .summary_promotion dd {
        width: 450px;
        line-height: 36px;
      }

      .summary_promotion em {
        display: inline-block;
        width: 40px;
        height: 22px;
        background-color: #c81623;
        text-align: center;
        line-height: 22px;
        color: #fff;
      }

      .summary_support dd {
        line-height: 36px;
      }

      .choose_color a {
        display: inline-block;
        width: 80px;
        height: 41px;
        background-color: #f7f7f7;
        border: 1px solid #ededed;
        text-align: center;
        line-height: 41px;
      }

      .summary a.current {
        border-color: #c81623;
      }

      .choose_version {
        margin: 10px 0;
      }

      .choose_version a,
      .choose_type a {
        display: inline-block;
        height: 32px;
        padding: 0 12px;
        background-color: #f7f7f7;
        border: 1px solid #ededed;
        text-align: center;
        line-height: 32px;
      }

      .choose_btns {
        margin-top: 20px;
      }

      .choose_amount {
        position: relative;
        float: left;
        width: 50px;
        height: 46px;
        background-color: pink;
      }

      .choose_amount input {
        width: 33px;
        height: 44px;
        border: 1px solid #ccc;
        text-align: center;
      }

      .add,
      .reduce {
        position: absolute;
        right: 0;
        width: 15px;
        height: 22px;
        border: 1px solid #ccc;
        background-color: #f1f1f1;
        text-align: center;
        line-height: 22px;
      }

      .add {
        top: 0;
      }

      .reduce {
        bottom: 0;
        /*禁止鼠标样式*/
        cursor: not-allowed;
        /* pointer  小手  move  移动  */
      }

      .addcar {
        float: left;
        width: 142px;
        height: 46px;
        background-color: #c81623;
        text-align: center;
        line-height: 46px;
        font-size: 18px;
        color: #fff;
        margin-left: 10px;
        font-weight: 700;
      }

      .product_detail {
        margin-bottom: 50px;
      }
    </style>
    <!-- 引入我们的js文件 -->
    <script src="detail.js"></script>
  </head>
  <body>
    <div class="de_container w">
      <!-- 面包屑导航 -->
      <div class="crumb_wrap">
        <a href="#">手机、数码、通讯</a> 〉 <a href="#">手机 </a> 〉
        <a href="#">Apple苹果 </a> 〉 <a href="#">iphone 6S Plus系类</a>
      </div>

      <div class="product_intro clearfix">
        <!-- 预览区域 -->
        <div class="preview_wrap fl">
          <div class="preview_img">
            <img src="upload/s3.png" alt="" />
            <div class="mask"></div>
            <div class="big">
              <img src="upload/big.jpg" alt="" class="bigImg" />
            </div>
          </div>

          <div class="preview_list">
            <a href="#" class="arrow_prev"></a>
            <a href="#" class="arrow_next"></a>
            <ul class="list_item">
              <li>
                <img src="upload/pre.jpg" alt="" />
              </li>
              <li class="current">
                <img src="upload/pre.jpg" alt="" />
              </li>
              <li>
                <img src="upload/pre.jpg" alt="" />
              </li>
              <li>
                <img src="upload/pre.jpg" alt="" />
              </li>
              <li>
                <img src="upload/pre.jpg" alt="" />
              </li>
            </ul>
          </div>
        </div>

        <div class="itemInfo_wrap fr">
          <div class="sku_name">
            Apple iPhone 6s（A1700）64G玫瑰金色 移动通信电信4G手机
          </div>
          <div class="news">
            推荐选择下方[移动优惠购],手机套餐齐搞定,不用换号,每月还有花费返
          </div>
          <div class="summary">
            <dl class="summary_price">
              <dt>价格</dt>
              <dd>
                <i class="price">￥5299.00 </i>

                <a href="#">降价通知</a>

                <div class="remark">累计评价612188</div>
              </dd>
            </dl>
            <dl class="summary_promotion">
              <dt>促销</dt>
              <dd>
                <em>加购价</em>
                满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换
                购热销商品 详情 》
              </dd>
            </dl>
            <dl class="summary_support">
              <dt>支持</dt>
              <dd>以旧换新，闲置手机回收 4G套餐超值抢 礼品购</dd>
            </dl>
            <dl class="choose_color">
              <dt>选择颜色</dt>
              <dd>
                <a href="javascript:;" class="current">玫瑰金</a>
                <a href="javascript:;">金色</a>
                <a href="javascript:;">白色</a>
                <a href="javascript:;">土豪色</a>
              </dd>
            </dl>
            <dl class="choose_version">
              <dt>选择版本</dt>
              <dd>
                <a href="javascript:;" class="current">公开版</a>
                <a href="javascript:;">移动4G</a>
              </dd>
            </dl>
            <dl class="choose_type">
              <dt>购买方式</dt>
              <dd>
                <a href="javascript:;" class="current">官方标配</a>
                <a href="javascript:;">移动优惠购</a>
                <a href="javascript:;">电信优惠购</a>
              </dd>
            </dl>
            <div class="choose_btns">
              <div class="choose_amount">
                <input type="text" value="1" />
                <a href="javascript:;" class="add">+</a>
                <a href="javascript:;" class="reduce">-</a>
              </div>
              <a href="#" class="addcar">加入购物车</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
```

核心js代码`detail.js`，鼠标放到图片上，会出现遮罩层与大图片，遮罩层会跟着鼠标在图片范围内移动，大图片也会随之展示部分内容。

```js
window.addEventListener("load", function () {
  // js文件要执行必须等页面元素加载完成后
  var preview_img = this.document.querySelector(".preview_img");
  var mask = this.document.querySelector(".mask");
  var big = this.document.querySelector(".big");

  //1.当鼠标经过preview_img就显示与隐藏mask遮罩层和big图片大盒子
  preview_img.addEventListener("mouseover", function () {
    mask.style.display = "block";
    big.style.display = "block";
  });

  preview_img.addEventListener("mouseout", function () {
    mask.style.display = "none";
    big.style.display = "none";
  });

  //2.把鼠标坐标给遮罩层是不合适的，而是把鼠标在盒子内的坐标给遮罩层才正确
  preview_img.addEventListener("mousemove", function (e) {
    //计算鼠标在盒子内的坐标,img的父对象都没有定位，因此它的offset就是到body的距离
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    //鼠标居中，因此需要减去盒子高度的一半
    var maskX = x - mask.offsetWidth / 2;
    var maskY = y - mask.offsetHeight / 2;
    //防止盒子超出图片范围,最小就是大于0，最大移动距离就是img大盒子减mask小盒子的距离，因为是正方形，因此实际maskMaxX=maskMaxY
    var maskMaxX = preview_img.offsetWidth - mask.offsetWidth;
    var maskMaxY = preview_img.offsetHeight - mask.offsetHeight;
    if (maskX <= 0) {
      maskX = 0;
    } else if (maskX >= maskMaxX) {
      maskX = maskMaxX;
    }
    if (maskY <= 0) {
      maskY = 0;
    } else if (maskY >= maskMaxY) {
      maskY = maskMaxY;
    }
    mask.style.left = maskX + "px";
    mask.style.top = maskY + "px";

    //3.大图片展示内容是根据比例展示的，公式为遮挡层移动距离/遮挡层最大移动距离=大图片移动距离/大图片最大移动距离
    var bigImg = document.querySelector(".bigImg");
    //大图最大移动距离
    var bigMaxX = bigImg.offsetWidth - big.offsetWidth;
    var bigMaxY = bigImg.offsetHeight - big.offsetHeight;
    var bigX = (maskX * bigMaxX) / maskMaxX;
    var bigY = (maskY * bigMaxY) / maskMaxY;
    //大图与遮罩层是反方向走的
    bigImg.style.left = -bigX + "px";
    bigImg.style.top = -bigY + "px";
  });
});
```

##### 3.2.7.3 client

client翻译过来就是客户端，使用client系列相关属性是用来获取**元素可视区的相关信息**。通过client属性可动态获取**元素的边框大小**与**元素大小**等。也是只返回数值没有单位。

| 属性属性 |                                                              |
| --- | --- |
| **clientHeight** | 获取**元素高度**，包括`padding`部分，不包括`border`与`margin`部分，如果有垂直滚动条还要减去滚动条的高度|
| **clientWidth** | 获取**元素宽度**，包括`padding`部分，不包括`border`与`margin`部分，如果有水平滚动条还要减去滚动条的宽度|
| clientTop        | 返回元素上边框的大小                                         |
| clientLeft       | 返回元素左边框的大小                                         |

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        width: 200px;
        height: 200px;
        padding: 10px;
        border: 10px solid pink;
        background-color: red;
      }
    </style>
  </head>
  <body>
    <div></div>
    <script>
      var div = document.querySelector("div");
      console.log(div.clientWidth); //220=200+10+10，不包含边框border的长度，但包含padding长度
      console.log(div.clientHeight); //220

      //返回元素边框
      console.log(div.clientTop); //10
      console.log(div.clientLeft); //10
    </script>
  </body>
</html>
```

案例：**淘宝flexible源码解读**

> **pageshow事件与load事件**
>
> 下面三种情况都会刷新页面触发load事件：
>
> 1. a标签的超链接
> 2. F5或者刷新按钮（强制刷新）
> 3. 前进后退按钮
>
> 但是火狐浏览器有个特点就是有个"往返缓存"，这个缓存中不仅保存页面数据，还保存DOM和JavaScript的状态；实际就是将整个页面都保存在内存里了。所以此时后退按钮是不能刷新页面的。
>
> 如果要后退触发事件，就要使用`pageshow`事件来触发。这个事件是只要页面显示就会触发，无论页面是否来自缓存。
>
> **在重新加载页面流程中，pageshow事件会在load事件后触发**。根据事件对象中的`persisted`来判断是否是缓存中的页面触发的pageshow事件。
>
> 注意该事件是的添加对象是window对象。

```js
(function flexible(window, document) {
  //获取html元素对象
  var docEl = document.documentElement;
  //dpr是物理像素比，pc端一般为1，移动端为2
  var dpr = window.devicePixelRatio || 1;

  // adjust body font size，设置页面body的字体大小
  function setBodyFontSize() {
    //先查看是否有body对象
    if (document.body) {
      //有设置字体大小12px，移动端是24px
      document.body.style.fontSize = 12 * dpr + "px";
    } else {
      //没有body对象，就等页面DOM元素加载完DOMContentLoaded再调用该函数
      document.addEventListener("DOMContentLoaded", setBodyFontSize);
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10 ,设置html元素的文字大小，rem是该文件最核心的设置
  function setRemUnit() {
    //html的宽度/10,也就是将屏幕设置10等分，使用clienWidth获取宽度
    var rem = docEl.clientWidth / 10;
    docEl.style.fontSize = rem + "px";
  }

  setRemUnit();

  // reset rem unit on page resize
  //当页面尺寸大小发生变化时，要重新设置rem
  window.addEventListener("resize", setRemUnit);
  //pageShow事件是页面重新加载时触发的事件，它与load事件不同在于即使有缓存也会调用。
  window.addEventListener("pageshow", function (e) {
    //e.persisted是true时，页面来自缓存也会调用setRemUnit重新设置rem
    if (e.persisted) {
      setRemUnit();
    }
  });

  // detect 0.5px supports 有些移动端浏览器不支持0.5像素的写法，该函数就是让其支持
  if (dpr >= 2) {
    var fakeBody = document.createElement("body");
    var testElement = document.createElement("div");
    testElement.style.border = ".5px solid transparent";
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);
    if (testElement.offsetHeight === 1) {
      docEl.classList.add("hairlines");
    }
    docEl.removeChild(fakeBody);
  }
})(window, document);
```

##### 3.2.7.4 scroll

scroll翻译过来就是滚动的意思。使用scroll系列相关的属性可以动态的得到该元素的大小、滚动距离等内容。

| 属性           | 属性                                                         |
| -------------- | ------------------------------------------------------------ |
| scrollHeight   | 元素总高度，它包括`padding`部分与**包括溢出不可见的内容**，但不包括`border`与`margin`部分 |
| scrollWidth    | 元素总宽度，它包括`padding`部分与**包括溢出不可见的内容**，但不包括`border`与`margin`部分 |
| **scrollLeft** | 元素的水平滚动条向右滚动的像素数量，也相当于元素被卷去的左部的宽度 |
| **scrollTop**  | 元素的垂直滚动条向下滚动的像素数量，也相当于元素被卷去的头部的高度 |

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        width: 200px;
        height: 200px;
        padding: 10px;
        border: 10px solid pink;
        background-color: red;
        /* 添加滚动条 */
        overflow: auto;
      }
    </style>
  </head>
  <body>
    <div>
      我是内容 我是内容 我是内容 我是内容 我是内容 我是内容我是内容 我是内容
      我是内容 我是内容 我是内容 我是内容我是内容 我是内容 我是内容 我是内容
      我是内容 我是内容我是内容 我是内容 我是内容 我是内容 我是内容 我是内容
      我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容
      我是内容 我是内容 我是内容 我是内容我是内容 我是内容 我是内容 我是内容
      我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容
      我是内容 我是内容 我是内容 我是内容 我是内容 我是内容
    </div>
    <script>
      var div = document.querySelector("div");
      //元素宽高，不包含border但依然包含padding的元素宽高，但如果元素内容溢出，它是包含溢出内容的宽高的
      console.log(div.scrollWidth); //220
      console.log(div.scrollHeight); //507

      //拖到滚动条事件scroll
      div.addEventListener("scroll", function () {
        console.log(div.scrollTop); //滚动条拖动就会跟随变化
        console.log(div.scrollLeft); //0
      });
    </script>
  </body>
</html>
```

案例：**仿淘宝固定右边侧边栏**。侧边栏本身是绝对定位，随着页面滚动到一定位置会变为固定定位，页面继续滚动，会让**返回顶部**显示出来

页面被卷去的头部使用`window.pageYoffset`获得，元素被卷去的头部使用`元素.scrollTop`。两者效果是一样的只是写法不同。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      .slider-bar {
        position: absolute;
        left: 50%;
        top: 300px;
        margin-left: 600px;
        width: 45px;
        height: 130px;
        background-color: pink;
      }

      .w {
        width: 1200px;
        margin: 10px auto;
      }

      .header {
        height: 150px;
        background-color: purple;
      }

      .banner {
        height: 250px;
        background-color: skyblue;
      }

      .main {
        height: 1000px;
        background-color: yellowgreen;
      }

      span {
        display: none;
        position: absolute;
        bottom: 0;
      }
    </style>
  </head>

  <body>
    <div class="slider-bar">
      <!-- 返回顶部开始是隐藏的 -->
      <span class="goBack">返回顶部</span>
    </div>
    <div class="header w">头部区域</div>
    <div class="banner w">banner区域</div>
    <div class="main w">主体部分</div>
    <script>
      var sliderbar = document.querySelector(".slider-bar");
      var banner = document.querySelector(".banner");
      // 获取main 主体元素
      var main = document.querySelector(".main");
      var goBack = document.querySelector(".goBack");
      //1. 获取数值,一定要写在滚动事件外部，防止值会随着页面滚动发生变化
      // banner.offestTop就是banner距离页面头部的距离，main.offsetTop就是mian距离页面头部的距离
      var bannerTop = banner.offsetTop;
      var mainTop = main.offsetTop;
      // 当我们侧边栏固定定位之后应该变化的数值
      var sliderbarTop = sliderbar.offsetTop - bannerTop;

      // 2. 页面滚动事件scroll
      document.addEventListener("scroll", function () {
        // window.pageYOffset 页面被卷去的头部
        // 3 .当我们页面被卷去的头部大于等于banner元素距离页面头部距离时，此时侧边栏就要改为固定定位
        if (window.pageYOffset >= bannerTop) {
          sliderbar.style.position = "fixed";
          //防止距离跳动，因为绝对定位原先本身有top值300，变为固定定位时要重新设置值才会不跳动
          sliderbar.style.top = sliderbarTop + "px";
        } else {
          sliderbar.style.position = "absolute";
          sliderbar.style.top = "300px";
        }
        // 4. 当我们页面滚动到main盒子，就显示goback模块
        if (window.pageYOffset >= mainTop) {
          goBack.style.display = "block";
        } else {
          goBack.style.display = "none";
        }
      });
      //5.当我们点击了返回顶部的模块按钮，就让窗口滚动到页面的最上边,也就是将window的scrollx与y都变为0
      goBack.addEventListener("click", function () {
        //方式1：直接跳转，没有动画，x,y不要单位
        // window.scroll(0, 0);
        //方式2：如果需要带有滚动的缓动动画,滚动了多少距离可通过window.pageYoffset得到
        animate(window, 0);
      });
        
      //动画函数,因为是上下滚动，使用pageYOffset
      function animate(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
          //步长值，优化步长值为整数，8.1就要取9，因为不能后退，向上取整。同理-8.1就要取-9，向下取整
          var step = (target - window.pageYOffset) / 10;
          step = step > 0 ? Math.ceil(step) : Math.floor(step);
          //超过400距离就结束
          if (window.pageYOffset == target) {
            //停止定时器
            clearInterval(obj.timer);
            //回调函数有才执行，说明该函数可写可不写
            if (callback) {
              callback();
            }
          }
          //替换步长值
          // obj.style.top = obj.offsetTop + step + "px"; //一定注意加单位px
          window.scroll(0, window.pageYOffset + step);
        }, 15);
      }
    </script>
  </body>
</html>
```

>**pageXoffset与pageYoffset有兼容性问题**，必须在IE9以后才被支持。在这之前的版本有两种写法：
>
>1. document.documentElement.scrollTop,这个是声明了DTD的写法
>2. document.body.scrollTop，这个是未声明DTD的写法
>
>DTD就是页面开始的<!DOCTYPE html>，也就是页面是否是HTML5。
>
>兼容的函数
>
>```js
>function getScroll() {
>  return {
>    left:window.pageXOffset ||document.documentElement.scrollLeft ||document.body.scrollLeft ||0,
>    top:
>      window.pageYOffset ||document.documentElement.scrollTop ||document.body.scrollTop ||0
>  };
>}
>//获取被卷去左边的距离的调用
>getScroll().left;
>```

三大系列总结对比：

+ offset返回宽高，是包含border的，client与scroll都不包含border，scroll系列又比client多了溢出内容的部分；
+ offset常用offsetLeft与offsetTop获取元素位置；
+ client常用于获取元素大小clientWidth、clientHeight；
+ scroll常用于获取滚动距离scrollTop、scrollLeft;
+ **页面的滚动距离**使用window.pageXOffset、window.pageYOffset获得。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      /* 编写div样式 */
      .box {
        width: 200px;
        height: 200px;
        border: 5px solid red;
        padding: 10px;
        margin: 20px;
        background: green;
      }
    </style>
  </head>
  <body>
    <div class="box" id="bb"></div>
    <script>
      var box = document.getElementById("bb");
      //1.使用client，获取元素宽高
      console.log(box.clientWidth); //220，不是200是还要加上左右padding的宽度
      console.log(box.clientHeight); //220
      //获取视口高度，也就是当前页面的窗口大小，屏幕高度，documentElement
      console.log(document.documentElement.clientHeight); //844
      //获取网页总高度，是页面所有元素的总高度，没有元素的空白部分不算，body
      console.log(document.body.clientHeight); //230
      console.log("-----------------------------------");
      //2.使用scroll，通常情况下效果与client一样，因为很少让内容隐藏不可见
      console.log(box.scrollWidth); //220
      console.log(box.scrollHeight); //220
      console.log(document.documentElement.scrollHeight); //844
      console.log(document.body.scrollHeight); //230
      console.log("-----------------------------------");
      //3.当页面有滚动条时，就可获得滚动高度与宽度，常见的用法是一边滚动一边用事件获取滚动距离。
      console.log(document.documentElement.scrollLeft); //0
      console.log(document.documentElement.scrollTop); //0
      console.log(window.pageYOffset); //0
      console.log("-----------------------------------");
      //4.offset，包含border的宽度
      console.log(box.offsetWidth); //230
      console.log(box.offsetHeight); //230
      console.log("-----------------------------------");
      //5. 定位距离父集元素的距离，没有父集元素默认找其上级直到body
      console.log(box.offsetLeft); //28，为28是因为默认浏览器自带8px的margin宽度
      console.log(box.offsetTop); //20，距离顶部20
    </script>
  </body>
</html>
```

### 3.3 事件

所谓事件，就是页面有一个按钮，你点击按钮页面就有相应的响应。而完成该事件的全部代码就叫做**事件处理程序**。前面的案例中也有简单使用。

事件主要由三部分（也称为**事件三要素**）组成：**事件源(大部分是按钮)**、**事件类型(按钮点击)**、**事件处理程序(点击按钮后调用的函数)**。

事件一般的执行步骤：

1. 获取事件源；
2. 注册事件，又称绑定事件；
3. 添加事件处理程序，也就是编写具体的函数内容。

#### 3.3.1 绑定事件

绑定事件又叫做注册事件，其主要有三种方式:

1. **HTML事件处理**，该方式缺点是js代码与html高度绑定，无法分割，不推荐。传统方式，事件名一般以`on`开头。
2. **DOM0级事件处理**，该方式优势是html与js分离，其缺点是**无法同时添加多个事件**，后续事件会覆盖前面的事件。**传统方式**，事件名一般以`on`开头。
3. **DOM2级事件处理**，该方式优点是一个按钮可以同时绑定多个事件，但写法相比DOM0要稍微复杂一点。**监听注册方式**，主要使用`addEventListener`函数绑定事件,是W3C推荐使用的。IE9之前不支持，使用`attachEvent`函数代替该方法。
4. `attachEvent`事件监听，该方法非标准，**不推荐使用,只在IE9之前的浏览器能使用**，使用方法与addEventListener类似，注意绑定事件类型也要以on开头。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- onClick属性绑定事件函数名 -->
    <button onClick="clickHandle()">按钮1</button>
    <button id="btn1">按钮2</button>
    <button id="btn2">按钮3</button>
    <button id="btn3">按钮4</button>

    <script>
      //1.html绑定
      function clickHandle() {
        console.log("html处理事件函数");
      }

      //获取元素
      var btn1 = document.getElementById("btn1");
      //2.DOM0绑定
      btn1.onclick = function () {
        console.log("DOM0级处理事件函数");
      };
      //会覆盖前面的事件
      btn1.onclick = function () {
        console.log("DOM0级处理事件函数2");
      };

      //3.DOM2绑定
      var btn2 = document.getElementById("btn2");

      //函数会按照注册顺序依次执行
      btn2.addEventListener("click", function () {
        console.log("DOM2级处理事件函数");
      });
      btn2.addEventListener("click", function () {
        console.log("DOM2级处理事件函数2");
      });

      //4.attachEvent，IE独有的方法
      var btn3 = document.getElementById("btn3");

      //函数会按照注册顺序依次执行
      btn3.attachEvent("onclick", function () {
        console.log("attachEvent处理事件函数");
      });
      btn3.attachEvent("onclick", function () {
        console.log("attachEvent处理事件函数2");
      });
    </script>
  </body>
</html>
```

解决IE浏览器兼容性问题函数，兼容性解决原则是先支持大多数浏览器再解决特殊浏览器

```js
function addEventListener(element, eventName, fn) {
  //判断当前浏览器是否支持addEventListener方法
  if (element.addEventListener) {
    element.addEventListener(eventName, fn); //第三个参数默认是false
  } else if (element.attachEvent) {
    element.attachEvent("on" + eventName, fn);
  } else {
    //相当于使用element.onclick=fn，传统方式
    element["on" + eventName] = fn;
  }
}
```

#### 3.3.2 删除事件

删除事件又叫解绑事件。主要也有两种方式：

1. HTML事件处理，由于跟html高度绑定，基本无法解绑，必须修改html内容才行，这里不讨论；
2. DOM0级事件处理，也就是传统方式解绑，直接**赋值null**即可；
3. DOM2级事件处理，也就是监听注册方式解绑，使用`事件源.removeEventListener`解绑,函数有两个参数，一个是事件类型，一个是绑定的函数名，因此该方式解绑不能解绑匿名函数。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        width: 100px;
        height: 100px;
        background-color: red;
      }
    </style>
  </head>
  <body>
    <div>1</div>
    <div>2</div>
    <div>3</div>

    <script>
      var divs = document.querySelectorAll("div");
      //1.传统方式解绑
      divs[0].onclick = function () {
        alert(11);
        divs[0].onclick = null;
      };

      //2.监听方式解绑,不能解绑匿名函数
      //fn就不是匿名函数
      divs[1].addEventListener("click", fn);
      function fn() {
        alert(22);
        divs[1].removeEventListener("click", fn);
      }

      //3.attachEvent，使用detachEvent移除
      divs[2].attachEvent("onclick", fn1);
      function fn1() {
        alert(33);
        divs[2].detachEvent("onclick", fn1);
      }
    </script>
  </body>
</html>
```

解决兼容性问题

```js
function removeEventListener(element, eventName, fn) {
  //判断当前浏览器是否支持removeEventListener方法
  if (element.removeEventListener) {
    element.addEventListener(eventName, fn); //第三个参数默认是false
  } else if (element.detachEvent) {
    element.detachEvent("on" + eventName, fn);
  } else {
    //相当于使用element.onclick=null，传统方式
    element["on" + eventName] = null;
  }
}
```

#### 3.3.3 鼠标事件

鼠标事件是指与鼠标相关的事件，具体的事件有:

| 事件函数名     | 触发条件                                                   |
| -------------- | ---------------------------------------------------------- |
| click          | 按下鼠标时触发                                             |
| dblclick       | 在同一元素上双击鼠标时触发(dbl就是double简写)              |
| mousedown      | 按下鼠标时触发                                             |
| mouseup        | 释放按下的鼠标时触发，也就是抬起鼠标                       |
| mousemove      | 当鼠标在节点内部移动时触发。鼠标持续移动该事件就会持续触发 |
| **mouseenter** | **鼠标进入一个节点时触发，进入子节点不会触发事件**         |
| mouseleave     | 鼠标离开一个节点时触发，离开父节点不会触发事件             |
| **mouseover**  | **鼠标进入一个父节点时触发，进入子节点会再次触发事件**     |
| mouseout       | 鼠标离开一个节点时触发，离开父节点会再次触发事件           |
| wheel          | 鼠标滚轮滚动时触发事件                                     |

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        width: 100px;
        height: 100px;
        background: red;
      }
    </style>
  </head>
  <body>
    <button id="btn1">单击</button>
    <button id="btn2">双击</button>
    <button id="btn3">鼠标按下</button>
    <button id="btn4">鼠标抬起</button>
    <div id="btn5" class="box">鼠标移动</div>

    <div id="btn6" class="box">鼠标进入</div>
    <div id="btn7" class="box">鼠标离开</div>
    <div id="btn8" class="box">鼠标进入子节点</div>
    <div id="btn9" class="box">鼠标离开父节点</div>

    <button id="btn10">鼠标滚轮滚动</button>

    <script>
      var btn1 = document.getElementById("btn1");
      var btn2 = document.getElementById("btn2");
      var btn3 = document.getElementById("btn3");
      var btn4 = document.getElementById("btn4");
      var btn5 = document.getElementById("btn5");
      var btn6 = document.getElementById("btn6");
      var btn7 = document.getElementById("btn7");
      var btn8 = document.getElementById("btn8");
      var btn9 = document.getElementById("btn9");
      var btn10 = document.getElementById("btn10");

      //使用DOM0方式绑定事件，事件名前一般都会添加on
      btn1.onclick = function () {
        console.log("点击事件");
      };

      btn2.ondblclick = function () {
        console.log("双击事件");
      };

      btn3.onmousedown = function () {
        console.log("鼠标按下事件");
      };
      btn4.onmouseup = function () {
        console.log("鼠标抬起事件");
      };

      btn5.onmousemove = function () {
        console.log("鼠标移动事件");
      };

      btn6.onmouseenter = function () {
        console.log("鼠标进入事件");
      };

      btn7.onmouseleave = function () {
        console.log("鼠标离开事件");
      };

      btn8.onmouseover = function () {
        console.log("鼠标进入子节点");
      };

      btn9.onmouseout = function () {
        console.log("鼠标离开父节点");
      };

      btn10.onwheel = function () {
        console.log("鼠标滚轮滚动事件");
      };
    </script>
  </body>
</html>
```

**对比`mouseenter/mouseleave`与`mouseover/mouseout`的区别**，产生区别的原因就是mouseenter与mouseleave函数**不会冒泡**。

mouseover与mouseout会冒泡,给父元素绑定事件，进入父元素会触发一次，当进入子元素时，会再次调用父元素事件再触发一次。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .root {
        width: 300px;
        height: 300px;
        background: #999;
      }
      .box {
        width: 100px;
        height: 100px;
        background: red;
      }
    </style>
  </head>
  <body>
    <div id="root1" class="root">
      <div id="box1" class="box"></div>
    </div>
    <br />
    <div id="root2" class="root">
      <div id="box2" class="box"></div>
    </div>

    <script>
      var root1 = document.getElementById("root1");
      var root2 = document.getElementById("root2");

      root1.onmouseenter = function () {
        console.log("鼠标1进入(父)");
      }; //触发一次

      root1.onmouseleave = function () {
        console.log("鼠标1离开(子)");
      }; //触发一次

      root2.onmouseover = function () {
        console.log("鼠标2进入(父子)");
      }; // 触发两次

      root2.onmouseout = function () {
        console.log("鼠标2离开(父子)");
      }; // 触发两次
    </script>
  </body>
</html>
```

#### 3.3.4 DOM事件流（事件冒泡-重要）

事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程就是**DOM事件流**。简单来说事件流就是描述事件在页面中的**传播过程**。**事件流**分为三个阶段：

1. **事件捕获阶段**：事件从**document**向下传递到目标元素，依次检查沿途节点是否有捕获监听器，是网景提出的。
2. **目标阶段**：事件到达目标元素并触发其监听器。
3. **事件冒泡阶段**：事件从目标元素向上传递到**document**，依次触发沿途节点的冒泡监听器，是IE最早提出的。

以注册一个div点击事件为例子,其流程如下：

1. 当点击事件触发时，是先从document从上往下找是否有点击事件绑定(事件捕获)；
2. 在div处找到，也就是找到目标，触发监听函数；
3. 然后从下往上依次执行找到的点击事件的函数（冒泡阶段），因为在找到div点击事件前，可能也会有其他点击事件。

![javascript三种事件模型 + Dom事件流 +事件委托-CSDN博客](./assets/757a2351f9414bdf8747d0be46554f3d.png)

> **注意：**
>
> js事件本身是要执行两个阶段，但js代码中只能执行捕获或者冒泡其中的一个阶段。
>
> `onclick`与`attachEvent`方式只能得到冒泡阶段。

`addEventListener`可以通过设置第三个参数为true得到事件**捕获阶段**调用的事件处理程序。设为false或不写默认,表示执行**冒泡阶段**调用的事件处理程序。

JS事件流运行流程案例，同时给父子节点都绑定点击事件，捕获阶段与冒泡阶段都绑定

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .father {
        overflow: hidden;
        width: 300px;
        height: 300px;
        margin: 100px auto;
        background-color: pink;
        text-align: center;
      }

      .son {
        width: 200px;
        height: 200px;
        margin: 50px;
        background-color: purple;
        line-height: 200px;
        color: #fff;
      }
    </style>
  </head>
  <body>
    <div class="father">
      <div class="son">son</div>
    </div>

    <script>
      var son = document.querySelector(".son");
      var father = document.querySelector(".father");
      //捕获阶段，先父后子
      son.addEventListener(
        "click",
        function () {
          alert("捕获阶段son");
        },
        true
      );

      father.addEventListener(
        "click",
        function () {
          alert("捕获阶段father");
        },
        true
      );

      //冒泡阶段，先子后父最后document
      son.addEventListener(
        "click",
        function () {
          alert("冒泡阶段son");
        },
        false
      );

      father.addEventListener(
        "click",
        function () {
          alert("冒泡阶段father");
        },
        false
      );
        
      document.addEventListener("click", function () {
        alert("冒泡阶段document");
      });
    </script>
  </body>
</html>
```

**事件流的原理其实就说明了一个问题，就是有时只点击了子元素，父元素的点击函数也会被执行的原因。**事件冒泡就是基于此的。

> **注意:**
>
> 事件捕获我们很少在代码中使用，大部分都是使用事件冒泡。
>
> 有些事件是没有冒泡的，例如：onblur、onfocus、onmouseenter、onmouseleave。

#### 3.3.5  Event事件对象（重要）

事件发生以后，会产生一个事件对象，它会作为**参数**传给事件的监听函数。也就是给事件绑定的函数的默认参数。事件对象必须有了事件后才存在，它是**系统自动创建**的，不需要我们传递参数。

事件对象中包含了一系列跟事件相关数据的集合。比如：鼠标点击事件对应鼠标对象`MouseEvent`其中就包含了鼠标相关信息，比如**鼠标点击的坐标**。如果是键盘事件对应键盘对象`KeyboardEvent `里面则包含了**键盘的信息**，判断用户按下的是哪个按键。

> IE678不支持`event`对象，它是通过`window.event`来获取事件对象的。
>
> 解决该问题代码使用逻辑或短路来解决，`event = event || window.event;`表示，支持event直接返回event，不支持则返回window.event。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <button id="btn">点击</button>

    <script>
      var btn = document.getElementById("btn");

      //event就是事件对象
      btn.onclick = function (event) {
        console.log(event);
      };
    </script>
  </body>
</html>
```

事件对象内容既有属性也有方法。其中常用的属性与方法有(通常只用加粗的)：

| 事件对象属性与方法      | 说明                                                         |
| ----------------------- | ------------------------------------------------------------ |
| **e.target**            | 返回触发事件的对象，this是绑定事件的对象，两者有时相同有时不同 |
| e.srcElement            | 返回触发事件的对象，非标准，ie678才使用                      |
| **e.type**              | 返回绑定的事件类型，比如click或者mouseover，没有on           |
| e.cancelBubble          | 该属性用于阻止事件冒泡，非标准，ie678才使用                  |
| e.returnVlaue           | 该属性阻止默认事件行为，非标准，ie678才使用                  |
| **e.preventDefault()**  | 方法阻止默认行为，让**a链接不跳转**或**表单按钮不提交**，标准 |
| **e.stopPropagation()** | 该方法阻止事件冒泡，标准                                     |

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <button id="btn">点击</button>

    <script>
      var btn = document.getElementById("btn");

      btn.onclick = function (event) {
        //target返回的当前事件所在的节点
        console.log(event.target); //返回按钮对象
        //可直接修改节点属性
        event.target.style.color = "red";
        event.target.innerHTML = "点击之后";

        //type属性返回内容是只读的,返回当前事件类型名
        console.log(event.type); //click
      };
    </script>
  </body>
</html>
```

区分target与this的案例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .father {
        overflow: hidden;
        width: 300px;
        height: 300px;
        margin: 100px auto;
        background-color: pink;
        text-align: center;
      }

      .son {
        width: 200px;
        height: 200px;
        margin: 50px;
        background-color: purple;
        line-height: 200px;
        color: #fff;
      }
    </style>
  </head>
  <body>
    <div>123</div>

    <ul>
      <li>a</li>
      <li>b</li>
      <li>c</li>
    </ul>

    <script>
      //this是target指向相同对象时
      var div = document.querySelector("div");
      div.addEventListener("click", function (e) {
        console.log(e.target);
        console.log(this);
        console.log(e.target === this); //true
      });

      //this是target指向不同对象时,点击ul中子元素li
      var ul = document.querySelector("ul");
      ul.addEventListener("click", function (e) {
        console.log(e.target); //返回的是li对象
        console.log(this); //返回的是ul对象
        console.log(e.currentTarget); //返回的是ul对象,跟this效果一样，返回绑定的事件对象
        console.log(e.target === this); //false
      });
    </script>
  </body>
</html>
```

`preventDefault`方法用于取消浏览器对当前事件的**默认行为**。比如点击a链接标签后就不会跳转链接了，form表单跳转也能阻止。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <a href="https://www.baidu.com" id="a">a标签链接</a>
    <a href="https://www.baidu.com" id="b">b标签链接</a>
    <a href="https://www.baidu.com" id="c">c标签链接</a>

    <script>
      //会跳转也会打印
      var a = document.getElementById("a");
      a.onclick = function () {
        console.log("点击了a链接");
      };

      //不会跳转只会打印
      var b = document.getElementById("b");
      b.addEventListener("click", function (event) {
        event.preventDefault(); //DOM标准写法
        console.log("点击了b链接");
      });

      //传统注册方式阻止默认行为的三种方法
      var c = document.getElementById("c");
      c.onclick = function () {
        //1.普通浏览器，依然可使用preventDefault
        // e.preventDefault();
        //2. 低版本浏览器IE678
        // e.returnValue = true;
        //3. 使用return false也可阻止默认行为，但return后面的代码会不再执行，只有在传统方式中才有效
        return false;
        console.log("点击了c链接"); //不会执行
      };
    </script>
  </body>
</html>
```

案例：鼠标**禁用右键菜单**与禁止选选中文字

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    一段默认的文字
    <script>
      //禁用右键菜单，使用contextmenu事件，并阻止其默认行为
      document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
      });

      //禁止选中文字，使用selectstart事件，并阻止其默认行为
      document.addEventListener("selectstart", function (e) {
        e.preventDefault();
      });
    </script>
  </body>
</html>
```

`stopPropagation`方法作用是阻止事件在DOM中继续传播，防止再触发定义在别的节点的监听函数。也就是**防止事件冒泡**，点击子元素不会再触发父集元素的事件。Propagation单词是传播的意思，该函数效果就是停止事件传播。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .root {
        width: 200px;
        height: 200px;
        background: red;
      }

      .box {
        width: 100px;
        height: 100px;
        background: green;
      }
    </style>
  </head>
  <body>
    <div id="root" class="root">
      <div id="box" class="box"></div>
    </div>

    <script>
      var root = document.getElementById("root");
      var box = document.getElementById("box");

      root.onclick = function () {
        console.log("root事件");
      };
      //默认运行的效果是点击box事件,root事件也会触发。
      box.onclick = function () {
        console.log("box事件");
      };

      //要想只触发box事件不触发root事件的写法如下
      box.onclick = function (e) {
        e.stopPropagation();
        console.log("box事件");
      };
    </script>
  </body>
</html>
```

阻止冒泡IE浏览器中的兼容性写法

```js
if (e && e.stopPropagation) {
  e.stopPropagation();
} else {
  //IE
  window.event.cancelBubble = true;
}
```

#### 3.3.6 事件代理(事件委托)

由于事件会在冒泡阶段向上传播到父节点,这种虽然会带来一些坏处，让多余的父级事件被触发。但也可以利用该特性，**把子节点的监听函数定义在父节点上**，由父节点的监听函数统一处理多个子元素的事件。这种方法就叫做**事件代理**(delegation)。

事件代理的好处就是只操作一次父级DOM就完成了子元素多个DOM的事件绑定，大大提高的程序性能。

案例:事件向上冒泡

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <ul id="list">
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <p id="pp">aaa</p>
    </ul>

    <script>
      var list = document.getElementById("list");
      var pp = document.getElementById("pp");
      
      //点击了子元素会同时触发父元素的点击事件
      list.onclick = function () {
        console.log("点击了父元素");
      };

      pp.onclick = function () {
        console.log("点击了子元素");
      };
    </script>
  </body>
</html>
```

事件代理实际应用，只点击li标签生效，p标签无效。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <ul id="list">
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <p>aaa</p>
    </ul>

    <script>
      var list = document.getElementById("list");

      list.addEventListener("click", function (e) {
        //利用target获取点击的子元素
        if (event.target.tagName.toLowerCase() === "li") {
          //打印子标签文本内容
          console.log(event.target.innerHTML);
        }
      });
    </script>
  </body>
</html>
```

#### 3.3.7 鼠标事件对象位置属性 

常用的鼠标事件对象的属性在页面中位置的属性

| 鼠标事件对象属性 | 说明                                    |
| ---------------- | --------------------------------------- |
| e.clientX        | 返回鼠标相对于浏览器窗口可视区的X坐标   |
| e.clientY        | 返回鼠标相对于浏览器窗口可视区的Y坐标   |
| e.pageX          | 返回鼠标相对于文档页面的X坐标,IE9+支持  |
| e.pageY          | 返回鼠标相对于文档页面的Y坐标，IE9+支持 |
| e.screenX        | 返回鼠标相对于电脑屏幕的X坐标           |
| e.screenY        | 返回鼠标相对于电脑屏幕的Y坐标           |

可视区指的就是浏览器窗口展示的页面内容的区域。

文档页面指的是整个html页面全部内容，页面有滚动时，距离就与浏览器窗口的距离不同。

电脑屏幕指的是整个电脑屏幕的大小。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        height: 3000px;
      }
    </style>
  </head>
  <body>
    <script>
      document.addEventListener("click", function (e) {
        console.log(e.clientX); //相对于浏览器窗口左上角X轴的距离，值会随着浏览器窗口大小变化，页面滚动时,不管页面滚动的距离
        console.log(e.clientY); //相对于浏览器窗口左上角Y轴的距离，值会随着浏览器窗口大小变化，页面滚动时,不管页面滚动的距离
        console.log("------------------");
        console.log(e.pageX); //相对于浏览器窗口左上角X轴的距离，页面有滚动时，会加上原本滚动的距离
        console.log(e.pageY); //相对于浏览器窗口左上角Y轴的距离，页面有滚动时，会加上原本滚动的距离
        console.log("------------------");
        console.log(e.screenX); //相对于电脑屏幕左上角X轴的距离，值永远固定，跟浏览器无关
        console.log(e.screenY); //相对于电脑屏幕左上角Y轴的距离，值永远固定，跟浏览器无关
      });
    </script>
  </body>
</html>
```

案例：图片跟随鼠标移动

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      img {
        /* 图片不占用位置,使用绝对定位 */
        position: absolute;
      }
    </style>
  </head>
  <body>
    <img src="images/angel.gif" alt="" />
    <script>
      var pic = document.querySelector("img");
      document.addEventListener("mousemove", function (e) {
        //每次鼠标移动1px都会触发事件,要获取到移动鼠标的位置,使用page坐标,因为图是相对网页页面的位置
        //设置位置必须添加单位px,如果要图片在鼠标中心,还需要减去图片长宽偏移量
        pic.style.left = e.pageX - 50 + "px";
        pic.style.top = e.pageY - 40 + "px";
      });
    </script>
  </body>
</html>
```

#### 3.3.8 键盘事件与键盘事件对象

键盘事件由用户敲击键盘触发 主要有keydown(键盘按下)、keypress(键盘按住)、keyup(键盘松开)三个事件。

| 事件函数名 | 触发条件                                                     |
| ---------- | ------------------------------------------------------------ |
| keydown    | 按下键盘时触发，按着不松开会一直触发。                       |
| keypress   | 按下有值的键时触发，按下**功能键**Ctrl、Alt、Shift、Meta，左右箭头等无值的键不会触发，对于有值的键是先触发keydown事件，再触发该事件，按着不松开也会一直触发。 |
| keyup      | 松开键盘时触发该事件。                                       |

三个事件的执行顺序为：keydown->keypress->keyup。

键盘事件对象`KeyboardEvent`有两个获取按下按键值的属性：

1. `keyCode`属性可以唯一标识按下的键ASCII值，keyup与keydown方法不区分大小写，也就是a与A的值都是65，keypress会区分大小写，也就是a是97，A是65。
2. `key`属性可返回按下键的字符值，区分大小写。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      document.addEventListener("keyup", function (e) {
        console.log(e.key);
        console.log(e.keyCode);
      });

      document.addEventListener("keydown", function (e) {
        console.log(e.key);
        console.log(e.keyCode);
      });

      document.addEventListener("keypress", function (e) {
        console.log(e.key);
        console.log(e.keyCode);
      });
    </script>
  </body>
</html>
```

案例：京东按键输入s键自动光标定位搜索框

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <input type="text" />

    <script>
      var search = document.querySelector("input");

      //只能使用keyup,使用keydown因为会多次触发,会导致按下s时会先聚焦,然后把s值输入到文本框中
      document.addEventListener("keyup", function (e) {
        //s键的ASCII码是83
        if (e.keyCode === 83) {
          search.focus(); //搜索框获得焦点
        }
      });
    </script>
  </body>
</html>
```

键盘事件在文本框中输入的效果，**keypress与keydown会有文本值输入延迟**，其原因是keydown与keypress是在**按键按下时**立马就会触发事件调用函数，这时文字还没落入文本框中，因此会有文本延迟。而keyup事件是**按键松开时**触发，这时文本已经文字已经落入文本框中了。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <input type="text" id="username" />

    <script>
      var username = document.getElementById("username");
      username.onkeydown = function (e) {
        console.log(e.target.value); //输出输入框文本值,结果会延迟,因为按下时当前按键的值没有输入
      };

      username.onkeypress = function () {
        console.log("keypress");
      };

      username.onkeyup = function (e) {
        console.log(e.target.value); //结果没有延迟
      };

    </script>
  </body>
</html>
```

案例：模拟京东快递单号查询

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      .search {
        position: relative;
        width: 178px;
        margin: 100px;
      }

      .con {
        display: none;
        position: absolute;
        top: -40px;
        width: 171px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        padding: 5px 0;
        font-size: 18px;
        line-height: 20px;
        color: #333;
      }

      /* css小三角形 */
      .con::before {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        top: 28px;
        left: 18px;
        border: 8px solid #000;
        border-style: solid dashed dashed;
        border-color: #fff transparent transparent;
      }
    </style>
  </head>
  <body>
    <div class="search">
      <div class="con">123</div>
      <input type="text" placeholder="请输入您的快递单号" class="jd" />
    </div>

    <script>
      var con = document.querySelector(".con");
      var jd_input = document.querySelector(".jd");

      //检测表单用户输入值,只能使用keyup,不能使用keydown与keypress
      jd_input.addEventListener("keyup", function () {
        //当文本框中没有值时,就隐藏放大框
        if (this.value == "") {
          con.style.display = "none";
        } else {
          //修改放大框的内容,并显示放大框
          con.innerText = this.value;
          con.style.display = "block";
        }
      });

      //文本框失去焦点,隐藏放大框
      jd_input.addEventListener("blur", function () {
        con.style.display = "none";
      });

      //文本框获得焦点,隐藏放大框
      jd_input.addEventListener("focus", function () {
        //文本内容为空获得焦点也不显示放大框
        if (this.value !== "") {
          con.style.display = "block";
        }
      });
    </script>
  </body>
</html>
```

#### 3.3.9 表单事件

表单事件是指在使用表单元素与输入框元素可以监听的一系列事件。

| 事件函数名 | 触发条件                                                     |
| ---------- | ------------------------------------------------------------ |
| input      | 当input、select、textarea的值发生变化时触发。对于复选框或单选框改变选项时，也会触发，其特点是会连续触发，input框每按下一次按键都会触发 |
| select     | 在input与textarea里选中文本时触发                            |
| change     | 当input、select、textarea的值发生变化时触发。它与input事件最大的不同就是不会连续触发，只有当全部修改完成时(点击回车或者失去焦点时)才会触发 |
| reset      | form表单事件，当表单重置时触发                               |
| submit     | form表单事件，当表单向服务器提交数据时触发。注意submit事件的对象是表单form对象并不是提交按钮。 |

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <input id="username" type="text" />
    <input id="password" type="text" />

    <script>
      var username = document.getElementById("username");
      var password = document.getElementById("password");

      username.oninput = function (e) {
        console.log(e.target.value); //输入什么打印什么
      };

      username.onselect = function () {
        console.log("选中了");
      };

      //失去焦点和回车时
      password.onchange = function (e) {
        console.log(e.target.value);
      };
    </script>
  </body>
</html>
```

表单对象的reset与submit方法。

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <form action="服务器地址" id="myForm" onsubmit="submitHandle">
      <!-- input必须有name属性才能提交数据 -->
      <input type="text" name="username" />
      <button id="resetBtn" type="button">重置</button>
      <!-- 该按钮默认绑定onsubmit方法 -->
      <button type="submit">提交表单</button>
    </form>

    <script>
      var resetBtn = document.getElementById("resetBtn");
      var myForm = document.getElementById("myForm");

      resetBtn.onclick = function () {
        myForm.reset(); //清空表单
      };

      function submitHandle() {
        console.log("提交数据");
      }
    </script>
  </body>
</html>
```

#### 3.3.10 表单光标事件

表单获得焦点事件时触发的事件是`onfocus`,失去焦点事件时触发的事件是`onblur`。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <input type="text" value="手机" />
    <script>
      var text = document.querySelector("input");
      text.onfocus = function () {
        console.log("得到了焦点");
      };

      text.onblur = function () {
        console.log("失去了焦点");
      };
    </script>
  </body>
</html>

```

案例：模仿京东搜索框，通过光标判断显示或隐藏文本框内容

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      input {
        color: #999;
      }
    </style>
  </head>
  <body>
    <input type="text" value="手机" />
    <script>
      var text = document.querySelector("input");
      //1.记录默认文本数据
      var oldData = text.value;
      text.onfocus = function () {
        //2.首次默认获得焦点就清空数据
        if (this.value === oldData) {
          this.value = "";
        }
        //4.获得焦点时，需要把文本框中的文字变黑
        this.style.color = "#333";
      };

      text.onblur = function () {
        //3.没有输入任何内容,或者只输入空格，就还原默认数据
        if (this.value.trim() === "") {
          this.value = oldData;
        }

        //5.失去焦点时，把文本框中的文字变浅
        this.style.color = "#999";
      };
    </script>
  </body>
</html>
```

案例：密码框验证信息

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        width: 600px;
        margin: 100px auto;
      }
      .message {
        display: inline-block;
        font-size: 12px;
        color: #999;
        background: url(images/mess.png) no-repeat left center;
        padding-left: 20px;
      }

      .wrong {
        color: red;
        background-image: url(images/wrong.png);
      }
      .right {
        color: green;
        background-image: url(images/right.png);
      }
    </style>
  </head>
  <body>
    <div>
      <input type="password" class="ipt" />
      <p class="message">请输入6-16位密码</p>
    </div>
    <script>
      //获取元素
      var ipt = document.querySelector(".ipt");
      var message = document.querySelector(".message");

      ipt.onblur = function () {
        //根据表单值长度判断
        if (ipt.value.length === 0) {
          console.log("aaa");
          message.className = "message";
          message.innerHTML = "请输入6-16位密码";
        } else if (ipt.value.length < 6 || ipt.value.length > 16) {
          message.className = "message wrong";
          message.innerHTML = "输入长度不正确";
        } else {
          message.className = "message right";
          message.innerHTML = "密码长度正确";
        }
      };
    </script>
  </body>
</html>
```

#### 3.3.11 排它思想(算法)

排它思想主要用于有同组元素，想要某一个元素实现特殊样式的场景。其实现流程是

1. 先把所有元素全部清除样式；
2. 然后给当前元素设置样式；
3. 注意顺序是不能颠倒的。

案例，给五个按钮添加点击后高亮变色的效果，但只有一个高亮，一个高亮前面高度的就会还原，使用js完成。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div>
      <button>按钮1</button>
      <button>按钮2</button>
      <button>按钮3</button>
      <button>按钮4</button>
      <button>按钮5</button>
    </div>
    <script>
      //获取元素
      var btns = document.getElementsByTagName("button");

      //使用for循环给全部按钮绑定事件
      for (var i = 0; i < btns.length; i++) {
        btns[i].onclick = function () {
          //因为不知道之前点击的按钮，就在赋值新值前把之前的全部还原，这就是排他思想
          for (var j = 0; j < btns.length; j++) {
            btns[j].style.backgroundColor = "";
          }
          this.style.backgroundColor = "yellow";
        };
      }
    </script>
  </body>
</html>
```

**重点案例：表单全选与取消全选**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }

      .wrap {
        width: 300px;
        margin: 100px auto 0;
      }

      table {
        border-collapse: collapse;
        border-spacing: 0;
        border: 1px solid #c0c0c0;
        width: 300px;
      }

      th,
      td {
        border: 1px solid #d0d0d0;
        color: #404060;
        padding: 10px;
      }

      th {
        background-color: #09c;
        font: bold 16px "微软雅黑";
        color: #fff;
      }

      td {
        font: 14px "微软雅黑";
      }

      tbody tr {
        background-color: #f0f0f0;
      }

      tbody tr:hover {
        cursor: pointer;
        background-color: #fafafa;
      }
    </style>
  </head>
  <body>
    <div class="wrap">
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" id="j_cbAll" />
            </th>
            <th>商品</th>
            <th>价钱</th>
          </tr>
        </thead>
        <tbody id="j_tb">
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>iPhone8</td>
            <td>8000</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>iPad Pro</td>
            <td>5000</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>iPad Air</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Apple Watch</td>
            <td>2000</td>
          </tr>
        </tbody>
      </table>
    </div>
    <script>
      //获取全选按钮框
      var j_cbAll = document.getElementById("j_cbAll");

      //获取下面所有的复选框
      var j_tbs = document.getElementById("j_tb").querySelectorAll("input");

      //1.注册全选框事件,下面的复选框状态跟着全选框一起变化
      j_cbAll.onclick = function () {
        //2. checked属性可以获得当前复选框的选中状态，选中为true,没选中为false
        for (var i = 0; i < j_tbs.length; i++) {
          j_tbs[i].checked = j_cbAll.checked;
        }
      };

      //3.给所有下面的复选框都绑定事件
      for (var i = 0; i < j_tbs.length; i++) {
        j_tbs[i].onclick = function () {
          //控制全选按钮是否被选中的变量,默认为选中状态，不直接修改状态是防止按钮状态修改过于频繁
          var flag = true;
          //4.每次点击都要循环检查下面所有的小按钮
          for (var i = 0; i < j_tbs.length; i++) {
            if (!j_tbs[i].checked) {
              //5.只要有一个按钮没被选中，上边的全选按钮都不选中
              flag = false;
              break; //退出for循环
            }
          }
          j_cbAll.checked = flag;
        };
      }
    </script>
  </body>
</html>
```

案例：表格隔行变色，表头不变色。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      table {
        width: 800px;
        margin: 100px auto;
        text-align: center;
        border-collapse: collapse;
        font-size: 14px;
      }

      thead tr {
        height: 30px;
        background-color: skyblue;
      }

      tbody tr {
        height: 30px;
      }

      tbody td {
        border-bottom: 1px solid #d7d7d7;
        font-size: 12px;
        color: blue;
      }

      .bg {
        background-color: pink;
      }
    </style>
  </head>
  <body>
    <div>
      <table>
        <thead>
          <tr>
            <th>代码</th>
            <th>名称</th>
            <th>最新公布净值</th>
            <th>累计净值</th>
            <th>前单位净值</th>
            <th>净值增长率</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>003526</td>
            <td>农银金穗3个月定期开放债券</td>
            <td>1.075</td>
            <td>1.079</td>
            <td>1.074</td>
            <td>+0.047%</td>
          </tr>
          <tr>
            <td>003526</td>
            <td>农银金穗3个月定期开放债券</td>
            <td>1.075</td>
            <td>1.079</td>
            <td>1.074</td>
            <td>+0.047%</td>
          </tr>
          <tr>
            <td>003526</td>
            <td>农银金穗3个月定期开放债券</td>
            <td>1.075</td>
            <td>1.079</td>
            <td>1.074</td>
            <td>+0.047%</td>
          </tr>
          <tr>
            <td>003526</td>
            <td>农银金穗3个月定期开放债券</td>
            <td>1.075</td>
            <td>1.079</td>
            <td>1.074</td>
            <td>+0.047%</td>
          </tr>
          <tr>
            <td>003526</td>
            <td>农银金穗3个月定期开放债券</td>
            <td>1.075</td>
            <td>1.079</td>
            <td>1.074</td>
            <td>+0.047%</td>
          </tr>
          <tr>
            <td>003526</td>
            <td>农银金穗3个月定期开放债券</td>
            <td>1.075</td>
            <td>1.079</td>
            <td>1.074</td>
            <td>+0.047%</td>
          </tr>
        </tbody>
      </table>
    </div>
    <script>
      //获取tbody里的所有tr元素，thead中不用
      var trs = document.querySelector("tbody").querySelectorAll("tr");

      //使用for循环绑定事件
      for (var i = 0; i < trs.length; i++) {
        //绑定鼠标经过事件
        trs[i].onmouseover = function () {
          this.className = "bg";
        };
        //绑定鼠标离开事件
        trs[i].onmouseout = function () {
          this.className = "";
        };
      }
    </script>
  </body>
</html>
```

案例：百度网页换皮肤

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      body {
        background: url("images/1.jpg") no-repeat center top;
      }

      li {
        list-style: none;
      }
      .baidu {
        overflow: hidden;
        margin: 100px auto;
        background-color: #fff;
        width: 410px;
        padding-top: 3px;
      }

      .baidu li {
        float: left;
        margin: 0 1px;
        cursor: pointer;
      }

      .baidu img {
        width: 100px;
      }
    </style>
  </head>
  <body>
    <div>
      <ul class="baidu">
        <li><img src="images/1.jpg" /></li>
        <li><img src="images/2.jpg" /></li>
        <li><img src="images/3.jpg" /></li>
        <li><img src="images/4.jpg" /></li>
      </ul>
    </div>
    <script>
      //获取元素
      var imgs = document.querySelector(".baidu").querySelectorAll("img");

      //使用for循环绑定事件
      for (var i = 0; i < imgs.length; i++) {
        imgs[i].onclick = function () {
          //给背景图片样式赋值,注意要用url包含
          document.body.style.backgroundImage = "url(" + this.src + ")";
        };
      }
    </script>
  </body>
</html>
```

### 3.4 BOM

#### 3.4.1 BOM的概述

BOM(Browser Object Model)即**浏览器对象模型**。它提供了独立于内容用于**与浏览器窗口进行交互的对象**。比如完成页面的前进后退、刷新以及滚动等功能。BOM是把浏览器看作一个对象，其顶级对象是`window`，主要用于做浏览器页面的交互。

BOM由一系列相关对象构成，并且每个对象都提供了很多方法与属性。但BOM缺乏标准，因此其兼容性不强。

BOM比DOM更大，document对象其实相当于window的子对象。其完整写法为`window.document`。

window对象是浏览器的顶级对象，它具有双重角色：

1. 它既是js访问浏览器的一个**接口**，
2. 它还是一个**全局对象**。定义在**全局作用域中的变量、函数**都会变成window对象的属性与方法。

```js
//全局变量
var num = 10;
console.log(num); //简写
console.log(window.num); //完整写法

//全局函数
function fn() {
    console.log('11');
}

fn(); //简写
window.fn(); //完整写法
```

前面学习`alert`以及`prompt`方法，其实都是window对象下的方法，只是省略了window。

window对象下，默认有个特殊属性`window.name`,因此声明变量名时一般不要使用name。

#### 3.4.2 页面加载事件 load

之前我们要求js代码必须写在html标签之后，是因为必须要有标签后才能绑定事件。但可以通过页面加载事件控制代码执行流程，从而实现js代码写在任意地方。

`window.onload`函数是指页面（窗口）加载事件，当文档内容完全加载完毕时（包括图像、脚本文件、CSS、文件等内容）才会触发该事件调用处理函数。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      //传统方式
      //js代码写在html标签之前也能正常执行,这种是传统事件绑定,因此只能绑定一次
      window.onload = function () {
        var btn = document.querySelector("button");
        btn.addEventListener("click", function () {
          alert("点击了");
        });
      };

      //第二次绑定会覆盖原有的内容
      window.onload = function () {
        alert(22);
      };
    </script>

    <button>按钮</button>
  </body>
</html>
```

使用传统方式绑定函数只能绑定一次，因此推荐使用监听函数的方式可不限次数绑定。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      //监听函数方式,可以绑定多次
      window.addEventListener("load", function () {
        var btn = document.querySelector("button");
        btn.addEventListener("click", function () {
          alert("点击了");
        });
      });

      //监听函数方式,可以绑定多次
      window.addEventListener("load", function () {
        alert(22);
      });
    </script>

    <button>按钮</button>
  </body>
</html>
```

`DOMContentLoaded`事件触发时，仅当DOM加载完毕就调用，不包括CSS、图片、flash等内容。它的优势在于网页有很多图片时，不需要等等图片加载完成就可以拥有js交互。它加载更早，因此会先于`onload`函数执行。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      //监听函数方式,可以绑定多次
      window.addEventListener("load", function () {
        alert(22); //后执行
      });

      //注意:DOMContentLoaded是属于document对象的事件
      document.addEventListener("DOMContentLoaded", function () {
        alert(33); //先执行
      });
    </script>
  </body>
</html>

```

#### 3.4.3 调整窗口大小事件 reszie

当浏览器窗口大小发生像素变化时触发的事件就是`resize`事件。该事件常用于完成**响应式布局**。`window.innerWidth`获取当前屏幕宽度。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        width: 200px;
        height: 200px;
        background-color: red;
      }
    </style>
  </head>
  <body>
    <script>
      window.addEventListener("load", function () {
        var div = document.querySelector("div");
        window.addEventListener("resize", function () {
          //当窗口宽度小于800,就隐藏div
          if (window.innerWidth <= 800) {
            div.style.display = "none";
          } else {
            div.style.display = "block";
          }
        });
      });
    </script>
    <div>div内容</div>
  </body>
</html>
```

#### 3.4.4 定时器

js提供**定时执行代码的功能**，就是**定时器(timer)**，window对象主要提供了`setTimeout`与`setInterval`这两个函数。它们向任务队列添加定时任务。

定时器中设置的函数我们称为**回调函数(callback)**,它并不是按照代码顺序执行的，而是需要等待一段时间后**再回头去调用的函数**。之前DOM中学习的绑定事件中的函数也是回调函数。

##### 3.4.4.1 setTimeout函数

setTimeout函数用来指定某个函数或某段代码，在多少**毫秒**之后执行。它返回一个整数，表示**定时器的id编号**，可用来取消该定时器。

setTimeout函数接受两个参数，第一个参数设置**要推迟执行的函数名或一段代码**(funcjcode)，第二个参数设置要**推迟执行的毫秒数**(delay)，如果省略默认为0ms。

```js
//最简单的定时器，给定时赋值是为了标识区分不同定时器，也方便取消定时器
var timer = setTimeout(function () {
  console.log("3秒后打印");
}, 3000);

//取消定时器
clearTimeout(timer);

//不使用匿名函数的写法
function callback() {
  console.log("aaa");
}

setTimeout(callback, 3000);
setTimeout("callback()", 3000); //这种写法不推荐
```

如果定时器中设置**回调函数是对象的方法**，那么其内部的`this`关键字指向**全局环境**而并不是定义时所在的那个对象

```js
var name = "张三";
var user = {
  name: "李四",
  getName: function () {
    //this永远指向当前调用对象
    console.log(this.name); //李四
  }
};

var user2 = {
  name: "王五",
  getName: function () {
    var temp = this; //临时保存注册时的this对象
    setTimeout(function () {
      console.log(this.name); //张三，这时代码以及执行完，this为全局对象
      console.log(temp.name); //王五
    }, 1000);
  }
};

user.getName(); 
user2.getName(); 
```

案例：5秒后自动关闭广告

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <img src="/images/ad.jpg" alt="" class="ad" />
    <script>
      var ad = document.querySelector(".ad");
      setTimeout(() => {
        ad.style.display = "none";
      }, 5000);
    </script>
  </body>
</html>
```

##### 3.4.4.2 setInterval函数

该函数的用法与setTimeout完全一致，区别仅仅在于setInterval是**指定某个任务每隔一段时间执行一次**，也就是无数次的定时执行。

```js
//每间隔一秒打印一次
var i = 0;
setInterval(function () {
  i++;
  console.log(i);
}, 1000);
```

案例:实现网页动画，div背景颜色逐渐变透明

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #someDiv {
        width: 100px;
        height: 100px;
        background: red;
        opacity: 1;
      }
    </style>
  </head>
  <body>
    <div id="someDiv"></div>

    <script>
      var div = document.getElementById("someDiv");
      //透明度 opacity:取值范围0-1
      var opacity = 1;
      var fade = setInterval(function () {
        if (opacity > 0) {
          opacity -= 0.05;
          div.style.opacity = opacity;
        } else {
          //取消定时器
          clearInterval(fade);
        }
      }, 60);
    </script>
  </body>
</html>
```

案例：京东倒计时案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div {
            margin: 200px;
        }
        
        span {
            display: inline-block;
            width: 40px;
            height: 40px;
            background-color: #333;
            font-size: 20px;
            color: #fff;
            text-align: center;
            line-height: 40px;
        }
    </style>
</head>
<body>
    <div>
        <span class="hour">1</span>
        <span class="minute">2</span>
        <span class="second">3</span>
    </div>
    <script>
        // 1. 获取元素 
        var hour = document.querySelector('.hour'); // 小时的黑色盒子
        var minute = document.querySelector('.minute'); // 分钟的黑色盒子
        var second = document.querySelector('.second'); // 秒数的黑色盒子
        var inputTime = +new Date('2026-7-20 18:00:00'); // 返回的是用户输入时间总的毫秒数,倒计时的结束时间
        countDown(); // 我们先调用一次这个函数，防止第一次刷新页面有空白 
        // 2. 开启定时器
        setInterval(countDown, 1000);

        function countDown() {
            var nowTime = +new Date(); // 返回的是当前时间总的毫秒数
            var times = (inputTime - nowTime) / 1000; // times是剩余时间总的秒数 
            var h = parseInt(times / 60 / 60 % 24); //时
            h = h < 10 ? '0' + h : h;
            hour.innerHTML = h; // 把剩余的小时给 小时黑色盒子
            var m = parseInt(times / 60 % 60); // 分
            m = m < 10 ? '0' + m : m;
            minute.innerHTML = m;
            var s = parseInt(times % 60); // 当前的秒
            s = s < 10 ? '0' + s : s;
            second.innerHTML = s;
        }
    </script>
</body>
</html>
```

案例：清除定时器

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <button class="begin">开启定时器</button>
    <button class="stop">停止定时器</button>
    <script>
      var begin = document.querySelector(".begin");
      var stop = document.querySelector(".stop");
      var timer = null; // 全局变量  null是一个空对象
      begin.addEventListener("click", function () {
        timer = setInterval(function () {
          console.log("ni hao ma");
        }, 1000);
      });
      stop.addEventListener("click", function () {
        clearInterval(timer);
      });
    </script>
  </body>
</html>
```

案例：短信倒计时按钮

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    手机号码： <input type="number" /> <button>发送</button>
    <script>
      var btn = document.querySelector("button");
      var time = 10; // 定义剩下的秒数
      btn.addEventListener("click", function () {
        btn.disabled = true;
        //先执行一次防止等待1秒
        btn.innerHTML = "还剩下" + time + "秒";
        time--;

        var timer = setInterval(function () {
          if (time == 0) {
            // 清除定时器和复原按钮
            clearInterval(timer);
            btn.disabled = false;
            btn.innerHTML = "发送";
            time = 10;
          } else {
            //修改button内容使用innerHTML
            btn.innerHTML = "还剩下" + time + "秒";
            time--;
          }
        }, 1000);
      });
    </script>
  </body>
</html>
```

##### 3.4.4.3 防抖(debounce)

防抖严格算起来是属于性能优化的知识，但实际上遇到的频率相当高，处理不当或者放任不管就容易引起浏览器卡死。

以滚动条监听为案例，在运行时会发现一个问题，就是监听函数执行频率太高。鼠标稍微滚动一下函数就会执行十多次。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      h3 {
        height: 500px;
      }
    </style>
  </head>
  <body>
    <h3>啊啊</h3>
    <h3>啊啊</h3>
    <h3>啊啊</h3>
    <h3>啊啊</h3>
    <h3>啊啊</h3>
    <h3>啊啊</h3>
    <h3>啊啊</h3>
    <h3>啊啊</h3>

    <script>
      //页面滚动监听事件
      window.onscroll = scrollHandle;
      function scrollHandle() {
        //打印滚动距离
        var scrollTop = document.documentElement.scrollTop;
        console.log(scrollTop);
      }
    </script>
  </body>
</html>
```

在实际需求中我们并不需要如此高频的反馈。因此我们采用的优化思路为:

1. 在第一次触发事件时，不立即执行函数而是给出一个期限值比如200ms；
2. 如果在200ms内没有再次触发滚动事件，就执行函数；
3. 如果在200ms内再次触发滚动事件，就取消当前计时，重新开始计时。

> 防抖作用就是对于短时间内连续高频触发的事件，防抖让其在某个时间期限内事件处理函数只执行一次。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      h3 {
        height: 500px;
      }
    </style>
  </head>
  <body>
    <h3>啊啊</h3>
    <h3>啊啊</h3>
    <h3>啊啊</h3>
    <h3>啊啊</h3>
    <h3>啊啊</h3>
    <h3>啊啊</h3>
    <h3>啊啊</h3>
    <h3>啊啊</h3>

    <script>
      //防抖函数
      function debounce(fn, delay) {
        var timer = null;
        //闭包写法
        return function () {
          //存在就清空定时器
          if (timer) {
            clearTimeout(timer);
          }
          //不存在就开启定时器
          timer = setTimeout(fn, delay);
        };
      }
      //页面滚动监听事件，防抖动调用
      window.onscroll = debounce(scrollHandle, 200);

      function scrollHandle() {
        //打印滚动距离
        var scrollTop = document.documentElement.scrollTop;
        console.log(scrollTop);
      }
    </script>
  </body>
</html>
```

> 防抖实际应用场景
> 页面resize事件。做页面适配的时候，需要根据**最终呈现的页面情况**进行渲染，这种就使用防抖，因为只需要判断最后一次的变化情况即可。

##### 3.4.4.4 节流(throttle)

节流也属于性能优化的知识。遇到的频率也很高，放任不管也会让浏览器卡死。
以上述的防抖案例来说，如果在限定时间200ms内，不断的触发滚动事件(就是一直拖动滚动条)，这样就会出现只要不停止就永远不会触发打印滚动距离函数的情况，但实际我们还是需要在一定时间间隔后给用户反馈。
解决该问题的实现思路就是:设计一个类似控制阀门的定期开放的函数，也就是让函数执行一次后，在某段时间内暂时失效，过段时间又重新激活。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      h3 {
        height: 500px;
      }
    </style>
  </head>
  <body>
    <h3>啊啊</h3>
    <h3>啊啊</h3>
    <h3>啊啊</h3>
    <h3>啊啊</h3>
    <h3>啊啊</h3>
    <h3>啊啊</h3>
    <h3>啊啊</h3>
    <h3>啊啊</h3>

    <script>
      //节流函数
      function throttle(fn, delay) {
        //valid就是验证开关
        var valid = true;
        return function () {
          //valid为false就表示定时器已经打开，就不做任何事直接返回
          if (!valid) {
            return false;
          }
          //valid为true表示定时器没打开，先设置为false表示打开定时器
          valid = false;
          setTimeout(function () {
            fn();
            //函数执行完成时，定时器就完成，valid变为true，表示定时器关闭
            valid = true;
          }, delay);
        };
      }

      //页面滚动监听事件
      window.onscroll = throttle(scrollHandle, 200);
      function scrollHandle() {
        //打印滚动距离
        var scrollTop = document.documentElement.scrollTop;
        console.log(scrollTop);
      }
    </script>
  </body>
</html>
```

> 节流实际应用场景
> 搜索框input事件，例如要支持**输入实时搜索**就使用节流方案，或者实现输入间隔大于某个时间就当做用户输入完成，然后开始搜索。

#### 3.4.5 this指向问题

this的指向在函数定义时是确定不了的，只有在执行函数时才能确定this指向谁。一般情况下，this始终指向**最终调用它的对象**。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <button>按钮</button>
    <script>
      //1.在全局作用域下或者普通函数中this指向全局对象window
      console.log(this); //window
      function fn() {
        console.log(this); //window
      }
      fn(); //相当于window.fn(),调用的对象是window

      setTimeout(function () {
        console.log(this); //定时器一般调用的对象window，因此this是window
      });

      //2.在对象方法中，this指向调用的对象。
      var o = {
        sayHi: function () {
          console.log(this); //this指向对象o
        }
      };
      o.sayHi();

      //3.在回调函数中，this指向调用回调函数的对象
      var btn = document.querySelector("button");
      btn.addEventListener("click", function () {
        console.log(this); //这里是按钮调用回调函数，this指向btn对象
      });

      //4.在构造函数中
      function Fun() {
        console.log(this); //this指向fun对象
      }
      var fun = new Fun(); //构造函数实例化会开辟新空间，fun对象指向该空间

      //5.当对象方法中使用定时器，this指向的
      var name = "张三"; //全局对象
      var user2 = {
        name: "王五",
        getName: function () {
          var temp = this; //定时器外，this指向调用的对象user2，临时保存注册时的this对象
          setTimeout(function () {
            console.log(this.name); //张三，这时代码以及执行完，this为全局对象，window.name
            console.log(temp.name); //王五
          }, 1000);
        }
      };
      user2.getName();

      //6.同理，在回调函数中使用定时器，this指向是window对象
      btn.addEventListener("click", function () {
        console.log(this); //定时器外，指向btn对象
        setTimeout(function () {
          console.log(this); //指向window对象
        }, 1000);
      });
    </script>
  </body>
</html>
```

#### 3.4.6 JS执行机制（重要）

##### 3.4.6.1 单线程

JS语言是**单线程语言**。也就是**同一时间只能做一件事**，无法并发执行程序。其产生的原因主要是JS语言是为处理页面中用户的交互以及操作DOM而诞生的。比如我们要进行DOM元素的添加与删除操作，这是不能同时执行的，必须先添加后删除，因此只能使用单线程。

单线程就意味着**所有的任务都需要排队**，前一个任务完成才能执行后一个任务。这样会导致如果一个任务执行时间过长，就会让后面的任务无法执行，从而产生页面渲染不连贯，出现页面阻塞的感觉。

JS为了解决该问题，利用多核CPU的计算能力，HTML5提出了Web Worker标准，允许JS脚本创建多个线程。于是，JS中就出现**同步**与**异步**。

+ **同步**：前一个任务执行完成后才执行下一个任务，程序执行顺序与其编写顺序是一致的，出现花时间的任务也会等待执行完后才执行后面。
+ **异步**：在出现花费时间多的任务或需要等待的任务时，同时做其他的任务，两者同时执行的。JS中采用的策略是会先保存等待任务，然后执行同步任务，等条件满足时在执行保存的任务。这种执行方式因为**CPU执行速度过快**，会看起来像两者是同时执行的。

> **温馨提示**
>
> 虽然JS可以创建多线程，但它依然是单线程执行程序，也就是说即使有多个线程，它一次也只会执行一个线程。未执行的线程会保存到**消息（任务）队列**中。
>
> 同步与异步本质上区别只是执行顺序不同而已。它们执行的所有任务其实是一样的。

##### 3.4.6.2 同步与异步任务

JS为了防止任务排队等待时间过长，将任务分为两类：

+ **同步任务**：所有的同步任务都在主线程上执行。形成一个**执行栈**。
+ **异步任务**：JS的异步任务大部分是通过**回调函数**实现的，异步任务相关的回调函数是添加到**任务队列**中处理。一般而言异步任务三种类型：
  1. **普通事件**，例如：click，resize等；
  2. **资源加载**，例如：load,error等；
  3. **定时器**，包括setInterval、setTimeout等。

##### 3.4.6.3 JS任务执行流程

JS中把任务区分好后，就按照下面流程执行：

1. 先将**所有任务**按照代码顺序依次放入**执行栈**中执行；
2. 遇到同步任务直接执行；
3. 当遇到异步任务时，先交给**异步进程处理程序**判断，判断是否满足执行异步任务条件，满足就会将异步任务的**回调函数**放入**任务队列**中进入**等待执行状态**，不满足就一直放在异步处理程序中等待条件满足；
4. 一旦执行栈中的所有同步任务执行完毕，js主线程就会去查询任务队列，按次序（**先进先出**）读取任务队列中的回调函数，这时回调函数的等待状态就会结束，进入执行栈中执行，执行完成就将回调函数从任务队列中移除；
5. 主线程查询任务队列的过程会一直循环，直到所有代码都执行完成。这个循环的过程我们称为**事件循环**。

> **事件循环（event loop)**是指主线程不断重复获得任务、执行任务、再次获取任务、再执行的机制。
>
> 事件循环能保证所有异步任务都会被执行。

执行流程图

![image-20260721224535745](./assets/image-20260721224535745.png)

案例：单个异步任务,执行结果都是先完成所有同步任务，再执行异步任务，即使异步任务不需要等待时间。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <script>
      //打印顺序为1 2 3,这里JS就是异步执行的，出现等待的任务先执行后面的再执行等待任务
      console.log(1);
      setTimeout(function () {
        console.log(3);
      }, 1000);
      console.log(2);

      //打印顺序为11 22 33，异步执行的，出现等待的任务虽然是0秒，但JS依然会保存执行后面的
      console.log(11);
      setTimeout(function () {
        console.log(33);
      }, 0); //定时器为0秒
      console.log(22);
    </script>
  </body>
</html
```

案例：多个异步任务

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <script>
      //打印顺序为1 2 3 click或者3秒内点击，1 2 click 3
      console.log(1);
      document.onclick = function () {
        console.log("click");
      };
      console.log(2);
      setTimeout(function () {
        console.log(3);
      }, 3000);
    </script>
  </body>
</html>
```

上述任务执行流程图如下：

1. 同步任务打印1，2必然先执行完成；
2. 遇到异步任务先放入异步处理程序，点击条件不满足或者三秒不到时，异步任务都不处理；
3. 当3秒到时，异步任务会把定时器的回调函数放入消息队列中；
4. 这时主执行栈已经执行完所有任务，开始**事件循环**询问消息队列，发现有回调函数就会执行打印3；
5. 之后如果点击鼠标，那异步任务会把点击事件的回调函数放入消息队列中；
6. 事件循环发现回调函数会执行打印click，该循环会无限循环下去直到程序结束。

![image-20260721223026103](./assets/image-20260721223026103.png)

#### 3.4.7 location对象

location对象是window对象下的一个**location属性**，其主要用于**获取或设置浏览器窗体的URL**，并且可以**解析URL**。因为该属性返回的是一个对象，因此我们也称其为**location对象**。

URL又叫**统一资源定位符**(Uniform Resource Locator，URL),是互联网上标准资源地址，也就是网址，它是在浏览器中地址栏中显示的。

URL的组成,以百度为例：http://www.baidu.com/index.html?name=andy&age=18#link

| 组成             | 说明                                                         |
| ---------------- | ------------------------------------------------------------ |
| protocol(协议名) | 通信协议，常用的有http、https、ftp、maito等。案例中是**http**。 |
| host             | 主机域名，也就是服务器电脑的地址。案例中是www.baidu.com      |
| prot             | 端口号,指的具体主机中的哪个程序，一个程序一个端口号。上述案例中没写默认是80端口。 |
| path             | **路径**，由零个或多个/分隔开的字符串，一般用来表示主机端口号对应程序中一个目录或文件地址。案例中是**index.html** |
| query            | **参数**，又叫查询字符串，通常以？开头&分隔。案例中是**?name=andy&age=18** |
| fragment         | 片段 #后面的内容 常用于链接或者锚点指定文件的特定位置。案例中是**#link** |

location对象**常见属性**，与URL组成是相互对应的。

| location属性        | 返回值                               |
| ------------------- | ------------------------------------ |
| **location.href**   | 获取或设置整个URL值                  |
| location.host       | 返回主机域名                         |
| location.port       | 返回主机端口号，如果未写返回空字符串 |
| location.pathname   | 返回路径                             |
| **location.search** | 返回参数                             |
| location.hash       | 返回片段，返回带#的字符串            |

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <script>
      console.log(window.location);
      //可省略window对象直接获取location对象
      //获取location对象具体的属性值，以http://127.0.0.1:5500/index.html?uname=aaa&age=11#hash为例
      console.log(location.href); //http://127.0.0.1:5500/index.html?uname=aaa&age=11#hash
      console.log(location.protocol); //http:
      console.log(location.host); //127.0.0.1:5500
      console.log(location.port); //5500
      console.log(location.pathname); ///index.html
      console.log(location.search); //index.html?uname=aaa&age=11:20
      console.log(location.hash); //#hash
    </script>
  </body>
</html>
```

href属性不仅可以获取完整url值，还可以**直接设置链接用于跳转页面**。

案例一：五秒后跳转页面

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <button>点击跳转页面</button>
    <div></div>
    <script>
      var btn = document.querySelector("button");
      var div = document.querySelector("div");

      btn.addEventListener("click", function () {
        location.href = "http://www.baidu.com";
        //重置时间，防止跳转后返回失效
        number = 5;
      });
      //定时参数，默认有1秒延迟，因此计时器初始值设置为4
      var timer;
      var number = 4;
      div.innerHTML = "你将在" + (number + 1) + "秒中后跳转页面";
      timer = setInterval(() => {
        if (number == 0) {
          location.href = "http://www.baidu.com"; //5秒后跳转到百度页面
          clearInterval(timer);
        } else {
          div.innerHTML = "你将在" + number + "秒中后跳转页面";
          number--;
        }
      }, 1000);
    </script>
  </body>
</html>
```

案例二：获取URL参数数据，也就是不同页面url传参,因此有两个html页面

login.html页面

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>登录页面</title>
  </head>
  <body>
    <!-- login页面与index.html位于同一目录下，action才能生效,method必须设置为get-->
    <form action="index.html" method="get">
      用户名：<input type="text" name="uname" />
      <input type="submit" value="登录" />
    </form>
  </body>
</html>
```

index.html响应页面

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>index页面</title>
  </head>

  <body>
    <div></div>
    <script>
      var div = document.querySelector("div");
      //获取url中search参数,substr去除?号，split分割字符串
      var querys = location.search.substr(1).split("=");

      //url默认会使用encodeURIComponent()函数对中文参数进行编码
      //针对中文需要进行解码
      var result = decodeURIComponent(querys[1]); //
      div.innerHTML = result + " 欢迎您！";
    </script>
  </body>
</html>
```

location对象**常用方法**

| location方法          | 返回值                                                       |
| --------------------- | ------------------------------------------------------------ |
| **location.assign()** | 跟href一样，可以跳转页面(也称为重定向页面),**记录了浏览历史**，**可回退**。 |
| location.replace()    | 替换当前页面，因为**不记录历史**，所以**不能后退**。         |
| location.reload()     | 重新加载页面，相当于点击了**刷新页面**的按钮或f5,如果参数为true，表示**强制刷新**ctrl+f5 |

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>index页面</title>
  </head>

  <body>
    <button>点击1</button>
    <button>点击2</button>
    <button>点击3</button>
    <script>
      var btns = document.querySelectorAll("button");
      btns[0].addEventListener("click", function () {
        //记录了浏览历史，可回退
        location.assign("http://www.baidu.com");
      });

      btns[1].addEventListener("click", function () {
        //不记录浏览历史，不可回退
        location.replace("http://www.baidu.com");
      });

      btns[2].addEventListener("click", function () {
        //刷新页面，默认为false
        location.reload();
        //强制刷新页面，强制刷新是不会读取页面缓存数据的
        // location.reload(true);
      });
    </script>
  </body>
</html>
```

#### 3.4.8 navigator对象

同一个网址，是否可以实现根据打开网址的终端不同显示不同页面的效果。例如：京东网址如果使用PC端打开，就是显示PC端页面，如果手机端打开就显示手机端页面。答案是肯定的，使用winodow对象中的**navigator对象**就可完成。

navigator对象中包含了有关浏览器的信息，它有很多属性，其中最常用的就是`userAgent`，该属性就可以返回由客户端发送给服务器的user-agent头部的值。也就是使用什么浏览器打开的页面。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      console.log(navigator.userAgent);
      //判断是否为移动端的正则表达式
      if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|
          ios|iPad|Android|Mobile|BlackBerry|
          IEMobile|MQQBrowser|JUC|Fennec|wOSBorwser|BrowserNG|
          WebOS|Symbian|Windows Phone)/i)) {
        // window.location.href = ""; //手机端
        console.log("手机端");
      } else {
        // window.location.href = ""; //电脑端
        console.log("电脑端");
      }
    </script>
  </body>
</html>
```

#### 3.4.9 history对象

window对象中的history对象，它主要与浏览器的实力记录进行交互。该对象包含用户(在浏览器窗口中)访问过的URL。

| history对象方法   | 返回值                                                       |
| ----------------- | ------------------------------------------------------------ |
| history.back()    | 后退功能，就是点击浏览器中后退按钮的效果                     |
| history.forward() | 前进功能，就是点击浏览器中前进按钮的效果                     |
| **history.go()**  | **前进后退功能**，参数为1就是前进一个1页面，2就是2个页面，-1就是后退一个页面 |

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <a href="https://www.baidu.com">页面</a>
    <button>后退</button>
    <button>前进</button>
    <button>后退2页</button>
    <script>
      var btns = document.querySelectorAll("button");
      btns[0].addEventListener("click", function () {
        window.history.back();
      });
      btns[1].addEventListener("click", function () {
        window.history.forward();
      });
      btns[2].addEventListener("click", function () {
        window.history.go(-2);
      });
    </script>
  </body>
</html>
```

history对象一般在实际开发中使用比较少，但在一些OA办公系统中会见到。

### 3.5 动画

#### 3.5.1 动画基本原理

js中也可以实现元素的动画效果，其核心原理就是**通过定时器setInterval不断移动盒子的位置**。其实现步骤：

1. 获得盒子当前的位置；
2. 让盒子的当前位置加上1个移动距离,注意要移动**元素必须有定位**，才能使用`element.style.left`移动；
3. 利用定时器不断重复移动操作;
4. 最后加上结束定时器的条件。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        position: absolute;
        left: 0;
        width: 100px;
        height: 100px;
        background: red;
      }
    </style>
  </head>
  <body>
    <div></div>

    <script>
      var div = document.querySelector("div");
      var timer = setInterval(function () {
        //超过400距离就结束
        if (div.offsetLeft >= 400) {
          //停止定时器
          clearInterval(timer);
        }
        div.style.left = div.offsetLeft + 1 + "px"; //一定注意加单位px
      }, 15);
    </script>
  </body>
</html>
```

#### 3.5.2 动画函数封装

根据原理我们实现的动画，但如果不止一个元素要动画，这时就把动画效果封装为一个函数，其需要传入2个参数，**动画对象**和**移动到的距离**。动画对象就是要移动的对象，移动的距离就是移动到什么位置结束。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        position: absolute;
        left: 0;
        width: 100px;
        height: 100px;
        background: red;
      }
      span {
        position: absolute;
        left: 0;
        top: 200px;
        width: 200px;
        height: 200px;
        background: blue;
      }
    </style>
  </head>
  <body>
    <div></div>
    <span></span>

    <script>
      function animate(obj, target) {
        var timer = setInterval(function () {
          //超过400距离就结束
          if (obj.offsetLeft >= target) {
            //停止定时器
            clearInterval(timer);
          }
          obj.style.left = obj.offsetLeft + 1 + "px"; //一定注意加单位px
        }, 15);
      }
      var div = document.querySelector("div");
      var span = document.querySelector("span");
      animate(div, 400);
      animate(span, 300);
    </script>
  </body>
</html>
```

上边封装的动画函数虽然可以运行，但还不够完美，性能浪费比较多。它有几个问题需要解决：

1. **定时器timer**，每次调用都会开辟空间从而浪费，还有就是每个定时器都叫timer有歧义，可以将其赋值为obj的属性解决问题；
2. 如果使用按钮点击触发定时器，则会出现**定时器无限叠加**的问题，可使用每次触发新定时器就移除原定时器来解决；

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        position: absolute;
        left: 0;
        width: 100px;
        height: 100px;
        background: red;
      }
      span {
        position: absolute;
        left: 0;
        top: 200px;
        width: 200px;
        height: 200px;
        background: blue;
      }
    </style>
  </head>
  <body>
    <div></div>
    <span></span>
    <button>点击</button>

    <script>
      //匀速函数
      function animate(obj, target) {
        //优化2：每次触发新定时器就移除原来的
        clearInterval(obj.timer);
        //优化1
        obj.timer = setInterval(function () {
          //超过400距离就结束
          if (obj.offsetLeft >= target) {
            //停止定时器
            clearInterval(obj.timer);
          }
          obj.style.left = obj.offsetLeft + 1 + "px"; //一定注意加单位px
        }, 15);
      }
      var div = document.querySelector("div");
      var span = document.querySelector("span");
      var button = document.querySelector("button");
      animate(div, 400);
      button.addEventListener("click", function () {
        animate(span, 300);
      });
    </script>
  </body>
</html>
```

#### 3.5.3 缓动动画原理

上边写的动画是匀速移动的，如果要求动画是**运动速度不断变化的缓动运动**。最常见的就是速度由快变慢：

1. 让移动距离距离慢慢变小，这样速度就是慢慢落下来。其核心算法为`(目标距离-元素现在的位置)/10`的值作为每次移动的距离步长**step**,其中10是可以根据需求修改。
2. 其停止条件就是盒子位置等于目标位置时就停止定时器

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        position: absolute;
        left: 0;
        width: 100px;
        height: 100px;
        background: red;
      }
      span {
        position: absolute;
        left: 0;
        top: 200px;
        width: 200px;
        height: 200px;
        background: blue;
      }
    </style>
  </head>
  <body>
    <div></div>
    <span></span>
    <button>点击</button>

    <script>
      //缓动函数
      function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
          //步长值
          var step = (target - obj.offsetLeft) / 10;
          //超过400距离就结束
          if (obj.offsetLeft >= target) {
            //停止定时器
            clearInterval(obj.timer);
          }
          //替换步长值
          obj.style.left = obj.offsetLeft + step + "px"; //一定注意加单位px
        }, 15);
      }
      var div = document.querySelector("div");
      var span = document.querySelector("span");
      var button = document.querySelector("button");
      animate(div, 400);
      button.addEventListener("click", function () {
        animate(span, 300);
      });
    </script>
  </body>
</html>
```

上述函数依然有个小问题，就是停止的位置不是整数，而是小数。要解决该问题，就要使用取整函数优化步长值。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        position: absolute;
        left: 0;
        top: 100px;
        width: 100px;
        height: 100px;
        background: red;
      }
    </style>
  </head>
  <body>
    <div></div>
    <!-- 注意class名称数字不能在前面 -->
    <button class="btn500">点击到500位置</button>
    <button class="btn800">点击800位置</button>

    <script>
      function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
          //步长值，优化步长值为整数，8.1就要取9，因为不能后退，向上取整。同理-8.1就要取-9，向下取整
          var step = (target - obj.offsetLeft) / 10;
          step = step > 0 ? Math.ceil(step) : Math.floor(step);
          //超过400距离就结束
          if (obj.offsetLeft == target) {
            //停止定时器
            clearInterval(obj.timer);
          }
          //替换步长值
          obj.style.left = obj.offsetLeft + step + "px"; //一定注意加单位px
        }, 15);
      }

      var button500 = document.querySelector(".btn500");
      var button800 = document.querySelector(".btn800");
      var div = document.querySelector("div");
      button500.addEventListener("click", function () {
        animate(div, 500);
      });

      button800.addEventListener("click", function () {
        animate(div, 800);
      });
    </script>
  </body>
</html>
```

#### 3.5.4 动画函数中添加回调函数

回调函数的原理：有时我们需要在函数执行完成时，执行某个函数，这时就可以通过**该函数作为参数传入执行函数中**，让其在执行函数执行完成时调用。这个过程就叫做回调。

为了不再复制代码，完成的动画函数我们可直接写到一个单独的`animate.js`文件中，后续要使用直接引入该文件即可。

```js
//callback是回调函数
function animate(obj, target, callback) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    //步长值，优化步长值为整数，8.1就要取9，因为不能后退，向上取整。同理-8.1就要取-9，向下取整
    var step = (target - obj.offsetLeft) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    //超过400距离就结束
    if (obj.offsetLeft == target) {
      //停止定时器
      clearInterval(obj.timer);
      //回调函数有才执行，说明该函数可写可不写
      if (callback) {
        callback();
      }
      //写法2
      // callback && callback();
    }
    //替换步长值
    obj.style.left = obj.offsetLeft + step + "px"; //一定注意加单位px
  }, 15);
}
```

案例:简单使用外部动画函数

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        position: absolute;
        left: 0;
        top: 100px;
        width: 100px;
        height: 100px;
        background: red;
      }
    </style>
    <!-- 引入js文件 -->
    <script src="animate.js"></script>
  </head>
  <body>
    <div></div>
    <!-- 注意class名称数字不能在前面 -->
    <button class="btn500">点击到500位置</button>
    <button class="btn800">点击800位置</button>

    <script>
      var button500 = document.querySelector(".btn500");
      var button800 = document.querySelector(".btn800");
      var div = document.querySelector("div");
      button500.addEventListener("click", function () {
        animate(div, 500);
      });

      button800.addEventListener("click", function () {
        animate(div, 800, function () {
          //动画执行完成后改变颜色
          div.style.background = "yellow";
        });
      });
    </script>
  </body>
</html>
```

案例：使用动画函数实现滑块移动效果

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .sliderbar {
        position: fixed;
        right: 0;
        bottom: 100px;
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
        color: #fff;
      }

      .con {
        position: absolute;
        left: 0;
        top: 0;
        width: 200px;
        height: 40px;
        background-color: purple;
        z-index: -1;
      }
    </style>
    <!-- 引入js文件 -->
    <script src="animate.js"></script>
  </head>
  <body>
    <div class="sliderbar">
      <span>←</span>
      <div class="con">问题反馈</div>
    </div>

    <script>
      var sliderbar = document.querySelector(".sliderbar");
      var con = document.querySelector(".con");
      //移动距离160=con盒子的宽度200px-sliderbar盒子的宽度40px
      var move = con.clientWidth - sliderbar.clientWidth;
      //鼠标进入时sliderbar会让盒子con滑动到左侧
      sliderbar.addEventListener("mouseenter", function () {
        //动画执行完毕，就使用回调函数修改箭头方向
        animate(con, -move, function () {
          sliderbar.children[0].innerHTML = "→";
        });
      });
      //鼠标离开时sliderbar会让盒子con滑动到右侧
      sliderbar.addEventListener("mouseleave", function () {
        animate(con, 0, function () {
          sliderbar.children[0].innerHTML = "←";
        });
      });
    </script>
  </body>
</html>
```

案例:筋斗云

```html
<!DOCTYPE html>
<html>
  <head lang="en">
    <meta charset="UTF-8" />
    <title></title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      ul {
        list-style: none;
      }

      body {
        background-color: black;
      }

      .c-nav {
        width: 900px;
        height: 42px;
        background: #fff url(images/rss.png) no-repeat right center;
        margin: 100px auto;
        border-radius: 5px;
        position: relative;
      }

      .c-nav ul {
        position: absolute;
      }

      .c-nav li {
        float: left;
        width: 83px;
        text-align: center;
        line-height: 42px;
      }

      .c-nav li a {
        color: #333;
        text-decoration: none;
        display: inline-block;
        height: 42px;
      }

      .c-nav li a:hover {
        color: white;
      }

      .cloud {
        position: absolute;
        left: 0;
        top: 0;
        width: 83px;
        height: 42px;
        background: url(images/cloud.gif) no-repeat;
      }
    </style>
    <!-- 必须在js代码之前引入 -->
    <script src="animate.js"></script>
    <script>
      window.addEventListener("load", function () {
        // 1. 获取云彩元素与所有li元素
        var cloud = document.querySelector(".cloud");
        var c_nav = document.querySelector(".c-nav");
        var lis = c_nav.querySelectorAll("li");
        // 2. 给所有的小li绑定事件
        // 这个current 做为筋斗云的起始位置
        var current = 0;
        for (var i = 0; i < lis.length; i++) {
          // (1) 鼠标经过把当前小li 的位置做为目标值
          lis[i].addEventListener("mouseenter", function () {
            animate(cloud, this.offsetLeft);
          });
          // (2) 鼠标离开就回到起始的位置
          lis[i].addEventListener("mouseleave", function () {
            animate(cloud, current);
          });
          // (3) 当我们鼠标点击，就把当前位置做为目标值
          lis[i].addEventListener("click", function () {
            current = this.offsetLeft;
          });
        }
      });
    </script>
  </head>

  <body>
    <div id="c_nav" class="c-nav">
      <span class="cloud"></span>
      <ul>
        <li><a href="#">首页新闻</a></li>
        <li><a href="#">师资力量</a></li>
        <li><a href="#">活动策划</a></li>
        <li><a href="#">企业文化</a></li>
        <li><a href="#">招聘信息</a></li>
        <li><a href="#">公司简介</a></li>
        <li><a href="#">我是佩奇</a></li>
        <li><a href="#">啥是佩奇</a></li>
      </ul>
    </div>
  </body>
</html>
```

### 3.6 轮播图(重要)

轮播图又称为焦点图，是网页中比较常见的网页特效。

轮播图通常的结构为：

+ 父元素盒子，包裹所有轮播图子结构的元素；
+ **左右侧按钮**，点击轮播图会进行左右滑动；
+ **页签圆点**，表示切换到第几个轮播图；
+ **核心滚动区域**，li元素包含所有图片img元素，要加浮动这样元素在一行上，还有一个父盒子ul，方便实现滚动；

![image-20260809211403775](./assets/image-20260809211403775.png)

轮播图主要功能：

1. 鼠标进入轮播图时，左右按钮显示，鼠标离开轮播图时，左右按钮隐藏；
2. 点击页面圆点也能切换到对应的轮播图图片；
   1. 先引入`animate.js`然后再引入`轮播图.js`；
   2. 使用动画函数前提是该元素必须定位；
   3. 注意是**ul父盒子移动**而并非img父元素小li移动；
   4. 滚动图片的核心算法是点击某个小圆圈，让图片以**小圆圈的索引号×图片宽度**的距离作为ul的移动距离。注意是**负值**。
3. 点击左右侧按钮，轮播图依次切换上一张(左播)或者下一张(右播)图片；
   1. 点击右侧按钮一次，就让图片滚动一张；
   2. 声明一个**变量num**记录位置，点击右侧按钮一次，num加1，这**个变量num*图片宽度**就是ul的移动距离。也是负值。
   3. **图片无缝滚动原理**，先**复制第一张图片到最后一张图片后面**，当图片滚动到克隆的最后一张图片时，再次点击时，这时直接切换到第一张图片，**没有动画**，然后再执行点击函数的内容，因为直接切换速度很快，人眼无法识别，因此看着就像是第一张到第二张，从而实现了无缝滚动。
   4. **无缝滚动的具体步骤**：使用克隆函数**cloneNode**，参数为**true**时是**深度克隆**，复制ul的第一个li，然后使用**appendChild**放到ul的最后面。当图片滚动到克隆的最后一张图片时，也就是**num==图片总个数-1**时，让ul快速的、不做动画的跳转到最左侧：`left=0`，同时`num=0`,从而重新开始滚动图片。
   5. 再声明一个**变量circle**，**用来控制页面圆点移动**，每次点击右侧按钮一次，circle加1。注意，因为左侧按钮也需要该变量，所以直接声明为全局变量；当圆点移动到最后一个圆点，再次点击时（也就是**circle==ol.children.length**），复原circle=0。
   6. 添加点击页面圆点切换图片时，会修改`num=index`以及`circle=index`值，这样就确保点击左右按钮时圆点位置正确。
   7. 左侧按钮，做法与右侧一致，至少方向相反，因此num与circle每次点击都是减1；num==0时，num值变为`ul.children.length-1`，left也跳转到`（ul.children.length-1） * focusWidth`的位置。当circle<0,circle值改为`ol.children.length - 1`。
   8. 优化，圆圈的函数切换的代码是一样的，可提取成公共的函数**circleChange**。
4. 切换轮播图时，页面圆点会跟随变化；
5. 鼠标不在轮播图上时，轮播图会自动播放下一张图片，鼠标在轮播图上时，自动播放停止。
   1. 鼠标不在轮播图上时，就自动播放轮播图，可通过定时器完成；
   2. 因为自动播放功能跟点击右侧按钮效果完全一致，因此可通过**代码触发右侧按钮点击事件**`arrow_r.click()`就可完成功能；
   3. 当鼠标移动到轮播图上时就移除定时器。
6. **节流阀功能**，防止轮播图按钮点击过快造成动画播放过快的问题。目的是让上一个动画执行完毕，再去执行下一个动画函数，让点击事件无法连续触发。实现使用**动画的回调函数**。可通过添加一个**变量flag**来**锁住函数**和**解锁函数**。默认flag为true,当开始播放动画时，flag为false,这时点击按钮无效;当动画播放完毕时，flag变为true，这时按钮点击才会生效。

为了更好理解轮播图代码，我们把它单独写到`轮播图.js`文件中，把页面结构单独放在`轮播图.html`中，引入外部的`animate.js`与`轮播图.js`。因为轮播图要用动画函数，必须先引入`animate.js`然后再引入`轮播图.js`。

`轮播图.html`代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      /* base.css */
      /*清除元素默认的内外边距  */
      * {
        margin: 0;
        padding: 0;
      }

      /*取消链接的下划线*/
      a {
        color: #666;
        text-decoration: none;
      }

      a:hover {
        color: #e33333;
      }

      /*让所有斜体 不倾斜*/
      em,
      i {
        font-style: normal;
      }
      /*去掉列表前面的小点*/
      li {
        list-style: none;
      }
      /*图片没有边框   去掉图片底侧的空白缝隙*/
      img {
        border: 0; /*ie6*/
        vertical-align: middle;
      }
      body {
        background-color: #fff;
        font: 12px/1.5 "Microsoft YaHei", "Heiti SC", tahoma, arial,
          "Hiragino Sans GB", \\5B8B\4F53, sans-serif;
        color: #666;
      }

      /*清除浮动*/
      .clearfix:after {
        visibility: hidden;
        clear: both;
        display: block;
        content: ".";
        height: 0;
      }

      /*版心*/
      .w {
        width: 1200px;
        margin: auto;
      }

      .fl {
        float: left;
      }
      .fr {
        float: right;
      }
      .main {
        width: 980px;
        height: 455px;
        margin-left: 219px;
        margin-top: 10px;
      }

      .focus {
        position: relative;
        width: 721px;
        height: 455px;
        background-color: purple;
        /* overflow: hidden; */
      }

      .focus ul {
        /* ul要有动画，必须有定位 */
        position: absolute;
        top: 0;
        left: 0;
        /* ul大于父元素，这样浮动才有效果 */
        width: 600%;
      }

      .focus ul li {
        /* 图片在一行必须加浮动 */
        float: left;
      }

      .arrow-l,
      .arrow-r {
        display: none;
        position: absolute;
        top: 50%;
        margin-top: -20px;
        width: 24px;
        height: 40px;
        background: rgba(0, 0, 0, 0.3);
        text-align: center;
        line-height: 40px;
        color: #fff;
        /* font-family: "icomoon"; */
        font-size: 18px;
        z-index: 2;
      }

      .arrow-r {
        right: 0;
      }

      .circle {
        position: absolute;
        bottom: 10px;
        left: 50px;
      }

      .circle li {
        float: left;
        width: 10px;
        height: 10px;
        /*background-color: #fff;*/
        border: 2px solid rgba(255, 255, 255, 0.5);
        margin: 0 5px;
        border-radius: 50%;
        /*鼠标经过显示小手*/
        cursor: pointer;
      }

      .current {
        background-color: #fff;
      }
    </style>
    <!-- 引入js animate.js必须先引入-->
    <script src="animate.js"></script>
    <script src="轮播图.js"></script>
  </head>
  <body>
    <div class="w">
      <div class="main">
        <div class="focus fl">
          <!-- 左侧按钮 使用javascript:;代替#,防止页面跳转到顶部-->
          <a href="javascript:;" class="arrow-l"> &lt;</a>
          <!-- 右侧按钮 -->
          <a href="javascript:;" class="arrow-r"> &gt;</a>
          <!-- 核心的滚动区域 -->
          <ul>
            <li>
              <a href="#"><img src="images/focus.jpg" alt="" /></a>
            </li>
            <li>
              <a href="#"><img src="images/focus1.jpg" alt="" /></a>
            </li>
            <li>
              <a href="#"><img src="images/focus2.jpg" alt="" /></a>
            </li>
            <li>
              <a href="#"><img src="images/focus3.jpg" alt="" /></a>
            </li>
          </ul>
          <!-- 小圆圈 -->
          <ol class="circle"></ol>
        </div>
      </div>
    </div>
  </body>
</html>
```

`轮播图.js`代码

```js
//页面加载完，才加载轮播图js文件内容
window.addEventListener("load", function () {
  //1.左右按钮显示隐藏
  var arrow_l = document.querySelector(".arrow-l");
  var arrow_r = document.querySelector(".arrow-r");
  var focus = document.querySelector(".focus");

  //图片宽度
  var focusWidth = focus.offsetWidth;
  //鼠标进入显示
  focus.addEventListener("mouseenter", function () {
    arrow_l.style.display = "block";
    arrow_r.style.display = "block";
    //10. 鼠标移动到轮播图上时，停止定时器
    clearInterval(timer);
    //清除timer变量
    timer = null;
  });
  //鼠标进入离开隐藏
  focus.addEventListener("mouseleave", function () {
    arrow_l.style.display = "none";
    arrow_r.style.display = "none";
    //11.鼠标离开轮播图时,开启定时器
    timer = setInterval(function () {
      //触发右侧按钮点击事件
      arrow_r.click();
    }, 2000);
  });

  //2.根据图片数量动态生成圆点标签,必须查询foucs中的ul
  var ul = focus.querySelector("ul");
  var ol = focus.querySelector(".circle");
  for (var i = 0; i < ul.children.length; i++) {
    //创建元素标签
    var li = document.createElement("li");
    //通过设置自定义属性记录当前圆点的索引号
    li.setAttribute("index", i);
    //把li插入到ol中
    ol.appendChild(li);

    //3.小圆圈的点击事件，生成小圆圈时生成点击事件,该事件用排他思想
    li.addEventListener("click", function () {
      for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = "";
      }
      this.className = "current";
      //4. 点击小圆圈移动图片，移动ul,移动距离是小圆点索引号*图片宽度，注意是负值
      //圆点索引号
      var index = this.getAttribute("index");
      animate(ul, -index * focusWidth);
      //同步图片数据，防止点击左右按钮出来问题
      num = index;
      //同步圆点数据，防止点击左右按钮出来问题
      circle = index;
    });
  }
  //把ol第一个li设置类名为current
  ol.children[0].className = "current";
  //6.克隆第一张图片放到ul最后面，必须写在小圆点生成事件后，这样前面的圆点数量就不会被影响
  var firstLi = ul.children[0].cloneNode(true);
  ul.appendChild(firstLi);
  //5.点击右侧按钮，图片滚动一张
  //num记录点击按钮后图片的位置索引
  var num = 0;
  //circle控制小圆圈的播放移动
  var circle = 0;
  //10.节流阀
  var flag = true;
  //7.右侧点击按钮
  arrow_r.addEventListener("click", function () {
    if (flag) {
      flag = false;
      //如果走到最后复制的一张图片
      if (num == ul.children.length - 1) {
        ul.style.left = 0;
        num = 0;
      }
      num++;
      animate(ul, -num * focusWidth, function () {
        //打开节流阀
        flag = true;
      });
      //点击右侧按钮一次，小圆点就会跟随变化，circle++
      circle++;
      //当图片移动到克隆图片时，圆点位置清零也就是移动到第一张
      if (circle == ol.children.length) {
        circle = 0;
      }
      circleChange();
    }
  });

  //8.左侧点击按钮，代码基本跟右侧一致，num与circle都变为减一,至少最后一张图变为第一张图
  arrow_l.addEventListener("click", function () {
    if (flag) {
      flag = false;
      //如果走到第一张图片
      if (num == 0) {
        //切换到复制的最后一张图，必须加单位px
        ul.style.left = (ul.children.length - 1) * focusWidth + "px";
        num = ul.children.length - 1;
      }
      num--;
      animate(ul, -num * focusWidth, function () {
        //打开节流阀
        flag = true;
      });
      //点击左侧按钮一次，小圆点就会跟随变化，circle--
      circle--;
      //当图片移动到第一张图片时，圆点位置移动到最后
      if (circle < 0) {
        circle = ol.children.length - 1;
      }
      circleChange();
    }
  });

  //圆圈切换公共函数
  function circleChange() {
    //先清除所以圆点样式，然后再复制当前圆点
    for (var i = 0; i < ol.children.length; i++) {
      ol.children[i].className = "";
    }
    //利用circle获取到当前圆点,设置current类名
    ol.children[circle].className = "current";
  }

  //9. 自动播放轮播图,2s切换一次
  var timer = setInterval(function () {
    //触发右侧按钮点击事件
    arrow_r.click();
  }, 2000);
});
```

### 3.7 移动端网页特效

#### 3.7.1 触屏事件touch

移动端浏览器兼容性很好，不再需要考虑js的兼容问题，可放心使用原生JS。移动端没有鼠标，因此没有鼠标点击事件，但其拥有**触屏事件(又叫触摸事件)touch**，表示手指或笔接触屏幕时触发的事件，Android与IOS端都有。

**touch对象**就代表一个触摸点，触屏事件可响应用户手指对屏幕或者触控板的操作。

常见的触屏事件如下：

| 触屏事件   | 说明                                                         |
| ---------- | ------------------------------------------------------------ |
| touchstart | 手指触摸到一个DOM元素触发，效果类似鼠标按下事件`mousedown`   |
| touchmove  | 手指在一个DOM元素上滑动时触发，效果类似鼠标移动事件`mousemove` |
| touchend   | 手指从一个DOM元素上移开时触发，效果类似鼠标抬起释放事件`mouseup` |

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        width: 100px;
        height: 100px;
        background-color: red;
      }
    </style>
  </head>
  <body>
    <div></div>
    <script>
      var div = document.querySelector("div");
      //1.手指触摸元素事件
      div.addEventListener("touchstart", function () {
        console.log("手指触摸元素");
      });
      //2.手指在元素移动事件
      div.addEventListener("touchmove", function () {
        console.log("手指在元素上移动");
      });
      //3.手指离开元素事件
      div.addEventListener("touchend", function () {
        console.log("手指离开元素");
      });
    </script>
  </body>
</html>
```

要测试移动端案例，需要将浏览器切换为手机模式。否则直接鼠标点击是看不到效果的。

#### 3.7.2 触屏事件对象 TouchEvent

触摸事件产生的对象就是**触摸事件对象TouchEvent**。TouchEvent是一类描述**手指触摸平面状态变化**的事件对象。这类事件用于描述一个或多个触点，使开发者可以检测到触点的移动（手指移动），触点的增加或减少（三根手指变为2根手指）等内容。

触摸事件对象有三个常用的**触摸对象列表TouchList**：

| 触屏列表          | 说明                                                         |
| ----------------- | ------------------------------------------------------------ |
| touches           | 正在触摸**屏幕**的所有手指的对象列表，不在DOM上的也包括      |
| **targetTouches** | 正在触摸**当前DOM元素上**的所有手指的对象列表(最常用)        |
| changedTouches    | 手指状态发生改变的列表，从无到有，从有到无变化。手指必须有变化，没有则为空。 |

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        width: 100px;
        height: 100px;
        background-color: red;
      }
    </style>
  </head>
  <body>
    <div></div>
    <script>
      var div = document.querySelector("div");
      //1.手指触摸元素事件
      div.addEventListener("touchstart", function (e) {
        //打印触摸事件对象
        console.log(e);
        console.log("手指触摸事件");
        //如果所有手指触摸同一元素，下面三个TouchList是一样的
        console.log(e.touches); //TouchList {length: 1}
        console.log(e.targetTouches); //TouchList {length: 1}
        console.log(e.changedTouches); //TouchList {length: 1}

        //手指列表中具体Touch对象，这里0表示第一个手指对象信息
        //每个手指对象都可获得手指的坐标PageX,PageY或者target手指点击对象等内容
        console.log(e.targetTouches[0]);
      });
      //2.手指在元素移动事件
      div.addEventListener("touchmove", function (e) {
        console.log("手指移动事件");
        //如果所有手指都在同一元素中移动，下面三个TouchList是一样的
        console.log(e.touches); // TouchList {length: 1}
        console.log(e.targetTouches); // TouchList {length: 1}
        console.log(e.changedTouches); // TouchList {length: 1}
      });
      //3.手指离开元素事件
      div.addEventListener("touchend", function (e) {
        //手指离开，只有changedTouches有对象，其他两个都为空对象
        console.log("手指离开事件");
        console.log(e.touches); //TouchList {length: 0}
        console.log(e.targetTouches); //TouchList {length: 0}
        console.log(e.changedTouches); //TouchList {length: 1}
      });
    </script>
  </body>
</html>
```

> 大多数情况我们都是给元素注册触摸事件，因此使用targetTouches对象列表最多。

案例：**手指拖动元素移动**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        /* 元素必须有定位 */
        position: absolute;
        left: 0;
        width: 100px;
        height: 100px;
        background-color: red;
      }
    </style>
  </head>
  <body>
    <div></div>
    <script>
      var div = document.querySelector("div");
      //手指初始位置变量
      var startX = 0;
      var startY = 0;
      //盒子元素初始位置变量
      var x = 0;
      var y = 0;
      div.addEventListener("touchstart", function (e) {
        //设置初始值
        startX = e.targetTouches[0].pageX;
        startY = e.targetTouches[0].pageY;
        x = this.offsetLeft;
        y = this.offsetTop;
      });

      div.addEventListener("touchmove", function (e) {
        //计算手指移动距离=手指新位置-手指老位置
        var moveX = e.targetTouches[0].pageX - startX;
        var moveY = e.targetTouches[0].pageY - startY;
        //盒子元素新位置=盒子老位置+手指移动距离,一定要加单位
        this.style.left = x + moveX + "px";
        this.style.top = y + moveY + "px";
        //手指移动也会触发滚动屏幕，为了防止该问题，就要阻止默认滚动行为，本质就是只能拖动元素不触发屏幕滚轮滚动
        e.preventDefault();
      });

      //不需要写end，因为手指离开默认move的事件就会停止，不像鼠标点击需要手动停止move
    </script>
  </body>
</html>
```

> 手指拖动元素与鼠标拖动模态框原理本质是一样的，上边的写法也与之前写法本质是一样的，只是参考依据不同。
>
> 假设鼠标(手指)初始位置为a,移动中鼠标(手指)位置为b,拖动元素的初始位置为c。
>
> 以**手指在移动中计算手指移动的距离**为参考，元素位置公式如下：
>
> 手指移动的距离=b-a;
>
> 元素新位置=c+手指移动的距离=**c+b-a**。
>
> 以**在元素内部的距离不变**为参考，元素位置公式如下：
>
> 在元素内部的距离=a-c；
>
> 元素新位置=b-在元素内部的距离=b-（a-c）=**b-a+c**。

#### 3.7.3 移动端轮播图

移动端的轮播图与PC端轮播图功能基本一致都可以自动播放图片或者点击圆点切换，不同的是移动端可以用**手指拖动播放轮播图**。





