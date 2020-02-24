import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrtMorrisComponent } from './crt-morris.component';

describe('CrtMorrisComponent', () => {
  let component: CrtMorrisComponent;
  let fixture: ComponentFixture<CrtMorrisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrtMorrisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrtMorrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
