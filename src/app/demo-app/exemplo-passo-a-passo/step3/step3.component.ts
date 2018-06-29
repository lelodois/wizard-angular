import {Component} from '@angular/core';
import {IPassoPassoStep} from '../../../framework/component/ucs-passo-a-passo/model/interfaces.model.';
import {PassoPassoService} from '../../../framework/component/ucs-passo-a-passo/service/passo-passo.service';
import {PassoPassoInfo} from '../../../framework/component/ucs-passo-a-passo/model/passoPassoInfo.model';
import {PassoPassoStepEntrada} from '../../../framework/component/ucs-passo-a-passo/model/passoPassoEntrada.model';
import {PassoPassoStepSaida} from '../../../framework/component/ucs-passo-a-passo/model/passoPassoSaida.model';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements IPassoPassoStep {


  constructor(private service: PassoPassoService) {
  }

  inicializarStep(wizardInfo: PassoPassoInfo) {
  }

  finalizarStep(stepChangeIn: PassoPassoStepEntrada) {
    this.service.changeStep.emit(new PassoPassoStepSaida(stepChangeIn, true));
  }

}
