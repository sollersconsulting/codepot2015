"use strict";

app.directive("scServer", scServer);

function scServer() {
  return {
    restrict: "E",
    templateUrl: "../html/directives/scServer.html",
    transclude: true,
    scope: {
      name: "@"
    },
    link: function (scope) {
      scope.clients = [];
      scope.$on("NewClient", function (event, clientObj) {
        if (clientObj.server === scope.name) {
          scope.clients.push({name: clientObj.client});
        }
      });
      scope.$on("NewMessage", function (event, messageObj) {
        if (messageObj.client && messageObj.server === scope.name) {
          scope.clients.forEach(function (client) {
            if (client.name === messageObj.client) {
              client.message = messageObj.message;
            }
          });
        }
      });
    }
  };
}