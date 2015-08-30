module.exports = function (grunt, options) {
  return {
    default: ["withTS"],
    withTS: [
      "clean",
      "ts",
      "connect:withTS",
      "watch"
    ],
    pure: [
      "connect:pure",
      "watch"
    ]
  };
};
