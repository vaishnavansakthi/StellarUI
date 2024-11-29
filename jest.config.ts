/* eslint-disable import/no-anonymous-default-export */
export default {
  preset: "ts-jest",
  testEnvironment: "jsdom", // Required for DOM-related tests
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy", // Mock CSS/SCSS
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Optional setup file
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Transform TypeScript files using ts-jest
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // Recognized extensions
};
