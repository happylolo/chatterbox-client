var FormView = {
  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    console.log('click the submit button!');

    var message = {
      username: App.username,
      // Get the value of the #message id in $form
      text: FormView.$form.find('#message').val(),
      roomname: 'lobby',
    };

    Parse.create(message, () => {
      // If we pass the message to the Parse server and create it successfully, we will go and re-render the messages
      // Since MessagesView has nothing to do with fetching the data, so we will need to concat the newly created message to Messages
      Messages = Messages.concat(message);
      // Refresh the displayed messages
      MessagesView.render(Messages);
      console.log('chatterbox: Message Sent!');
    });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};