import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardChangeButtonComponent } from './wizard-change-button.component';

describe('WizardChangeButtonComponent', () => {
  let component: WizardChangeButtonComponent;
  let fixture: ComponentFixture<WizardChangeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardChangeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardChangeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
