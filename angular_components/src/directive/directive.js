angular.module("app.directives")
  .directive("scTestConverter", TestConverter);

function TestConverter() {

  return {
    restrict: "E",
    templateUrl: "../html/directives/scTestConverter.html",
    scope: {
      test: "="
    },

    link: function (scope) {
      if (scope.test) {
        console.log(scope.test);
      }
    }
  }
}