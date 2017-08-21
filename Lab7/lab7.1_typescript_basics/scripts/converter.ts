﻿declare var angular: any;
let app = angular.module('currencyApp', []);

app.controller("CurrencyController", CurrencyController);//register controller

var CurrencyController = app.controller('CurrencyController', function ($scope) {

    $scope.sekToEuro = function () {
        document.getElementById("euro-result").innerHTML = SekToEuro($scope.sek);
    };
    function SekToEuro(sekInput: number): string {
        return (Math.round(sekInput * 0.104853)).toString() + " euro";
    }

    $scope.euroToSek= function () {
        document.getElementById("sek-result").innerHTML = EuroToSek($scope.euro);
    };
    function EuroToSek(euroInput: number): string {
        return (Math.round(euroInput * 9.53713)).toString() + " sek";
    }
});