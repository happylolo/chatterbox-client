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

    Parse.create(message);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};