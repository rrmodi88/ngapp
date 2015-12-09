var homePageApp = angular.module('homePageApp', ['ui.router','ngMaterial']);
homePageApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url:'/',
            templateUrl: 'app/templates/home/home.html',
            controller: 'homeController'
        })
})