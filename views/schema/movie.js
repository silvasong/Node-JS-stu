var mongoose = require('mongoose')

var MovieSchema = new mongoose.Schema({
	_id:Number,
	title:String,
	poster:String
})
module.exports=MovieSchema
