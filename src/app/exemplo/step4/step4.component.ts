import {Component} from '@angular/core';
import {IWizardStep} from '../../component/wizard/model/interfaces.model.';
import {WizardEventService} from '../../component/wizard/service/wizard-event.service';
import {WizardStepIn} from '../../component/wizard/model/stepIn.model';
import {WizardInfo} from '../../component/wizard/model/wizardInfo.model';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component implements IWizardStep {

  constructor(private service: WizardEventService) {

  }

  finalizarStep(stepChangeIn: WizardStepIn) {
  }

  inicializarStep(wizardInfo: WizardInfo) {
  }


}
