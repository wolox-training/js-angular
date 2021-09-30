module.exports = {
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/builds/',
  ],
  moduleNameMapper: {
    '@sign/(.*)': [
      '<rootDir>/src/app/screens/sign/$1'
    ],
    '@components/(.*)': [
      '<rootDir>/src/app/components/$1'
    ],
    '@directives/(.*)': [
      '<rootDir>/src/app/directives/$1'
    ],
    '@validations/(.*)': [
      '<rootDir>/src/app/validations/$1'
    ],
    '@constants/(.*)': [
      '<rootDir>/src/app/constants/$1'
    ],
    '@services/(.*)': [
      '<rootDir>/src/app/services/$1'
    ],
    '@environments/(.*)': [
      '<rootDir>/src/environments/$1'
    ]
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};
