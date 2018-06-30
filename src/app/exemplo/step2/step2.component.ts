import {Component} from '@angular/core';
import {IWizardStep} from '../../component/wizard/model/interfaces.model.';
import {WizardEventService} from '../../component/wizard/service/wizard-event.service';
import {WizardInfo} from '../../component/wizard/model/wizardInfo.model';
import {WizardStepIn} from '../../component/wizard/model/stepIn.model';
import {WizardStepOut} from '../../component/wizard/model/stepOut.model';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements IWizardStep {

  count = 0;
  error = false;

  constructor(private service: WizardEventService) {
  }

  inicializarStep(wizardInfo: WizardInfo) {
    this.count = 0;
  }

  finalizarStep(stepChangeIn: WizardStepIn) {

    this.count = this.count + 1;
    this.error = this.count <= 2;

    this.service.changeStep.emit(new WizardStepOut(stepChangeIn, !this.error));
  }
}
