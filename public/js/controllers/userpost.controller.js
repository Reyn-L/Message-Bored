angular.module('app').controller('UserPostController', [
  '$scope',
  'UserService',
  function($scope, UserService) {
    $scope.newUser = { name: '' };
    $scope.addUsers = function() {
      var newUser = {
        name: $scope.newUser.name
      };
      UserService.addUsers(newUser);
      $scope.newUser.name = '';
    };
  }
]);
