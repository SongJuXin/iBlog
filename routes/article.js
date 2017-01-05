var express=require('express')
var router=express.Router()
var Article=require('../db').Article
//增加
router.get('/add',function (req,res) {
    res.render('article/add',{title:'增加',article:{}})
})
router.post('/add',function (req,res) {
    var body=req.body
    body.user=req.session.user._id//article~~~~~~~~~~~~~~~~~~~~~~~~
    Article.create(body,function (err,doc) {
        if(err){
            req.session.err=err
            res.redirect('back')
        }
        else{
            req.session.success='发布成功'
            res.redirect('/')
        }
    })

    /*Article.remove({},function (e,docs) {
        console.log(e,docs)
    })
    res.end()*/
})
router.get('/detail/:_id',function (req,res) {
    var _id=req.params._id
    Article.findById(_id,function(err,article){
        res.render('article/detail',{title:'文章详情',article});
    })
})
router.get('/update/:_id',function (req,res) {
    var _id=req.params._id
    Article.findById(_id,function (err,article) {
        res.render('article/add',{title:'修改',article})
    })
})
router.post('/update/:_id',function (req,res) {
    var _id=req.params._id
    Article.update({_id},req.body,function (err,article) {
        if(err){
            req.session.err=err
            res.redirect('back')
        }
        if(article){
            req.session.success='文章修改成功'
            res.redirect('/article/detail/'+req.params._id);
           // res.render('/article/detail/'+_id,{title:'文章详情',article})//不能用这样~~~~~~~~~~~~~~~~~~~~
        }
    })
})
router.get('/delete/:_id',function (req,res) {
    var _id=req.params._id
    Article.remove({_id},function (err,result) {
        if(err){
            req.session.err=err
        }
        else{
            req.session.success = '删除成功!';
            res.redirect('/')
        }
    })
})
module.exports = router;