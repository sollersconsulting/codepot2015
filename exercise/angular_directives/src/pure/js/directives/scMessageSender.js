"use strict";

app.directive("scMessageSender", scMessageSender);

function scMessageSender() {
  return {
    restrict: "E",
    templateUrl: "../html/directives/scMessageSender.html",
    scope: {
      ownerName: "@",
      server: "@address"
    },

    link: function (scope) {
      scope.send = function () {
        var obj = {message: scope.message};

        if (scope.server) {
          obj.server = scope.server;
          obj.client = scope.ownerName;
        } else {
          obj.server = scope.ownerName;
        }
        scope.$root.$broadcast("NewMessage", obj);
      }
    }
  };
}