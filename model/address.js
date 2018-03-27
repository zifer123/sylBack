/**
 * Created by Administrator on 2018/3/13.
 */
var mongoose = require('../dbConnect');
var addressSchema = new mongoose.Schema({
    code: {
        type: String
    },
    name: {
        type: String
    },
    childs: {
        type: Array
    }
},{collection: 'address'});
var addressModel = mongoose.model('address',addressSchema);
module.exports = addressModel;