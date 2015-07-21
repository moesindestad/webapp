Meteor.publishComposite("tips", function() {
  return {
    find: function() {
      return Tips.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});
