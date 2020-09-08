const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, './'),
  moduleFileExtensions: ['js', 'json', 'jsx'],
  transform: {
    '.*\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.jsx$': '<rootDir>/node_modules/babel-jest'
  },
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/src/styleMock.js"
  },
  transformIgnorePatterns: [
    "node_modules/(?!(@coreui|tippy.js|perfect-scrollbar)/)"
  ],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/index.umd.js',
    '!**/node_modules/**'
  ]
};