/*jshint esversion: 6*/
angular.module('app').controller('TopicGetController', [
  '$scope',
  'TopicService',
  function($scope, TopicService) {
    $scope.topics = [];
    return TopicService.getTopics()
      .then(topics => {
        $scope.topics = topics;
      })
      .catch(err => {
        console.log(err);
      });
  }
]);
