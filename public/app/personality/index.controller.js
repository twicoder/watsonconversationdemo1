(function () {
    'use strict';

    angular
        .module('app')
        .controller('Personality.IndexController', controller);

    function controller($http) {
        var vm = this;

        vm.sendDataNeedAnalyze = function(){
            var reqPersonalWords = { words: vm.personalwords };

            $http.post('/personality',reqPersonalWords).then(function(result){
                if(result.data.success){
                    vm.personal_ana_description = result.data.message;
                } else {
                    vm.personal_ana_description = "";
                    console.log('failed to fetch result, details:');
                    console.log(result.data);
                }
            }).catch(function(err){

                console.log(err);

            });
        };


        vm.enterEvent = function(e) {
            var keycode = window.event?e.keyCode:e.which;
            if(keycode==13){
                vm.sendDataNeedAnalyze();
            }
        };

    }

})();