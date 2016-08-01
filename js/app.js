/**
 * Created by itc_user on 7/19/2016.
 */
(function(){
    'use strict'
    var shopApp = angular.module('shopApp',['ngRoute']);

    shopApp.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: './partials/productBox.html',
                controller: 'shopController'
            })
            .when('/cart', {
                templateUrl: './partials/cart.html',
                controller: 'shopController'
            })
            .when('/:id', {
                templateUrl: './partials/fullInfo.html',
                controller: 'shopController'
            })
                      
        .otherwise({redirectTo: '/'});
    });
})();
