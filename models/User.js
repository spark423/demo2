var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , model = mongoose.model

var userSchema = new Schema({
	createdAt: {type: Date, default: Date.now},
	firstName : String,
	lastName : String,
	email : String,
	googleToken : String,//hopefully all thigns will be encrypted but this especially
	tokenExpiration : Date,
	notifications: [{type: mongoose.Schema.Types.ObjectId, ref: 'Notification'}],
	projects : [{type: mongoose.Schema.Types.ObjectId, ref: 'Project'}],
	threads : [{type: mongoose.Schema.Types.ObjectId, ref: 'Thread'}],
	pinnedThreads: [{type: mongoose.Schema.Types.ObjectId, ref: 'Thread'}],
	snoozedThreads: [{alarm: Date, threadId: {type: mongoose.Schema.Types.ObjectId, ref: 'Thread'}}],
	//discussion needed on how to make snoozed rendering behaveior
	emails : [{type: mongoose.Schema.Types.ObjectId, ref: 'Email'}],
	drafts : [{type: mongoose.Schema.Types.ObjectId, ref: 'Draft'}],
	blockedBy : [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
	blocking : [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('User', userSchema);
