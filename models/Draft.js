var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , model = mongoose.model


//Note this is not for the shared draft
var draftSchema = new Schema({
	createdAt: {type: Date, default: Date.now},
	googleId : String,
	threadId: {type: mongoose.Schema.Types.ObjectId, ref: 'Thread'},
	//may not be necessary but could be useful in breaking down the rendering and parallelizing some operations,
	emailId: {type: mongoose.Schema.Types.ObjectId, ref: 'Email'},
	//may not be necessary but could be useful in breaking down the rendering and parallelizing some operations,
	subject : String,
	from: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	to : [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
	cc : [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
	bcc : [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Draft', draftSchema);
