webpackJsonp([11],{326:function(e,l,r){function o(e){r(570)}var t=r(120)(r(526),r(590),o,"data-v-0795ac50",null);e.exports=t.exports},526:function(e,l,r){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default={data:function(){return{num:this.$store.state.num,props:{value:"code",label:"name",children:"childs"},addressInfo:this.$store.state.addressInfo,lines:[],ruleForm:{addressInfo:["44","4403","440303","440303001"],level:3,lines:[23,24]},rules:{companyName:[{required:!0,message:"请输入名称"}],companyShortName:[{required:!0,message:"请输入简称"}],addressInfo:[{required:!0,message:"请选择地址信息"}],doorCode:[{required:!0,message:"请填写详细地址信息"}],addFare:[{required:!0,message:"请输入费用"},{type:"number",message:"请输入数字"}]}}},methods:{submitForm:function(e){var l=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;l.$message({message:"提交成功",type:"success"})})},resetForm:function(e){this.$refs[e].resetFields()},test:function(e){console.log(e)}},activated:function(){console.log(55),this.lines=[{value:23,label:"观澜线"},{value:24,label:"凤岗线"},{value:25,label:"淡水线"},{value:26,label:"坪山线"},{value:27,label:"龙岗线"},{value:28,label:"布吉线"},{value:29,label:"南山线"}],console.log(66)}}},537:function(e,l,r){l=e.exports=r(511)(!0),l.push([e.i,".flexBox[data-v-0795ac50]{display:-webkit-box;display:-ms-flexbox;display:flex}.flexBox .flexItem[data-v-0795ac50]{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-right:5px}.el-form-item .el-form-item[data-v-0795ac50]{margin-bottom:10px}","",{version:3,sources:["F:/github项目/syl/src/pages/index/children/UserManage/DriverGroup/DriverAdd.vue"],names:[],mappings:"AACA,0BACE,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CAEf,AACD,oCACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,gBAAkB,CACnB,AACD,6CACE,kBAAoB,CACrB",file:"DriverAdd.vue",sourcesContent:["\n.flexBox[data-v-0795ac50] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  /*margin: 5px 0;*/\n}\n.flexBox .flexItem[data-v-0795ac50] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin-right: 5px;\n}\n.el-form-item .el-form-item[data-v-0795ac50] {\n  margin-bottom: 10px;\n}\n"],sourceRoot:""}])},570:function(e,l,r){var o=r(537);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r(512)("1d0588af",o,!0)},590:function(e,l){e.exports={render:function(){var e=this,l=e.$createElement,r=e._self._c||l;return r("div",[r("el-form",{ref:"ruleForm",staticStyle:{width:"50%"},attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"微信用户名",prop:"wxName"}},[r("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.wxName,callback:function(l){e.$set(e.ruleForm,"wxName",l)},expression:"ruleForm.wxName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"真实姓名",prop:"userName"}},[r("el-input",{model:{value:e.ruleForm.userName,callback:function(l){e.$set(e.ruleForm,"userName",l)},expression:"ruleForm.userName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"联系方式",prop:"contact"}},[r("el-input",{model:{value:e.ruleForm.contact,callback:function(l){e.$set(e.ruleForm,"contact",l)},expression:"ruleForm.contact"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"区域",prop:"addressInfo"}},[r("el-cascader",{staticStyle:{width:"100%"},attrs:{options:e.addressInfo,filterable:"",props:e.props},on:{change:e.test},model:{value:e.ruleForm.addressInfo,callback:function(l){e.$set(e.ruleForm,"addressInfo",l)},expression:"ruleForm.addressInfo"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"详细地址",prop:"doorCode"}},[r("el-input",{model:{value:e.ruleForm.doorCode,callback:function(l){e.$set(e.ruleForm,"doorCode",l)},expression:"ruleForm.doorCode"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"类型选择",prop:"level"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.level,callback:function(l){e.$set(e.ruleForm,"level",l)},expression:"ruleForm.level"}},[r("el-option",{attrs:{label:"直线",value:3}}),e._v(" "),r("el-option",{attrs:{label:"干线",value:1}}),e._v(" "),r("el-option",{attrs:{label:"支线",value:2}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"线路选择",prop:"level"}},[r("el-checkbox-group",{model:{value:e.ruleForm.lines,callback:function(l){e.$set(e.ruleForm,"lines",l)},expression:"ruleForm.lines"}},e._l(e.lines,function(l){return r("el-checkbox",{key:l.value,attrs:{label:l.value}},[e._v(e._s(l.label))])}))],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(l){e.submitForm("ruleForm")}}},[e._v("提交")]),e._v(" "),r("el-button",{on:{click:function(l){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=11.756b8bf61797a94342e7.js.map