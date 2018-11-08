var Comment = require('../../models/Comment');

var find = function(queryFilter, sortFilter, limitFilter, populateFields) {
	Comment.find(queryFilter).populate(poulateFields).exec(function(comments, error) {
		if (error) {
			throw error;
			//will figure out later how to leverage the error message mongoose gives out
		} else {
			return comments;
		}
	})
}

var findById = function(id, poulateFields) {
	Comment.findById(id).populate(poulateFields).exec(function(comment, error) {
		if (error) {
			throw error;
			//will figure out later how to leverage the error message mongoose gives out
		} else {
			return comment;
		}
	})
}

var findAndUpdate = function(queryFilter, updateFields, returnNewBoolean, upsertBoolean) {
	Comment.findOneAndUpdate(queryFilter, updateFields, {returnNewDocument: returnNewBoolean, upsert: upsertBoolean}).exec(function(comment, error) {
		if (error) {
			throw error;
			//will figure out later how to leverage the error message mongoose gives out
		} else {
			return comment;
		}
	})
}

var updateMany = function(queryFilter, updateFields, upsertBoolean) {
	Comment.updateMany(queryFilter, updateFields, {upsert: upsertBoolean}).exec(function(comments, error) {
		if (error) {
			throw error;
			//will figure out later how to leverage the error message mongoose gives out
		} else {
			return comments;
		}
	})
}

module.exports = {find: find, findById: findById, findAndUpdate: findAndUpdate, updateMany: updateMany};