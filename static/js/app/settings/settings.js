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
    var info = {};

    //User stuff
    info.username = $scope.name;
    info.email = $scope.email;
    info.password = $scope.password;

    //Servers
    info.fgunz = $scope.fgunz;
    info.hggunz = $scope.hggunz;
    info.phgunz = $scope.phgunz;
    info.reloaded = $scope.reloaded;
    info.rival = $scope.rival;
    info.sgunz = $scope.sgunz;
    info.darkgunz = $scope.darkgunz;
    info.egunz = $scope.egunz;
    info.agunz = $scope.agunz;

    //Social
    info.twitter = $scope.twitter;
    info.twitch = $scope.twitch;
    info.youtube = $scope.youtube;

    return info;
  }

  $scope.changeInfo = function() {
    UserService.put($scope.id, compile()).success(function(data) {
      console.log('a');
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
