(function () {
    'use strict';

    angular
        .module('app')
        .controller('Home.IndexController', controller);

    function controller($moment, $http) {
        var vm = this;

        vm.chatContentList = [];

        vm.sendChatContent = function () {
            vm.chatContentList.push({
                id: vm.chatContentList.length + 1,
                message: vm.chatContentToSend,
                time: $moment(new Date()).format("MM-DD-YYYY hh:mm:ss"),
                user:'man'
            });

            var chatRequestBody = {"message": vm.chatContentToSend};
            vm.chatContentToSend = "";

            $http.post('/chat', chatRequestBody).then(function (result) {
                vm.chatContentList.push({
                    id: vm.chatContentList.length + 1,
                    message: result.data.message[0],
                    time: result.data.time,
                    user: result.data.user
                });
                vm.chatContentToSend = "";
            }).catch(function (err) {
                console.log(err);
            });

        };

        vm.enterEvent = function(e) {
            var keycode = window.event?e.keyCode:e.which;
            if(keycode==13){
                vm.sendChatContent();
            }
        };

    }

})();