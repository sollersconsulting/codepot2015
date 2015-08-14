module Controllers {
  "use strict";

  interface IHelloScope extends ng.IScope {
    message: string;
  }

  class HelloController {

    public static $inject = ["$scope"];

    constructor(private $scope: IHelloScope) {
      $scope.message = "Hello world!";
    }
  }

  sampleApp.controller("HelloController", HelloController);
}
