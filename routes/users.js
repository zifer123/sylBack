var express = require('express');
var router = express.Router();
var usersModel = require('../model/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  /* 查询数据 */
  usersModel.find(req.query,function(err,doc) {
    var status = doc.length > 0?1:0;
    var msg = doc.length > 0?'OK':'空';
    var results = {
      status,
      msg,
      data: doc
    };
    res.json(results);
  });
});

module.exports = router;
