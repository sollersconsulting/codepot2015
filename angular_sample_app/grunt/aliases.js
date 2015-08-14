module.exports = function(grunt, options) {
  return {
    default: [
      "clean",
      "ts",
      "connect",
      "watch"
    ]
  };
};
