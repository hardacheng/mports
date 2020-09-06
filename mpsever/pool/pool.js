const mysql=require('mysql');

// 创建连接池
const pool=mysql.createPool({
  host:'127.0.0.1',
  port:3306,
  user:'root',
  password:'',
  database:'mports',
  charset:'utf8',
  connectionLimit:20
});

// 导出连接池模块
module.exports=pool;
