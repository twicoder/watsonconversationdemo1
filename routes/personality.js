var express = require('express');
var router = express.Router();
var moment = require('moment');
var config = require('../config');

var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

var personality_insights = new PersonalityInsightsV3({
    username: 'de9230a6-60b8-4698-9d4c-6565e09153ae',
    password: 'hle2CNHn2PMu',
    version_date: '2017-10-13'
});


router.post('/', function (req, res, next) {
    var wordsFromUser = req.body.words;

    personality_insights.profile(
        {
            content: wordsFromUser,
            content_type: 'text/plain',
            consumption_preferences: true
        },
        function (err, response) {
            if (err) {
                console.log('error:', err);
                res.status(500).send({"success": false, "message": err});
            } else {
                res.status(200).send({
                    "success": true,
                    "message": JSON.stringify(response, null, 2)
                });
            }
        }
    );

});

module.exports = router;
