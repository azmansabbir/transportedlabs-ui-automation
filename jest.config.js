module.exports = {
        verbose: true,
        preset: 'jest-playwright-preset',
        transform: {
            '^.+\\.ts$': 'ts-jest',
        },
        testRunner: "jest-jasmine2",
    setupFilesAfterEnv: ["jest-allure/dist/setup"],
    testMatch: [
        '<rootDir>/test/**/*.test.ts',
        '<rootDir>/test/**/*.test.jsx',
    ],
    bail: true,
    bail: 1,
}