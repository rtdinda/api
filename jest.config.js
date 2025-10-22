/** @type {import('jest').Config} */
module.exports = {
  coverageReporters: ['clover', 'json', 'lcov', ['text', { skipFull: true }]],
  reporters: [
    'default',
    './node_modules/jest-html-reporter',
    'jest-stare',
  ],
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  moduleDirectories: ["node_modules", "src", "."],
  transformIgnorePatterns: [
    "/node_modules/(?!chai/)"  // <-- chai tetap ditransform
  ],
};
