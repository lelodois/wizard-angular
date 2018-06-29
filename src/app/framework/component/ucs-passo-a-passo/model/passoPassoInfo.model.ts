export class PassoPassoInfo {

  private _properties = new Map<String, Object>();

  constructor(private _tabAtivaId: String) {
  }

  get tabAtivaId(): String {
    return this._tabAtivaId;
  }

  set tabAtivaId(value: String) {
    this._tabAtivaId = value;
  }

  get properties(): Map<String, Object> {
    return this._properties;
  }
}
