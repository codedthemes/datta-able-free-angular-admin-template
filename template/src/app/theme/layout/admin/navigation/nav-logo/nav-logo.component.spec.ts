import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLogoComponent } from './nav-logo.component';

describe('NavLogoComponent', () => {
  let component: NavLogoComponent;
  let fixture: ComponentFixture<NavLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
