RSVP = new Mongo.Collection("rsvp");

if (Meteor.isClient) {
    Template.body.events({

    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
