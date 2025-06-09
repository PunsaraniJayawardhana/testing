import { defineConfig } from "cypress";


export default defineConfig({
  e2e: {
   baseUrl: process.env.CYPRESS_baseUrl || 'http://localhost:3000', 
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
