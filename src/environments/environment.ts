// This file can be replaced during build by using the fileReplacements array.
// ng build ---prod replaces environment.ts with environment.prod.ts.
// The list of file replacements can be found in angular.json.

export const environment = {
  production: false,

  // ONBOARDING_BASE_API_URL: 'https://codebrew.royoapps.com/v1/common',

  // BASE_API_URL:  'https://api.royoapps.com',

  // AGENT_BASE_API_URL: 'https://onboarding-agent.royoapps.com',

  // ONBOARDING_TRACK_BASE_URL: 'https://codebrew.royoapps.com',


  ONBOARDING_BASE_API_URL: 'https://ordersapi.marketplace24.ch/v1/common',

  BASE_API_URL: 'https://ordersapi.marketplace24.ch',

  AGENT_BASE_API_URL: 'https://ordersagent.marketplace24.ch',

  // ONBOARDING_BASE_API_URL: 'https://onboarding-api.royostaging.com/v1/common',

  // BASE_API_URL: 'https://api.royostaging.com',

  // AGENT_BASE_API_URL: 'https://agent.royostaging.com',

  // ONBOARDING_TRACK_BASE_URL: 'https://onboarding-api.royostaging.com',


  DIALOGFLOW_API_URL_V2: 'https://dialogflow.googleapis.com/v2',

  ONBOARDING_TRACK_BASE_URL: 'https://onboarding-livebkend.royoapps.com',

  INSTANCE_SELECTION: true,

  CYBERSOURCE_API_URL: 'https://apitest.cybersource.com/flex/v1/tokens',

  CONVERGEPAY_API_URL: 'https://api.demo.convergepay.com/hosted-payments',

};

/*
 * In development mode, to ignore zone related error stack frames such as
 * zone.run, zoneDelegate.invokeTask for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.