module.exports = {
  preset: 'jest-preset-angular',
  modulePaths: ['<rootDir>/dist'],
  moduleNameMapper: {

    "@core/*": ["src/app/core/*"],
    "@state/*": ["src/app/state/*"],
  },
  roots: ['<rootDir>/src'],
  setupTestFrameworkScriptFile: '<rootDir>/jest-setup.ts',
  testMatch: [
    "**/+(*.)+(spec|test).+(ts)?(x)"
  ],
  collectCoverageFrom: [],
  coverageReporters: [
    "text",
    "cobertura"
  ]
};