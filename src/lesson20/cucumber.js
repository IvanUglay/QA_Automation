module.exports = {
  default: {
    require: [
      "steps/*.js",
      "support/*.js"
    ],
    publishQuiet: true,
    parallel: 1
  }
};
