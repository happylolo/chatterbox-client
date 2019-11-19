var MessagesView = {
  $chats: $('#chats'),

  initialize: function() {
  },

  // In order not to expose Messages._data to MessagesView, we can use a Messages.item() which is a chainable object
  render: function () {
    // We can debug in the chrome by adding a dubugger here like this if we want:
    // debugger;
    Messages
      .items()
      // filter out all non-selected messages
      .filter(message => Rooms.isSelected(message.roomname))
      .each((message) => {
        var $message = MessageView.render(message);
        // Append to the end: MessagesView.$chats.append($message);
        // Prepend to the top:
        MessagesView.$chats.prepend($message);
      });
  },
};