angular.module('app')
.controller('UserPostController', ['$scope', 'UserService', function($scope, UserService) {
  $scope.newUser = {name: ''};
  $scope.UserService = Users;
  $scope.addUser = function() {
    var newUser = {
      name: $scope.newUser.name
    };
    UserService.addUser(newUser);
    $scope.newUser.name = '';
  };
}]);