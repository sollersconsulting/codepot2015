module app.services {
  "use strict";

  export interface ISettingsService {
  }

  class SettingsService implements ISettingsService {
    constructor(private $http: ng.IHttpService) {
      // sth with $http
    }
  }

  factory.$inject = ["$http"];
  function factory($http: ng.IHttpService): ISettingsService {
    return new SettingsService($http);
  }

  angular.module("app.services")
    .factory("SettingsService", factory);
}