module app.directives.testConverter {
  "use strict";

  interface IAnswer extends app.screens.test.IAnswer {
    model: string;
  }

  interface IQuestion extends app.screens.test.IQuestion {
    // TODO: odpaliæ z nowszym TSC? I wtedy string|string[]
    model: string[];
    empty: boolean;

    // Override
    answers: IAnswer[];
  }

  interface IScTestConverterScope extends ng.IScope {
    summary: string;
    questions: IQuestion[];

    onSubmit: (form: ng.IFormController) => void;
  }

  class scTestConverter implements ng.IDirective {

    restrict: string = "E";
    templateUrl: string = "../html/directives/scTestConverter.html";
    scope: any = {
      questions: "="
    };

    link(scope: IScTestConverterScope): void {

      scope.onSubmit = (form: ng.IFormController): void => {
        scope.summary = "";

        var isAnyFieldEmpty: boolean = false;
        for (var i: number = 0; i < scope.questions.length; ++i) {
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

        form.$setValidity("isComplete", !isAnyFieldEmpty, null);
      };
    }

    public static instance(): ng.IDirective {
      return new scTestConverter();
    }
  }

  // app.testApp.directive("scTestConverter", (): ng.IDirective => new scTestConverter());
  app.testApp.directive("scTestConverter", scTestConverter.instance);
}
