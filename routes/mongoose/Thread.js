var Thread = require('../../models/Thread');

var newThread = function(googleThreadId, title, mongoUserId) {
	var thread = new Thread({
		googleId: googleThreadId,
		title: title,
		originator: mongoUserId
	})
	thread.save().exec(function(error, newThread) {
		if (error) {
			throw error;
		} else {
			return newThread;
		}
	})
}

var find = function(queryFilter, sortFilter, limitFilter, populateFields) {
	Thread.find(queryFilter).populate(poulateFields).exec(function(threads, error) {
		if (error) {
			throw error;
			//will figure out later how to leverage the error message mongoose gives out
		} else {
			return threads;
		}
	})
}

var findById = function(id, poulateFields) {
	Thread.findById(id).populate(poulateFields).exec(function(thread, error) {
		if (error) {
			throw error;
			//will figure out later how to leverage the error message mongoose gives out
		} else {
			return thread;
		}
	})
}

var findOneAndUpdate = function(queryFilter, updateFields, returnNewBoolean, upsertBoolean) {
	Thread.findOneAndUpdate(queryFilter, updateFields, {returnNewDocument: returnNewBoolean, upsert: upsertBoolean}).exec(function(thread, error) {
		if (error) {
			throw error;
			//will figure out later how to leverage the error message mongoose gives out
		} else {
			return thread;
		}
	})
}

var updateMany = function(queryFilter, updateFields, upsertBoolean) {
	Thread.updateMany(queryFilter, updateFields, {upsert: upsertBoolean}).exec(function(thread, error) {
		if (error) {
			throw error;
			//will figure out later how to leverage the error message mongoose gives out
		} else {
			return thread;
		}
	})
}

module.exports = {newThread: newThread, find: find, findById: findById, findOneAndUpdate: findOneAndUpdate, updateMany: updateMany};