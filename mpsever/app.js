const express=require('express');

const cors=require("cors");
const bodyPaser=require("body-parser");
// 创建APP服务器
const app=express();

// 引入用户路由
const useRouter=require('./router/user.js');
// 引入商品路由
const proRouter=require("./router/product.js")

app.use(express.static("./public"));

app.use(cors({
  origin:["http://127.0.0.1:3333","http://localhost:8080",]
}))

app.use(bodyPaser.urlencoded({
  extended:false  //如果设置为false，那么对URL-encoded的数据的解析采用querystring库；
  //如果设置为true，那么采用qs库，允许将富对象和数组编码为url编码格式，允许使用url编码的json体验。
}))

// 监听端口号
app.listen(3333);


// 挂载路由
app.use('/user',useRouter);
app.use('/pro',proRouter);