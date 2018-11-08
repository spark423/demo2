var express = require('express'),
	router = express.Router(),
	Email = require('./mongoose/Email'),
	emailFind = Email.find,
	emailFindById = Email.findById,
	emailFindOneAndUpdate = Email.findOneAndUpdate,
	emailUpdateMany = Email.updateMany,
	Comment = require('./mongoose/Comment'),
	commentFind = Comment.find,
	commentFindById = Comment.findById,
	commentFindOneAndUpdate = Comment.findOneAndUpdate,
	commentUpdateMany = Comment.updateMany,
	moment = require('moment');

//DEMO
router.get('/emails/:id', function(req, res) {
	res.json({
		id: 1,
		date: moment().format('MMMM Do YYYY, h:mm:ss a'),
		text: 'Hello',
		discussionsLength: 0
	})
})

//DEMO
router.post('/emails/:id/reply', function(req, res) {
	res.json({
						"id": req.params.id,
						"from": 'Ian Andolsek',
						"to": 'Nathan Sokolic',
						"cc": 'Sean Park',
						"bcc": 'David Chang',
						"attachments": 'public/test.pdf',
						"text": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
					})
})

//DEMO
router.post('/emails/:id/comment', function(req, res) {
	res.json({
		id: req.params.id,
		date: moment().format('MMMM Do YYYY, h:mm:ss a'),
		text: 'Hello',
		discussionsLength: 0
	})
})

/*
//Replying to an email

//Getting comments of a particular email
router.get('/emails/emailId:=id/comments/page=:num', function(req, res) {
	emailFindById(req.params.id,{}).then(function(mongoResponseEmail) {
		let commentIds = null,
				moreComments = false;
		if (20*(req.params.num + 1) < mongoResponse.comments.length) {
			commentIds = mongoResponse.comments.slice(5*req.params.num,5*(req.params.num+1));
			moreThreads = true;
		} else {
			threadIds = req.user.threads.slice(5*req.params.num);
		}
		commentFind({_id: {$in: commentIds}}, {}, {}, {}).then(function(mongoResponseComments) {
			let responseList = [];
			for (var i=0; i<mongoResponseComments.length; i++) {
				responseList.push({
					id: mongoResponseComments[i]._id,
					date: mongoResponseComments[i].createdAt,
					text: mongoResponseComments[i].text,
					discussionsLength: mongoResponseComments[i].comments
				})
			}
		})
	})
	.catch(function(error) {
		res.json({success: false, message: ""});
	})
})
*/

module.exports = router;
