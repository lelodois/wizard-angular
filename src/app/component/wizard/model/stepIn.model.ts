export class WizardStepIn {

  constructor(private _targertTabId: String,
              private _finalizado = false) {
  }

  get finalizado(): boolean {
    return this._finalizado;
  }

  get targertTabId(): String {
    return this._targertTabId;
  }

}
