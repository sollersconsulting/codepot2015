module.exports = function (grunt) {
  var globalConfig = {
    src: "src",
    withTS: {
      src: "src/withTS",
      livereload: 35730,
      connection: 8888
    },
    pure: {
      src: "src/pure",
      livereload: 35731,
      connection: 8008
    }
  };

  require("time-grunt")(grunt);

  require("load-grunt-config")(grunt, {
    config: {
      globalConfig: globalConfig
    }
  });

};
