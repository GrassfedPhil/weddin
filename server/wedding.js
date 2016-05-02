RSVP = new Mongo.Collection("rsvp");

if (Meteor.isServer) {
    Meteor.methods({
        checkAndSave: function (captchaCode, person) {

            var result = HTTP.post('https://www.google.com/recaptcha/api/siteverify', {
                params: {
                    secret: '6LfTURwTAAAAAJxqmz1loR-38bpZtfzldLc4fXAz',
                    response: captchaCode
                }
            });

            if(result.data['success']) {
                console.log('success. inserting');
                RSVP.insert({
                    firstName: person.firstName,
                    lastName: person.lastName,
                    attending: person.attending,
                    createdAt: new Date()
                })
            } else {
                console.log(result.data['error-codes']);
                throw new Meteor.Error(result.data['error-codes'],
                    "ReCaptcha threw an error");
            }
            return result;
        }

    });
}