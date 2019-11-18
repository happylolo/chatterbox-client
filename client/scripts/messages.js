var Messages = {
  // underbar here is just a notice to the developer: don't use the data directly
  _data: {},

  // () => {} means the default callback, so that this function always has a callback
  add: function (message, callback = () => { }) {
    Messages._data[message.objectId] = Messages._conform(message);

    callback();
  },

  update: function (messages, callback = () => {}) {
    for (var message of messages) {
      Messages._data[message.objectId] = Messages._conform(message);
    }

    callback();
  },

  // this conform function is used to ensure each message object conforms to expected shape
  _conform: function (message) {
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';

    return message;
  }
};