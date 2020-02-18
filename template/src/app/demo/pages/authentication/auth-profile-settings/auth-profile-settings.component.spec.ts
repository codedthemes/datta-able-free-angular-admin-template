import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthProfileSettingsComponent } from './auth-profile-settings.component';

describe('AuthProfileSettingsComponent', () => {
  let component: AuthProfileSettingsComponent;
  let fixture: ComponentFixture<AuthProfileSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthProfileSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
