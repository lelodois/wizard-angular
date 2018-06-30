import {WizardInfo} from '../model/wizardInfo.model';
import {WizardEventService} from '../service/wizard-event.service';
import {WizardStepOut} from '../model/stepOut.model';
import {WizardStepIn} from '../model/stepIn.model';
import {IWizardStep} from '../model/interfaces.model.';

export abstract class WizardComponent {

    readonly passoPassoInfo: WizardInfo;

    readonly passoPassoService: WizardEventService;

    protected constructor(_initialTabId: String, service: WizardEventService) {
        this.passoPassoService = service;
        this.passoPassoInfo = new WizardInfo(_initialTabId);
        this.listenerConfigure();
    }

    listenerConfigure(): void {
        this.passoPassoService.changeStep
            .subscribe(
                (changeStepOut: WizardStepOut) => {
                    this.initNextStep(changeStepOut);
                }
            );
    }

    previousStep(targertTabId) {
        this.passoPassoInfo.tabAtivaId = targertTabId;
    }

    finalizarStep(targertTabId) {
        const changeStepIn = new WizardStepIn(targertTabId);
        const stepAtual = this.getAtualStepInstance(this.passoPassoInfo.tabAtivaId);
        stepAtual.finalizarStep(changeStepIn);
    }

    initNextStep(changeStepOut: WizardStepOut) {
        if (changeStepOut.canFinishStep == true) {

            this.getNextStepInstance(changeStepOut)
                .inicializarStep(this.passoPassoInfo);
            this.passoPassoInfo.tabAtivaId = changeStepOut.changeStepIn.targertTabId;
        }
    }

    isTabAtiva(currentTabId) {
        return this.passoPassoInfo.tabAtivaId == currentTabId;
    }

    abstract getNextStepInstance(changeStepOut: WizardStepOut): IWizardStep;

    abstract getAtualStepInstance(targertTabId: String): IWizardStep;

}

