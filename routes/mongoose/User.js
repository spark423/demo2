var User = require('../../models/User');


var findOneAndUpdate = function(queryFilter, updateFields, returnNewBoolean, upsertBoolean) {
	User.findOneAndUpdate(queryFilter, updateFields, {returnNewDocument: returnNewBoolean, upsert: upsertBoolean}).exec(function(user, error) {
		if (error) {
			throw error;
			//will figure out later how to leverage the error message mongoose gives out
		} else {
			return user;
		}
	})
}

module.exports = {findOneAndUpdate: findOneAndUpdate};