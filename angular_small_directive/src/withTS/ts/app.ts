/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../../typings/jquery/jquery.d.ts" />

/// <reference path="controllers/testScreenController.ts" />
/// <reference path="directives/scTestConverter.ts" />

module app {
  "use strict";

  export var testApp: ng.IModule = angular.module("TestABCD", ["ngRoute"])
    .config(["$routeProvider", ($routeProvider: ng.route.IRouteProvider) => {

      var routes: { [index: string]: ng.route.IRoute; } = {
        "/": {
          templateUrl: "../html/testScreen.html",
          controller: "TestScreenController",
          controllerAs: "vm"
        }
      };

      var path: string;
      for (path in routes) {
        $routeProvider.when(path, routes[path]);
      }
      $routeProvider.otherwise({redirectTo: "/"});
    }]);
}
