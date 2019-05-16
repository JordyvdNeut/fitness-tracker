// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDl8ghoXAwhoE84t-Y1YCVvqfXp6EB2VgI",
    authDomain: "fitness-tracker-eb5ad.firebaseapp.com",
    databaseURL: "https://fitness-tracker-eb5ad.firebaseio.com",
    projectId: "fitness-tracker-eb5ad",
    storageBucket: "fitness-tracker-eb5ad.appspot.com",
    messagingSenderId: "398458649009"
  }
};