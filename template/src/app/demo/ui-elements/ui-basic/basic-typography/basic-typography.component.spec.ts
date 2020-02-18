import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTypographyComponent } from './basic-typography.component';

describe('BasicTypographyComponent', () => {
  let component: BasicTypographyComponent;
  let fixture: ComponentFixture<BasicTypographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTypographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
