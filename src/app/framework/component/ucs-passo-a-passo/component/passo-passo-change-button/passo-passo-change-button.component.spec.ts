import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassoPassoChangeButtonComponent } from './passo-passo-change-button.component';

describe('PassoPassoChangeButtonComponent', () => {
  let component: PassoPassoChangeButtonComponent;
  let fixture: ComponentFixture<PassoPassoChangeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassoPassoChangeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassoPassoChangeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
