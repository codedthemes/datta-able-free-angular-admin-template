import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TblStylingComponent } from './tbl-styling.component';

describe('TblStylingComponent', () => {
  let component: TblStylingComponent;
  let fixture: ComponentFixture<TblStylingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TblStylingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TblStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
