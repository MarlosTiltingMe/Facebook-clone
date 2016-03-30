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
  }).when('/settings', {
    controller: 'SettingsController',
    controllerAs: 'SettingsCtrl',
    templateUrl: app + 'settings/settings.tpl.html'
  }).when('/members', {
    controller: 'MembersController',
    controllerAs: 'MembersCtrl',
    templateUrl: app + 'members/members.tpl.html'
  });
});
