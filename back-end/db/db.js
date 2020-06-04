const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost', //数据库地址
  user: 'root', //用户名
  port: '3306', // 端口号
  password: '123456', //密码
  database: 'nikesql' //数据库名
});
let db = {}

db.query = function (sql, callback) {
  if (!sql) {
    callback();
    return;
  }
  pool.query(sql, function (err, rows, fields) {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    };
    callback(null, rows, fields);
  });
}
module.exports = db