var MessagesView = {
  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
    _.each(Messages._data, (message) => {
      console.log('In the messagesView.render!!!');
      var $message = MessageView.render(message);
      // append to the end
      // MessagesView.$chats.append($message);
      // prepend to the top
      MessagesView.$chats.prepend($message);
    });
  },
};