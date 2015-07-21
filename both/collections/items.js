Tips = new Mongo.Collection('tips');
Tips.attachSchema(new SimpleSchema({
    description: {
      type: String,
      min: 20,
      max: 1000,
      autoform: {
         rows: 5
      }
   }
}));

Tips.helpers({

});

Tips.before.insert(function (userId, tip) {
  tip.createdAt = moment().toDate();
});
