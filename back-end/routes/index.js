var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/test/:data', (req, res)=>{
  return res.json({query: req.query, data: req.params, json: req.body})
})

module.exports = router;
