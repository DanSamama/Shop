/**
 * Created by itc_user on 7/19/2016.
 */
(function(){
    "use strict";
    var shopApp = angular.module("shopApp");
    shopApp.controller("productsController",productsController);

    function productsController($scope,$http){

        $scope.danProducts  = null;

        $scope.productClicked = false;
        $scope.danProducts = [
            {
                "id" : 0,
                "name" : "Ricard",
                "DegreeAlcohol" : 30,
                "Price" : 40,
                "Description" : "Petite bouteille de plaisir",
                "Image" : "./images/ricard.jpg"
            },
            {
                "id" : 1,
                "name" : "Vodka",
                "DegreeAlcohol" : 40,
                "Price" : 60,
                "Description" : "Petite bouteille de Russie",
                "Image" : "./images/vodka.jpg"
            },
            {
                "id" : 2,
                "name" : "Whisky",
                "DegreeAlcohol" : 60,
                "Price" : 50,
                "Description" : "Gentleman club bottle",
                "Image" : "./images/whisky.jpeg"
            },
            {
                "id" : 3,
                "name" : "Rhum",
                "DegreeAlcohol" :30,
                "Price" : 40,
                "Description" : "Old Pirate yes they rob I ",
                "Image" : "./images/rhum.jpg"
            },
            {
                "id" : 4,
                "name" : "Jägermeister",
                "DegreeAlcohol" : 30,
                "Price" : 40,
                "Description" : "Eich bin a klinde kartofel",
                "Image" : "./images/jagermeister.jpg"
            },
            {
                "id" : 5,
                "name" : "Gin",
                "DegreeAlcohol" : 30,
                "Price" : 40,
                "Description" : "India Delirium",
                "Image" : "./images/gin.jpg"
            },
            {
                "id" : 6,
                "name" : "Shochu",
                "DegreeAlcohol" : 30,
                "Price" : 60,
                "Description" : "Japanese drink",
                "Image" : "./images/shochu.jpg"
            },
            {
                "id" : 7,
                "name" : "Tequila",
                "DegreeAlcohol" : 30,
                "Price" : 40,
                "Description" : "Mexico Mexiiiiiiico",
                "Image" : "./images/tequila.png"
            },
            {
                "id" : 8,
                "name" : "Baileys",
                "DegreeAlcohol" : 30,
                "Price" : 40,
                "Description" : "Sugar, Alcohol and Sugar",
                "Image" : "./images/baileys.png"
            },
            {
                "id" : 9,
                "name" : "Martini Bianco",
                "DegreeAlcohol" : 30,
                "Price" : 40,
                "Description" : "James B",
                "Image" : "./images/martiniBianco.jpg"
            },
            {
                "id" : 10,
                "name" : "Martini Rosso",
                "DegreeAlcohol" : 30,
                "Price" : 40,
                "Description" : "James B in red",
                "Image" : "./images/martiniRosso.jpg"
            },
            {
                "id" : 11,
                "name" : "Bourbon",
                "DegreeAlcohol" : 30,
                "Price" : 40,
                "Description" : "It is indeed",
                "Image" : "./images/bourbon.jpg"
            }


        ];

        $http({
            method: 'GET',
            url: 'https://api.myjson.com/bins/369u9'
        }).then(function successCallback(response) {
            console.log(response);
            $scope.danProducts  = response.data;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });

        // $scope.getInfos = function(){
        //     $scope.productClicked = true;
        //
        //
        // }
        
    }
})();