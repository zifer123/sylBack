/**
 * Created by Administrator on 2018/3/13.
 */
var mongoose = require('../dbConnect');
var usersSchema = new mongoose.Schema({
    name: {
        type: String
    },
    pwd: {
        type: String
    }
},{collection: 'users'});
var usersModel = mongoose.model('users',usersSchema);
module.exports = usersModel;