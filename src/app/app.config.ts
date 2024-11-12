import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
  provideRouter(routes),
  provideFirebaseApp(() => initializeApp({"projectId":"del-01-test-1c97e","appId":"1:213346118379:web:cc3190ce6657356d2aecae","storageBucket":"del-01-test-1c97e.firebasestorage.app","apiKey":"AIzaSyAY-ks-whUoS1peadhU3JbuT3BL9qRwybc","authDomain":"del-01-test-1c97e.firebaseapp.com","messagingSenderId":"213346118379"})),
  provideAuth(() => getAuth())]
};
