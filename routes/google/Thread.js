//details of necessary requiring go up here

function getThread(userId, threadId, callback) {
  var request = gapi.client.gmail.users.threads.get({
    'userId': userId,
    'id': threadId
  });
  request.execute(callback);
}

module.exports = {getThread: getThread};
