"use strict";

var testApp = angular.module("TestABCD", ["ngRoute"])
  .config(["$routeProvider", function ($routeProvider) {

    var routes = {
      "/": {
        templateUrl: "../html/testScreen.html",
        controller: "TestScreenController",
        controllerAs: "vm"
      }
    };

    for (var path in routes) {
      $routeProvider.when(path, routes[path]);
    }
    $routeProvider.otherwise({redirectTo: "/"});
  }]);