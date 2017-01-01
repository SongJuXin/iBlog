 var express=require('express')
var router=express.Router()
var Article=require('../db').Article
router.get('/',function (req,res) {
    //populate指的是填充，用于吧当前对象的一个属性从对象id转为对象类型
    Article.find({}).populate('user').exec(function (err,articles) {
        res.render('index1',{title:'Home',articles})
    })

})

module.exports=router