const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost', //数据库地址
  port: 3306,
  user: 'root', //用户名
  password: '123456', //密码
  database: 'nikesql' //数据库名
});
conn.connect();
module.exports = conn;