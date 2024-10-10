export default {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy"
  },
  testEnvironment: 'jest-environment-jsdom',
};
