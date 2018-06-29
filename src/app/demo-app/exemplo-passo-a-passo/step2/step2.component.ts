import {Component} from '@angular/core';
import {IPassoPassoStep} from '../../../framework/component/ucs-passo-a-passo/model/interfaces.model.';
import {PassoPassoService} from '../../../framework/component/ucs-passo-a-passo/service/passo-passo.service';
import {PassoPassoInfo} from '../../../framework/component/ucs-passo-a-passo/model/passoPassoInfo.model';
import {PassoPassoStepEntrada} from '../../../framework/component/ucs-passo-a-passo/model/passoPassoEntrada.model';
import {PassoPassoStepSaida} from '../../../framework/component/ucs-passo-a-passo/model/passoPassoSaida.model';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements IPassoPassoStep {

  count = 0;
  error = false;

  constructor(private service: PassoPassoService) {
  }

  inicializarStep(wizardInfo: PassoPassoInfo) {
    this.count = 0;
  }

  finalizarStep(stepChangeIn: PassoPassoStepEntrada) {

    this.count = this.count + 1;
    this.error = this.count <= 2;

    this.service.changeStep.emit(new PassoPassoStepSaida(stepChangeIn, !this.error));
  }
}
