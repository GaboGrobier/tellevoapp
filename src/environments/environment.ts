// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'tellevoapp-9c7e4',
    appId: '1:215487575149:web:12abd2a2919f6f8d63bb64',
    storageBucket: 'tellevoapp-9c7e4.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyCCn5yAL9XAV6GlkaSyRifD0yAq5lEJRps',
    authDomain: 'tellevoapp-9c7e4.firebaseapp.com',
    messagingSenderId: '215487575149',
  },
  production: true
};

export const googlemaps={
  production: false,
  mapsKey:'AIzaSyDNH-IsfCHFrTwDW8_MroKuMdD2LRb2LSw'
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
