'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:ClientsCtrl
 * @description
 * # ClientsCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('ClientsCtrl', function ($scope, $http) {

    $http.get("http://localhost:8080/customers").then(function(result){
      $scope.clients = result.data._embedded.customers;
      //angular.copy
      //$scope.immutableClients = result.data._embedded.customers;
    });


    var updateServer = function (newData) {
      console.log('sending:' + newData);

    };

    $scope.$watch('clients', function(newVal, oldVal){
        if (newVal !== oldVal){
          updateServer(newVal);
        }
    }, true);

  });
