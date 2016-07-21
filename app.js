/**
 * Created by itc_user on 7/19/2016.
 */
(function(){
    'use strict'
    var shopApp = angular.module('shopApp',['ngRoute']);

    shopApp.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'productBox.html',
                controller: 'shopController'
            })
            .when('/cart', {
                templateUrl: 'cart.html',
                controller: 'shopController'
            })
            .when('/:id', {
                templateUrl: 'fullInfo.html',
                controller: 'shopController'
            })
                      
        .otherwise({redirectTo: '/'});
    });
})();
