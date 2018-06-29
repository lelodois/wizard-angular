import {Component, OnInit} from '@angular/core';
import {PassoPassoInfo} from '../../../framework/component/ucs-passo-a-passo/model/passoPassoInfo.model';
import {IPassoPassoStep} from '../../../framework/component/ucs-passo-a-passo/model/interfaces.model.';
import {PassoPassoStepEntrada} from '../../../framework/component/ucs-passo-a-passo/model/passoPassoEntrada.model';
import {PassoPassoService} from '../../../framework/component/ucs-passo-a-passo/service/passo-passo.service';
import {PassoPassoStepSaida} from '../../../framework/component/ucs-passo-a-passo/model/passoPassoSaida.model';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit, IPassoPassoStep {

  constructor(private service: PassoPassoService) {
  }

  ngOnInit() {
  }

  inicializarStep(wizardInfo: PassoPassoInfo) {
  }

  finalizarStep(stepChangeIn: PassoPassoStepEntrada) {
    this.service.changeStep.emit(new PassoPassoStepSaida(stepChangeIn, true));
  }
}
