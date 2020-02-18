import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSignupV2Component } from './auth-signup-v2.component';

describe('AuthSignupV2Component', () => {
  let component: AuthSignupV2Component;
  let fixture: ComponentFixture<AuthSignupV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSignupV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSignupV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
