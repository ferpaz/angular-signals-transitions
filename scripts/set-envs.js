const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

const targetPath = './src/environments';

const scopes = process.env.MS_GRAPH_SCOPES.split(',').map(scope => `'${scope}'`).join(', ');

const envConfigFile = `
export const environment = {
  production: false,
  entraAPPConfig: {
    tenantId: '${process.env.ENTRAAPPCONFIG_TENANTID}',
    authority: '${process.env.ENTRAAPPCONFIG_AUTHORITY}',
    clientId: '${process.env.ENTRAAPPCONFIG_CLIENTID}',
    clientSecret: '${process.env.ENTRAAPPCONFIG_CLIENTSECRET}',
    redirectUri: '${process.env.ENTRAAPPCONFIG_REDIRECTURI}',
    postLogoutRedirectUri: '${process.env.ENTRAAPPCONFIG_POSTLOGOUTREDIRECTURI}',
  },
  MSGraph: {
      scopes: [${scopes}],
      uri: '${process.env.MS_GRAPH_URI}',
  },
};
`;

// primero creamos la carpeta environments
mkdirSync(targetPath, { recursive: true });

// ahora creamos el archivo con el contenido de la variable envConfigFile
writeFileSync(targetPath + "/environment.ts", envConfigFile);
