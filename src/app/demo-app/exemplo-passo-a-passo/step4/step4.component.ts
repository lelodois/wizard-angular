import {Component} from '@angular/core';
import {IPassoPassoStep} from '../../../framework/component/ucs-passo-a-passo/model/interfaces.model.';
import {PassoPassoService} from '../../../framework/component/ucs-passo-a-passo/service/passo-passo.service';
import {PassoPassoStepEntrada} from '../../../framework/component/ucs-passo-a-passo/model/passoPassoEntrada.model';
import {PassoPassoInfo} from '../../../framework/component/ucs-passo-a-passo/model/passoPassoInfo.model';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component implements IPassoPassoStep {

  constructor(private service: PassoPassoService) {

  }

  finalizarStep(stepChangeIn: PassoPassoStepEntrada) {
  }

  inicializarStep(wizardInfo: PassoPassoInfo) {
  }


}
