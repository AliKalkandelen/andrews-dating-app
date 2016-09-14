app.controller('chatCtrl', function($scope){

  $scope.$on('$ionicView.enter', function(e) {
    console.log("Entered messages");
  });


});
