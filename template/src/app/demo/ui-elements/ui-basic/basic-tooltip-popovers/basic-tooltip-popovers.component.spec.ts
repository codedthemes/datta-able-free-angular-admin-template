import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTooltipPopoversComponent } from './basic-tooltip-popovers.component';

describe('BasicTooltipPopoversComponent', () => {
  let component: BasicTooltipPopoversComponent;
  let fixture: ComponentFixture<BasicTooltipPopoversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTooltipPopoversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTooltipPopoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
