// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  marvel: {
    publicKey: '3182770fe28b8ad95286c14c7d853d14',
    privateKey: '63e3252d8c90ee3734df62582c0527326704ce14', // if needed for generating hash
    baseUrl: 'https://gateway.marvel.com/v1/public'
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
