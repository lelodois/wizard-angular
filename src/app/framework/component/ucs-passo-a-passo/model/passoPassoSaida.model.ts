import {PassoPassoStepEntrada} from './passoPassoEntrada.model';

export class PassoPassoStepSaida {

  constructor(private _changeStepIn: PassoPassoStepEntrada,
              private _canFinishStep: boolean) {
  }

  get changeStepIn(): PassoPassoStepEntrada {
    return this._changeStepIn;
  }

  get canFinishStep(): boolean {
    return this._canFinishStep;
  }

}
