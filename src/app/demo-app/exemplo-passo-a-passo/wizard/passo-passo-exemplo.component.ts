import {Component, ViewChild} from '@angular/core';
import {IPassoPassoStep} from '../../../framework/component/ucs-passo-a-passo/model/interfaces.model.';
import {PassoPassoStepSaida} from '../../../framework/component/ucs-passo-a-passo/model/passoPassoSaida.model';
import {PassoPassoComponent} from '../../../framework/component/ucs-passo-a-passo/component/passo-passo.component';
import {PassoPassoService} from '../../../framework/component/ucs-passo-a-passo/service/passo-passo.service';

@Component({
  selector: 'app-passo-passo-exemplo',
  templateUrl: './passo-passo-exemplo.component.html',
  styleUrls: ['./passo-passo-exemplo.component.scss']
})
export class PassoPassoExemploComponent extends PassoPassoComponent {

  @ViewChild('tab1Form')
  step1: IPassoPassoStep;

  @ViewChild('tab2Form')
  step2: IPassoPassoStep;

  @ViewChild('tab3Form')
  step3: IPassoPassoStep;

  @ViewChild('tab4Form')
  step4: IPassoPassoStep;

  constructor(private service: PassoPassoService) {
    super('tab1', service);
  }

  // Função que define qual a inicialização do próximo step
  getNextStepInstance(changeStepOut: PassoPassoStepSaida): IPassoPassoStep {
    let nextStepForm = this.step2;
    nextStepForm = changeStepOut.changeStepIn.targertTabId == 'tab2' ? this.step3 : nextStepForm;
    nextStepForm = changeStepOut.changeStepIn.targertTabId == 'tab3' ? this.step4 : nextStepForm;
    return nextStepForm;
  }

  getAtualStepInstance(tabId: String): IPassoPassoStep {
    let step: IPassoPassoStep = this.step1;
    step = (tabId == 'tab2') ? this.step2 : step;
    step = (tabId == 'tab3') ? this.step3 : step;
    step = (tabId == 'tab4') ? this.step4 : step;
    return step;
  }

}
