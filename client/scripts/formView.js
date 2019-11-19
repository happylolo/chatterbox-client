var FormView = {
  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var message = {
      username: App.username,
      // Get the value of the #message id in $form
      text: FormView.$form.find('#message').val(),
      roomname: Rooms.selected,
    };

    Parse.create(message, (data) => {
      // Parse doesn't return the entire object, it just returned the properities it created(objectId and createdAt)). So here we used _.extend() to add Parse sepcific properties(like objectId and createdAt) with the message we created
      // _.extend(destination, *sources) is used to shallowly copy all of the properties in the source objects over to the destination object, and return the destination object
      _.extend(message, data);
      // If we pass the message to the Parse server and create it successfully, we will go and re-render the messages
      // Since MessagesView has nothing to do with fetching the data, so we will need to concat the newly created message to Messages
      // Make MessagesView.render as a callback and refresh the displayed messages if the new message was added successfully
      Messages.add(message, MessagesView.render);
    });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};