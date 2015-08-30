'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:CustomersCtrl
 * @description
 * # CustomersCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
    .controller('CustomersCtrl', function ($scope) {
       // $http.get('http://localhost:8080/customers').then(function (result) {
       ////     $scope.customers = result.data._embedded.customers;
       //
       // });

        this.all = [
            {
                name: "aaa",
                eid: {
                    number: 111
                }
            },
            {
                name: "bbb",
                eid: {
                    number: 333
                }
            },
            {
                name: "ccc",
                eid: {
                    number: 222
                }
            }];


        var updateServerData = function (newValue) {
            console.debug("Updating: " + newValue);

        };

        $scope.$watch('customers', function(oldValue, newValue){
           if (oldValue !== newValue){
               updateServerData(newValue);
           }
        }, true);

    });
