var Rooms = {
  // Using a set instead of an array here is better, because if the room is already exists, we don't have to iterate the whole array to find if it's already exist. Set will ignore if it's already there.
  _data: new Set,

  // default selected room
  selected: 'lobby',

  isSelected: function (roomname) {
    return roomname === Rooms.selected || (!roomname && Rooms.selected === 'lobby');
  },

  update: function(messages, callback = () => {}) {
    _.chain(messages)
    // pluck example:
    // var stooges = [{ name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }]
    // _.pluck(stooges, 'name');
    // => ["moe", "larry", "curly"]
      .pluck('roomname')
      .uniq()
      .each(room => Rooms._data.add(room));

    // equivalent way without using _.chain:
    // var rooms = _.pluck(messages, 'roomname');
    // rooms = rooms.uniq();
    // _.each(rooms, room => Rooms._data.add(room));
  }

};