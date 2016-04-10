"use strict";
Animu.controller('SettingsController', SettingsController);

function SettingsController($scope, $http, $cookies, HomeService, UserService) {

  $scope.userInfo = function() {
    UserService.current().success(function(data) {
      $scope.id = data.id;
      $scope.name = data.username;
      $scope.email = data.email;
      $scope.password = data.password;
      $scope.picture = data.prof_picture;
      $scope.statuses = data.statuses;
      $scope.favorites = data.favorites;


      //GunZ Servers
      $scope.fgunz = data.fgunz;
      $scope.hggunz = data.hggunz;
      $scope.phgunz = data.phgunz;
      $scope.reloaded = data.reloaded;
      $scope.rival = data.rival;
      $scope.sgunz = data.sgunz;
      $scope.darkgunz = data.darkgunz;
      $scope.drgunz = data.drgunz;
      $scope.egunz = data.egunz;
      $scope.agunz = data.agunz;

      //Social
      $scope.twitter = data.twitter;
      $scope.twitch = data.twitch;
      $scope.youtube = data.youtube;
    });
  }

  function compile() {
    var info = {
      //User stuff
      username:$scope.name,
      email:$scope.email,
      password:$scope.password,

      //Servers
      fgunz:$scope.fgunz,
      hggunz:$scope.hggunz,
      phgunz:$scope.phgunz,
      reloaded:$scope.reloaded,
      rival:$scope.rival,
      sgunz:$scope.sgunz,
      darkgunz:$scope.darkgunz,
      egunz:$scope.egunz,
      agunz:$scope.agunz,

      //Social
      twitter:$scope.twitter,
      twitch:$scope.twitch,
      youtube:$scope.youtube
    };

    return info;
  }

  $scope.changeInfo = function() {
    UserService.put($scope.id, compile()).success(function(data) {
      window.location = '/settings';
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
