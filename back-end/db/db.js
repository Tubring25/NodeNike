const mysql = require('mysql');

// const conn = mysql.createConnection({
// 	host: 'localhost', //数据库地址
// 	user: 'root', //用户名
// 	port: '3306', // 端口号
// 	password: '123456', //密码
// 	database: 'nikesql' //数据库名
// });
// conn.connect();
const conn = mysql.createPool({
	connectionLimit: 10, // 最大连接数
	host: 'localhost', //数据库地址
	user: 'root', //用户名
	port: '3306', // 端口号
	password: '123456', //密码
	database: 'nikesql' //数据库名
});

module.exports = conn;
