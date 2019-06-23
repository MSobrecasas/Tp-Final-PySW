import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPagosComponent } from './alta-pagos.component';

describe('AltaPagosComponent', () => {
  let component: AltaPagosComponent;
  let fixture: ComponentFixture<AltaPagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaPagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
