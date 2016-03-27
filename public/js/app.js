angular.module('appSimpleMenu', [
        'ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html'
            })
            .state('page1', {
                url: '/page1',
                templateUrl: 'templates/page1.html'
            })
            .state('page2', {
                url: '/page2',
                templateUrl: 'templates/page2.html'
            })
            .state('page3', {
                url: '/page3',
                templateUrl: 'templates/page3.html'
            })
        $urlRouterProvider.otherwise('/');
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    });