module.exports = {
    preset: 'jest-preset-angular',
    modulePaths: ['<rootDir>/dist'],
    moduleNameMapper: {
  
      "@core/*": ["src/app/core/*"],
      "@state/*": ["src/app/state/*"],
    },
    roots: ['<rootDir>/src', '<rootDir>/projects'],
    setupTestFrameworkScriptFile: '<rootDir>/setup-jest.ts',
    testMatch: [
      "**/+(*.)+(spec|test).+(ts)?(x)"
    ],
    collectCoverageFrom: [
    "**/*.{ts}",
    "!**/node_modules/**",
    "!**/models/**",
    "!**/dist/**",
    "!**/vendor/**",
    "!**/index.ts",
    "!**/polyfills.ts",
    "!**/test.ts",
    "!**/public_api.ts",
    "!**/src/main.ts",
    "!**/src/app/demo/**",
    "!**/src/app/home/containers/home/**",
    "!**/src/environments/**",
  
  ],
    coverageReporters: [
      "text",
      "cobertura"
    ]
  };
  