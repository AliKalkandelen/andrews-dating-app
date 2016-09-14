app.controller('globalChatCtrl', function($scope, $interval, $http, $rootScope, MessageService){

  var getMessages = $interval(function() {
    $scope.callAtInterval();
    MessageService.get().then(function(response){
      $scope.messages = response;
    });
  }, 1000);

    $scope.$on('$ionicView.enter', function(e) {
      $scope.callAtInterval();
    });

    $scope.$on('$ionicView.leave', function(e) {
      console.log("Leaving Global Chat Room");
      $interval.cancel(getMessages);
    });

    $scope.callAtInterval = function(){

    }

    $scope.sendMessage = function(msg){
      var data = {
        id : $rootScope.UserData.id,
        message: msg
      }
      MessageService.set(data);
      document.getElementById("msginput").reset();
    }

});
