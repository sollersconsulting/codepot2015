"use strict";

app.controller("MainScreenController", ["$scope", MainScreenController]);

function MainScreenController($scope) {
  $scope.clients = [];

  this.addNewClient = function () {
    $scope.clients.push(randomName());
  };

  var randomName = function(){
    var length = 16;
    var name = "";
    do {
      name += Math.round(Math.random() * Math.pow(16, 8)).toString(16);
    } while (name.length < length);
    return name.substr(0, length);
  }
}