"use strict";

app.directive("scPopup", scPopup);

function scPopup() {
  return {
    restrict: "E",
    templateUrl: "../html/directives/scPopup.html",
    transclude: true,
    scope: {
      trigger: "="
    },
    link: function (scope, element) {
      element.parent("main").addClass("sc-popup-transition");

      scope.$watch("trigger", function (newVal, oldVal) {
        if (newVal !== oldVal) {
          if (scope.trigger) {
            element.parent("main").css("transform", "scale(0.9)");
          } else {
            element.parent("main").css("transform", "scale(1)");
          }
        }
      });
    }
  };
}