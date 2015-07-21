Tips.allow({
  'insert': function(userId, tip) {
    return userId;
  },
  'update': function(userId, tip, fields, modifier) {
    return userId;
  },
  'remove': function(userId, tip) {
    return userId;
  }
});
