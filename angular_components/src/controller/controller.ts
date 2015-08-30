module app.layout {
  "use strict";

  interface IMenuScope extends ng.IScope {
    fullName: string;
    greetings: Function; // greetings: () => void; // greetings(): void;
  }

  class MenuController {
    static $inject: string[] = ["$scope"];

    constructor($scope: IMenuScope) {
      $scope.fullName = "Superuser";
      $scope.greetings = (): void => {
        alert("Hello " + $scope.fullName);
      }
    }
  }

  angular.module("app.layout")
    .controller("MenuController", MenuController);
}

// alternatively - controller as vm
module app.layout {
  "use strict";

  interface IMenuScope {
    fullName: string;
    greetings: () => void;
  }

  class MenuController implements IMenuScope {
    fullName: string;
    greetings: ()=>void;

    constructor() {
      var vm = this; // just for presentation
      vm.fullName = "Superuser";
      vm.greetings = (): void => {
        alert("Hello " + this.fullName);
      }
    }
  }

  angular.module("app.layout")
    .controller("MenuController", MenuController);
}