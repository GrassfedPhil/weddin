RSVP = new Mongo.Collection("rsvp");

if (Meteor.isClient) {
    Template.body.events({
        "submit .rsvp": function (event, template) {
            event.preventDefault();
            var recaptchaResponse = grecaptcha.getResponse();
            var firstName = event.target.firstName.value;
            var lastName = event.target.lastName.value;
            var attending = event.target.attending.value;


            var any = Meteor.call('checkCaptcha', recaptchaResponse);
            console.log(any);
            //RSVP.insert({
            //    firstName: firstName,
            //    lastName: lastName,
            //    attending: attending,
            //    createdAt: new Date()
            //});
            template.find("form").reset();
        }

    })

}
