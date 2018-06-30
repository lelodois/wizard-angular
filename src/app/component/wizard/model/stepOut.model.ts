import {WizardStepIn} from './stepIn.model';

export class WizardStepOut {

  constructor(private _changeStepIn: WizardStepIn,
              private _canFinishStep: boolean) {
  }

  get changeStepIn(): WizardStepIn {
    return this._changeStepIn;
  }

  get canFinishStep(): boolean {
    return this._canFinishStep;
  }

}
