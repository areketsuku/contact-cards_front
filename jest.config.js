/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  roots: ['<rootDir>/src'],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text'],
  reporters: [
    'default',
    ['jest-sonar', { outputDirectory: 'coverage', outputName: 'test-report.xml' }]
  ]
};
