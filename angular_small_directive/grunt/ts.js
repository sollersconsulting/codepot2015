module.exports = function (grunt, options) {
  return {
    default: {
      src: ["typings/**/*.d.ts",
        "<%= globalConfig.withTS.src %>/**/*.ts"
      ],
      outDir: "<%= globalConfig.withTS.src %>/js/",
      options: {
        sourceMap: true,
        declaration: true
      }
    }
  }
};
