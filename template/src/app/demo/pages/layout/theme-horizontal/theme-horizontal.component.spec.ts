import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeHorizontalComponent } from './theme-horizontal.component';

describe('ThemeHorizontalComponent', () => {
  let component: ThemeHorizontalComponent;
  let fixture: ComponentFixture<ThemeHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
