import { defineConfig } from "cypress";


export default defineConfig({
  e2e: {
   baseUrl: process.env.CYPRESS_baseUrl || 'http://login-app-forntend-bucket.s3-website-us-east-1.amazonaws.com', 
     projectId: "xxqaej",
    setupNodeEvents(on, config) {
      
    },

    // Screenshots and screenrecordings are enabled.
    screenshotsFolder: 'cypress/screenshots',
    videosFolder:'cypress/videos',
    video: true,
    screenshotOnRunFailure: true,
  },
});
