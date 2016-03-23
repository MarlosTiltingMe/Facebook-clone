Animu.factory('HomeService', HomeService);


function HomeService($http) {

  function list() {
    return $http.get('/api/statuses/');
  }

  function status(id) {
    return $http.get('/api/statuses/' + id + '/');
  }

  return {
    list: list,
    status: status
  };
}
