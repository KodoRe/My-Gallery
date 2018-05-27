// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
  apiKey: "AIzaSyBTf2KGMCJJWvT7mVMKQS8TC0w9sEXmWEc",
    authDomain: "my-gallery-f7a2c.firebaseapp.com",
    databaseURL: "https://my-gallery-f7a2c.firebaseio.com",
    projectId: "my-gallery-f7a2c",
    storageBucket: "my-gallery-f7a2c.appspot.com",
    messagingSenderId: "884160280489"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
