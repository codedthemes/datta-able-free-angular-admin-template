import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonContentComponent } from './common-content.component';

describe('CommonContentComponent', () => {
  let component: CommonContentComponent;
  let fixture: ComponentFixture<CommonContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
