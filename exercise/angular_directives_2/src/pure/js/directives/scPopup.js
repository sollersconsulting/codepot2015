"use strict";

app.directive("scPopup", scPopup);

function scPopup() {
  return {
    restrict: "E",
    templateUrl: "../html/directives/scPopup.html",
    transclude: true,
    scope: {
      trigger: "="
    }
  };
}