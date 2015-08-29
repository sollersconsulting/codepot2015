"use strict";

app.controller("MainScreenController", ["$scope", MainScreenController]);

function MainScreenController($scope) {
  $scope.content = "First content...";

  $scope.popupOpen = false;
  this.save = function (newContent) {
    $scope.content = newContent;
    $scope.popupOpen = false;
  }
}