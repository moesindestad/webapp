Meteor.startup(function() {
  // Add Facebook configuration entry
  ServiceConfiguration.configurations.update(
    { service: "facebook" },
    { $set: {
      appId: "1461288480851860",
      secret: "fd17e88f98d3b7c4eab0190201910cdd"
    }
    },
    { upsert: true }
  );

  // Add Google configuration entry
  ServiceConfiguration.configurations.update(
    { service: "google" },
    { $set: {
      clientId: "165284929733-l3p673skb1ufa9tvkld157g04gt14eke.apps.googleusercontent.com",
      client_email: "moes.in.de.tuin@gmail.com",
      secret: "S7C6TRRAEyEwEXj82I4dQ8sT"
    }
    },
    { upsert: true }
  );

  // Add Twitter configuration entry
  ServiceConfiguration.configurations.update(
    { service: "twitter" },
    { $set: {
      consumerKey: "R6Cu5ULn4kH2U1rZhYglNzcFk",
      secret: "UnZB6ncNUx0dCKLxa0uNNm53r1tyaZ1hrgbAUbrlgC2aGuVX04"
    }
    },
    { upsert: true }
  );

});