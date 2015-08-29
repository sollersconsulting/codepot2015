angular.module("test")
  .provider("app.blocks.ApiEndpoint", ApiEndpointProvider);

"use strict";

function ApiEndpointProvider() {
  // used when with Provider suffix
  function onfigure(baseUrl) {
    this.config = {
      baseUrl: baseUrl
    };
  }

  // userd when w/o Provider suffix
  function $get() {
    return this.config; // can be really confusing (what's inside)
  }
}
