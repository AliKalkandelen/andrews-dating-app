app.factory('MessageService', function($http, $q){
  //var deferred = $q.defer();
  return{
    get: function(){
      return $http.get('api/messages.php').then(function(response){
        return response.data;
      },function(error){
        console.log("ERROR: " , error);
      });
    },
    set: function(data){
        console.log("Posting Message :" , data);
        $http.put('api/messages.php', data).success(function(response){
          console.log("Success!" , response);
      }).error(function(error){
        console.error(error);
      });

    }
  };
})
