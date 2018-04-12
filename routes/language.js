/**
 * Created by lc on 2018/4/4.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    /* 查询数据 */
    //req.session.abcd = '22222';
    res.json({
        locale: req.session.locale,
        status: 1,
        msg: 'ok',
    })
});

router.put('/', function(req, res, next) {
    /* 查询数据 */
    req.session.locale = req.body.locale;
    if(req.session.locale) {
        console.log('设置成功');
        res.json({
            status: 1,
            msg: 'ok'
        });
    }else {
        res.json({
            status: 0,
            msg: '设置失败'
        });
    }

});


module.exports = router;
