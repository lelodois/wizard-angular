import {EventEmitter, Injectable} from '@angular/core';
import {PassoPassoStepSaida} from '../model/passoPassoSaida.model';

@Injectable()
export class PassoPassoService {

  private _changeStep: EventEmitter<PassoPassoStepSaida> =
    new EventEmitter<PassoPassoStepSaida>();

  get changeStep(): EventEmitter<PassoPassoStepSaida> {
    return this._changeStep;
  }

}
