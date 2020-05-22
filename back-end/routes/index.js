var express = require('express');
var router = express.Router();

const option = {
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'nodenike',
  connectTimeout: 5000,
  multipleStatements: false
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/test/:data', (req, res)=>{
  return res.json({query: req.query, data: req.params, json: req.body})
})

module.exports = router;
