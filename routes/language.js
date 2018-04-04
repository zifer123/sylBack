/**
 * Created by lc on 2018/4/4.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    /* 查询数据 */
    res.json({
        locale: req.session.locale || 'zh',
        status: 1,
        msg: 'ok',
    })
});

router.put('/setEn', function(req, res, next) {
    /* 查询数据 */
    req.session.locale = 'en';
    res.json({
        status: 1,
        msg: 'ok'
    });
});

router.put('/setZh', function(req, res, next) {
    /* 查询数据 */
    req.session.locale = 'zh';
    res.json({
        status: 1,
        msg: 'ok'
    });
});

module.exports = router;
