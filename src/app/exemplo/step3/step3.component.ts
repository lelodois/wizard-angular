import {Component} from '@angular/core';
import {IWizardStep} from '../../component/wizard/model/interfaces.model.';
import {WizardEventService} from '../../component/wizard/service/wizard-event.service';
import {WizardInfo} from '../../component/wizard/model/wizardInfo.model';
import {WizardStepIn} from '../../component/wizard/model/stepIn.model';
import {WizardStepOut} from '../../component/wizard/model/stepOut.model';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements IWizardStep {


  constructor(private service: WizardEventService) {
  }

  inicializarStep(wizardInfo: WizardInfo) {
  }

  finalizarStep(stepChangeIn: WizardStepIn) {
    this.service.changeStep.emit(new WizardStepOut(stepChangeIn, true));
  }

}
