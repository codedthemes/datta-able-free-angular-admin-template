import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicProgressBarComponent } from './basic-progress-bar.component';

describe('BasicProgressBarComponent', () => {
  let component: BasicProgressBarComponent;
  let fixture: ComponentFixture<BasicProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
