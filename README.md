# MyDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Autenticación de usuarios usando Microsoft Entra

Esta aplicación está protegida por un inicio de sesión con Microsoft Entra (antes conocido por Azure Active Directory) para suscripciones de Azure o para Microsoft Office 365.

En los siguientes enlaces se puede consultar la documentación de la librería utilizada para realizar la autenticación de usuarios y un ejemplo de conexión usando Angular 17.

[Microsoft Authenticator Library for JS](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/msal-lts/lib/msal-angular)

[Ejemplo de uso de MSAL para Angular 18](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/samples/msal-angular-v3-samples/angular18-standalone-sample)

## Variables de Entorno

Copiar el archivo `.env.template` a `.env` y especificar los parametros requeridos para hacer la autenticación con Microsoft Entra y para tener acceso al Backend si existiera.

### Configuración de la App en Microsoft Entra para fines de autenticación de usuarios

Aquí se deben configurar los parámetros requeridos para realizar la autenticación que provee Microsoft Entra para suscripciones de Azure y Office 365.

Para obtener esta información se debe registrar una aplicación en el portal de Entra en Azure. Y luego registrar aquí los siguientes parámetros:

| Parámetro              | Descripción                           | Ejemplo                                             |
|------------------------|---------------------------------------|-----------------------------------------------------|
| `tenantId`             | Id del Tenant                         | 9647e5e9-3b92-453a-a036-a5ad6bfd9e95                |
| `authority`            | URL de la autoridad de autenticación  | `https://login.microsoftonline.com/{tenantId}`      |
| `clientId`             | Id de Cliente                         | e1409d36-a697-4c95-82f9-08d0138a4118                |
| `clientSecret`         | Secreto del Cliente                   | X_xxx~XXXxxxX~xxxxxxXXXxxxxXxxxx-XxXxxxXx           |
| `redirectUri`          | URL de redirección después del login  | `https://{urlApplication}`                          |
| `postLogoutRedirectUri`| URL de redirección después del logout | `https://{urlApplication}/login`                    |

### Configuración del API Backend de esta aplicación

Estos parametros se obtienen de los Scopes y Api Resources que se crean junto a la aplicación, son opcionales si esta aplicación no se conecta a ningún Backend.

| Parámetro              | Descripción                           | Ejemplo                                             |
|------------------------|---------------------------------------|-----------------------------------------------------|
| `scopes`               | Lista de scopes separados por coma    | user.read,openid,profile                            |
| `uri`                  | URL del Api o Backend                 | `https://{urlBacked}`                               |

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
