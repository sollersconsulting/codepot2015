"use strict";

app.directive("scClient", scClient);

function scClient() {

  return {
    restrict: "E",
    templateUrl: "../html/directives/scClient.html",
    scope: {
      name: "@",
      server: "@"
    },
    link: function (scope) {
      scope.$root.$broadcast("NewClient", {
        server: scope.server, client: scope.name
      });

      scope.$on("NewMessage", function (event, messageObj) {
        if (!messageObj.client) {
          if (scope.server === messageObj.server) {
            scope.message = messageObj.message;
          }
        }
      });
    }
  };
}