module app.directives {
  "use strict";

  interface ITestScope extends ng.IScope {
    test: string;
  }

  class TestConverter implements ng.IDirective {

    restrict: string = "E";
    templateUrl: string = "../html/directives/scTestConverter.html";
    scope: any = {
      test: "="
    };
    // controller can be added as TypeScript class

    link(scope: ITestScope): void {
      if (scope.test) {
        console.log(scope.test);
      }
    }

    public static instance(): ng.IDirective {
      return new TestConverter();
    }
  }

  // angular.module("test")
  // .directive("scTestConverter", (): ng.IDirective => new TestConverter());
  angular.module("test")
    .directive("scTestConverter", TestConverter.instance);
}
