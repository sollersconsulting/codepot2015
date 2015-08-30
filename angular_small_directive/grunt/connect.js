module.exports = function (grunt, options) {

  return {
    withTS: {
      options: {
        port: options.globalConfig.withTS.connection,
        base: ["<%= globalConfig.withTS.src %>", "<%= globalConfig.src %>"],
        livereload: options.globalConfig.withTS.livereload,
        open: "http://localhost:<%= globalConfig.withTS.connection %>"
      }
    },
    pure: {
      options: {
        port: options.globalConfig.pure.connection,
        base: ["<%= globalConfig.pure.src %>", "<%= globalConfig.src %>"],
        livereload: options.globalConfig.pure.livereload,
        open: "http://localhost:<%= globalConfig.pure.connection %>"
      }
    }
  }
};
