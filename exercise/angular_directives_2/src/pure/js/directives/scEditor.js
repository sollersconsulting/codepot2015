"use strict";

app.directive("scEditor", scEditor);

function scEditor() {
  return {
    restrict: "E",
    templateUrl: "../html/directives/scEditor.html",
    // no scope
    scope: false,

    link: function (scope, element, attrs) {
      scope.isEditorDisabled = element.attr("disabled"); // created in parent scope!
      scope.editorText = attrs.editorText;

      attrs.$observe("editorText", function () {
        scope.editorText = attrs.editorText;
      })
    }
  };
}