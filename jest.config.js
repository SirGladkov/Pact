module.exports = {
    moduleFileExtensions: ['js', 'json', 'vue'],
    testEnvironmentOptions: {
        customExportConditions: ["node", "node-addons"],
     },
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.vue$': '@vue/vue3-jest',
      '^.+\\.js$': 'babel-jest',
    },
    testMatch: [
      '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)',
      '**/__tests__/*.(js|jsx|ts|tsx)',
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^src/(.*)$': '<rootDir>/src/$1',
        '\\.(css|less|scss|sss|styl)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/tests/unit/__mocks__/fileMock.js'
  },
    snapshotSerializers: ['jest-serializer-vue'],
    testEnvironment: "jsdom",
  };