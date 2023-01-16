import { defaults } from 'jest-config';
import type { Config } from 'jest';
const config: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    ...defaults.testPathIgnorePatterns,
    '/dist/',
    '<rootDir>/generated',
  ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/$1',
  },
};
export default config;
