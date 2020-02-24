import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSearchComponent } from './nav-search.component';

describe('NavSearchComponent', () => {
  let component: NavSearchComponent;
  let fixture: ComponentFixture<NavSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
