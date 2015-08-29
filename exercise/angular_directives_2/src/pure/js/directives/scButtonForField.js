"use strict";

app.directive("scButtonForField", scButtonForField);

function scButtonForField() {

  return {
    restrict: "A",
    scope: {
      fieldValue: "=scButtonForField",
      textWhenEmpty: "@?",
      textWhenFilled: "@?"
    },
    link: function (scope, element) {
      scope.$watch("fieldValue", function (newVal, oldVal) {
        if (newVal !== oldVal) {
          switchContent();
        }
      });

      var switchContent = function() {
        if (!scope.fieldValue
          || (angular.isString(scope.fieldValue) && scope.fieldValue.trim().length === 0)) {
          element.html(scope.textWhenEmpty);
        } else {
          element.html(scope.textWhenFilled);
        }
      };
      switchContent();
    }
  };
}