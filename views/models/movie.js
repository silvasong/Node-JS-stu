var mongoose = require('mongoose')
var MovieSchema = require('../schema/movie')

var Movie = mongoose.model('movie',MovieSchema)

module.exports = Movie