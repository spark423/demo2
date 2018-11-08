var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	mongooseThread = require('./mongoose/Thread'),
	newThread = mongooseThread.newThread,
	threadFind = mongooseThread.find,
	threadFindById = mongooseThread.findById,
	threadFindOneAndUpdate = mongooseThread.findOneAndUpdate,
	threadUpdateMany = mongooseThread.updateMany,
	googleThread = require('./google/Thread'),
	getThread = googleThread.getThread,
	mongooseEmail = require('./mongoose/Email'),
	newEmail = mongooseEmail.newEmail,
	googleEmail = require('./google/Email'),
	getEmail = googleEmail.getMessage,
	sendEmail = googleEmail.sendMessage,
	mongooseUser = require('./mongoose/User'),
	userFindOneAndUpdate = mongoose.findOneAndUpdate,
	fs = require('fs');

//DEMO
router.get('/threads', function(req, res) {
	let threadList = [];
	let names = ['Sean Park', 'David Chang', 'Ian Andolsek', 'Nathan Sokolic'];
	let subjects = ['Important Meeting today!', 'Fall Break Resources', 'Halloween Party', 'Staff Meeting'];
	let snippets = ['Reminder there is an important staff...', 'What are the fall break resources to...', 'This year\'s Halloween Party is spons...', 'Meeting to discuss how to move forwa...'];
	for(var i=0; i<4; i++) {
		threadList.push({threadId: i, email: {from: names[i], subject: subjects[i], snippet: snippets[i]}});
	}
	console.log(threadList);
	res.json(threadList);
})

//DEMO
router.get('/thread/:id', function(req, res) {
	res.json({
						"id": req.params.id,
						"from": 'Ian Andolsek',
						"to": 'Nathan Sokolic',
						"cc": 'Sean Park',
						"bcc": 'David Chang',
						"attachments": 'public/test.pdf',
						"text": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
						//comments are being done separately
					})
})

/*
//Getting threads
router.get('/threads/page=:num/pinned=:p/snoozed=:s', function(req, res) {
	//This is return under the assumption that the threads are in non increasing order in user's thread array. In order to guarantee this,
	//we would have to use unshift instead of push.
	let threadIds = null,
		moreThreads = false;
	if (20*(req.params.num + 1) < req.user.threads.length) {
		threadIds = req.user.threads.slice(20*req.params.num,20*(req.params.num+1));
		moreThreads = true;
	} else {
		threadIds = req.user.threads.slice(20*req.params.num);
	}
	threadFind({_id: {$in: threadIds}, pinned: {$eq: req.params.p}}, {}, {}, {})
		.then(function(mongoResponse) {
			let responseList = [];
			for (var i = 0; i<mongoResponse.length(); i++) {
				getMessage(req.user.username, mongoResponse[i].emails[mongoResponse[i].emails.length()-1], function(googleResponse) {
					if (googleResponse.error) {
						throw error;
					} else {
						responseList.push({
											threadId: googleResponse.threadId,
											email: {from: googleResponse.payload.headers[1], subject:  googleResponse.payload.headers[2],
											//Need to actually see if these index positions are correct...further parsing may be needed
											snippet: googleResponse.snippet
										}})
					}
				})
			}
			res.json({success: true, threads: responseList});
		})
		.catch(function(error) {
			res.json({success: false, message: ""});
		})
})

//Getting emails of a single thread
router.get('/threads/threadId=:id/emails/page:=num', function(req, res) {
	//option 1: Find the thread using the thread id, slice its associated array of email ids, and find emails of which the ids can be found in the sliced array
	threadFindById(req.params.id,{})
		.then(function(mongoResponse) {
			let emailIds = null,
				moreEmails = false;
			if (5*(req.params.num + 1) < mongoResponse.emails.length) {
				emailIds = mongoResponse.emails.slice(5*req.params.num,5*(req.params.num+1));
				moreEmails = true;
			} else {
				emailIds = mongoResponse.emails.slice(5*req.params.num);
			}
			let responseList = [];
			for (var i=0; i < emailIds.length; i++) {
				getMessage(req.user.username, emailIds[i], function(googleResponse) {
					if (googleResponse.error) {
						throw error;
					} else {
						responseList.push({
											"id": emailIds[i],
											"from": //need to figure out how to parse this,
											"to": //need to figure out how to parse this,
											"cc": //need to figure out how to parse this,
											"bcc": //need to figure out how to parse this,
											"attachments": //need to figure out how to do this..or may be do it in a separate call,
											"text" //need to figure out how to parse this
											//comments are being done separately
										}})

					}
				})
			}
			res.json({success: true, threadId: mongoResponse._id, emails: responseList});
	})
	.catch(function(error) {
		res.json({success: false, message: ""});
	})
})

//Creating a new thread via creating a new email
router.post('/threads/new', function(req, res) {
	//need to parse the requet to meet the Google api standard
	var email = "";
	sendEmail(req.user.googleId, email, function(googleResponse) {
		if (googleResponse.error) {
			res.json({success: false, message: "Error with Google"});
		} else {
			let createNewThread = newThread(googleResponse.threadId,req.body.title, req.user._id);
			let createNewEmail = newThread.then(function(mongooseThread) {
				newEmail(googleResponse.id, mongooseThread._id, req.body.subject, req.user._id, req.body.to, req.body.cc, req.body.bcc);
			});
			let updateUser = userFindOneAndUpdate({_id: {$eq: req.user._id}}, {threads: {$upsert: mongooseThread._id}}, {}. {});
			promise.all([createNewThread, createNewEmail, updateUser]).then(function(thread, email, user) {
				//some logic related to sockets here
				res.json({success: true, message: ""});
			})
			.catch(function(error) {
				res.json({success: false, message: ""});
			})
		}
	})

})
*/






module.exports = router;
