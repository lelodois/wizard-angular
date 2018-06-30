import {WizardStepIn} from './stepIn.model';
import {WizardInfo} from './wizardInfo.model';

export interface IWizardStep {

    inicializarStep(passoPassoInfo: WizardInfo);

    finalizarStep(passoPassoStepEntrada: WizardStepIn);

}
