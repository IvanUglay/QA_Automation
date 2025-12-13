module.exports = {
  default: {
    paths: ["src/features/**/*.feature"],
    require: ["src/steps/**/*.ts"],
    requireModule: ["ts-node/register"],
    publishQuiet: true
  }
};
