module.exports = function (grunt, options) {
  return {
    typescript: {
      files: ["<%= globalConfig.src %>/ts/**/*.ts"],
      tasks: ["ts"]
    },
    withTS: {
      options: {
        livereload: options.globalConfig.withTS.livereload
      },
      files: [
        "<%= globalConfig.withTS.src %>/index.html",
        "<%= globalConfig.src %>/html/**/*.html",
        "<%= globalConfig.src %>/css/**/*.css",
        "<%= globalConfig.withTS.src %>/**/*.js",
        "<%= globalConfig.withTS.src %>/**/*.ts",
        "<%= globalConfig.src %>/img/**/*.{png,jpg,jpeg,gif,webp,svg}"
      ]
    },
    pure: {
      options: {
        livereload: options.globalConfig.pure.livereload
      },
      files: [
        "<%= globalConfig.pure.src %>/index.html",
        "<%= globalConfig.src %>/html/**/*.html",
        "<%= globalConfig.src %>/css/**/*.css",
        "<%= globalConfig.pure.src %>/**/*.js",
        "<%= globalConfig.src %>/img/**/*.{png,jpg,jpeg,gif,webp,svg}"
      ]
    }
  }
};
