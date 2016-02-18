angular
  .module('AppSantiagoTest', ['validation','validation.rule', 'LocalStorageModule'])
  .controller('stgoCtrl', ['$scope', '$injector', '$http', 'localStorageService', function($scope, $injector, $http, localStorageService ) {

    if (localStorageService.get('angular-user')) {
      $scope.users = localStorageService.get('angular-user');
    } else {
      $scope.users = [];
    }

    var $validationProvider = $injector.get('$validation');
  
    $scope.formStgoLab = {
      checkValid: $validationProvider.checkValid,
      submit: function(form) {
        $validationProvider.validate(form);
        $scope.users.push($scope.formStgoLab);
        localStorageService.set('angular-user', $scope.users);
        alert('Send');
      }
    };


  }]);