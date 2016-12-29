var express=require('express')
var router=express.Router()
var app=express()
var path=require('path')
router.get('/',function (req,res) {
    //res.render('index')
    res.sendFile(path.resolve('./views/index.html'))
})
module.exports = router;