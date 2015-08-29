"use strict";

var app = angular.module("angularDirectives", ["ngRoute"])
  .config(["$routeProvider", function ($routeProvider) {

    var routes = {
      "/": {
        templateUrl: "../html/mainScreen.html",
        controller: "MainScreenController as vm"
      }
    };

    for (var path in routes) {
      $routeProvider.when(path, routes[path]);
    }
    $routeProvider.otherwise({redirectTo: "/"});
  }]);