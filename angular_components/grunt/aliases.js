module.exports = function (grunt, options) {
  return {
    default: ["withTS"],
    withTS: [
      "clean",
      "ts",
      "connect:withTS",
      "watch:withTS"
    ],
    pure: [
      "connect:pure",
      "watch:pure"
    ]
  };
};
