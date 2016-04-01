RSVP = new Mongo.Collection("rsvp");

if (Meteor.isClient) {
    Template.body.events({
        "submit .rsvp": function (event, template) {
            event.preventDefault();
            var firstName = event.target.firstName.value;
            var lastName = event.target.lastName.value;
            var attending = event.target.attending.value;


            RSVP.insert({
                firstName: firstName,
                lastName: lastName,
                attending: attending,
                createdAt: new Date()
            });
            template.find("form").reset();
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
