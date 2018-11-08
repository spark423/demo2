var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , model = mongoose.model

var projectSchema = new Schema({
	createdAt: {type: Date, default: Date.now},
	threadId : {type: mongoose.Schema.Types.ObjectId, ref: 'Thread'},
	archived: {type: Boolean, default: false},
	title: String,
	description: String,
	originator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	members: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
	tags : [{type: mongoose.Schema.Types.ObjectId, ref: 'Tag'}]
});

module.exports = mongoose.model('Project', projectSchema);
