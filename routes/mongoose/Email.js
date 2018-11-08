var Email = require('../../models/Email');

var newEmail = function(googleEmailId, mongooseThreadId, subject, from, to, cc, bcc) {
	var email = new Email({
		googleId: googleEmailId,
		threadId: mongooseThreadId,
		subject: subject,
		from: from,
		to: to,
		cc: cc,
		bcc: bcc
	})
	email.save().exec(function(error, newEmail) {
		if (error) {
			throw error;
		} else {
			return newEmail;
		}
	})
}

var find = function(queryFilter, sortFilter, limitFilter, populateFields) {
	Email.find(queryFilter).populate(poulateFields).exec(function(emails, error) {
		if (error) {
			throw error;
			//will figure out later how to leverage the error message mongoose gives out
		} else {
			return emails;
		}
	})
}

var findById = function(id, poulateFields) {
	Email.findById(id).populate(poulateFields).exec(function(email, error) {
		if (error) {
			throw error;
			//will figure out later how to leverage the error message mongoose gives out
		} else {
			return email;
		}
	})
}

var findOneAndUpdate = function(queryFilter, updateFields, returnNewBoolean, upsertBoolean) {
	Email.findOneAndUpdate(queryFilter, updateFields, {returnNewDocument: returnNewBoolean, upsert: upsertBoolean}).exec(function(email, error) {
		if (error) {
			throw error;
			//will figure out later how to leverage the error message mongoose gives out
		} else {
			return email;
		}
	})
}

var updateMany = function(queryFilter, updateFields, upsertBoolean) {
	Email.updateMany(queryFilter, updateFields, {upsert: upsertBoolean}).exec(function(emails, error) {
		if (error) {
			throw error;
			//will figure out later how to leverage the error message mongoose gives out
		} else {
			return emails;
		}
	})
}

module.exports = {find: find, findById: findById, findOneAndUpdate: findOneAndUpdate, updateMany: updateMany};