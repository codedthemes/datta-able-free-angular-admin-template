import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicButtonComponent } from './basic-button.component';

describe('BasicButtonComponent', () => {
  let component: BasicButtonComponent;
  let fixture: ComponentFixture<BasicButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
