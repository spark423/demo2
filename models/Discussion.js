var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , model = mongoose.model


var discussionSchema = new Schema({
	createdAt: {type: Date, default: Date.now},
	commentId : {type: mongoose.Schema.Types.ObjectId, ref: 'Comment'},
	by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	text: String,
	attachments: [String]
});

module.exports = mongoose.model('Discussion', discussionSchema);
