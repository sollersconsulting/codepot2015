"use strict";

testApp.directive("scTestConverter", scTestConverter);

function scTestConverter() {

  return {
    restrict: "E",
    templateUrl: "../html/directives/scTestConverter.html",
    scope: {
      questions: "="
    },
    link: function (scope) {

      scope.onSubmit = function (form) {
        scope.summary = "";

        var isAnyFieldEmpty = false;
        for (var i = 0; i < scope.questions.length; ++i) {
          var question = scope.questions[i];

          if (question.multiselect) {
            question.model = [];
            for (var j = 0; j < question.answers.length; ++j) {
              if (question.answers[j].model) {
                question.model.push(question.answers[j].model);
              }
            }
          }

          question.empty = !question.model || question.model.length <= 0;
          scope.summary += question.content + ": " + (question.empty ? "" : question.model) + "\n";
          isAnyFieldEmpty = isAnyFieldEmpty || (question.empty && question.required);
        }

        form.$setValidity('isComplete', !isAnyFieldEmpty);
      }
    }
  };
}