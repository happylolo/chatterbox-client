var MessagesView = {
  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(Messages) {
    _.each(Messages, (message) => {
      var $message = MessageView.render(message);
      // append to the end
      // MessagesView.$chats.append($message);
      // prepend to the top
      MessagesView.$chats.prepend($message);
    });
  },
};