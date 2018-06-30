import {Component, Input} from '@angular/core';
import {WizardComponent} from '../wizard.component';

@Component({
    selector: 'app-wizard-change-button',
    templateUrl: './wizard-change-button.component.html',
    styleUrls: ['./wizard-change-button.component.css']
})
export class WizardChangeButtonComponent {

    @Input()
    previousTabId: String;

    @Input()
    nextTabId: String;

    @Input()
    passoPassoInstance: WizardComponent;

}
