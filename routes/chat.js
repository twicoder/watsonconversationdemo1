var express = require('express');
var router = express.Router();
var moment = require('moment');
var config = require('../config');

var ConversationV1 = require('watson-developer-cloud/conversation/v1');
var conversation = new ConversationV1({
    username: config.service_username,
    password: config.service_password,
    version_date: config.version_date
});

router.post('/', function (req, res, next) {
    var messageFromUser = req.body.message;
    conversation.message({
        input: {text: messageFromUser},
        workspace_id: config.workspace_id
    }, function (err, response) {
        if (err) {
            res.status(500).send({"success": false, "message": "Internal Error!"});
        } else {
            var responseText = response.output.text;
            res.status(200).send({
                "message": responseText,
                time: moment(new Date()).format("MM-DD-YYYY hh:mm:ss"),
                user: "robot"
            });
        }
    });

});

module.exports = router;
