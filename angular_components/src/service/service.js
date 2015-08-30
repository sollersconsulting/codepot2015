"use strict";

angular.module("app.services")
  .service("UserService", UserService);

UserService.$inject = ["http"];
function UserService($http) {

  function getById(id) {
    return this.$http.get("api/users/" + id)
      .then(function (response) {
        return response.data;
      });
  }
}
