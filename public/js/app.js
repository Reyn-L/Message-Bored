angular
  .module('app', ['ngRoute'])
  .config([
    '$routeProvider',
    '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'home.html',
          controller: 'HomeController'
        })
        .when('/users', {
          templateUrl: 'users.html',
          controller: 'UserController'
        })
        .when('/register', {
          templateUrl: 'register.html',
          controller: 'UserPostController'
        })
        .when('/users/:id', {
          templateUrl: 'user.html',
          controller: 'UserIdController'
        })
        .when('/topics', {
          templateUrl: 'topics.html',
          controller: 'TopicGetController'
        })
        .when('/newtopic', {
          templateUrl: 'newtopic.html',
          controller: 'TopicPostController'
        })
        .otherwise({ redirectTo: '/' });

      $locationProvider.html5Mode(true);
    }
  ])
  .run(function() {
    //initialize
    console.log('running');
  });
