var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = () => {}) {
    Parse.readAll((data) => {
      // Follow the same pattern as Messages to update and render the roomname
      Rooms.update(data.results, RoomsView.render);
      // Initialize the Messages object in message.js
      // From the console, we can see that data is an object, the key is "results", and the value is an array of objects which size is 100
      // Make MessagesView.render as a callback to render all the messages
      Messages.update(data.results, MessagesView.render);

      // examine the response from the server request
      // open the console of index.html and you will see the data from parse server has been logged here
      console.log(data);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
