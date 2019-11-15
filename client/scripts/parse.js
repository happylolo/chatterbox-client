var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  create: function(message, successCB, errorCB = null) {
    // todo: save a message to the server
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB = function (data) {
        console.log('chatterbox: Message Sent!');
        // If we pass the message to the Parse server and create it successfully, we will go and re-render the messages
        // Since MessagesView has nothing to do with fetching the data, so we will need to concat the newly created message to Messages
        Messages = Messages.concat(message);
        MessagesView.render(Messages);
      },
      error: errorCB = function (error) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to Fetch Messages', error);
      },
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }
};
