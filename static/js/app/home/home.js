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
      $scope.isAuth();
    });
  }

  $scope.postStatus = function(status) {
    HomeService.post({status:status, favorites:[]});
    location.reload();
  }

  function sort(key) {
    return $scope.map.get(key);
  }

  $scope.sortMap = function(key) {
    return sort(key);
  }

  $scope.like = function(status) {
    UserService.current().success(function(data) {
      HomeService.status(status).success(function(resp) {
        var curFavs = resp.favorites;
        curFavs.push(data.id);
        HomeService.update(status, {favorites:curFavs});
        location.reload();
      });
    });
  }

  $scope.isAuth = function() {
    UserService.current().then(a, b);

    function a(data, status, headers, config) {
      $scope.authed = true;
      $scope.anon = false;
    }

    function b(data, status, headers, config) {
      $scope.anon = true;
    }
  }

  $scope.login = function(username, password) {
    HomeService.login(username, password).success(function() {
      $scope.authed = true;
      $scope.anon = false;
      location.reload();
    });
  }

}
