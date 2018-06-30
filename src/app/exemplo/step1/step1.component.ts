import {Component, OnInit} from '@angular/core';
import {WizardInfo} from '../../component/wizard/model/wizardInfo.model';
import {IWizardStep} from '../../component/wizard/model/interfaces.model.';
import {WizardStepIn} from '../../component/wizard/model/stepIn.model';
import {WizardEventService} from '../../component/wizard/service/wizard-event.service';
import {WizardStepOut} from '../../component/wizard/model/stepOut.model';

@Component({
    selector: 'app-step1',
    templateUrl: './step1.component.html',
    styleUrls: ['./step1.component.scss']
})
export class Step1Component implements IWizardStep {

    constructor(private service: WizardEventService) {
    }

    inicializarStep(wizardInfo: WizardInfo) {
    }

    finalizarStep(stepChangeIn: WizardStepIn) {
        this.service.changeStep.emit(new WizardStepOut(stepChangeIn, true));
    }
}
