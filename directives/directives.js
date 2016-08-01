/**
 * Created by itc_user on 7/19/2016.
 */
var shopApp = angular.module('shopApp');

shopApp.directive("navigationBar",function(){
    return{
        templateUrl:"./partials/topview.html"
    };
});

/*
shopApp.directive("productList",function(){
    return{
        templateUrl:"productBox.html"
    };
});

shopApp.directive("productDetails",function(){
    return{
        templateUrl:"fullInfo.html"
    };
});*/
