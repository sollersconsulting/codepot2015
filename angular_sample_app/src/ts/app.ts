/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/jquery/jquery.d.ts" />

/// <reference path="controllers/helloController.ts" />

"use strict";

var routes: { [index: string]: ng.route.IRoute; } = {
  "/": {
    templateUrl: "html/hello.html",
    controller: "HelloController"
  }
};

var sampleApp: ng.IModule = angular.module("AngularTypescriptSampleCodepot", ["ngRoute"])
  .config(function ($routeProvider: ng.route.IRouteProvider): void {
    for (var path in routes) {
      $routeProvider.when(path, routes[path]);
    }
    $routeProvider.otherwise({redirectTo: "/"});
  });