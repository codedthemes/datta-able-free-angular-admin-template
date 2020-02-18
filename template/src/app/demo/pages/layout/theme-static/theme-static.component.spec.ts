import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeStaticComponent } from './theme-static.component';

describe('ThemeStaticComponent', () => {
  let component: ThemeStaticComponent;
  let fixture: ComponentFixture<ThemeStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
