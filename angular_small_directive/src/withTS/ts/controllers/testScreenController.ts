module app.screens.test {
  "use strict";

  export interface IAnswer {
    content: string;
  }

  export interface IQuestion {
    content: string;
    multiselect?: boolean;
    required?: boolean;
    answers: IAnswer[];
  }

  class TestScreenController {
    public questions: IQuestion[];

    constructor() {
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
        content: "Is this a good idea to take part in Codepo",
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
  }

  app.testApp.controller("TestScreenController", TestScreenController);
}
