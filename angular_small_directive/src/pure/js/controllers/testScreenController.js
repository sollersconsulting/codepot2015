"use strict";

testApp.controller("TestScreenController", ["$scope", TestScreenController]);

function TestScreenController($scope) {
  this.questions = [{
    content: "Wchich Codepot workshops are the best?",
    multiselect: true,
    required: true,
    answers: [{
      content: "Typescript"
    }, {
      content: "Angular"
    }, {
      content: "TDD"
    }]
  }, {
    content: "Is this a good idea to take part in Codepot?",
    required: true,
    answers: [{
      content: "Yes"
    }, {
      content: "Of course"
    }]
  }, {
    content: "Which JS libraries do you know?",
    multiselect: true,
    answers: [{
      content: "ExtJS"
    }, {
      content: "jQuery"
    }, {
      content: "backbone"
    }]
  }];
}