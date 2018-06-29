import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassoPassoExemploComponent } from './passo-passo-exemplo.component';

describe('PassoPassoComponent', () => {
  let component: PassoPassoExemploComponent;
  let fixture: ComponentFixture<PassoPassoExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassoPassoExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassoPassoExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
