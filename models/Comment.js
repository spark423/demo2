var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , model = mongoose.model


var commentSchema = new Schema({
	createdAt: {type: Date, default: Date.now},
	emailId : {type: mongoose.Schema.Types.ObjectId, ref: 'Email'},
	by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	text: String
});

module.exports = mongoose.model('Comment', commentSchema);
