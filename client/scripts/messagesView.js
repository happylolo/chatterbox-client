var MessagesView = {
  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(Messages) {
    _.each(Messages, (message) => {
      var $message = MessageView.render(message);
      MessagesView.$chats.append($message);
    });
  },

};