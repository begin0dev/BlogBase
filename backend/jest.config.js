module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/tests/**/?(*.)(spec|test).(j|t)s?(x)',
  ],
};
