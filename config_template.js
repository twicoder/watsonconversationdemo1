var ConversationV1 = require('watson-developer-cloud/conversation/v1');

module.exports = {
    conversation_service: {
        service_username: '<Your bluemix conversation service username here>',
        service_password: '<Your bluemix conversation service password here>',
        version_date: ConversationV1.VERSION_DATE_2017_05_26,
        workspace_id: '<Your bluemix conversation service workspace_id here>'
    },
    personality_service:{
        service_username: '<Your bluemix personality service username here>',
        servcie_password: '<Your bluemix personality service password here>',
        version_date: '2017-10-13'
    }
};