import {Component, ViewChild} from '@angular/core';
import {IWizardStep} from '../../component/wizard/model/interfaces.model.';
import {WizardStepOut} from '../../component/wizard/model/stepOut.model';
import {WizardComponent} from '../../component/wizard/component/wizard.component';
import {WizardEventService} from '../../component/wizard/service/wizard-event.service';

@Component({
    selector: 'app-wizard-example',
    templateUrl: './wizard-example.component.html',
    styleUrls: ['./wizard-example.component.scss']
})
export class WizardExampleComponent extends WizardComponent {

    @ViewChild('tab1Form')
    step1: IWizardStep;

    @ViewChild('tab2Form')
    step2: IWizardStep;

    @ViewChild('tab3Form')
    step3: IWizardStep;

    @ViewChild('tab4Form')
    step4: IWizardStep;

    constructor(private service: WizardEventService) {
        super('tab1', service);
    }

    // Função que define qual a inicialização do próximo step
    getNextStepInstance(changeStepOut: WizardStepOut): IWizardStep {
        let nextStepForm = this.step2;
        nextStepForm = changeStepOut.changeStepIn.targertTabId == 'tab2' ? this.step3 : nextStepForm;
        nextStepForm = changeStepOut.changeStepIn.targertTabId == 'tab3' ? this.step4 : nextStepForm;
        return nextStepForm;
    }

    getAtualStepInstance(tabId: String): IWizardStep {
        let step: IWizardStep = this.step1;
        step = (tabId == 'tab2') ? this.step2 : step;
        step = (tabId == 'tab3') ? this.step3 : step;
        step = (tabId == 'tab4') ? this.step4 : step;
        return step;
    }

}
