import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicToastsComponent } from './basic-toasts.component';

describe('BasicToastsComponent', () => {
  let component: BasicToastsComponent;
  let fixture: ComponentFixture<BasicToastsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicToastsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicToastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
