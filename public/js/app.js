angular.module('app', ['ngRoute'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'home.html',
    controller: 'HomeController'
  })
  .when('/users', {
    templateUrl:'users.html',
    controller: 'UserController'
 })
  .when('/register', {
    templateUrl: 'register.html',
    controller: 'UserPostController'
  })
  .when('/user', {
    templateUrl: 'user.html',
    controller: 'UserIdController'
  })
  .otherwise({ redirectTo: '/' });

  $locationProvider.html5Mode(true);
}])
.run(function() {
     //initialize
     console.log('running');
   });