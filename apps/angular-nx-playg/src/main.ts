// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err)
// );

import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { InputComponent } from "./app/ui/input/input.component"




(
  async () => {
  const app = await createApplication({
    providers: []
  });

  const inputElement = createCustomElement(InputComponent, {
    injector: app.injector
  });

  customElements.define('fleo-ui-input', inputElement);
})()
