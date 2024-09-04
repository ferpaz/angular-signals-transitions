import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions({
        skipInitialTransition: true,
        // onViewTransitionCreated: (transitionInfo) => {
        //   console.log('View transition created:', transitionInfo);
        // },
      })
    ),

    provideHttpClient(withInterceptorsFromDi()),
  ]
};
