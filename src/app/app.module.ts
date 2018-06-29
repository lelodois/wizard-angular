import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {PassoPassoService} from './framework/component/ucs-passo-a-passo/service/passo-passo.service';
import {AppComponent} from './app.component';
import {PassoPassoExemploComponent} from './demo-app/exemplo-passo-a-passo/wizard/passo-passo-exemplo.component';
import {Step1Component} from './demo-app/exemplo-passo-a-passo/step1/step1.component';
import {Step2Component} from './demo-app/exemplo-passo-a-passo/step2/step2.component';
import {Step3Component} from './demo-app/exemplo-passo-a-passo/step3/step3.component';
import {Step4Component} from './demo-app/exemplo-passo-a-passo/step4/step4.component';
import {PassoPassoChangeButtonComponent} from './framework/component/ucs-passo-a-passo/component/passo-passo-change-button/passo-passo-change-button.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  providers: [
    PassoPassoService
  ],
  declarations: [
    AppComponent,
    PassoPassoExemploComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    PassoPassoChangeButtonComponent
  ],
  exports: [
    PassoPassoExemploComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    PassoPassoChangeButtonComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
