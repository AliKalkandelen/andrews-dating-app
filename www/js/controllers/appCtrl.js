app.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, UserService, $rootScope, $ionicPopup, $cordovaImagePicker, $ionicPlatform) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:



  // $scope.$on('$ionicView.enter', function(e) {
  //
  //   }
  //
  // });


    $scope.nothing = function(){
      alert("This Does Nothing Yet");
    };

  // Form data for the modals
  $scope.loginData = {};
  $scope.signupData = {};

  /////////////////SIGNUP/////////////////////////////

  // Create the signup modal that we will use later
  $ionicModal.fromTemplateUrl('templates/signup.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.signupModal = modal;
  });

  // Triggered in the Signup modal to close it
  $scope.closeSignup = function() {
    $scope.signupModal.hide();
  };

  // An alert dialog
$scope.showAlert = function() {
  var alertPopup = $ionicPopup.alert({
    title: 'You are Signed Up!',
    template: 'Thank you for Joining'
  });
  alertPopup.then(function(res) {
    $scope.session = res;
    document.getElementById('signUpForm').reset();
  });
};

  // Open the Signup modal
  $scope.signup = function() {
    $scope.signupModal.show();
  };

  // Perform the Signup action when the user submits the form
  $scope.doSignup = function() {
    UserService.set($scope.signupData).then(function(response){
      console.log(response);
      if(response == "err"){
        alert("Username Already Exists.");
      } else{
        $scope.showAlert();
        UserService.get($scope.signupData).then(function(result){
              $rootScope.UserData = result.data;
              $state.go('app.playlists');
              $scope.closeSignup();
              $scope.signupData = {};
            });
      }
    });




  };




  /////////////////LOGIN/////////////////////////////

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.loginModal = modal;
  });


  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.loginModal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.loginModal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log($scope.loginData);
    UserService.get($scope.loginData).then(function(result){
      if(result.data == "err"){
          alert("Invalid Username/Password");
        }else {
          $rootScope.UserData = result.data;
          $state.go('app.playlists');
          $scope.closeLogin();
          $scope.loginData = {};
        }
    });


  };

});
