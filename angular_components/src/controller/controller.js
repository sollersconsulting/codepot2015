angular.module("app.layout")
  .controller("MenuController", MenuController);

"use strict";

MenuController.$inject = ["$scope"];
function MenuController() {
  $scope.fullName = "Superuser";
  $scope.greetings = function () {
    alert("Hello " + $scope.fullName);
  }
}

/*
 Should be inside IIFE:

 (function(){
 // declaration
 })()
 */