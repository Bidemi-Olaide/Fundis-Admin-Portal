const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const dotenv = require('cypress-dotenv');

async function setupNodeEvents(on, config) {
  const environment = config.env.environment || 'staging';
  const pathToEnvFile = `.env.${environment}`;
  const envVars = dotenv({ path: pathToEnvFile });
  config.env = { ...config.env, ...envVars };

  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_ADMIN_BASE_URL || 'https://admin-staging.fundis.co.ke',
    defaultCommandTimeout: 10000,
    viewportHeight: 900,
    viewportWidth: 1400,
    chromeWebSecurity: false,
    specPattern: "**/*.feature",
    video: true,
    videosFolder: "cypress/videos",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents,
  },
});
