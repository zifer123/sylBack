/**
 * Created by Administrator on 2018/3/13.
 */
var express = require('express');
var router = express.Router();
var addressModel = require('../model/address');

/* GET users listing. */
router.get('/', function(req, res, next) {
    /* 查询数据 */
    addressModel.find({},function(err,doc) {
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
