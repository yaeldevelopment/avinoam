import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './components/app/app.config';
import { AppComponent } from './components/app/app.component';
import 'zone.js';  // Required for Angular
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
