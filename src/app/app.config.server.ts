import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import {
  provideServerRendering,
  ɵSERVER_CONTEXT as SERVER_CONTEXT,
} from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(), { provide: SERVER_CONTEXT, useValue: 'ssr-mulume-dev' }],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
