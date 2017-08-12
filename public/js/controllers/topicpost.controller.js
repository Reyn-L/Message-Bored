angular.module('app').controller('TopicPostController', [
  '$scope',
  'TopicService',
  function($scope, TopicService) {
    $scope.newTopic = { name: '' };
    $scope.addTopics = function() {
      var newTopic = {
        name: $scope.newTopic.name,
        created_by: $scope.newTopic.created_by
      };
      TopicService.addTopics(newTopic);
      $scope.newTopic.name = '';
      $scope.newTopic.created_by = '';
    };
  }
]);
