var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , model = mongoose.model

var threadSchema = new Schema({
	createdAt: {type: Date, default: Date.now},
	googleId : String,
	title: String,
	originator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	viewers: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
	writers: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
	commenters: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
	emails : [{type: mongoose.Schema.Types.ObjectId, ref: 'Email'}],
	//Need not ever be populated but added here to filter out emails that were included in the thread outside our platform.
	tags : [{type: mongoose.Schema.Types.ObjectId, ref: 'Tag'}]
});

module.exports = mongoose.model('Thread', threadSchema);
