var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , model = mongoose.model

var emailSchema = new Schema({
	createdAt: {type: Date, default: Date.now},
	googleId : String,
	threadId: {type: mongoose.Schema.Types.ObjectId, ref: 'Thread'},
	//may not be necessary but could be useful in breaking down the rendering and parallelizing some operations
	viewers: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
	writers: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
	commenters: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
	subject : String,
	from: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	to : [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
	readBy: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
	//There needs to be some condition checker to ensure that read by is a subset of to...read by will be useful in determing what threads show up
	//as undread in the users inbox (the whether or not the user is in the readby array of the latest email in thread)
	cc : [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],// may not be necessary if just getting straight from Google is faster
	bcc : [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],// may not be necessary if just getting straight from Google is faster
	assignees: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
	following: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
	comments : [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
	//May not be needed depending on how we do comments.
});

module.exports = mongoose.model('Email', emailSchema);
