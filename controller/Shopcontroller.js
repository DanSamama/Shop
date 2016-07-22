/**
 * Created by itc_user on 7/19/2016.
 */
(function () {
    "use strict";
    var shopApp = angular.module("shopApp");
    shopApp.controller("shopController", shopController);

    function shopController($scope, $http, $routeParams) {

        $scope.productClicked = false;

        $scope.danProducts = [];
        $scope.chosenProduct = {};
        $scope.cartItems = [];
        $scope.counter = 0;
        // angular.element(document).ready(function () {
        if (localStorage.getItem("cart")){
            $scope.cartItems= JSON.parse(localStorage.getItem("cart"));
        }


            $http({
                method: 'GET',
                url: 'https://api.myjson.com/bins/1ivst'
            }).then(function successCallback(response) {
                console.log(response);
                $scope.danProducts = response.data;
                if ($routeParams.id) {
                    $scope.chosenProduct = $scope.danProducts.filter(function (item) {
                        return item.id == $routeParams.id;
                    })[0];
                    console.log($scope.chosenProduct);
                }
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });


        $scope.updateCart = function(id){
            if ($scope.cartItems.length>0) {
                for (var i = 0; i < $scope.cartItems.length; i++) {
                    var currentItem = $scope.cartItems[i];
                    if (currentItem.id === id) {
                        currentItem.quantity++;
                        localStorage.setItem("cart",JSON.stringify($scope.cartItems));
                        console.log( $scope.cartItems);
                        return;
                    }
                }
            }
            var temp = $scope.danProducts[id];
            var item = Object.assign(temp,{quantity:1});
            $scope.cartItems.push(item);
            localStorage.setItem("cart",JSON.stringify($scope.cartItems));
            
        };


        $scope.addingItem =  function(prod){
            prod.quantity++;
            localStorage.removeItem("cart");
            localStorage.setItem("cart",JSON.stringify($scope.cartItems));
        };

        $scope.removingItem =  function(prod){
            if(prod.quantity>0) {
                prod.quantity--;
                localStorage.removeItem("cart");
                localStorage.setItem("cart", JSON.stringify($scope.cartItems));
            }
        };
        // $.scope.someCartQuantity = function(prod){
        //     for(var i=0;i<cartItems.length;i++){
        //         var som =
        //     }
        // }
        





    }

})();





