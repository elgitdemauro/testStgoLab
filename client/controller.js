"use strict";

angular
  .module('AppSantiagoTest', ['validation','validation.rule', 'LocalStorageModule'])

  .service('Users', function($http){
    this.getAll = function(success, failure){
      $http.get('api/users.json').success(success).error(failure);
    }
  })

  .controller('stgoCtrl', ['$scope', '$injector', '$http', 'localStorageService', 'Users', function($scope, $injector, $http, localStorageService, Users ) {

    Users.getAll(function(data){
      $scope.users = data.users;
    });

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