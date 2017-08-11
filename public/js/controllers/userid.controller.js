/*jshint esversion: 6*/
angular.module('app')
.controller('UserIdController', ['$scope', 'UserService', '$routeParams', function($scope, UserService, $routeParams) {
  var usersId = $routeParams.id;
  console.log(usersId);
  return UserService.getUsersById(usersId)
  .then((user) => {
    console.log(user.message);
    $scope.user = user.username;
    $scope.messages = user.message;
    $scope.test = user;
  });
}]);