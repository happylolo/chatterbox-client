var Messages = {
  // underbar here is just a notice to the developer: don't use the data directly
  _data: {},

  // () => {} means the default callback
  add: function (message, callback = () => {}) {
    Messages._data[message.objectId] = message;

    callback();
  },

  update: function (messages, callback = () => {}) {
    for (var message of messages) {
      Messages._data[message.objectId] = message;
    }

    callback();
  },
};