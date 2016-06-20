var express = require('express')


var port = process.env.PORT || 3000
var path = require('path')
var app = express()
var Movie = require(path.join(__dirname,'views/models/movie'))
var mongoose = require('mongoose')
app.set('views','./views')
app.set('view engine','jade')
app.use(express.static(path.join(__dirname,'bower_components')))
app.listen(port)
mongoose.connect('mongodb://192.168.74.128:27017/movie')
app.get('/',function(req,res){
	Movie.find({},function(err,movies){
		if(err){
			console.log(err)
		}
		res.render('pages/index',{
		title: '首页',
		movies:movies})
	})
	
})

app.get('/detail',function(req,res){
	res.render('detail',{
		title: '详情'
	})
})

app.get('/admin',function(req,res){
	res.render('admin',{
		title: '后台'
	})
})

app.get('/list',function(req,res){
	res.render('list',{
		title: '列表'
	})
})

console.log('imooc started on port '+ port)