var Messages = {
  // underbar here is just a notice to the developer: don't use the data directly
  _data: {},

  add: function (message) {
    Messages._data[message.objectId] = message;
  },

  update: function (messages) {
    for (var message of messages) {
      Messages._data[message.objectId] = message;
    }
  },
};