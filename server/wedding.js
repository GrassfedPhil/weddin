if (Meteor.isServer) {
    Meteor.methods({
        checkCaptcha: function (captchaCode) {

            HTTP.post('https://www.google.com/recaptcha/api/siteverify', {
                data: {
                    secret: '6LfTURwTAAAAAJxqmz1loR-38bpZtfzldLc4fXAz',
                    response: captchaCode
                }
            }, function (response) {
                console.log('sup');
                console.log(response);
                return 'hello';
            });
        }
    });
}