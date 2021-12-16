/**
 * Copyright (c) 2013-present, creativeLabs Lukasz Holeczek.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict'

module.exports = {
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/packages/coreui-icons-react/test/styleMock.js',
  },
  preset: 'ts-jest',
  setupFiles: ['jest-canvas-mock'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['dist/'],
}
