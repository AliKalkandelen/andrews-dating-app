app.controller('PlaylistsCtrl', function($scope, $http) {
  $http.get("api/events.json").then(function(response){
    $scope.events = response.data;
  });
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
