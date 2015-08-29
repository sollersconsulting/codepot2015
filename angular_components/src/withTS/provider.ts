module app.blocks {
  "use strict";

  export interface IApiEndpointConfig {
    baseUrl: string;
  }

  export interface IApiEndpointProvider {
    configure(baseUrl: string): void;
  }

  class ApiEndpointProvider implements ng.IServiceProvider, IApiEndpointProvider {
    config: IApiEndpointConfig;

    // used when with Provider suffix
    configure(baseUrl: string): void {
      this.config = {
        baseUrl: baseUrl
      };
    }

    // userd when w/o Provider suffix
    $get(): IApiEndpointConfig {
      return this.config;
    }
  }

  angular.module("test")
    .provider("app.blocks.ApiEndpoint", ApiEndpointProvider);
}