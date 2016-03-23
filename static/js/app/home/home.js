Animu.controller('HomeController', HomeController);
HomeController.inject = ['$cookies'];

function HomeController($scope, $http, $cookies, HomeService, UserService) {
  /**
  This code was written by a filthy weeb. Emphasis on filthy. And weeb..?
  **/

  $scope.init = function() {

    $scope.map = new Map();
    HomeService.list().success(function(data) {
      $scope.statuses = data;

      UserService.list().success(function(resp) {
        for (var c = 0; c < resp.length; c++) {
          var key = resp[c].username;
          $scope.map.set(key, resp[c].prof_picture);
        }
      });
    });
  }

  function sort(key) {
    return $scope.map.get(key);
  }

  $scope.sortMap = function(key) {
    return sort(key);
  }

}
