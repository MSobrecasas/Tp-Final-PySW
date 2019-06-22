import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavColegComponent } from './nav-coleg.component';

describe('NavColegComponent', () => {
  let component: NavColegComponent;
  let fixture: ComponentFixture<NavColegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavColegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavColegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
