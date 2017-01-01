var express=require('express')
var router=express.Router()
var Article=require('../db').Article
//增加
router.get('/add',function (req,res) {
    res.render('article/add',{title:'增加'})
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
router.get('/detail/:id',function (req,res) {
    var id=req.params.id
    console.log(id)
})
module.exports = router;