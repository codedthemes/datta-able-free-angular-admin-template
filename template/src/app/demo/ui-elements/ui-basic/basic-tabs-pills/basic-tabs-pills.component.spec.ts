import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTabsPillsComponent } from './basic-tabs-pills.component';

describe('BasicTabsPillsComponent', () => {
  let component: BasicTabsPillsComponent;
  let fixture: ComponentFixture<BasicTabsPillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTabsPillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTabsPillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
