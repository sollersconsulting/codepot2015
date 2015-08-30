/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />

/// <reference path="controller/controller.ts" />
/// <reference path="directive/directive.ts" />
/// <reference path="factory/factory.ts" />
/// <reference path="provider/provider.ts" />
/// <reference path="service/service.ts" />

// IIFE
((): void =>{
  "use strict";

  angular.module("test").config(configFn);

  configFn.$inject = ["app.blocks.ApiEndpointProvider"];
  function configFn(apiEndpointProvider: app.blocks.IApiEndpointProvider): void {
    apiEndpointProvider.configure("/api");
  }
})();