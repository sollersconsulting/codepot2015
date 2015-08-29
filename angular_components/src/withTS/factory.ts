module app.services {
  "use strict";

  export interface ISettingsService {
  }

  class SettingsService implements ISettingsService {
    constructor(private $http: ng.IHttpService) {
    }
  }

  factory.$inject = ["$http"];
  function factory($http: ng.IHttpService): ISettingsService {
    return new SettingsService($http);
  }

  angular.module("test")
    .factory("app.services.SettingsService", factory);

  // alternative for emptry services
  // angular.module("test")
  //   .factory("app.services.SettingsService", (): ISettingsService => new SettingsService());
}