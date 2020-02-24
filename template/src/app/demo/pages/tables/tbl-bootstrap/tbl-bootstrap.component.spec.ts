import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TblBootstrapComponent } from './tbl-bootstrap.component';

describe('TblBootstrapComponent', () => {
  let component: TblBootstrapComponent;
  let fixture: ComponentFixture<TblBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TblBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TblBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
