import {Component, Input} from '@angular/core';
import {PassoPassoComponent} from '../passo-passo.component';

@Component({
  selector: 'app-passo-passo-change-button',
  templateUrl: './passo-passo-change-button.component.html',
  styleUrls: ['./passo-passo-change-button.component.css']
})
export class PassoPassoChangeButtonComponent {

  @Input()
  previousTabId: String;

  @Input()
  nextTabId: String;

  @Input()
  passoPassoInstance: PassoPassoComponent;

}
