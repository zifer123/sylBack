/**
 * Created by Administrator on 2018/3/13.
 *
 * 账号模式：mongodb://zifer:zifer1123@111.230.172.203/demo2
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://111.230.172.203/demo2',{
    config: {
        autoIndex: false
    }
});
// mongoose.connect('mongodb://zifer:zifer1123@111.230.172.203/demo2');
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function() {
    console.log('连接成功');
});
module.exports = mongoose;
