/*jshint esversion: 6*/
angular.module('app').service('UserService', [
  '$http',
  function($http) {
    function getUsers() {
      return $http
        .get('/api/users')
        .then(users => {
          return users.data;
        })
        .catch(err => {
          console.log(err);
        });
    }

    function getUsersById(id) {
      return $http
        .get('/api/users/' + id)
        .then(users => {
          return users.data;
        })
        .catch(err => {
          console.log(err);
        });
    }

    function addUsers(user) {
      return $http
        .post('/api/users', user)
        .then(users => {
          return users.data;
        })
        .catch(err => {
          console.log(err);
        });
    }

    return {
      getUsers: getUsers,
      addUsers: addUsers,
      getUsersById: getUsersById
    };
  }
]);
