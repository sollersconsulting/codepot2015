// IIFE
((): void =>{
  "use strict";

  angular.module("test").config(configFn);

  configFn.$inject = ["app.blocks.ApiEndpointProvider"];
  function configFn(apiEndpointProvider: app.blocks.IApiEndpointProvider): void {
    apiEndpointProvider.configure("/api");
  }
})();