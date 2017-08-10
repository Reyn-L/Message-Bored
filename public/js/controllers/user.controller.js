/*jshint esversion: 6*/
var app = angular.module('app');
app
.controller('UserController', ['$scope', 'UserService', function($scope, UserService) {
  $scope.users = [];
  return UserService.getUsers()
  .then((users)=> {
    return $scope.users = users;
  })
  .catch((err) => {
    console.log(err);
  });
}]);