import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { provideRouter } from '@angular/router';
import {provideStore} from '@ngrx/store';
import {PageRoutes} from './app/routes';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http';
// import { SoundcloudService } from './app/soundcloud-service.service';
// import { YoutubeService } from './app/youtube-service.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
	provideRouter(PageRoutes),
	FIREBASE_PROVIDERS,
	HTTP_PROVIDERS,
	// { provide: XHRBackend, useClass: SoundcloudService}, is this needed?
	defaultFirebase({
		apiKey: "AIzaSyDb0BJET2DLs9qC3FRRUYkElAbrFeYJEQo",
    	authDomain: "tunefork-d0fd0.firebaseapp.com",
    	databaseURL: "https://tunefork-d0fd0.firebaseio.com",
    	storageBucket: "tunefork-d0fd0.appspot.com",
	})
]);
