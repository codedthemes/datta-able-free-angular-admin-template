import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSeperatorComponent } from './form-seperator.component';

describe('FormSeperatorComponent', () => {
  let component: FormSeperatorComponent;
  let fixture: ComponentFixture<FormSeperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormSeperatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormSeperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
