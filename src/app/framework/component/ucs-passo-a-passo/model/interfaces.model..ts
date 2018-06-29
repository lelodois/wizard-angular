import {PassoPassoStepEntrada} from './passoPassoEntrada.model';
import {PassoPassoInfo} from './passoPassoInfo.model';

export interface IPassoPassoStep {

  inicializarStep(passoPassoInfo: PassoPassoInfo);

  finalizarStep(passoPassoStepEntrada: PassoPassoStepEntrada);

}
