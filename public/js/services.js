angular.module('myApp')
.service('Users', [function() {
  var users = [
  {}
  ];
  $http({
    method: 'POST',
    url: '/api/users'
  })
  .then(function successCallback(res) {

  }, function errorCallback(res) {

  });

  return {
    users: users,
    getUsers: function() { return users; },
    getuser: function(index) { return users[index]; },
    addUser: function(users) { users.push(users); }
  };
}]);


// <ul>
//   <li ng-repeat = "user in UserService.users">
//     <h4>{{users.name}}</h4>
//   </li>
// </ul>
// <input type="text" placeholder="name" ng-model="newUser.name"><br>
// <button ng-click="addUser()">Add</button>