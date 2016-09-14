app.factory('UserService', function($http, $q){
  var deferred = $q.defer();
  return{
    get: function(usr){
        return $http.post('api/login.php', usr).success(function(response){
          deferred.resolve(response);
          return deferred.promise;
        }).error(function(error){
          console.error(error);
        });
    },
    set: function(usr){
        return $http.post('api/signup.php', usr).then(function(response){
          return response.data;
        },function(data, status){
          console.error(data, status);
          return;
        });
    }
  };
});
