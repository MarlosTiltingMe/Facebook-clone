Animu.factory('HomeService', HomeService);


function HomeService($http) {

  function list() {
    return $http.get('/api/statuses/');
  }

  function status(id) {
    return $http.get('/api/statuses/' + id + '/');
  }

  function post(post) {
    return $http.post('/api/statuses/', post);
  }

  function update(id, post) {
    return $http.patch('/api/statuses/' + id + '/', post);
  }

  return {
    list: list,
    status: status,
    post: post,
    update: update
  };
}
