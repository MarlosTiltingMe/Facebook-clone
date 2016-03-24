"use strict";
Animu.controller('SettingsController', SettingsController);

function SettingsController($scope, $http, $cookies, HomeService, UserService) {

  $scope.userInfo = function() {
    UserService.current().success(function(data) {
      console.log(data);
      $scope.name = data.username;
      $scope.picture = data.prof_picture;
      $scope.statuses = data.statuses;
      $scope.favorites = data.favorites;
    });
  }

  $scope.changePicture = function(picture) {
    UserService.current().success(function(user) {
      UserService.update(user.id, {prof_picture:picture}).success(function() {
        window.location = '/settings';
      });
    })
  }

}
