"use strict";
Animu.controller('HomeController', HomeController);
HomeController.inject = ['$cookies'];

function HomeController($scope, $http, $cookies, HomeService, UserService) {

  $scope.init = function() {
    $scope.map = new Map();
    HomeService.list().success(function(data) {
      $scope.statuses = data;
      UserService.list().success(function(users) {
        for(var user in users) {
          var key = users[user].username;
          $scope.map.set(key, users[user].prof_picture);
        }
      });
    });
  }

  $scope.postStatus = function(status) {
    HomeService.post({status:status});
  }

  function sort(key) {
    return $scope.map.get(key);
  }

  $scope.sortMap = function(key) {
    return sort(key);
  }

  $scope.like = function(status) {
    UserService.current().success(function(data) {
      console.log(data);
      HomeService.update(status, {favorites:[data.id]});
    });
  }

}
