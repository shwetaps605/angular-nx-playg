import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { NgZone } from '@angular/core';


declare global {
  interface Window {
    zone: NgZone;
  }
}

window.zone = new NgZone({});

window.zone.run(() => {
  bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err)
  );
});


