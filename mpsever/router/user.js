const express = require("express");

// 引入链接池模块
const pool = require('../pool/pool.js');


// 创建路由对象
const router = express.Router();


// 用户注册API
router.post('/register', (req, res) => {
  let wname= req.body.wname;
  let gender= req.body.gender;
  let phone = req.body.phone;
  let password=req.body.password;
  // 先查重再注册
  let sql = 'SELECT * FROM wearer WHERE phone=?';
  pool.query(sql, [phone], (err, result) => {
    if (err) throw err;
    if (result.length>0) {
      // result.length>0用户存在则注册时报
      res.send('0')
    } else {
      let sql = 'INSERT INTO wearer(phone,password,wname,gender) VALUES(?,MD5(?),?,?)'
      pool.query(sql,[phone,password,wname,gender],(err,result)=>{
        if(err) throw err;
      console.log(result);
      console.log(result.affectedRows)
      if(result.affectedRows>0){
        res.send('1');
      }
      })
    }
  })

})
// 用户登录API
router.post("/login",(req,res)=>{
  let phone=req.body.phone;
  let password=req.body.password;
  let sql = 'SELECT * FROM wearer WHERE phone=? AND password=?';
  pool.query(sql,[phone,password],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      // 表示登陆成功
      res.send('1');
    }else{
      res.send('0');
    }
  })

})



// 导出路由对象
module.exports = router;
