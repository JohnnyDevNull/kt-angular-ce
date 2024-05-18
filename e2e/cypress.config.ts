import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run kt-angular-ce:serve:development',
        production: 'nx run kt-angular-ce:serve:production',
      },
      ciWebServerCommand: 'nx run kt-angular-ce:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
