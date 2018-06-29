import {PassoPassoInfo} from '../model/passoPassoInfo.model';
import {PassoPassoService} from '../service/passo-passo.service';
import {PassoPassoStepSaida} from '../model/passoPassoSaida.model';
import {PassoPassoStepEntrada} from '../model/passoPassoEntrada.model';
import {IPassoPassoStep} from '../model/interfaces.model.';

export abstract class PassoPassoComponent {

  readonly passoPassoInfo: PassoPassoInfo;

  readonly passoPassoService: PassoPassoService;

  protected constructor(_initialTabId: String, service: PassoPassoService) {
    this.passoPassoService = service;
    this.passoPassoInfo = new PassoPassoInfo(_initialTabId);
    this.listenerConfigure();
  }

  listenerConfigure(): void {
    this.passoPassoService.changeStep
      .subscribe(
        (changeStepOut: PassoPassoStepSaida) => {
          this.initNextStep(changeStepOut);
        }
      );
  }

  previousStep(targertTabId) {
    this.passoPassoInfo.tabAtivaId = targertTabId;
  }

  finalizarStep(targertTabId) {
    const changeStepIn = new PassoPassoStepEntrada(targertTabId);
    const stepAtual = this.getAtualStepInstance(this.passoPassoInfo.tabAtivaId);
    stepAtual.finalizarStep(changeStepIn);
  }

  initNextStep(changeStepOut: PassoPassoStepSaida) {
    if (changeStepOut.canFinishStep == true) {

      this.getNextStepInstance(changeStepOut)
        .inicializarStep(this.passoPassoInfo);
      this.passoPassoInfo.tabAtivaId = changeStepOut.changeStepIn.targertTabId;
    }
  }

  isTabAtiva(currentTabId) {
    return this.passoPassoInfo.tabAtivaId == currentTabId;
  }

  abstract getNextStepInstance(changeStepOut: PassoPassoStepSaida): IPassoPassoStep;

  abstract getAtualStepInstance(targertTabId: String): IPassoPassoStep;

}

