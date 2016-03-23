Animu.config(function($routeProvider) {
  var app = 'static/js/app/';

  $routeProvider
  .when('/', {
    controller: 'HomeController',
    controllerAs: 'HomeCtrl',
    templateUrl: app + 'home/home.tpl.html'
  }).when('/login', {
    controller: 'AuthController',
    controllerAs: 'AuthCtrl',
    templateUrl: app + 'auth/login.tpl.html'
  }).when('/register', {
    controller: 'AuthController',
    controllerAs: 'AuthCtrl',
    templateUrl: app + 'auth/auth.tpl.html'
  });
});
