/*jshint esversion: 6*/
angular.module('app').service('TopicService', [
  '$http',
  function($http) {
    function getTopics() {
      return $http
        .get('/api/topics')
        .then(topics => {
          return topics.data;
        })
        .catch(err => {
          console.log(err);
        });
    }

    function addTopics(topic) {
      return $http
        .post('/api/topics', topic)
        .then(topics => {
          return topics.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
    return {
      getTopics: getTopics,
      addTopics: addTopics
    };
  }
]);
