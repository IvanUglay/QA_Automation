module.exports = {
  default: {
    paths: ['src/features/**/*.feature'],
    require: [
      'src/steps/**/*.ts',
      'src/support/**/*.ts'
    ],
    requireModule: ['ts-node/register'],
    format: [
      'progress',
      'json:reports/cucumber/cucumber.json'
    ]
  }
};
