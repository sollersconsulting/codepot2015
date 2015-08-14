module.exports = function(grunt, options) {
  return {
    default: {
      src: ["typings/**/*.d.ts",
        "<%= globalConfig.src %>/**/*.ts"
      ],
      out: "<%= globalConfig.src %>/js/compiledJSFromTS.js",
      options: {
        sourceMap: true,
        declaration: true
      }
    }
  }
};
