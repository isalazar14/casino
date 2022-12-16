import { enableProdMode, importProvidersFrom } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {bootstrapApplication} from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app/app.component';

// import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {routes} from './app/app.routing'

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));
const providers = [
  provideRouter(routes),
  importProvidersFrom(
    // RouterModule.forRoot(routes),
    IonicModule.forRoot({})
  )
];

bootstrapApplication(AppComponent, { providers });