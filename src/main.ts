import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  default as localForage,
  getAllDataFromLocalForage
} from 'ngrx-store-persist';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

getAllDataFromLocalForage({
  driver: localForage.INDEXEDDB,
  keys: [
    'postsState'
  ],
}).then(() => {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
});


