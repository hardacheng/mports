const express = require("express");

const pool = require("../pool/pool.js");

const router = express.Router();


// 商品页API
router.get('/product', (req, res) => {
  console.log(req.query);
  let page = req.query.page;
  let pagesize = 10;
  let sql = "SELECT count(pid) as count FROM product";
  pool.query(sql, (err, rs) => {
    if (err) throw err;
    // 返回的结果是一个由元素为对象组成的外层为数组的聚合函数
    console.log(rs[0].count);
    let pagecount = Math.ceil(rs[0].count / pagesize);
    let pagestart = (page - 1) * pagesize;
    sql = `SELECT * FROM product LIMIT ${pagestart},${pagesize}`;
    pool.query(sql, (err, rs) => {
      if (err) throw err;
      console.log(rs);
      res.send({ pagecount: pagecount, res: rs })
    })
  })
})

// 详情页
router.get('/detail', (req, res) => {
  let obj = req.query.xid;
  // console.log(obj)
  let sql = 'SELECT * FROM pdetail WHERE xid=?';
  pool.query(sql, [obj], (err, rs) => {
    if (err) throw err;
    // console.log(rs[0]);
    let d1 = rs[0];
    sql = 'SELECT * FROM dswiper WHERE xid=?';
    pool.query(sql, [obj], (err, rs) => {
      if (err) throw err;
      // console.log(rs);
      let d2 = rs;
      sql = 'SELECT * FROM dcolor WHERE xid=?';
      pool.query(sql, [obj], (err, rs) => {
        if (err) throw err;
        // console.log(rs);
        let d3 = rs;
        sql = 'SELECT * FROM sizeth WHERE xid=?';
        pool.query(sql, [obj], (err, rs) => {
          if (err) throw err;
          // console.log(rs);
          let d4 = rs[0];
          sql = 'SELECT * FROM sizetd WHERE xid=?';
          pool.query(sql, [obj], (err, rs) => {
            if (err) throw err;
            // console.log(rs);
            let d5 = rs;
            sql = 'SELECT * FROM size1 WHERE xid=?';
            pool.query(sql, [obj], (err, rs) => {
              if (err) throw err;
              // console.log(rs);
              let d6 = rs;
              res.send({message:"查询成功",pdetail:d1,dswiper:d2,dcolor:d3,sizeth:d4,sizetd:d5,size1:d6});
            })
          })
        })
      })
    })
  })
})

// 导出

module.exports = router;