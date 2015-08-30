angular.module("app.services")
  .factory("SettingsService", factory);

factory.$inject = ["$http"];
function factory($http) {
  return new SettingsService($http);
}

function SettingsService($http) {
  // sth with $http
}