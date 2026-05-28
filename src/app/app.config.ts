import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBWCXNklWZ0AhFB1hAv7uUhPjeGXMdphH8",
  authDomain: "ppw-practica01.firebaseapp.com",
  projectId: "ppw-practica01",
  storageBucket: "ppw-practica01.firebasestorage.app",
  messagingSenderId: "711317088272",
  appId: "1:711317088272:web:ae9385930a20d7ae6fc295",
  measurementId: "G-2Y43RCJ95L"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withFetch()),

    provideFirebaseApp(() => initializeApp(firebaseConfig)),

    provideAuth(()=>getAuth()),
    provideFirestore(()=>getFirestore())
  ]
};
