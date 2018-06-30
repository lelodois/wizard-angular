import {EventEmitter, Injectable} from '@angular/core';
import {WizardStepOut} from '../model/stepOut.model';

@Injectable()
export class WizardEventService {

  private _changeStep: EventEmitter<WizardStepOut> =
    new EventEmitter<WizardStepOut>();

  get changeStep(): EventEmitter<WizardStepOut> {
    return this._changeStep;
  }

}
