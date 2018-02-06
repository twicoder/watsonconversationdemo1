(function(){
    'use strict';

    var app = angular.module('app',['ui.router','angular-momentjs']);

    app.config(config);

    app.config(function($momentProvider){
        $momentProvider
            .asyncLoading(false)
            .scriptUrl('/libs/moment.min.js');
    });

    function config($stateProvider, $urlRouterProvider) {

        // default route
        $urlRouterProvider.otherwise("/");

        // app routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/home/index.view.html',
                controller: 'Home.IndexController',
                controllerAs: 'vm'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/login/index.view.html',
                controller: 'Login.IndexController',
                controllerAs: 'vm'
            });
    }


})();