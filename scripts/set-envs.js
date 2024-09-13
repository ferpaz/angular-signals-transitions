const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

const targetPath = './src/environments';

const scopes = process.env.APICONFIG_SCOPES.split(',').map(scope => `'${scope}'`).join(', ');

const envConfigFile = `
export const environment = {
  production: false,
  entraAPPConfig: {
    tenantId: '${process.env.AZURE_TENANTID}',
    authority: '${process.env.AZURE_AUTHORITY}',
    clientId: '${process.env.AZURE_CLIENTID}',
    clientSecret: '${process.env.AZURE_CLIENTSECRET}',
    redirectUri: '${process.env.AZURE_REDIRECTURI}',
    postLogoutRedirectUri: '${process.env.AZURE_POSTLOGOUTREDIRECTURI}',
  },
  apiBackendConfig: {
      scopes: [${scopes}],
      uri: '${process.env.APICONFIG_URI}',
  },
};
`;

// primero creamos la carpeta environments
mkdirSync(targetPath, { recursive: true });

// ahora creamos el archivo con el contenido de la variable envConfigFile
writeFileSync(targetPath + "/environment.ts", envConfigFile);
