var Animu = angular.module('Animu', ['ngRoute', 'ngCookies']).run(run);

function run($http) {
  $http.defaults.xsrfHeaderName = 'X-CSRFToken';
  $http.defaults.xsrfCookieName = 'csrftoken';
}
