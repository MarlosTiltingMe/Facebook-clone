Animu.factory("AuthService", AuthService);
AuthService.$inject = ['$cookies', '$http'];

function AuthService($cookies, $http) {
  var AuthService = {
    login: login,
    logout: logout,
    register: register,
    setAuthenticatedAccount: setAuthenticatedAccount,
    unauthenticate: unauthenticate
  };

  return AuthService;

  function login(username, password) {
    return $http.post('/api/auth/login/', {
      username: username,
      password: password
    }).then(loginSuccessFn, loginErrorFn);

    function loginSuccessFn(data, status, headers, config) {
      AuthService.setAuthenticatedAccount(data.data);
      window.location = '/';
    }

    function loginErrorFn(data, status, headers, config) {
      window.location = '/login';
    }
  }

  function logout() {
    return $http.post('/api/auth/logout/')
    .then(logoutSuccessFn, logoutErrorFn);

      function logoutSuccessFn(data, status, headers, config) {
        AuthService.unauthenticate();
        alert('You\'ve been logged out.');
        window.location = '/';
      }

      function logoutErrorFn(data, status, headers, config) {
        alert("Ruh roh, raggy! Ran into an error whilst trying to log you out!.");
      }
  }

  function register(email, username, password) {
    return $http.post('/api/users/', {
      email: email,
      username: username,
      password: password
    }).then(registerSuccessFn, registerErrorFn);

    function registerSuccessFn(data, status, headers, config) {
      AuthService.login(username, password);
      window.location = '/login';
    }

    function registerErrorFn(data, status, headers, config) {
      alert("Registration error xdxd");
    }
  }

  function setAuthenticatedAccount(account) {
    return $http.get('/api/user/' + account.username + '/').success(function(data) {
      //$cookies.put('sessionid', JSON.stringify(account));
    });
  }

  function unauthenticate() {
    //$cookies.remove('sessionid');
  }
}