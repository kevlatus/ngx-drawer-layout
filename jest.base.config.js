const { pathsToModuleNameMapper } = require("ts-jest/utils");
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/../../setup-jest.ts"],
  coverageDirectory: "<rootDir>/../../coverage",
  testRegex: "\\.spec\\.(ts|tsx|js)$",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/../../",
  }),
};
