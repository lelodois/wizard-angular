import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {WizardEventService} from './component/wizard/service/wizard-event.service';
import {AppComponent} from './app.component';
import {WizardChangeButtonComponent} from './component/wizard/component/wizard-change-button/wizard-change-button.component';
import {WizardExampleComponent} from './exemplo/wizard/wizard-example.component';
import {Step1Component} from './exemplo/step1/step1.component';
import {Step2Component} from './exemplo/step2/step2.component';
import {Step3Component} from './exemplo/step3/step3.component';
import {Step4Component} from './exemplo/step4/step4.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    providers: [
        WizardEventService
    ],
    declarations: [
        AppComponent,
        Step1Component,
        Step2Component,
        Step3Component,
        Step4Component,
        WizardExampleComponent,
        WizardChangeButtonComponent
    ],
    exports: [
        Step1Component,
        Step2Component,
        Step3Component,
        Step4Component,
        WizardExampleComponent,
        WizardChangeButtonComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
