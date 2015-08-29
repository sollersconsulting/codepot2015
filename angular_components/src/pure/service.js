"use strict";

angular.module("test")
  .service("app.services.UserService", UserService);

UserService.$inject = ["http"];
function UserService($http) {

  function getById(id) { // don't know that promise
    return this.$http.get("api/users/" + id)
      .then(function (response) {
        return response.data;
      });
  }
}
