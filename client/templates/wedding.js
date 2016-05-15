if (Meteor.isClient) {
    Template.body.events({
        "submit .rsvp": function (event, template) {
            event.preventDefault();
            var recaptchaResponse = grecaptcha.getResponse();
            var person = {};
            person.firstName = event.target.firstName.value;
            person.lastName = event.target.lastName.value;
            person.attending = $("input[name='attending']:checked").val();
            person.numberOfGuests = event.target.numOfGuests.value;


            Meteor.call('checkAndSave', recaptchaResponse, person, function (error) {
                if (!error) {
                    //show success
                    template.find("form").reset();
                    grecaptcha.reset();
                    Session.set("errorMessage", null);
                    Session.set("successMessage", "RSVP saved! Thanks for letting us know!");
                } else {
                    //show error
                    // show a nice error message
                    Session.set("successMessage", null);
                    Session.set("errorMessage", "Looks like something went wrong with ReCaptcha. Make sure you click on the check box above the save button." +
                        "Sometimes it will pop up an additional question giving you a prompt and asking you to choose pictures that describe that prompt." +
                        "Make sure you complete those questions. If all goes well, you will see a checkmark in the box.");
                }

            });


        }

    });

    Template.registerHelper('errorMessage',function(input){
        return Session.get("errorMessage");
    });

    Template.registerHelper('successMessage',function(input){
        return Session.get("successMessage");
    });

}
