Animu.controller('MembersController', MembersController);
MembersController.inject = ['$cookies'];

function MembersController($scope, $http, $cookies, AuthService, UserService) {

  $scope.init = function() {
    fetch();
  }

  function fetch() {

    UserService.list().success(function(data) {
      $scope.users = data;
    });
  }
}
